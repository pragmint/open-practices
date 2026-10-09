# Run Conventions

Shared by `/draft-practice`, `/annotate-resource`, and `/copy-edit`. Read this before starting or resuming a run.

## Run Folders

Every run lives in its own folder under `.tmp/` at the repository root. `.tmp/` is gitignored.

| Skill | Folder |
|---|---|
| `/draft-practice` | `.tmp/practice-<slug>/` |
| `/annotate-resource` | `.tmp/resource-<slug>/` |
| `/copy-edit` (standalone) | `.tmp/copyedit-<slug>/` |

- `<slug>` is kebab-case and matches the eventual file name (`set-and-enforce-wip-limits`). If the slug changes during a run (for example, the title is refined in the outline), rename the folder and note it in `STATUS.md`.
- Create the folder without asking. Never write run files anywhere else.
- The linter infers page type from the `practice-` and `resource-` prefixes, so drafts are checked against the right template.
- Delete the folder without asking once the run is finished (the page is written into the repository and the git step is done or declined). Copy anything the author might still want, such as the provenance summary, into the final report first.

## STATUS.md

Every run folder has a `STATUS.md`. It's how a later session knows where the run is, and the author can read or edit it by hand. **Rewrite it at the end of every phase step and at every checkpoint**, not only at the end of a phase.

```md
# Run: practice, <slug>

Type: practice | Started: 2026-10-02 | Updated: 2026-10-04
Source: conversation (source.md) | pasted transcript (source.md, from <path>)

## Current Position

Phase 3: Research & Idea Development, Step 2 (Round 1 questions)
State: awaiting-author

## Next Action

Ask remaining Round 1 questions: Q4 (counterexample from a client?), Q5 (which capabilities?).

## Phase Log

- [x] 0 Setup (2026-10-02)
- [x] 1 Intake: source.md, intent.md approved (2026-10-02)
- [x] 2 Overlap check: new practice (2026-10-02)
- [ ] 3 Research: research-initial.md done; Round 1 in progress
- [ ] 4 Outline
- [ ] ...

## Open Decisions and Revision Requests

- Author wants a Lessons bullet about the staging rollback; needs specifics.

## Follow-ups

- Suggested: /annotate-resource https://example.com/talk (linked externally from How to Gain Traction)
```

**State** is always one of:

| State | Meaning |
|---|---|
| `in-progress` | Claude is working on the current step |
| `awaiting-author` | Stopped at a checkpoint or a question; nothing happens until the author replies |
| `revising` | The author asked for changes to the current phase's output; the request is under "Open Decisions" |
| `shelved` | Stopped on purpose (not worth writing, or waiting on material). "Next Action" says what would restart it |
| `done` | Finished; the folder is about to be deleted |

## Starting or Resuming (Phase 0 in Every Skill)

1. List `.tmp/` folders with the skill's prefix and read each `STATUS.md` (current position, state, updated date).
2. If the invocation names a slug or topic that matches a folder, resume it. If it names something new, start a new run. If it names nothing and runs exist, list them (slug, phase, state, last updated) and ask whether to resume one or start fresh.
3. **When resuming:** read `STATUS.md`, then the output files of the current and previous phase, **fresh from disk**. The author may have edited them in an editor since the last session. Summarize where things stand and what changed since the last update, then run the standard checkpoint before continuing. Don't continue silently.
4. **Shelved runs:** say why the run was shelved and ask whether the missing material is now available.

## Checkpoints

After every phase (and where a phase says so, after a step inside it), stop and:

1. Update `STATUS.md` with state `awaiting-author`.
2. Summarize the phase's output so the author can actually judge it: the thesis, the verdict, the list of changes, whatever matters for that phase. Don't just say "done."
3. Ask, using AskUserQuestion when the choice is simple:
   - **Proceed** to the next phase
   - **Revise**: the author says what to change. Set state `revising`, make the change, and checkpoint again. Don't assume one revision settled everything.
   - **Redo**: regenerate this phase's output from scratch, discarding the current file.

The author can also edit a run file directly and say "continue." Always re-read files from disk at the start of a phase instead of trusting conversation memory.

## Source Material

The author's own words are the source of intent. Two kinds of input are accepted. Both end up in `source.md`:

- **This conversation.** If the author talked the idea through in this session before invoking the skill, write their messages into `source.md` **verbatim**, in order, under `## Author`. Add short bracketed notes for context only where a message can't be understood without it (`[replying to a question about scope]`). Claude's own replies aren't source material and aren't copied in.
- **A pasted or saved transcript.** Copy it into `source.md` as-is, under a note saying where it came from. If it's a file outside the repository, record the original path in `STATUS.md`. Never delete or move the original.

Never read Claude Code's own session logs (anything under `~/.claude/`) to get source material.

If the source is thin (a one-line invocation, no examples, no sense of the audience), don't proceed on guesses. Interview the author in Phase 1 until `intent.md` can be filled in, and add their answers to `source.md` under `## Intake Interview`.

## The Linter

The repository linter in `tools/` is used at fixed points in each skill. Before the first use in a session, make sure dependencies are installed:

```bash
[ -d tools/node_modules ] || (cd tools && bun install)
```

Run it from the repository root:

```bash
bun tools/index.ts --json <file> > <run>/lint-<phase>.json        # check only
bun tools/index.ts --fix --json <file> > <run>/lint-<phase>.json  # apply safe fixes, then check
```

- Exit code `1` means at least one **error**. Errors must be fixed before a phase can finish.
- **Warnings** (`no-em-dash`, `word-list`, `heading-case`, some `practice-structure` counts) need judgment. They are resolved in the copy-edit pass, not ignored.
- Don't lint the whole repository as a gate. It has existing debt unrelated to the run.
- Summarize findings by rule when you report them. Don't paste raw JSON at the author.

Section tooling for copy editing:

```bash
bun tools/sections.ts split <page.md> <lint.json> > <run>/sections.json
bun tools/sections.ts join <run>/sections-edited.json <page.md>
```

## Provenance

Every run keeps a running `provenance.md` in its folder: one line per anecdote, statistic, quote, or resource detail on the page, with where it came from (`source.md`, a Q&A answer and its date, a research file and URL, or material the author pasted). The intent review checks the page against it, and the PR description includes it.

## Git

Only the final phase touches git, and only the files the run created or edited. See the skill's final phase.
