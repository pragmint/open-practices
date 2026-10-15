---
name: draft-practice
description: Turns an author's idea for a new Open Practices practice (talked through in this conversation, or provided as a pasted or saved transcript) into a finished, linted, copy-edited practice page wired into the capability pages it supports. It runs as a resumable, human-in-the-loop pipeline of eleven phases (setup, intake, overlap check, research with two rounds of questions, outline, drafting, structural lint, copy edit, intent review, assembly, then branch, commit, and PR), with a checkpoint after every phase. State lives in .tmp/practice-<slug>/STATUS.md so a later session picks up where the last one stopped. Use when the user wants to add, draft, or write a new practice, or runs /draft-practice.
---

# draft-practice

An eleven-phase pipeline (Phase 0 through Phase 10) from an author's idea to a practice page on a PR branch. Each phase reads narrow inputs from the run folder and writes one output file. Nothing moves forward without the author's say-so, and nothing is published without review.

**Read first:** [references/run-conventions.md](references/run-conventions.md) covers run folders, `STATUS.md`, checkpoints, source material, the linter, provenance, and git. [references/artifacts.md](references/artifacts.md) gives the formats for `intent.md`, `outline.md`, and `provenance.md`. Both apply to every phase below.

The run folder is `.tmp/practice-<slug>/`, written below as `<run>`.

| Phase | Output in `<run>` | Done when |
|---|---|---|
| 0 Setup / Resume | `STATUS.md` | The run is created or resumed |
| 1 Intake | `source.md`, `intent.md` | The author approves `intent.md` |
| 2 Overlap Check | `overlap.md` | Verdict: new / extend / stop |
| 3 Research & Idea Development | `research-initial.md`, `research-refined.md`, updated `intent.md` | Both question rounds are resolved |
| 4 Outline | `outline.md`, `provenance.md` | The author locks the outline |
| 5 Drafting | `draft-v1.md` | No author-input markers left |
| 6 Structural Check | `lint-structure.json` | Zero lint errors |
| 7 Copy Edit | `draft-v2.md`, `copyedit-log.md` | The author accepts the changes |
| 8 Intent Review | `intent-review.md` | Every gap is resolved |
| 9 Assembly & Wiring | `practices/<slug>.md` and capability edits | The full lint of touched files is clean |
| 10 Report, Git, Cleanup | (branch, commit, PR) | The run folder is deleted |

## Phase 0: Setup / Resume

Follow "Starting or Resuming" in run-conventions. For a new run with no slug yet, use a provisional slug from the topic (`practice-feature-flags`) and rename the folder in Phase 4 if the title changes.

Check the linter's dependencies now (`[ -d tools/node_modules ] || (cd tools && bun install)`) so later phases don't stall.

## Phase 1: Intake

**Goal:** capture the author's own thinking and turn it into `intent.md`, the contract every later phase is checked against.

1. **Source.** Write `<run>/source.md` per "Source Material" in run-conventions. Either copy the author's messages from this conversation verbatim, or use the transcript they pasted or pointed to. Confirm which one with the author if it's at all ambiguous.
2. **Judge whether the source is enough.** You need: the practice in a sentence, who it's for, why it's worth doing, and at least one concrete experience behind it. If any of these is missing, **interview the author now**, one or two questions at a time. Give your best guess with each question so they can just confirm or correct it. Append the answers to `source.md` under `## Intake Interview`.
3. **Write `<run>/intent.md`** using the format in artifacts.md. Pull "Anecdotes and Facts From the Author" straight from `source.md` and mark any vague ones `(VAGUE: ...)`. Don't fill gaps with your own ideas. Put open items under "Must Include" or the decisions log as questions.
4. Start `<run>/provenance.md` with the author's anecdotes and facts.

**Checkpoint.** Show the core claim, the audience, the must-include list, the anecdotes (flagging vague ones), and the avoid list. Ask the author to correct anything that misrepresents them; this file is their voice.

## Phase 2: Overlap Check

**Goal:** before any research effort, make sure this isn't already a practice.

1. List `practices/*.md` with their H1 titles, plus every "Supporting Practices" entry across `capabilities/*.md`. Those include planned practices with no file yet, which show up as broken links. The linter's `internal-links-resolve` finds them.
2. Read the closest three to five candidates in full.
3. Write `<run>/overlap.md`: each related practice, what it covers, how the proposal differs, and a **verdict**:
   - `new`: distinct enough for its own page. Proceed.
   - `extend:<file>`: better as an addition to an existing practice. Say what would be added where. This skill doesn't edit existing practices in place; if the author agrees, end the run as `shelved` with the proposed addition in `STATUS.md`. Then suggest editing the page directly and running `/copy-edit` on it.
   - `stop`: already covered. End the run as `shelved`.
   - Special case: if a capability page already links to a **planned** practice with no file (for example, `/practices/talk-directly-with-users.md`) and the proposal matches it, say so. Use that slug, so Phase 9 resolves the broken link instead of adding a duplicate entry.

**Checkpoint** on the verdict.

## Phase 3: Research & Idea Development

This is a real conversation with the author, held in the main session. Don't delegate it, because a subagent can't hold a back-and-forth. Expect several exchanges.

### Step 1: Broad Research

Spawn `op-researcher` in mode `practice-broad`. Point it at `<run>/intent.md` and `<run>/overlap.md`, with output `<run>/research-initial.md`. Read the result.

### Step 2: Round 1 Questions

Generative, not only corrective. Ask **two or three questions at a time**, each with your recommended answer, and update `intent.md` after each exchange (Decisions Log, Anecdotes, Must Include). Draw on the researcher's question list and go beyond it. Cover:

- **Pressure-test the claim.** Where does this practice not fit? What would a skeptical engineering manager object to? Is it really for every team, or for a specific situation?
- **Personas.** Who actually experiments with this? Push for two to six distinct, specific roles, each with a real goal.
- **Traction.** What's the first step a team would really take? What's the order? What did the author see work, or fail, in practice?
- **Lessons From The Field.** Each lesson needs a real anecdote. Ask for specifics on every vague one: what kind of team or client, what happened, what changed. **If an anecdote can't be firmed up, it doesn't go on the page.**
- **Polish or Pitch signals.** For each quadrant the author cares about, what would they look at after the trial period? For "measurable," what exactly gets counted, and from what tool? How long should the trial run?
- **Capabilities.** Confirm two to six from `capabilities/`, using the researcher's suggestions as a starting point. For each one, how does this practice support it?
- **Resources.** Which existing resources fit? Which external ones does the author trust?
- **New angles.** Based on the research, is there a sharper framing, a better example, or a surprising counterpoint worth including?

Record each answer's origin in `provenance.md` (for example, "Round 1, Q3, <date>").

### Step 3: Refined Research

Spawn `op-researcher` in mode `practice-refined` with the updated `intent.md`, output `<run>/research-refined.md`.

### Step 4: Round 2, Confirm Intent

Shorter. Open with the refined verdict. Then:

- If the verdict is `extends-existing` or `duplicate-of`, discuss it honestly. Don't talk yourself into a weak angle to keep the run going.
- Resolve anything the refined research contradicted, every proposed capability that didn't hold up, and every signal that can't actually be counted.
- Restate the core claim and the audience, and have the author correct any drift.

The author can say "good, move on" at any point.

**This phase ends one of three ways:**

- **Proceed** to Phase 4.
- **Stop:** no distinct angle survived. Set `shelved` with the reason.
- **Shelve for material:** a key anecdote or signal can't be firmed up right now. Set `shelved`, and record in "Next Action" exactly what's missing.

**Checkpoint.**

## Phase 4: Outline

Write `<run>/outline.md` in the practice format from artifacts.md. Re-read `copy-guidelines/styleguide.md` (the Practices section) and `templates/new-practice.md` first.

- **Title:** an imperative verb phrase in AP-style title case. Settle the final slug now and rename the run folder if it changed.
- **Every Lessons bullet** maps to an anecdote in `intent.md`. **Every Measurable benefit** says how it's counted.
- **Capabilities** use exact file names from `capabilities/`.
- **Links:** existing resources by path. For external resources worth their own page, add a line under `STATUS.md` → Follow-ups: `Suggested: /annotate-resource <url>`. The practice links to the external URL for now, so no nested run starts.

Update `provenance.md` so every planned factual item has a source row.

**Checkpoint.** The author locks the outline. After this, structure changes mean going back to this phase, not improvising in the draft.

## Phase 5: Drafting

Spawn `op-drafter` with `<run>`, page type `practice`, and the research files to use. It writes `<run>/draft-v1.md`.

Read the draft and the drafter's report. For every `[[NEEDS AUTHOR INPUT: ...]]` marker, ask the author, update `intent.md` and `provenance.md`, and fill the marker in yourself. Don't send the page back to the drafter for a few markers.

**Checkpoint.** Give the word count, a summary section by section, anything the drafter interpreted, and the filled markers.

## Phase 6: Structural Check

```bash
bun tools/index.ts --fix --json <run>/draft-v1.md > <run>/lint-structure.json
```

- Fix every **error** (`practice-structure`, `capability-links`, `internal-links-resolve`, `no-html`, and others) directly in `draft-v1.md`, then re-run the command until there are no errors. If a fix needs a content decision, such as a missing quadrant or a step with no material, ask the author.
- Fix structural **warnings** (counts outside the template ranges, heading variants) unless the outline deliberately chose otherwise. Note any such choice in `intent.md` → Decisions Log.
- Leave style warnings (`no-em-dash`, `word-list`, `heading-case`) for Phase 7.

**Checkpoint:** what was fixed, and the style warnings carried into the copy edit. If nothing needed a decision, keep this short.

## Phase 7: Copy Edit

Run the **`/copy-edit`** skill on `<run>/draft-v1.md` in drafting-skill mode (read `.claude/skills/copy-edit/SKILL.md` and follow it). It writes `<run>/draft-v2.md` and `<run>/copyedit-log.md` and ends with its own author review, which serves as this phase's checkpoint.

## Phase 8: Intent Review

Done in the main session. It needs the author's answers from this conversation and the run files. Compare `draft-v2.md` against `intent.md` and `provenance.md`, and write `<run>/intent-review.md`:

- **Delivered:** each "What the Author Wants" and "Must Include" item, and where the page delivers it.
- **Missing or weakened:** anything the author asked for that isn't there, or that copy editing softened.
- **Avoid violations:** anything from the "Avoid" list that made it in.
- **Unsourced claims:** any anecdote, statistic, quote, or "we've seen" on the page with no `provenance.md` row. Each is a defect. Get a source from the author or cut it.
- **Drift:** places where the page's claim, audience, or tone moved away from `intent.md`.

Fix agreed items in `draft-v2.md`. After any change, re-run `bun tools/index.ts --fix --json <run>/draft-v2.md` and resolve new findings. Small edits don't need a full copy-edit pass again, but they must follow the style guide.

**Checkpoint.** Ask the author to confirm the page says what they meant.

## Phase 9: Assembly & Wiring

1. **Write the page.** Copy `draft-v2.md` to `practices/<slug>.md`. Confirm there's no existing file at that path first. If there is, stop and ask.
2. **Capability backlinks.** For each capability in "Supporting Capabilities", open `capabilities/<file>.md` and find its `## Supporting Practices` section:
   - If an entry already links to `/practices/<slug>.md` (a planned practice), keep its position and update its blurb only if the author agrees.
   - Otherwise, append an entry at the end of the section, following the existing pattern exactly:

     ```md
     ### [<Practice Title>](/practices/<slug>.md)

     <2-4 sentences on how this practice supports *this* capability. Not a copy of the practice's own capability blurb, and not a definition of the capability.>
     ```

   - If the capability page has no "Supporting Practices" section, don't invent one. Tell the author.
3. **Show every capability edit** as a diff and get approval before moving on. These pages are shared, so the author must see each change.
4. **Lint all touched files:** `bun tools/index.ts --json practices/<slug>.md capabilities/<a>.md capabilities/<b>.md ...`
   - The new practice must have **zero errors and zero warnings** (except warnings deliberately kept in `copyedit-log.md`).
   - On capability pages, only findings **on the lines you added** must be fixed. Leave pre-existing debt alone and mention it in the report if it's significant.
5. Update `STATUS.md` and run the **checkpoint**.

## Phase 10: Report, Git, Cleanup

1. **Report:**
   - Where the source came from
   - Key decisions from both question rounds
   - The research verdicts
   - The copy-edit summary (change groups, lint counts before and after)
   - Intent review results
   - Files created or edited
   - Follow-ups from `STATUS.md` (suggested `/annotate-resource` runs)
   - A short provenance summary: how many items came from the author, from research, and from pasted material
2. **Git.** Ask with AskUserQuestion:
   - **Branch, commit, and open a PR (recommended):** if on `main`, create `practice/<slug>`; otherwise use the current branch. Stage **only** the files from this run (`practices/<slug>.md` and the edited capability pages); never use `git add -A`. Commit with `Add practice: <Title>`. Push with `-u`, then `gh pr create`. The PR body contains:
     - A summary of the practice
     - The capabilities it supports
     - The provenance table from `provenance.md`
     - The flagged items from `copyedit-log.md`
     - The follow-ups
   - **Leave it uncommitted:** the files stay in the working tree.
3. **Clean up.** Delete `<run>` without asking (run-conventions). Make sure the report already contains the provenance summary and follow-ups first, because they live only in the run folder.

The run ends here. Follow-ups start new runs.
