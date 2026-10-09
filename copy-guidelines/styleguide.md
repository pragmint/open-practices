# Open Practices Style Guide

This guide describes how pages in the Open Practices repository are written and formatted. It's written for short, practical pages authored in Markdown and read on GitHub and on the web.

## About This Guide

### Order of Authority

When two sources disagree, the first one in this list wins:

1. [words.md](words.md), for the specific terms it lists
2. This style guide
3. *The Chicago Manual of Style, 18th edition*
4. *Merriam-Webster's Collegiate Dictionary*

### House Conventions at a Glance

These are the rules that most often surprise new contributors:

- **Straight quotes only.** Use straight quotes (`"` and `'`) everywhere, because the pages are Markdown source files. See [Quotation Marks](#quotation-marks).
- **Title case for H1 through H3, AP style.** Use title case at every heading level a reader is likely to scan, and capitalize prepositions of four or more letters ("With," "From," "Between"). See [Headings](#headings).
- **No em dashes.** Restructure the sentence instead. See [Dashes](#dashes).
- **Real anecdotes and sourced claims.** However a page is drafted, its stories and facts must come from real people and real sources. See [AI-Assisted Writing](#ai-assisted-writing).
- **Links to books.** Prefer the publisher's or author's page, and link to a retailer only when nothing else exists. See [Links and Cross-References](#links-and-cross-references).

### How This Guide Is Enforced

Some rules are checked automatically by the linter in `tools/` (run `bun index.ts <file>` from that folder). The rest are applied during copy editing by the `/copy-edit` skill or by a human editor. Rules the linter checks are marked **(linted)**.

## Voice and Tone

Open Practices pages are written by practitioners for practitioners. They should sound like an experienced colleague explaining what has worked: direct, specific, and honest about trade-offs.

- **Address the reader as "you."** Talk to the reader directly. Use "your team" for the group the reader works with. Avoid "one" and avoid switching between "you" and "developers" for the same person.
- **Use "we" for Pragmint's experience.** "We've seen teams..." signals a first-hand observation. Don't use "we" to mean "the reader and the author."
- **Prefer the active voice.** "The team reviews the alerts" rather than "the alerts are reviewed." The passive voice is fine when the actor genuinely doesn't matter.
- **Be concrete.** Name the tool, the metric, the meeting, or the failure. "Builds stayed red for two days" beats "builds were often broken."
- **Make claims you can support.** If a statement comes from research, link to the research. If it comes from experience, say so ("in our experience"). Don't present opinion as settled fact.
- **Acknowledge trade-offs.** Every practice has costs and situations where it doesn't fit. Saying so builds trust.
- **Skip throat-clearing.** Don't open with "In today's fast-paced world" or "It's no secret that." Start with the point.
- **Avoid hype.** Cut "revolutionary," "game-changing," "seamless," "robust," "best-in-class," and "leverage" or "utilize" (use "use").
- **Keep sentences short.** Aim for an average under 25 words. If a sentence needs two commas and a parenthetical to survive, split it.
- **Use contractions.** "Don't," "it's," and "you'll" keep the tone conversational. Don't contract nouns with verbs ("the team'll").

## Page Types

The repository has three kinds of pages: practices, resources, and capabilities. Each has a template or an established pattern; follow it rather than inventing new structure.

### Practices

Practices follow [templates/new-practice.md](/templates/new-practice.md). The linter checks the structure **(linted)**.

- **Title.** An H1 imperative verb phrase in title case that names what the team does: "Run Pair Programming Sessions," "Treat Broken Builds Like Outages." Not a noun phrase ("Pair Programming") and not a gerund ("Running Pair Programming Sessions").
- **Introduction.** Two to four paragraphs. The first paragraph says what the practice is. The rest say why it matters and what problems it solves. No heading above the introduction other than the title.
- **When to Experiment.** H2 header. Two to six bullets, each a persona in this form: "You're a [role] who needs to [goal] so you can [outcome]." Lowercase the role ("You're a developer"), unless it's a proper noun. Use "You're a" or "You're an" consistently within a page.
- **How to Gain Traction.** H2 header. Two to four actionable steps as H3 headings, in the order a team would do them. Each step heading is an imperative phrase ("Run a Pilot on a Single Repo"). Each step has one paragraph.
- **Lessons From The Field.** H2 header. Two to six bullets. Each opens with a short italic lead-in in title case that ends with a period, followed by the explanation: `- *Review Fatigue Kills Trust.* When teams adopt...`. Lessons should come from real observation. If you don't have a real example, leave the bullet out.
- **Deciding to Polish or Pitch.** H2 header. Opens with the template sentence exactly as written, changing only the duration, which is bold: "After experimenting with this practice for **2-3 weeks**, bring the team together..." The sentence ends with a colon **(linted)**. Sub-headings are limited to the four quadrants: Fast & Measurable, Slow & Measurable, Fast & Intangible, and Slow & Intangible **(linted)**. Each benefit opens with a bold title that ends with a period: `**Fewer broken builds**. The number of...`. A "measurable" signal must name something a team can actually count and/or a tool used to take the measurement.
- **Supporting Capabilities.** H2 header. Two to six capabilities. Each H3 is a link to the capability page **(linted)**, followed by two to four sentences about how this practice supports that capability.

### Resources

Resources follow [templates/new-resource.md](/templates/new-resource.md).

- **Header.** An H1 with the resource's title (add "by [Author]" for talks and books when it helps), then a `Resource type:` line, then a link to the resource **(linted)**. Use one of the resource types the linter accepts, in title case: Article, Blog Post, Book, Code Kata, Code Snippet, Course, Documentation, Podcast, Roundtable Discussion, Video, Video & Transcript, or Workshop.
- **Summary.** H2 header. A paragraph saying what the resource covers and why a team would spend time on it.
- **Annotations.** Pick the sections that fit the resource type. Common sections are Opening Questions, Core Themes & Concepts to Explore, Team Exercises, Reflection Prompts, Facilitator Tip, and How This Resource Brings Value. Books may add chapters to focus on and an estimated reading time. Videos may add timestamps.
- **Accuracy.** Anything that describes the resource's content (a theme, a quote, a timestamp, a chapter) must come from the resource itself or from someone who has read or watched it. Never guess a timestamp or a chapter number.

### Capabilities

Capability pages summarize [DORA research](https://dora.dev/). Keep the capability's DORA name. Entries in the "Supporting Practices" section are an H3 link to the practice followed by two to four sentences about how the practice supports *this* capability.

## Headings

- **Title case for H1, H2, and H3 (linted).** Capitalize every word of four or more letters, and every noun, pronoun, verb, adjective, and adverb ("Is," "Be," "It"). Lowercase articles (a, an, the), coordinating conjunctions (and, but, or, nor, for, so, yet), and prepositions of three letters or fewer (as, at, by, in, of, off, on, per, to, up, via, vs.), unless they're the first or last word. So: "Talk Directly With Users," "Lessons From The Field," "Run a Pilot on a Single Repo." Capitalize the first part of a hyphenated compound. Lowercase second part of compound ("Trunk-based Development"). The linter checks only the first part.
- **H4 and lower** use the same title case for consistency, but the linter doesn't check them.
- **Template headings are fixed.** Don't reword "When to Experiment," "Lessons From The Field," or the other template headings.
- **No formatting in headings.** No bold, italics, or inline code. Links are allowed only where a template calls for them (capability and practice links).
- **No stacked headings.** Put at least one sentence between a heading and its first sub-heading.
- **No end punctuation.** Headings don't end with periods or colons. A question mark is fine if the heading is a question.
- **Leave a blank line after every heading (linted).**

## Punctuation

### Commas

- **Use the serial comma:** "tests, builds, and deployments."
- Commas (and periods) go inside quotation marks. 
- Don't join two complete sentences with only a comma. Use a period, a semicolon, or a conjunction.

### Dashes

- **Don't use em dashes (linted).** That includes `—`, a spaced en dash (` – `), and the ASCII stand-in (` -- `). An em dash usually means a sentence is doing two things. Restructure it:
  - Split it into two sentences: "The build broke. Nobody noticed for a day."
  - Use a comma for a light aside: "The pilot team, a group of four developers, ran the experiment."
  - Use parentheses for a true aside: "Tools like Semgrep (or any rule-based analyzer) can..."
  - Use a colon to introduce a list or an explanation: "Two things changed: review time and defect rate."
- **Hyphens** join compound modifiers before a noun ("a high-severity incident") and appear in ranges ("2-4 weeks," "10-15 minutes"). Don't hyphenate after an adverb ending in "-ly" ("a highly visible board").
- **En dashes** aren't used. Write ranges with a hyphen.

### Quotation Marks

- **Use straight quotes and apostrophes only (linted).** The linter's `--fix` option converts curly quotes automatically.
- Put commas and periods inside closing quotation marks: the team called it "the wall."
- Use quotation marks for a term being introduced or used ironically, not for emphasis. Use italics for emphasis.

### Colons and Semicolons

- Lowercase the first word after a colon unless it starts a complete sentence that could stand alone, or it's a proper noun.
- Use semicolons sparingly. Two sentences are usually clearer.

### Other Punctuation

- **"e.g.," and "i.e.,"** are always followed by a comma and belong inside parentheses. In running text, write "for example" or "that is."
- **Ellipses** have no spaces around them (...) and should be rare.
- **Exclamation points** are almost never needed.
- **Ampersands** appear only in fixed headings ("Fast & Measurable") and proper names. Write "and" in prose.
- **Slashes** are fine in fixed terms (CI/CD, I/O). Otherwise write "or" or "and."

## Numbers

- Spell out zero through nine. Use numerals for 10 and above.
- Use numerals for every number in a sentence if any of them is 10 or above: "between 3 and 12 reviewers."
- Always use numerals with units, percentages, and durations in templates ("2-3 weeks," "5%," "4 GB").
- Use the `%` symbol, closed up to the number: "a 30% drop."
- Use commas in numbers of four or more digits: "1,200 tests."
- Spell out a number that starts a sentence, or rewrite the sentence.
- Spell out ordinals first through ninth; use numerals from 10th.

## Lists

- **Use dashes for bulleted lists (linted).** Not asterisks or plus signs.
- **Use numbered lists** only when order matters (steps in a procedure, a ranking).
- **Keep items parallel.** If one item starts with a verb, they all should.
- **Capitalize the first word** of every item.
- **Punctuation:** If any item is a complete sentence, end every item with a period. If none are, use no end punctuation.
- **Lead-ins:** For items that open with a label, use italics or bold followed by a period, not a dash: `- *Start Small.* Pick one repo...`. Use the italic form in "Lessons From The Field" and the bold form elsewhere unless the template says otherwise. Write lead-ins in title case.
- **Nesting:** Indent nested lists by two spaces and avoid going deeper than two levels.

## Links and Cross-References

- **Link descriptive text.** The link text should say where the link goes: "see the [DORA report on trunk-based development](https://dora.dev/...)." Never `click [here](...)` or `this [link](...)`.
- **Use root-relative paths for internal links:** `[Code Maintainability](/capabilities/code-maintainability.md)`. Internal links must point at files that exist **(linted)**.
- **Write "preceding" and "following,"** not "above" and "below," when referring to other parts of the page.
- **Link the first mention** of a practice, capability, or resource on a page. Don't link every mention.
- **Books:** link to the publisher's or author's page. Use a retailer only when nothing else exists.
- **Prefer stable sources.** Link to the original article, paper, or talk rather than an aggregator or a repost.

## Abbreviations and Acronyms

- **Spell out on first use,** followed by the abbreviation in parentheses: "work in process (WIP)." Use the abbreviation after that. 
- **No need to spell out** widely known abbreviations: AI, API, CI, CD, CLI, CPU, HTML, HTTP, IDE, JSON, PR (after its first use on a page), SQL, UI, URL, UX.
- **Don't spell out acronyms in headings** unless the abbreviation is obscure. Spell it out in the first sentence after the heading instead.
- **No periods** in acronyms (AI, not `A.I.`).
- **Plurals** take a lowercase "s" with no apostrophe: "PRs," "APIs."

## Inclusive Language

Write so every reader feels the page was written for them.

- **Avoid gendered terms** where a neutral one exists: "staff" not "manpower," "intermediary" not "middleman," "they" for a person whose gender isn't known.
- **Avoid exclusionary technical terms:** "primary/replica" not "master/slave," "allowlist/denylist" not "whitelist/blacklist," "main" for the default branch.
- **Avoid violent language** where a calmer word works: "stop the process" rather than "kill it" in prose (command names like `kill` are fine in code).
- **Avoid ableist language:** "nonsensical" or "surprising" rather than "crazy" or "insane"; "placeholder" rather than "dummy."
- **Avoid "just," "simply," and "easy"** for things that may not be easy for the reader.
- **Use people-first language** unless a community prefers otherwise.

## AI-Assisted Writing

Pages may be drafted with AI help, including the `/draft-practice` and `/annotate-resource` skills. These rules apply to the result, however it was produced:

- **Anecdotes must be real.** Every story, client example, and "we've seen" claim must come from the author or a named source. A model must never invent one to fill a gap. If no real example exists, cut the bullet or section.
- **Claims must be sourced.** Statistics, research findings, and quotes need a link to where they came from.
- **Resource details must be verified.** Descriptions of a book, talk, or article must come from the resource itself or from someone who has read or watched it. See [Resources](#resources).
- **The author owns the result.** The author reviews every page before it's merged and is accountable for what it says.

## Formatting

### Markdown

- **No raw HTML,** including HTML comments, in published pages **(linted).** Template comments must be deleted before a page is merged.
- **No tabs,** no trailing whitespace, and a single newline at the end of the file **(linted).**
- **One H1 per page,** as the first line/title.
- **Tables** are fine for comparisons but are hard to read on phones. Keep them narrow.

### Emphasis and Code

- **Italics** for emphasis, for book and talk titles in running text, and for the first use of a term being defined.
- **Bold** for benefit titles and list lead-ins as the templates require. Don't use bold for general emphasis.
- **Inline code** for commands, file names, paths, configuration keys, and code identifiers: "run `npm test`," "edit `package.json`."
- **Code blocks** for anything longer than a line. Add the language after the opening fence (` ```bash `) so it highlights.
- **Product names** keep their official capitalization in plain text: GitHub, OpenTelemetry, macOS. Don't put them in inline code.
