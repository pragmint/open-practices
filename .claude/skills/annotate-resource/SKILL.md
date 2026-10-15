---
name: annotate-resource
description: Turns an external resource (a book, talk, article, course, workshop, or other material) plus the author's thoughts on why it matters (talked through in this conversation, or provided as a pasted or saved transcript) into an annotated Open Practices resource page, linked from the practices it supports. It runs as a resumable, human-in-the-loop pipeline (setup, intake, fit gate, content ingest with strict provenance, outline, drafting, structural lint, copy edit, intent review, assembly, then branch, commit, and PR) with a checkpoint after every phase. When Claude can't read the resource itself, it asks the author for the material instead of guessing. State lives in .tmp/resource-<slug>/STATUS.md. Use when the user wants to add or annotate a resource, or runs /annotate-resource.
---

# annotate-resource

Builds a resource page like [resources/tech/are-we-there-yet.md](/resources/tech/are-we-there-yet.md): a summary plus annotations a team can actually use (discussion questions, themes, exercises, facilitation tips), every factual detail traceable to its source.

**Read first:** [run-conventions.md](../draft-practice/references/run-conventions.md) covers run folders, `STATUS.md`, checkpoints, source material, the linter, provenance, and git. [artifacts.md](../draft-practice/references/artifacts.md) gives the formats for `intent.md`, `outline.md` (resource), and `provenance.md`. Both apply to every phase below.

The run folder is `.tmp/resource-<slug>/`, written below as `<run>`.

| Phase | Output in `<run>` | Done when |
|---|---|---|
| 0 Setup / Resume | `STATUS.md` | The run is created or resumed |
| 1 Intake | `source.md`, `intent.md` | The author approves `intent.md` |
| 2 Fit Gate | `fit.md` | Verdict: add / stop |
| 3 Content Ingest | `ingest.md`, `provenance.md` | Every planned detail has a source, or is dropped |
| 4 Outline | `outline.md` | The author locks the outline |
| 5 Drafting | `draft-v1.md` | No author-input markers left |
| 6 Structural Check | `lint-structure.json` | Zero lint errors |
| 7 Copy Edit | `draft-v2.md`, `copyedit-log.md` | The author accepts the changes |
| 8 Intent Review | `intent-review.md` | Every gap is resolved |
| 9 Assembly & Wiring | `resources/<folder>/<slug>.md` and practice edits | The lint of touched files is clean |
| 10 Report, Git, Cleanup | (branch, commit, PR) | The run folder is deleted |

## The Provenance Rule

This is the rule that matters most in this skill. A resource page makes claims about something someone else made, and a wrong timestamp or an invented chapter summary is worse than no annotation at all.

| Kind of content | Allowed sources |
|---|---|
| What the resource says: themes, arguments, quotes, examples | Text actually fetched from the resource or from a labeled secondary source, or material the author provided (their notes, a transcript, a summary they wrote) |
| Timestamps | A transcript (fetched or author-provided) or the author's own notes. **Never estimated.** |
| Chapters, sections, reading time | A table of contents or a publisher page that was actually fetched, or the author. Reading time may be estimated from a stated page count; say that it's an estimate. |
| Discussion questions, exercises, facilitator tips, "how this brings value" | Pragmint's own material. Write freely, consistent with `intent.md`, and run past the author in Phase 4 |

**When Claude can't read the content** (most videos, most books, paywalled articles), **ask the author for it.** Ask for a transcript, their notes, highlights, a table of contents, or a few minutes of their own summary. Anything not covered after that is left off the page. Never write around the gap.

## Phase 0: Setup / Resume

Follow "Starting or Resuming" in run-conventions. The provisional slug comes from the resource title (`are-we-there-yet`, `the-five-dysfunctions-of-a-team`). Check the linter's dependencies.

## Phase 1: Intake

1. **Source.** Write `<run>/source.md` from this conversation or from the author's transcript (see run-conventions). Record the resource itself at the top: title, creator, URL or ISBN, and type.
2. **Judge whether the source is enough.** You need: what the resource is, why the author thinks it matters, who on a team should engage with it, and how they'd use it (solo reading, book club, watch party, workshop). If anything's missing, interview the author, one or two questions at a time, each with your best guess. Append the answers under `## Intake Interview`.
3. Ask whether the author has their own **notes, highlights, or a transcript**. If they do, have them paste it now, or give a path, and save it as `<run>/author-material.md`. That's often the richest source for the annotations.
4. **Write `<run>/intent.md`** (artifacts.md). "Core Claim" is why this resource is worth a team's time.

**Checkpoint.**

## Phase 2: Fit Gate

Spawn `op-researcher` in mode `resource-fit` with `intent.md`, output `<run>/fit.md`. Then decide with the author, applying the template's two tests:

1. **Does it support multiple existing practices?** The template expects more than one. If it fits only one, say so plainly. The author can still go ahead, but record the reason in the decisions log. If it fits none, recommend stopping, or running `/draft-practice` first if it points to a missing practice.
2. **Is it especially high quality?** Look at the evidence in `fit.md`, not adjectives.

Also settle:
- **Duplicates.** Is the resource already in `resources/**`?
- **Folder.** `people/`, `process/`, `tech/`, or an existing subfolder.
- **Resource type.** One of the types the linter accepts. See the Resources section of `copy-guidelines/styleguide.md`.
- **Which practices will link to it,** and where in each.

Verdict: **add** or **stop** (`shelved`, with the reason). **Checkpoint.**

## Phase 3: Content Ingest

1. Spawn `op-researcher` in mode `resource-ingest` with `intent.md` and `fit.md`, output `<run>/ingest.md`.
2. Merge what you have into a **content inventory** at the end of `ingest.md`: the researcher's findings, plus `author-material.md`, plus what the author said in `source.md`. Each item gets its source, and a marker for whether it's primary, secondary, or from the author.
3. Read the researcher's **"Could not access"** list. Then **ask the author** for exactly what the planned annotation needs and couldn't be verified, for example: "There's no transcript I can read. Do you have timestamps for the parts you'd point a team to, or should we leave timestamps off?" Add their answers to `author-material.md` and the inventory.
4. Start `<run>/provenance.md` from the inventory.
5. List what will be **left off** because nobody could source it.

**Checkpoint.** Show the inventory by source type, what the author supplied, and what's being left off.

If there's too little to annotate meaningfully (no readable content and no author material), end as `shelved` with a "Next Action" saying what would unblock it, such as "author to share reading notes."

## Phase 4: Outline

Write `<run>/outline.md` in the resource format from artifacts.md. Choose the sections to fit the resource type and the way the author wants teams to use it:

- **Every resource:** a summary paragraph and "How This Resource Brings Value"
- **Discussion-oriented** (most talks and books): Opening Questions, Core Themes & Concepts to Explore, Reflection Prompts, Facilitator Tip
- **Hands-on:** Team Exercises
- **Video:** Timestamps, only when sourced
- **Book:** Chapters to Focus On and estimated reading time, only when sourced
- **Workshop:** Agenda, materials, speaker notes

Each "Core Themes" item cites its inventory source. Draft the Pragmint-authored items (questions, exercises, tips) in the outline in short form, so the author can react to them here rather than after drafting. Settle the final title and slug, and rename the run folder if needed.

**Checkpoint.** The author locks the outline.

## Phase 5: Drafting

Spawn `op-drafter` with `<run>`, page type `resource`, and `ingest.md` plus `author-material.md` as the research. It writes `<run>/draft-v1.md`. Resolve each `[[NEEDS AUTHOR INPUT]]` marker with the author, or drop that item. Never fill one with a guess.

**Checkpoint.**

## Phase 6: Structural Check

```bash
bun tools/index.ts --fix --json <run>/draft-v1.md > <run>/lint-structure.json
```

Fix every error (`resource-structure`, `internal-links-resolve`, `no-html`, and others) and re-run the command until there are none. Style warnings go to Phase 7. **Checkpoint** only if something needed a decision.

## Phase 7: Copy Edit

Run the **`/copy-edit`** skill on `<run>/draft-v1.md` in drafting-skill mode (read `.claude/skills/copy-edit/SKILL.md` and follow it). Its author review serves as this phase's checkpoint. Make sure the copy editors get any quoted titles or terms from the resource as overrides, so they don't "correct" the resource's own wording.

## Phase 8: Intent Review

Same as `/draft-practice` Phase 8. Compare `draft-v2.md` against `intent.md` and `provenance.md` and write `<run>/intent-review.md`. Pay extra attention to the provenance rule: **every theme, quote, timestamp, and chapter reference** must have a row in `provenance.md` with an allowed source. Cut or source anything that doesn't. Re-lint after changes. **Checkpoint.**

## Phase 9: Assembly & Wiring

1. **Write the page.** Copy `draft-v2.md` to `resources/<folder>/<slug>.md`. Confirm there's no existing file at that path first. If there is, stop and ask.
2. **Link from practices.** For each practice chosen in Phase 2, add the link where it fits that practice's existing pattern:
   - If the practice has a list of resources inside a step (as in `practices/follow-functional-core-imperative-shell.md`), add a bullet in the same format: `- [Title](/resources/<folder>/<slug>.md): one or two sentences on what a team gets from it.`
   - Otherwise, add one sentence to the most relevant "How to Gain Traction" step that names the resource and what to use it for (a book club, a watch party, a workshop).
   - Older-format practices (Gaining Traction with "Host a Viewing Party" or "Start a Book Club" subsections) get an H4 entry in the matching subsection, following its existing pattern.
   - Edited sentences follow the style guide (no em dashes, descriptive link text).
3. **Show every practice edit** as a diff and get approval.
4. **Lint the touched files:** `bun tools/index.ts --json resources/<folder>/<slug>.md practices/<a>.md ...`. The new resource must be clean. On practice pages, only the lines you added must be.
5. **Checkpoint.**

## Phase 10: Report, Git, Cleanup

1. **Report:**
   - The fit verdict, and which practices now link to the resource
   - A provenance summary: items from the resource itself, from secondary sources, and from the author, plus what was left off and why
   - The copy-edit summary
   - Intent review results
   - Files created or edited
2. **Git.** Ask with AskUserQuestion:
   - **Branch, commit, and open a PR (recommended):** if on `main`, create `resource/<slug>`; otherwise use the current branch. Stage only this run's files (the resource page and the edited practice pages). Commit with `Add resource: <Title>`. Push with `-u`, then `gh pr create`. The PR body contains the summary, the linked practices, the provenance table, and the flagged copy-edit items.
   - **Leave it uncommitted.**
3. **Clean up.** Delete `<run>` without asking, after making sure the report contains the provenance summary.
