# Open Practices for AI Harnesses: System Spec

Status: Draft · Owner: Dave Moore · Last updated: 2026-10-16

## 1. Vision

Open Practices turns DORA research into practices people can act on. This spec makes the same knowledge usable by AI coding harnesses (Claude Code, Cursor, Codex, Copilot, OpenCode), so a Pragmint engagement can start adding value on day one in two ways:

1. **Diagnose.** An agent assesses a client's DORA capability maturity from evidence (code, delivery metrics, transcripts, surveys, documents), scores every capability with cited evidence, and prescribes practices.
2. **Change how software gets written.** The prescribed practices are installed into client repositories as team rules, enforcement (git hooks and CI) and on-demand skills, so both people and agents work trunk-based, test-first and in small batches.

A third use falls out of the first two: an **advisor** that answers "we're weak at X, what should we try?" from the content.

### Users

| User | Goal | Primary surface |
|---|---|---|
| Consultant (Pragmint) | Run an evidence-based capability assessment and produce a report and roadmap | Consultant skills in an engagement workspace |
| Client engineer | Write software the way the prescribed practices describe | Rules, hooks and skills installed into the client repo |
| Client lead or manager | Understand where the team stands and what to try next | The report, the advisor, and Dev Waymark dashboards |
| Open Practices author | Add or improve capabilities, practices, rubrics and skills | Existing authoring skills in `.claude/` and the build and validate tooling |

### Principles

- **One source of truth.** Capabilities and practices are written once, in prose for people. Everything agents use is either generated from that prose or links back to it.
- **No client data in this repo.** Ever. Client artifacts live in a separate engagement workspace or behind a CLI or API.
- **Tool-neutral by default.** Every artifact works in all five harnesses. Harness-specific features such as subagents and agent hooks only speed things up; nothing depends on them.
- **Rules become code.** Anything that can be checked mechanically is checked by a script, git hook or CI job, not left to an agent's judgement.
- **Evidence or it didn't happen.** Every score cites evidence labelled by kind. An agent never fabricates a measurement.
- **Separation of duties.** The agent that scores a capability is not the agent that checks the score.

## 2. System Overview

Three repositories, each with one job, plus a private workspace for each engagement.

```
                ┌──────────────────────────────────────────┐
                │ open-practices  (this repo, public)      │
                │  KNOW: capabilities, practices, resources │
                │  JUDGE: rubrics, signal catalog           │
                │  ACT: Harness library of skills, agents,  │
                │       instructions, hooks, CI templates   │
                └───────────────┬──────────────────────────┘
                                │ library (git)
                ┌───────────────▼──────────────────────────┐
                │ harness-hub  (`harness` CLI)             │
                │  DISTRIBUTE: copy artifacts into projects │
                │  per harness; report current/stale/       │
                │  modified/absent                          │
                └──────┬─────────────────────────┬─────────┘
                       │ harness add             │ harness add
        ┌──────────────▼─────────────┐  ┌────────▼──────────────────┐
        │ Engagement workspace       │  │ Client repositories        │
        │ (private, per client)      │  │ rules + hooks + CI +       │
        │ consultant skills, sources,│  │ developer skills           │
        │ evidence, scores, reports  │  │ (via PR)                   │
        └──────────────┬─────────────┘  └────────────────────────────┘
                       │ `waymark` CLI (JSON)
        ┌──────────────▼─────────────────────────────┐
        │ dev-waymark  (local app + CLI)             │
        │  MEASURE: ingest delivery data (GitHub,    │
        │  Jira, CI, ...), compute signals, trends,  │
        │  drill-downs                               │
        └────────────────────────────────────────────┘
```

| Repo or tool | Owns | Does not own |
|---|---|---|
| **open-practices** | What good looks like (capabilities, practices); how to judge it (rubrics, signal definitions); how to apply it (skills, rules, hooks, CI templates); how to run an assessment (consultant skills) | Installing anything; storing client data; computing metrics |
| **harness-hub** | Copying library artifacts into projects for each harness; drift detection; adapters for all five harnesses | Content; scoring; metrics |
| **dev-waymark** | Ingesting client delivery data; computing signals defined in the catalog; trends and drill-downs; dashboards; a CLI with JSON output | Maturity levels; scoring; practice recommendations |
| **Engagement workspace** | Everything about one client: sources, evidence, scores, reports | Generic knowledge |

## 3. open-practices Repository Structure

```
open-practices/
├── README.md
├── capabilities/*.md                 # unchanged: human prose, maturity statements, supporting practices
├── practices/*.md                    # unchanged: human prose
├── resources/{people,process,tech}/  # unchanged
├── capabilities-maturity-assessment.md
├── copy-guidelines/  templates/      # unchanged
│
├── rubric/                           # JUDGE: agent-facing scoring data, no client data
│   ├── signals.yaml                  # signal catalog: the contract Dev Waymark implements
│   ├── schema/                       # JSON Schemas for rubric and signal files
│   └── capabilities/<capability-id>.yaml
│
├── harness-library.json              # {"specVersion": 1, "name": "open-practices"}
├── skills/                           # ACT: Harness artifacts (Library Standard v1)
│   └── op-<name>/
│       ├── artifact.json
│       ├── common/
│       │   ├── SKILL.md              # hand-written procedure
│       │   ├── scripts/              # deterministic checks (Bun/TS or POSIX sh)
│       │   └── references/           # GENERATED from capabilities/, practices/, rubric/
│       └── <harness>/                # optional per-harness variant
├── agents/op-<name>/                 # subagent definitions (optional speed-up)
├── instructions/op-<name>/           # always-on team rules → AGENTS.md / CLAUDE.md block
├── files/op-<name>/                  # git hooks, config files
├── ci/op-<name>/                     # CI workflow templates
│
├── tools/                            # build + validate (extends the existing linter)
│   ├── index.ts                      # existing Markdown linter
│   ├── build-references.ts           # generates */common/references/** from content
│   ├── validate-rubric.ts            # rubric ↔ capability page consistency
│   └── validate-library.ts           # wraps `harness validate .` + reference freshness
│
├── docs/                             # specs like this one
└── .claude/                          # repo-local AUTHORING tools (not distributed)
    ├── skills/{draft-practice,annotate-resource,copy-edit,...}
    └── agents/op-{researcher,drafter,copy-editor,coherence-editor}.md
```

Distributed artifacts live at the root in Library Standard layout. Authoring tools stay in `.claude/` and are never published through Harness.

### 3.1 Content layer (KNOW)

Unchanged in purpose and format. Two small obligations:

- **Stable IDs.** A page's filename slug is its ID (`trunk-based-development`, `implement-tdd`). Renames use `git mv` in a commit that changes nothing else, so Harness and generated references keep tracking them.
- **Parseable structure.** The capability → practice mapping stays in each capability page's "Supporting Practices" section. `tools/src/sections.ts` already parses it, so the build reads the mapping from the page instead of duplicating it in YAML.

### 3.2 Rubric layer (JUDGE)

The rubric is generic, versioned scoring knowledge. It lives outside the prose pages so authors never edit YAML in a page.

**Signal catalog (`rubric/signals.yaml`).** This repo defines *what* each signal means. Dev Waymark, or any other provider, implements *how* to compute it.

```yaml
version: 1
signals:
  branch_lifetime_hours:
    description: Time from first commit on a branch to its merge into trunk.
    unit: hours
    entity: change            # change | work_item | build | deploy | incident | snapshot
    preferred_stat: p50
    direction: lower_is_better
  pr_first_review_wait_hours:
    description: Time from a change being ready for review to its first review.
    unit: hours
    entity: change
    preferred_stat: p50
    direction: lower_is_better
  change_size_lines:        { ... }
  trunk_merges_per_dev_day: { ... }
  build_success_rate:       { ... }
  build_duration_minutes:   { ... }
  deploy_frequency_per_week:{ ... }
  lead_time_for_changes_hours: { ... }
  change_fail_rate:         { ... }
  time_to_restore_hours:    { ... }
  wip_per_person:           { ... }
  # ...grows with each capability
```

**Capability rubric (`rubric/capabilities/<id>.yaml`).**

```yaml
capability: trunk-based-development     # must match capabilities/<id>.md
rubric_version: 1
dimensions:                             # 1:1 with the "####" groups in the page; one if none
  - id: overall
    levels:                             # level numbers must match the page's numbered statements
      1: { label: Long-lived Branches }
      2: { label: Regular Merges }
      3: { label: Short-lived Branches }
      4: { label: Trunk-based }
    measured:                           # quantitative, from a provider
      - signal: branch_lifetime_hours
        thresholds: { 4: "<3", 3: "<72", 2: "<336", 1: ">=336" }
      - signal: trunk_merges_per_dev_day
        thresholds: { 4: ">=1", 3: ">=0.3", 2: ">=0.1", 1: "<0.1" }
    observed:                           # an agent can check this by reading code or config
      - "Branch protection or CI config targets a release/develop branch rather than trunk"
      - "Feature flag or toggle library present; age of flags"
    reported:                           # look for in transcripts and surveys
      - "Mentions of merge conflicts, 'merge day', code freezes"
      - "Developers describe batching work to avoid review overhead"
    probes:                             # interview questions to collect reported evidence
      - "Walk me through the last change you merged. How long was the branch open, and why?"
    survey_items:
      - "I merge my work into the main branch at least once a day. (1–5)"
gaps_to_practices:                      # optional refinement over Supporting Practices
  - when: { signal: pr_first_review_wait_hours, worse_than: 24 }
    suggest: [run-pair-programming-sessions, conduct-code-reviews]
```

`tools/validate-rubric.ts` enforces: every capability page has a rubric file; dimension and level counts match the page; every `signal` exists in the catalog; every practice ID resolves.

### 3.3 Harness library (ACT)

All distributed artifacts use the `op-` prefix and follow Library Standard v1. They fall into four families.

#### Consultant skills (installed into an engagement workspace)

| Artifact | Purpose |
|---|---|
| `skills/op-engage` | Set up a workspace: write `engagement.yaml`, check providers (`waymark`, `gh`, Jira CLI), list sources |
| `skills/op-interview-kit` | Generate 1:1 guides, team-meeting agendas and a survey from the rubric's `probes` and `survey_items`, scoped to the capabilities in play |
| `skills/op-ingest` | Normalize transcripts, surveys and documents in `sources/` into evidence records: redact names to roles, tag capabilities, keep quotes |
| `skills/op-assess` | **Router.** For each in-scope capability: collect measured (provider), observed (code and config) and reported (transcripts) evidence → score → cross-check → write `scores/` |
| `skills/op-report` | Produce the client report: scores with cited evidence, contradictions, prioritized practice recommendations, links to canonical pages |
| `skills/op-roadmap` | Turn recommendations into an experiment plan (practice, owner, success signal, re-measure date) and say which `instructions/files/ci/skills` to install |
| `skills/op-reassess` | Re-run against the same scope and compare with the previous scores and Waymark trends |
| `skills/op-advise` | Answer "what should we try for X?" from the content, with or without engagement data |
| `agents/op-evidence-collector` | Optional subagent: gathers evidence for one capability (runs in parallel where the harness supports subagents) |
| `agents/op-scorer` | Optional subagent: scores one capability from its evidence file |
| `agents/op-skeptic` | Optional subagent: argues against each score, finds weak or missing citations and contradictions |

Without subagents, `op-assess` runs collector → scorer → skeptic one after another in a single context, one capability at a time.

#### Developer rules (installed into client repos, always on)

| Artifact | Type | What it adds |
|---|---|---|
| `instructions/op-trunk-based` | instructions (block) | Commit small and often; integrate to trunk at least daily; use toggles or branch-by-abstraction for unfinished work; never leave trunk red |
| `instructions/op-test-first` | instructions | Write a failing test before behaviour changes; follow the test strategy in `TESTING.md` |
| `instructions/op-small-batches` | instructions | Keep each change under N lines unless explicitly agreed; split stories first |
| `files/op-pre-commit` | files | Git hook: fast tests + lint + change-size warning (runs for people and agents alike) |
| `ci/op-trunk-health` | ci | CI job: fail or warn on branch age, change size, missing tests for changed code |
| `ci/op-broken-build-alert` | ci | Notify and swarm when trunk goes red |

Team rules use `instructions` (a managed block in `AGENTS.md`/`CLAUDE.md`), so `harness status` shows when a team has edited them, which itself feeds a reassessment.

#### Developer skills (installed into client repos, invoked when needed)

One skill per practice an agent can carry out. Practices about people and the organization, such as team charters and crucial conversations, are not skills; they reach clients through the report and the advisor.

| Skill | Backed by |
|---|---|
| `op-tdd` | `implement-tdd`, `build-consistent-testing-strategy` |
| `op-slice-work` | Working in Small Batches capability |
| `op-feature-toggle`, `op-branch-by-abstraction` | Trunk-based Development capability |
| `op-refactor` | `refactor`, `reduce-coupling-between-abstractions` |
| `op-functional-core` | `follow-functional-core-imperative-shell` |
| `op-clean-commits` | `clean-git-history` |
| `op-db-migration` | `automate-database-migrations` |
| `op-fix-broken-build` | `treat-broken-builds-like-outages` |
| `op-test-strategy` | `build-consistent-testing-strategy`, Test Automation capability |
| `op-decouple-third-party` | `decouple-from-third-parties` |

#### Skill anatomy

```
skills/op-tdd/
├── artifact.json        {"description": "...", "languages": [], "requires": {...}}
└── common/
    ├── SKILL.md         # frontmatter (name, description, when to use) + numbered procedure,
    │                    # stop conditions, and "read references/implement-tdd.md for why"
    ├── scripts/         # e.g. detect test runner, run only affected tests
    └── references/      # GENERATED, committed
        └── implement-tdd.md
```

`SKILL.md` stays short and imperative. The reasoning lives in the generated references.

### 3.4 Generated references

`tools/build-references.ts` writes `references/` for each artifact from a declared source list in its `SKILL.md` frontmatter (e.g. `op-sources: [practices/implement-tdd.md]`):

- Copies the page, dropping sections that aren't useful to an agent ("Introspective Questions") and rewriting internal links to absolute GitHub URLs.
- Prepends a provenance header:
  `<!-- Generated from https://github.com/pragmint/open-practices/blob/<sha>/practices/implement-tdd.md. Do not edit. -->`
- For consultant skills, also bundles `rubric/signals.yaml`, the relevant `rubric/capabilities/*.yaml`, and the capability pages.

Generated files are **committed**, because Harness tracks versions through library git history. CI fails if a rebuild would change them. Editing a practice page, rebuilding and committing causes `harness status` to mark every client copy `stale`.

## 4. Engagement Workspace

A private git repository per client, separate from open-practices, e.g. `~/engagements/<client>/`. Harness installs the consultant skills into it like any other project.

```
<client>/
├── engagement.yaml              # client, teams, repos in scope, capabilities in scope,
│                                # providers (waymark dataset, gh org, jira), consent notes
├── AGENTS.md / CLAUDE.md        # Harness-managed: consultant instructions
├── .claude/skills/op-*/ ...     # Harness-managed copies (per harness)
├── sources/                     # raw client artifacts: NEVER leave this repo
│   ├── transcripts/  surveys/  docs/
├── evidence/<capability>.jsonl  # normalized evidence records
├── scores/<date>/<capability>.json
├── reports/<date>/report.md     # + optional published artifact
└── roadmap.md
```

Client repositories are read in place, by path or by cloning into a gitignored `repos/` folder, and are never copied into `sources/`.

### 4.1 Evidence record

```json
{
  "id": "ev-0142",
  "capability": "trunk-based-development",
  "dimension": "overall",
  "kind": "measured | observed | reported | inferred",
  "signal": "branch_lifetime_hours",
  "value": { "stat": "p50", "value": 142, "unit": "hours", "n": 311, "period": "2026-07-01/2026-09-30" },
  "source": { "type": "waymark | repo | transcript | survey | doc", "ref": "waymark://signal/branch_lifetime_hours?team=payments" },
  "excerpt": "We usually hold PRs until QA signs off the whole sprint.",
  "attribution": "Senior engineer, Payments",
  "collected_at": "2026-10-16T14:02:00Z"
}
```

### 4.2 Scoring rules

- A level is assigned per dimension and averaged per capability, as the human assessment does.
- **Confidence** is `high` when measured and reported evidence agree, `medium` when only one kind exists, and `low` when only inferred evidence exists. Low-confidence scores are flagged for a human interview, never reported as fact.
- **Contradictions are findings.** "People say we merge daily, but median branch life is 6 days" goes in the report's highlights.
- `op-skeptic` must sign off on (or annotate) every score before `op-report` uses it.

### 4.3 Privacy

- Transcripts are attributed by role, never by name, in evidence and reports.
- `engagement.yaml` records consent and retention for each source.
- open-practices CI rejects any commit containing an `engagement.yaml`, `sources/` or `evidence/` path.

## 5. Contract: open-practices ↔ Dev Waymark CLI

Dev Waymark's internal model (entities plus metadata, loaded by client-specific pipelines) means available data varies by client and over time. The contract therefore centres on **discovery**: the assessment asks what can be measured before it measures anything.

### 5.1 What open-practices provides

- `rubric/signals.yaml`, versioned. Each signal has an ID, definition, unit, entity kind, preferred statistic and direction.
- A conformance fixture (`rubric/fixtures/`) with tiny datasets and the expected signal values, so Dev Waymark can test its implementation against the definitions.

### 5.2 What the `waymark` CLI must provide

All commands support `--json` and print a common envelope. Exit `0` means success, `3` means signal unsupported, `4` means insufficient data.

| Command | Purpose |
|---|---|
| `waymark datasets list` | Datasets or clients available locally and their freshness |
| `waymark signals list --dataset <d>` | Every catalog signal with `status: available \| partial \| unavailable`, sample size, date coverage and the catalog version implemented |
| `waymark signals get <signal> --dataset <d> [--stat p50] [--period 2026-Q3] [--team T] [--repo R]` | One value with `n` and provenance |
| `waymark signals trend <signal> ... --bucket week` | A time series for before/after comparisons and reassessment |
| `waymark signals examples <signal> ... --worst 5` | Concrete items (PR URLs, ticket keys) the report can cite |
| `waymark fields list --dataset <d>` | Raw entity types and fields, so an agent can derive a signal Waymark doesn't implement yet (labelled `inferred`) |
| `waymark open <signal> ...` | Prints a dashboard URL for the human in the loop |

Envelope:

```json
{
  "catalog_version": 1,
  "signal": "branch_lifetime_hours",
  "status": "available",
  "value": 142, "stat": "p50", "unit": "hours", "n": 311,
  "period": "2026-07-01/2026-09-30",
  "filters": { "team": "payments" },
  "provenance": { "dataset": "acme", "loaded_at": "2026-10-15T03:00:00Z", "definition": "merged_to_trunk_at - first_commit_at" }
}
```

### 5.3 Behaviour when data is missing

- Signal `unavailable` or `insufficient data` → the evidence collector records it as not measured, relies on observed and reported evidence, and lowers confidence.
- `waymark` not installed → `op-assess` still runs on observed and reported evidence. It may compute a few signals ad hoc with `git`/`gh`, labelled `inferred`.
- Consultant skills declare the CLI with `requires.bins: [{name: "waymark"}]` in `artifact.json`, so Harness warns when it's missing but still installs the skill.

### 5.4 Optional reverse link

Dev Waymark dashboards may link a signal to the capability and practice pages that address it, using the same catalog, so a slow review queue in the dashboard points straight to the relevant practices.

## 6. Contract: open-practices ↔ Harness CLI

### 6.1 What open-practices provides

- A valid Library Standard v1 tree (section 3.3), checked in CI with `harness validate .`.
- `common/` content that works in every harness. Per-harness folders only where a harness supports something extra, for example a `claude/` variant of `op-assess` that launches `op-scorer` subagents in parallel.
- `requires` and `network` declared accurately in `artifact.json`. `inputs` are used for values like the trunk branch name, change-size limit and test command, e.g. `{{input:TRUNK_BRANCH}}`.
- Committed generated references, and renames via `git mv` only.

### 6.2 What harness-hub must provide (tracked in harness-hub)

| Requirement | Why |
|---|---|
| Adapters for Cursor, Codex, Copilot and OpenCode (skills dir, instructions file such as `AGENTS.md`, agents where supported) | All five harnesses are core |
| Graceful handling of types a harness doesn't support (e.g. `agents` → skip with notice) | Subagents are an optional speed-up |
| **Bundles**: a named set of artifacts, e.g. `harness add bundle/op-consultant` or `bundle/op-trunk-based` | A roadmap item should install as a single unit |
| **Artifact dependencies**: e.g. `op-assess` requires `op-scorer` and `op-skeptic` | Prevents partial installs |
| Applying `instructions`/`files`/`ci` to a client repo on a branch, ready for a PR | Changes to client repos go through the team's normal review |

If bundles and dependencies are slow to arrive, `op-roadmap` writes the exact `harness add ...` command list instead.

### 6.3 Lifecycle

```
author edits practices/implement-tdd.md
  → tools/build-references.ts regenerates skills/op-tdd/common/references/implement-tdd.md
  → CI: lint, validate-rubric, validate-library, references fresh
  → merge to main
client project: harness status → op-tdd: stale → harness add skills/op-tdd → PR
client edits instructions/op-trunk-based locally → harness status: modified → left alone; noted at reassessment
```

## 7. End-to-End Flows

### 7.1 Consultant engagement

1. `mkdir ~/engagements/acme && git init` → `harness add -p ~/engagements/acme bundle/op-consultant`.
2. `/op-engage`: fill in `engagement.yaml`, run `waymark signals list`, set scope.
3. `/op-interview-kit`: produce interview guides and a survey for the in-scope capabilities; run the sessions; drop transcripts and results into `sources/`.
4. `/op-ingest` → `evidence/*.jsonl`.
5. `/op-assess` → for each capability: collect, score, skeptic check → `scores/`.
6. `/op-report` → report with cited evidence, contradictions and prioritized practices.
7. `/op-roadmap` → experiment plan + `harness add` commands per client repo → PRs into client repos.
8. Six to eight weeks later, `/op-reassess` → compare scores and Waymark trends.

### 7.2 Client engineer

- After the roadmap PR merges, the repo has `AGENTS.md` rules, a pre-commit hook, CI jobs and `op-*` skills.
- Day to day: any harness follows the rules automatically. The engineer invokes `/op-slice-work` before starting a story, `/op-tdd` while building it, and `/op-feature-toggle` when work can't ship complete. Hooks and CI enforce the hard limits for people and agents alike.

### 7.3 Author

- Draft or revise content with the existing `/draft-practice`, `/annotate-resource` and `/copy-edit` skills.
- Update the matching `rubric/` entry and the skill's `op-sources` if needed.
- `bun tools/build-references.ts && bun tools/index.ts && bun tools/validate-rubric.ts`, then commit.

## 8. Validation and CI (this repo)

| Check | Tool |
|---|---|
| Markdown style and structure | `tools/index.ts` (existing) |
| Rubric schema, page ↔ rubric consistency, signal IDs, practice IDs | `tools/validate-rubric.ts` |
| Library Standard v1 | `harness validate .` |
| Generated references up to date | `tools/build-references.ts --check` |
| No client data paths | path-deny check in CI and a pre-commit hook |
| Skill quality (later) | Scenario evals: run a skill against fixture repos and transcripts, check its output against expectations |

## 9. Decisions Log

| # | Decision | Rationale |
|---|---|---|
| 1 | Multi-purpose system: diagnostic + developer artifacts + advisor on one content layer | One body of knowledge serves both consultant and engineer |
| 2 | Diagnostic accepts non-code evidence (transcripts, surveys, docs) | Roughly half the capabilities can't be judged from code |
| 3 | No Claude Code plugin; distribution through Harness | Clients use five different harnesses |
| 4 | Core harnesses: Claude Code, Cursor, Codex, Copilot, OpenCode | Seen at clients; adapters tracked in harness-hub |
| 5 | Lowest common feature set: SKILL.md + scripts + instructions + git hooks + CI. Subagents and agent hooks only speed things up | Portability; rules enforced in hooks and CI apply to people too |
| 6 | Client data never stored in this repo | Public repo; client confidentiality |
| 7 | Rubric in `rubric/`, separate from prose pages | Keeps content pure for authors; validator prevents drift |
| 8 | Skills include generated references with GitHub provenance headers | Harness copies artifacts, so relative links would break; one source of truth |
| 9 | Signal catalog owned here, implemented by Dev Waymark, discovered at runtime | Waymark's data varies by client; rubric stays in DORA terms and doesn't depend on one provider |
| 10 | Delivery in vertical slices (capability groups end to end) | Same reasoning as DORA's small-batches guidance; slice order decided later |

## 10. Open Questions

1. **Signal catalog ownership in practice.** This repo defines the signals, but who adds a new one: a PR here first, then Waymark? (Proposed: yes, a catalog change lands here first.)
2. **Does Waymark ingest non-code sources** such as transcripts and surveys, or do those stay as files in the engagement workspace? (Proposed: files only for now.)
3. **Report format.** Markdown in the workspace, a published artifact, or both? Does it need Pragmint branding?
4. **Bundles and dependencies in harness-hub.** Build them there, or keep them as conventions in this repo?
5. **Skill evals.** What fixture repos and transcripts form the eval set, and where do they live? (They must be synthetic, because this repo is public.)
6. **Licensing.** Content is MIT today. Should consultant skills stay public, or move to a private Pragmint library with the content library staying public?
7. **Slice order.** Deferred by request.
