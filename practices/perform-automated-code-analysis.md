# Perform Automated Code Analysis

Catching every bug or style inconsistency by hand is tough and takes a lot of time. Automated code analysis brings speed and consistency to teams by delegating that task to tools. These tools (both traditional static analyzers and modern AI-powered assistants) can highlight security vulnerabilities, style discrepancies, dependency risks, and even suggest or apply fixes in real time.

Some popular tools for automated code analysis include:

- Static Analysis & Linting: [ESLint](https://eslint.org/docs/latest/use/getting-started), [SonarQube](https://github.com/SonarSource/sonarqube), and [Semgrep](https://github.com/semgrep/semgrep) can be used to enforce code quality
  - for TypeScript, try the [typescript-eslint](https://typescript-eslint.io) plugin
- Code Formatting: [Prettier](https://prettier.io/docs/integrating-with-linters) (TS/JS) and [rustfmt](https://github.com/rust-lang/rustfmt) (Rust) automatically enforce consistent code style
- Code Query Language: [GritQL](https://github.com/honeycombio/gritql), [CodeQL](https://codeql.github.com/), and [comby](https://github.com/comby-tools/comby) can search, lint, and modify code
- General Purpose AI Agents: [Claude Code](https://www.anthropic.com/claude), [Cursor](https://cursor.com/), and [Gemini-CLI](https://github.com/google-gemini/gemini-cli) are all general purpose AI-powered agents that can be used for code generation, review, style enforcement, and bug detection
- AI Powered Code Review: [Ellipsis](https://www.ellipsis.dev/), [GitHub Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review), [CodeRabbit](https://www.coderabbit.ai), and [Cursor Bugbot](https://cursor.com/bugbot) provide AI-assisted reviews and inline feedback
- Self-hosted LLMs: Tools like [Ollama](https://github.com/ollama/) or [LM Studio](https://github.com/lmstudio-ai) allow you to run open-source AI models locally which in turn can be used to power some open source agentic tools

## When to Experiment

- You are a developer who needs fast feedback on bugs, design issues, and inconsistencies so you can work more efficiently and avoid waiting for review cycles.
- You are a QA engineer and need to identify high-risk areas earlier so you can effectively focus your limited testing time.
- You are a tech lead or manager need to enforce consistent code quality across the team so we can deliver successful products without increasing review overhead.

## How to Gain Traction

### Incremental Adoption

Introducing linting/formatting tools to an existing codebase can result in large, sweeping changes, which can be hard to review, causing conflicts and delays. It is helpful to start with a more permissive configuration, gradually adding coverage and introducing more strict configurations. For example, ESLint has a [Typed-Linting](https://typescript-eslint.io/troubleshooting/typed-linting/) plugin that can be gradually applied.

Additionally, and especially with legacy systems, it can be helpful to gradually apply the linting rules to the codebase itself. Start with your core business logic and you can gradually expand the coverage over time.

### Start with Education & Demos

Begin with a 30-minute live session to align the team on what automated code analysis is, why it matters, and how it fits into their daily work. Share resources like [AI vs Rule-based Static Code Analysis by Kendrick Curtis](/resources/tech/ai-vs-rule-based-static-code-analysis.md) in advance, so team members can come prepared with questions. Close the session with a short demo in your actual codebase using one or multiple of the tools listed above to make the value real and immediate.

### Run a Pilot on a Single Repo

Choose one active repository and integrate one or two automated analysis tools (both a static analyzer and, optionally, an AI assistant). Measure how quickly developers address flagged issues and collect feedback.

### Optimize Rules and Initiate Feedback Loops

Start with default rules, then refine based on false positive rates and team feedback. Set up CI/CD hooks or pre-commit checks to keep quality gates lightweight but effective.

### Expand Across Teams

Assuming the pilot went well, gather the team to share results and best practices. Provide setup guides and starter configs so the practice may gain wider adoption across teams. Consider hosting internal workshops to help developers get the most from the tools.

## Lessons From The Field

- _Review Fatigue Kills Trust_ – When teams adopt static code analysis tools without tuning them, developers quickly become numb to the noise. Repeatedly flagging false positives or nitpicky issues creates [review fatigue](/resources/tech/where-ai-meets-code.md), a term coined by Michael Feathers to describe the erosion of attention and care during reviews due to cognitive overload. We’ve seen teams where high-friction rules led to engineers auto-dismissing feedback, eventually ignoring tools entirely. Curate rulesets with developer input and trim overly noisy alerts. Prioritize signal strength over volume to preserve trust and ensure these tools remain useful over time.

- _Combine AI Tools With Peer Review_ – Automation should complement, not replace, human review. AI-assisted tools like Claude Code can help developers catch bugs earlier, write cleaner code, and accelerate onboarding (especially for newer team members). However, these tools can occasionally propose flawed or overly confident fixes. Teams that encourage developers to use AI for pre-review, followed by intentional peer validation, tend to see the greatest gains. Treat AI and automation suggestions like junior developer input -- often helpful, but not always right. Peer review remains essential for catching edge cases, maintaining architectural integrity, and avoiding over-reliance on “green checks.”

- _Early Integration Reduces Friction_ – Teams that surface static code analysis results directly in the developer’s IDE tend to resolve issues faster and with less frustration. When feedback is delayed to CI or post-push review, issues are often skipped or rushed because the developer has already context-switched. By contrast, showing issues inline -- right when code is being written -- leads to higher-quality fixes and builds better habits over time. The sooner the feedback appears, the more likely it is to be acted on. Integrate tools into editors like VS Code or JetBrains, not just your CI, to reduce disruption and encourage learning.

- _Use the Right Tools for the Job_ – Not all static code analysis tools are equally effective across languages or tech stacks. Teams often adopt a single tool out of convenience, only to find it lacks precision in certain environments; this leads to false positives or missed issues. A better approach is to assess tools based on the codebase, language, and team needs, combining general-purpose and language-specific tools where appropriate. A lightweight multi-tool setup, tuned per language, often outperforms an all-in-one solution.

- _Avoid tyrannical metrics_ - Tools that calculate a numerical quality or complexity score are useful as a general compass, but reach a point of diminishing returns quickly and can even be detrimental to overall codebase cohesion if you start chasing perfect numbers.

## Deciding to Polish or Pitch

After experimenting with this practice for **4–5 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Fewer Review Findings**. Manual code reviews should flag fewer preventable issues because automated checks caught them earlier. Track this by tagging review comments or analyzing review insights in AI-powered code review tools.

**Pre-PR Issue Resolution**. Engineers should increasingly resolve issues before creating pull requests. IDE-integrated tools provide autofix or alert-resolution data you can measure monthly.

### Fast & Intangible

**Developer Sentiment**. Friction during code reviews should decline. Capture this via lightweight surveys ([Typeform](https://www.typeform.com/) or [Google Forms](https://workspace.google.com/products/forms/)), or retro feedback that points to reduced nitpicky debates and faster review cycles.

### Slow & Measurable

**Production Bug Reduction**. Over time, there should be fewer production incidents tied to preventable errors (null checks, insecure patterns, etc.). Track this by tagging incident postmortems, categorizing bugs in [Jira](https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/), [Linear](https://linear.app/docs/labels), or observability platforms like [Sentry](https://docs.sentry.io/product/issues/).

**Consistency & Maintainability**. Static analysis and linting scores should show steady improvement. Use [SonarQube dashboards](https://docs.sonarsource.com/sonarqube-server/10.6/user-guide/code-metrics/introduction/) or [Semgrep reports](https://semgrep.dev/docs/semgrep-ci/overview/) to track rule compliance trends and codebase quality.

## Supporting Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

Automated code analysis enforces consistent coding standards and identifies maintainability issues early, keeping the codebase clean, reliable, and easy to work with.

### [Pervasive Security](/capabilities/pervasive-security.md)

Static and AI-powered code analysis can surface vulnerabilities before code is merged, helping meet security and compliance requirements.

### [Job Satisfaction](/capabilities/job-satisfaction.md)

When developers get timely, contextual feedback inside their normal workflow, they stay in flow and feel more effective. DORA's findings link that sense of control and autonomy with higher job satisfaction.
