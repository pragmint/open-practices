# Run File Formats

Formats for the files `/draft-practice` and `/annotate-resource` write into a run folder. Keep the headings exactly as shown so a later session (or the author in an editor) can find things.

## intent.md

The author's contract for the page. Written in Phase 1, updated after every round of questions, and checked against the final draft in the intent review. Write it in the author's terms, not Claude's.

```md
# Intent: <working title>

Page type: practice | resource
Updated: <date>

## What the Author Wants

<2-4 sentences in the author's terms: what this page should do for a reader>

## Audience

- <persona, e.g. "tech leads on teams of 5-10 who already run CI">

## Core Claim

<practice: the one-sentence argument for doing this>
<resource: why this resource is worth a team's time>

## Must Include

- <points, examples, warnings the author explicitly asked for>

## Anecdotes and Facts From the Author

- <each concrete story or fact, with enough detail to write from; mark any still vague as (VAGUE: what's missing)>

## Avoid

- <topics, framings, claims, or tools the author doesn't want>

## Tone and Emphasis

<anything about voice beyond the style guide, e.g. "skeptical of tooling-first rollouts">

## Decisions Log

- <date>: <decision and why>, e.g. "Scoped to teams with an existing CI pipeline (Round 1, Q2)"

## Overrides to Copy Guidelines

- <deliberate exceptions, e.g. "keep 'Post-Mortem' capitalized in the quoted book title">
```

## outline.md (practice)

Locked at the end of Phase 4. The drafter follows it section by section.

```md
# Outline: <Final Title: an Imperative Verb Phrase>

Slug: <slug>

## Introduction

- P1: <what the practice is>
- P2: <why it matters / what it changes>
- P3 (optional): <...>

## When to Experiment

- You're a <role> who needs to <goal> so you can <outcome>.
- ... (2-6)

## How to Gain Traction

### <Step 1 Heading>
<1-2 sentences: what the paragraph covers; resources to link, if any>

### <Step 2 Heading>
...  (2-4 steps)

## Lessons From The Field

- *<Lead-In>.* <which anecdote from intent.md this delivers>
- ... (2-6; every bullet must map to a real anecdote)

## Deciding to Polish or Pitch

Duration: <e.g. 2-3 weeks>

### <Quadrant>
- **<Benefit Title>**: <the signal; for Measurable, how it's counted>
...

## Supporting Capabilities

- [<Capability Name>](/capabilities/<file>.md): <how this practice supports it, one line>
- ... (2-6)

## Links

- Existing resources: <path, and the section it's linked from>
- External links: <URL, and the section; marked "follow-up: /annotate-resource" if worth a page>
```

## outline.md (resource)

```md
# Outline: <Resource Title>

Slug: <slug> | Folder: resources/<folder>/ | Resource type: <type>
Source link: <URL>

## Summary Paragraph
<what it covers, why a team should spend time on it>

## Sections
<the chosen annotation sections, in order, each with 1-2 lines on what it contains and its source>
- Opening Questions: ...
- Core Themes & Concepts to Explore: <each theme + its source in ingest.md>
- Team Exercises: ...
- Reflection Prompts: ...
- Facilitator Tip: ...
- How This Resource Brings Value: ...
- <type-specific: Timestamps / Chapters to Focus On / Reading Time / Agenda, only if sourced>

## Linked From
- <practice path>: <section, and the sentence or bullet that will carry the link>
```

## provenance.md

One line per factual item on the page. Updated whenever a draft changes.

```md
# Provenance

| Page Location | Item | Source |
|---|---|---|
| Lessons, bullet 2 | Staging rollback at a fintech client took 3 days | source.md (author, para 4) |
| How to Gain Traction, step 1 | DORA: elite teams deploy on demand | research-initial.md, https://dora.dev/... |
| Core Themes, theme 3 | "Simplicity is a prerequisite for reliability" | ingest.md, primary, https://... |
| Timestamps | 12:40 "values vs. objects" | Author-provided transcript (pasted 2026-10-03) |
```

Anything on the page that is a claim about the world, an anecdote, or a description of a resource's content and has no row here is a defect for the intent review to catch.
