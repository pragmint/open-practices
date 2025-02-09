# Automate Coding Standards

Automate Coding Standards is a practice that uses automation tools to maintain high-quality code.
Standards and conventions are routinely enforced to ensure code is consistently formatted and in adherence to predefined quality metrics.
This practice improves code readability, reduces errors, and helps facilitate the code review process by catching issues early without human intervention. Automate Coding Standards is a proactive approach to code quality, making it easier for teams to manage large code bases and collaborate effectively.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your teams.

### Not a One-Size-Fits-All Approach
Tools that automate coding standards are highly configurable, allowing customization to fit specific project needs.
These tools do *not*, however, enforce a rigid, universal standard across all projects.
Team members should have the opportunity to suggest changes to the coding standards and those suggested changes should be discussed as a team.
Strict adherence to automated standards without flexibility can stifle creativity.
It's important to stike a balance where developers can maintain code quality while also enjoying the freedom to innovate.

### Tool Limitations
Automation tools have limitations. They may not catch every type of issue in code, particularly those related to complex logic or architecture.
Developers should be mindful of these limitations and not rely on these tools alone for ensuring code quality.

### Legacy Code Challenges
Incorporating automation tools into existing projects, especially large or legacy codebases, can be challenging.
Lint rules and code fixes must be introduced in an incremental way.

### Development Workflow Integration
Automation tools should be incorporated as part of the development process.
There are many ways to incorporate them: in build scrips, IDE/Editors, pre-commit, pre-push, during code review/pull requests, or the continuous integration (CI) pipeline.
The specific approach to incorporating automated coding standards as part of the development workflow will vary depending on team preferences and financial resources.

## Gaining Traction
The following actions will help your team implement this practice. 

### [Start a Book Club](/practices/start-a-book-club.md)

- [Automate Your Coding Standard](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_04)

This essay provides insights into the importance of automating coding standards to maintain code quality and consistency.
It highlights how automated tools can help enforce coding conventions, making the codebase more manageable and the development process more efficient.

- [One bite at a time](https://dev.to/christiankohler/one-bite-at-a-time-how-to-introduce-new-lint-rules-in-a-large-codebase-37ph)

This resource explores how to introduce new lint rules in a large legacy codebase.
It recommends a gradual approach, using auto-fix capabilities wherever possible and manually addressing other issues.
It also proposes secondary lint configuration for new rules, applied only to modified files via a pre-commit hook.

### [Do a Spike](/practices/do-a-spike.md)

Implement what you learned in the article [Automate Your Coding Standard](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_04) with a project or module of your codebase.

### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)
Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion.

* Are our automated coding standards tools customized to reflect our specific coding practices and project needs, or are we using a one-size-fits-all approach that's boxing us in?
* Do our team members understand the reasons behind certain coding standards and conventions?

## Supported Capabilities
This practice supports enhanced performance in the following capabilities.

### [Continuous Integration](https://dora.dev/devops-capabilities/technical/continuous-integration/)
The Automate Coding Standards practice improves continuous integration by ensuring that code committed to the repository adheres to predefined quality and style guidelines, facilitating smoother integration and fewer integration issues.

### [Code Maintainability](https://dora.dev/devops-capabilities/technical/code-maintainability/)
The Automate Coding Standards practice improves code maintainability because it enforces consistent coding standards across the codebase, making it easier to understand, modify, and extend the code over time.

### [Version Control](https://dora.dev/devops-capabilities/technical/version-control/)
Automating coding standards requires robust version control systems to track and manage the enforcement of standards over time, and to ensure that all code changes are compliant.

### [Streamlining change approval](https://dora.dev/devops-capabilities/process/streamlining-change-approval/)
Automating coding standards reduces the need for extensive manual code reviews and oversight for style and basic issues. Instead, during the review process, teams can focus on more critical aspects of code quality and functionality.
