# Open Practices Word List

This is the house word list for the Open Practices repository. It records spelling, capitalization, and hyphenation decisions so every page reads the same way. When this list and the [style guide](styleguide.md) disagree, this list wins for the specific term.

For anything not listed here, follow first *The Chicago Manual of Style, 18th edition*, then follow *Merriam-Webster's Collegiate Dictionary*.

## How This List Is Used

The repository linter (`tools/`) reads the tables in this file. For every row with a term in the "Don't use" column, it warns when that term appears in prose (code, inline code, and URLs are skipped). Matching ignores case, so a row whose "Use" and "Don't use" terms differ only in capitalization enforces that capitalization.

Rows with an empty "Don't use" column are guidance only. The copy-edit pass applies them, but the linter can't, usually because the right form depends on how the word is used in the sentence.

To add an entry:

- Put it in the right letter section, in alphabetical order.
- Wrap every term in backticks. Separate multiple terms in one cell with commas outside the backticks: `` `post-mortem`, `post mortem` ``.
- Keep notes short. Say when the rule applies, not why the alternative is wrong.

## A

| Use | Don't use | Notes |
|---|---|---|
| `ad hoc` | `ad-hoc` | Two words, no hyphen, as noun and adjective |
| `AI` | `A.I.` | No need to spell out |

## B

| Use | Don't use | Notes |
|---|---|---|
| `backend` | `back-end`, `back end` | One word as noun and adjective |

## C

| Use | Don't use | Notes |
|---|---|---|
| capability names | | Capitalize a capability's name when referring to it as a capability: "the Code Maintainability capability." Lowercase the same words used generically: "code that is easy to maintain" |
| `CI/CD pipeline` | `CD/CI pipeline` | CI before CD |
| `codebase` | `code base`, `code-base` | |
| `cross-functional` | `cross functional` | |

## D

| Use | Don't use | Notes |
|---|---|---|
| `dataset` | `data set` | |
| decision making, decision maker | | Two words as a noun: "slows down decision making" |
| decision-making | | Hyphenated as an adjective: "decision-making processes" |
| `DevOps` | `Devops`, `devops` | Lowercase is fine inside URLs and file names |
| `double-loop learning` | `double loop learning` | |

## E

| Use | Don't use | Notes |
|---|---|---|
| `email` | `e-mail` | |
| e.g., i.e. | | Always followed by a comma. Use them only inside parentheses; in running text, write "for example" or "that is" |
| end-to-end | | Hyphenated as an adjective ("end-to-end tests"); open as an adverb ("test the flow end to end") |

## F

| Use | Don't use | Notes |
|---|---|---|
| `frontend` | `front-end`, `front end` | One word as noun and adjective |
| `Functional Core, Imperative Shell` | `Functional Core Imperative Shell`, `functional core, imperative shell` | Capitalized, with the comma, when naming the pattern or practice |

## G

| Use | Don't use | Notes |
|---|---|---|
| `GitHub` | `Github` | |
| `guardrails` | `guard rails`, `guard-rails` | |

## I

| Use | Don't use | Notes |
|---|---|---|
| `I/O` | `IO` | |
| infrastructure as code, infrastructure-as-code | | Open as a noun ("adopt infrastructure as code"); hyphenated as an adjective ("infrastructure-as-code tools"). Spell out on first use and add (IaC) if the abbreviation is used later |

## K

| Use | Don't use | Notes |
|---|---|---|
| `kanban board` | `Kanban board` | Lowercase "kanban" in running text |

## L

| Use | Don't use | Notes |
|---|---|---|
| log in, login | | "Log in" is the verb; "login" is the noun or adjective |

## M

| Use | Don't use | Notes |
|---|---|---|
| `microservice`, `microservices` | `micro-service`, `micro-services`, `micro service` | |
| `monorepo` | `mono-repo`, `mono repo` | |

## O

| Use | Don't use | Notes |
|---|---|---|
| `on-call` | `on call` | Hyphenated as an adjective and noun ("the on-call engineer," "join the on-call rotation") |
| open source, open-source | | Open as a noun; hyphenated as an adjective ("open-source tools") |
| `OpenTelemetry` | `Open Telemetry`, `Opentelemetry` | Spell out on first use; "OTel" is fine afterward |

## P

| Use | Don't use | Notes |
|---|---|---|
| `postmortem` | `post-mortem`, `post mortem` | One word as noun and adjective |
| `problem-solving` | `problem solving` | Hyphenated as both noun and adjective |
| pull request (PR) | | Spell out on first use; "PR" is fine afterward |

## R

| Use | Don't use | Notes |
|---|---|---|
| real time, real-time | | Open as a noun ("in real time"); hyphenated as an adjective ("real-time alerts") |
| roll back, rollback | | "Roll back" is the verb; "rollback" is the noun or adjective |
| roll out, rollout | | "Roll out" is the verb; "rollout" is the noun |
| `runtime` | `run-time`, `run time` | |

## S

| Use | Don't use | Notes |
|---|---|---|
| set up, setup | | "Set up" is the verb; "setup" is the noun or adjective |
| `standup` | `stand-up` | The meeting. One word as noun and adjective |

## T

| Use | Don't use | Notes |
|---|---|---|
| `teammate` | `team-mate` | |
| `test-driven development` | `test driven development` | Spell out on first use; "TDD" is fine afterward |
| `timeframe` | `time frame` | |
| `trunk-based development` | `trunk based development`, `Trunk Based Development` | Capitalize "Trunk" only in the capability title ("Trunk-based Development"); the "b" stays lowercase |

## U

| Use | Don't use | Notes |
|---|---|---|
| `use` | `utilize`, `utilise` | |

## V

| Use | Don't use | Notes |
|---|---|---|
| `version control` | `version control system`, `version control systems` | The category of software that helps people manage changes to code. Use "version control" wherever possible |
| vs. | | "vs." is fine in headings and section titles; it doesn't need to be spelled out as "versus" |

## W

| Use | Don't use | Notes |
|---|---|---|
| `well-being` | `wellbeing`, `well being` | Capitalize "Well" only in the capability title ("Well-being"); the "b" stays lowercase |
| `work in process`, `WIP` | `work in progress` | When referring to WIP limits, follow the DORA capability name ("Work in process limits"); do not hyphenate |
| `workstation` | `work station` | |
