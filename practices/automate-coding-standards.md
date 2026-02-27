# Automate Coding Standards

As a practice, Automate Coding Standards is about maintaining a high level of code quality through automation.
It involves using tools to enforce coding standards and conventions automatically, ensuring that code is consistently formatted and adheres to predefined quality metrics. The result is improved code readability, fewer errors, and a more efficient code review process that catches issues early and without human intervention. By taking a proactive approach to code quality, it becomes easier for teams to manage large code bases and collaborate effectively.

## When to Experiment
- You're ...
- You're ...

## How to Gain Traction

### Start a Book Club
- [Automate Your Coding Standard](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_04)
This resource provides insights into the importance of automating coding standards to maintain code quality and consistency.
It highlights how automated tools can help enforce coding conventions, making the codebase more manageable and the development process more efficient.

- [One bite at a time](https://dev.to/christiankohler/one-bite-at-a-time-how-to-introduce-new-lint-rules-in-a-large-codebase-37ph)
Inspired by the Boy Scout-reminiscent rule of "leave code better than you found it," this resource is about introducing new lint rules to a large legacy codebase. It recommends a gradual approach, using auto-fix capabilities wherever possible and manually addressing all other issues. The author also proposes secondary lint configuration for new rules, applied only to modified files via a pre-commit hook.

### Do a Spike
Implement what you learned in the article [Automate Your Coding Standard](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_04) with a project or module of your codebase.

### Host a Roundtable Discussion
You can use the following conversation prompts:

* Are our automated coding standards tools customized to reflect our specific coding practices and project needs? Or are we using a one-size-fits-all approach?
* Do team members understand the reasons behind certain coding rules?

## Lessons From The Field

- *Approaches will vary*. Automated coding standards are highly configurable, allowing customization to fit specific project needs. It's a misconception that these tools enforce a rigid, universal standard across all projects. Team members should have the opportunity to suggest changes to the coding standards, and those suggested changes should be discussed as a team. Strict adherence to automated standards without flexibility can stifle creativity. It's important to strike a balance between maintaining code quality and allowing developers the freedom to innovate.

- *Beware tool limitations*. Automated tools may not catch every type of issue, particularly those related to complex logic or architecture. Developers should be mindful of these limitations and not rely solely on these tools for ensuring code quality.

- *Expect legacy code challenges*. Incorporating automated coding standards tools into existing projects, especially large or legacy codebases, can be challenging. Lint rules and code fixes must be introduced in an incremental way.

- *Integrate the practice into the development workflow*. Automatic coding standards tools should be incorporated as part of the development process. There are many options to do this: build scrips, IDE/editors, pre-commit, pre-push, during code review/pull requests, or continuous integration (CI) pipeline. The specific approach to incorporate automatic coding standards as part of the development workflow will vary depending on team preferences and the cost of running the process.

## Deciding to Pitch or Polish
After experimenting with this practice for [**timeframe**], bring the team together to determine whether the following metrics and/or signals have changed in a positive direction.

### Fast & Intangible
- **Title of benefit**. 2-4 sentences about the benefit.

### Slow & Measurable
- **Title of benefit.** 2-4 sentences about the benefit.

## Supporting Capabilities

### [Continuous Integration](capabilities/continuous-integration.md)
The Automating Coding Standards practice improves continuous integration by ensuring that code committed to the repository adheres to predefined quality and style guidelines, facilitating smoother integration with fewer issues.

### [Code Maintainability](capabilities/code-maintainability.md)
This practice improves code maintainability by enforcing consistent coding standards across the codebase, making it easier to understand, modify, and extend the code over time.

### [Version Control](capabilities/version-control.md)
The practice of Automated Coding Standards requires robust version control systems to track and manage the enforcement of coding standards over time, ensuring that all code changes are compliant.

### [Streamlining Change Approval](capabilities/streamline-change-approval.md)
Automation reduces the need for extensive manual code reviews and oversight for style and basic issues, allowing teams to focus on more critical aspects of code quality and functionality during the review process.
