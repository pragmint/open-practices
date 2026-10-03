---
name: copy-edit
description: Copy-edits an Open Practices page (practice, resource, or capability) against copy-guidelines/words.md and copy-guidelines/styleguide.md. Runs the repository linter's safe fixes, then parallel section-by-section editing, a whole-page coherence pass, a re-lint, and an author review of every change grouped by rule. Called as the editing phase of /draft-practice and /annotate-resource, or run on its own against an existing page (/copy-edit practices/refactor.md), in which case it edits the file in place. Use when the user asks to copy-edit, proofread, or apply the style guide to a page.
---

# copy-edit

Five passes, from mechanical to judgment, ending with the author reviewing every change. Read [run-conventions.md](../draft-practice/references/run-conventions.md) first. It covers run folders, `STATUS.md`, checkpoints, and how to call the linter.

## Two Ways This Runs

| | Called by a drafting skill | Standalone |
|---|---|---|
| Input | `.tmp/<run>/draft-v1.md` | A repository page, for example `practices/refactor.md` |
| Edits | A copy, `.tmp/<run>/draft-v2.md` | The repository file, in place |
| Working files | The drafting run's folder | `.tmp/copyedit-<slug>/` with its own `STATUS.md` |
| Undo | `draft-v1.md` is untouched | git |
| Ends with | Returning to the calling skill's checkpoint | Pass 5 review, then the git step |

**Standalone preconditions.** Before touching anything:

1. The path must be a Markdown page under `practices/`, `resources/`, or `capabilities/`.
2. `git status --porcelain -- <path>` must be empty. If the file has uncommitted changes, stop and say so. Copy-edit changes must never mix with the author's own unsaved work.
3. Create `.tmp/copyedit-<slug>/` and its `STATUS.md` (Phase 0 of run-conventions applies, including resuming a run left in progress).

One page per run. For several pages, run the skill once per page.

Below, `<page>` is the file being edited (`draft-v2.md` or the repository file) and `<run>` is the working folder.

## Pass 1: Mechanical Fixes

1. Called by a drafting skill: copy `draft-v1.md` to `draft-v2.md`.
2. `bun tools/index.ts --fix --json <page> > <run>/lint-copyedit-1.json`
3. If errors remain that aren't style decisions (`practice-structure`, `resource-structure`, `capability-links`, `internal-links-resolve`), stop and report them. Structure and links are the drafting skill's job, or the author's when running standalone. Copy editing can't fix a missing section. Ask whether to continue anyway; for a standalone run on an older page, continuing is often fine.

No checkpoint here; the changes are mechanical. They're listed in the Pass 5 review.

## Pass 2: Section Edits (Parallel)

1. `bun tools/sections.ts split <page> <run>/lint-copyedit-1.json > <run>/sections.json`
2. Pass the author decisions on to the editors. In a drafting run, collect from `intent.md` anything that overrides the guides (deliberate term choices, quoted titles). Standalone, there's usually nothing.
3. Spawn one `op-copy-editor` agent **per section, all in a single message** so they run in parallel. Each prompt contains:
   - The page type and the section title
   - The section's `text`, verbatim
   - The section's `lint` array
   - The author decisions
   - Instructions to read `copy-guidelines/styleguide.md` and `copy-guidelines/words.md` before editing and to return only the JSON object
4. Parse each reply. If a reply isn't valid JSON or its `edited` text fails the checks in step 5, retry that section once. If it fails again, keep the section unedited and note it for the review.
5. Write the results into `<run>/sections-edited.json`: the split output with an `edited` field added to each section. Then join:
   `bun tools/sections.ts join <run>/sections-edited.json <page>`
   The join refuses an edit that changed or dropped a heading. If it refuses, fix that section's `edited` text (restore the heading) and join again.
6. Start `<run>/copyedit-log.md` with every change, grouped by `group`, each entry showing before → after and the cited rule. Add each section's `kept` and `flags` lists.

## Pass 3: Coherence

Spawn `op-coherence-editor` with the page path, the page type, and the path to `copyedit-log.md`. It edits `<page>` directly. Append its "Changed" and "Flagged" lists to `copyedit-log.md` under `## Coherence Pass`.

## Pass 4: Re-Lint

1. `bun tools/index.ts --fix --json <page> > <run>/lint-copyedit-2.json`
2. **Errors must be zero.** If any remain, fix them directly. They're usually mechanical, or an editor reintroduced a curly quote or broke a link. Re-run, up to twice. If errors still remain, report them at the checkpoint rather than looping.
3. **Warnings:** each remaining warning must appear in a section's `kept` list with a reason. Fix any that don't, or add the reason to the log yourself.
4. Compare with `lint-copyedit-1.json` and record the counts (errors and warnings by rule, before and after) at the top of `copyedit-log.md`.

## Pass 5: Author Review

Present the changes **grouped by rule**, with counts, then the samples within each group:

```
Copy edit: practices/refactor.md
Lint: 0 errors (was 3), 2 warnings kept (was 19)

1. em-dash: 9 restructures
   - "builds break — and nobody notices" → "builds break, and nobody notices"
   - ...
2. word-list: 4 (post-mortem → postmortem ×2, utilize → use, ad-hoc → ad hoc)
3. heading-case: 3
4. mechanical (--fix): curly quotes ×6, list markers ×4
5. coherence: 2 (cut repeated point in Lessons; "pilot group" → "pilot team")

Flagged, not changed:
   - "cuts lead time by 80%" has no source (How to Gain Traction)
```

Then ask: **accept all**, **reject specific groups or changes**, or **revise** (the author describes something else to change).

- To reject a change, restore its `before` text in `<page>`. If the `after` text isn't unique on the page, make the reversion by hand at the right spot. Re-run the Pass 4 lint after any rejection so the reverted text doesn't leave the page in error.
- Record each decision in `copyedit-log.md` under `## Author Decisions`. When called from a drafting skill, also copy any decision that should hold for future edits (for example, "author keeps 'Kanban' capitalized in this page") into `intent.md`.

## Finishing

**Called by a drafting skill:** return to that skill. It records the result in its own `STATUS.md` and runs its own checkpoint. Its run folder keeps `draft-v2.md`, `copyedit-log.md`, and the lint files.

**Standalone:**

1. Show `git diff --stat -- <page>` and offer the full diff.
2. Ask, using AskUserQuestion:
   - **Branch, commit, and open a PR (recommended):** create `copyedit/<slug>` from the current branch if you're on `main` (otherwise use the current branch), stage only `<page>`, and commit (`Copy edit <title>`). Push and open a PR with `gh pr create`. The PR body summarizes the change groups, the lint counts before and after, and the flagged items.
   - **Leave it uncommitted:** the edits stay in the working tree for review.
3. Delete `.tmp/copyedit-<slug>/` after copying the flagged items and lint counts into the final report.
