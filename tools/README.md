# Open Practice Repository Tooling

This folder holds tooling that keeps the repository consistent. Today that's a Markdown linter that checks formatting, page structure, links, and the house style in [copy-guidelines/](/copy-guidelines/). The authoring skills in `.claude/skills/` run it at several points while drafting.

## Running

Install dependencies once from this directory:

```bash
bun install
```

Then run the linter from this directory or from the repository root:

```bash
bun index.ts                                  # lint every capability, practice, and resource
bun index.ts ../practices/refactor.md         # lint specific files
bun index.ts --fix ../practices/refactor.md   # apply safe fixes in place, then lint
bun index.ts --json ../practices/refactor.md  # machine-readable output
bun test                                      # run the rule tests
```

| Option | What it does |
|---|---|
| `<paths...>` | Lint only these files. Paths are relative to where you run the command. With no paths, lints the whole repository. |
| `--fix` | Applies safe, mechanical fixes to the named files before linting: straight quotes, trailing whitespace, dash list markers, a blank line after headings, and a final newline. Requires file paths. |
| `--json` | Prints problems as a JSON array of `{ file, line, column, ruleId, level, message }`. |
| `--type <practice\|resource\|capability>` | Treat every file as this page type. Without it, the type comes from the folder (`practices/`, `resources/`, `capabilities/`) or from a skill run folder (`.tmp/practice-<slug>/`, `.tmp/resource-<slug>/`). |
| `-q`, `--quickFix` | Prints one line per problem in `file:line:column` form for editors. |

The command exits with `1` when any **error** is found. **Warnings** are printed but don't fail the run, because they need a person (or the `/copy-edit` skill) to decide.

## Rules

| Rule | Level | Checks |
|---|---|---|
| `new-line-after-headings` | error | A blank line follows every heading |
| `no-trailing-white-space` | error | No whitespace at the end of a line |
| `straight-quotes` | error | No curly quotes or apostrophes |
| `internal-links-resolve` | error | Links to `/practices/...`, `/capabilities/...`, and other repository files point at files that exist |
| `capability-links` | error | Each "Supporting Capabilities" heading in a practice links to an existing capability page |
| `practice-structure` | error / warning | Practices follow [templates/new-practice.md](/templates/new-practice.md): section order, the Polish or Pitch sentence and quadrants, and section sizes. Pages in the older format get a single warning. |
| `resource-structure` | error / warning | Resources start with a title, a `Resource type:` line, and a link |
| `no-em-dash` | warning | No em dashes; restructure the sentence instead |
| `heading-case` | warning | H1 to H3 headings use AP-style title case |
| `word-list` | warning | Terms from the "Don't use" column of [copy-guidelines/words.md](/copy-guidelines/words.md) |
| remark rules | error | Final newline, no tabs, list indentation, `-` list markers, no HTML (including comments) |

The `word-list` rule reads the tables in `words.md` every time it runs, so adding a row there is all it takes to enforce a new term.

## Contributing

There are two ways you can contribute a new rule.

First, add rules from the [list of remark-lint rules](https://github.com/remarkjs/remark-lint/tree/main?tab=readme-ov-file#rules) to the `RemarkRules` constructor.

Second, duplicate an existing rule in the `tools/rules/normal` folder and replace its logic with your own. Rules that need the Markdown syntax tree can use the helpers in `src/markdown.ts`. Fixed template strings live in `src/templates.ts`; update them when a template changes. Add a `*.test.ts` file next to the rule.

Giving AI one rule and asking it to make a new rule for you based on that example is a decent way to generate new rules if you're not satisfied with what's available.
