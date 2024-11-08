# [Documentation Quality](https://dora.dev/devops-capabilities/process/documentation-quality/)

_Documentation_ refers to written descriptions of internal decisions, processes, or policies. A team of software developers regularly creates and maintains documentation on a range of items, including technical design details, simple how-to cheat sheets, product requirements, pitfalls to be aware of in the tech stack, and testing plans. Whenever changes are made in code, it must be reflected in documentation. 

_Documentation quality_ refers to the accuracy, clarity, completeness, and accessibility of internal documentation. Excellent documentation enables teams to effectively collaborate, make informed decisions, and deliver high-quality software quickly and reliably. 

When documentation is outdated or out of sync with the codebase, incomplete, inaccurate, or hard to find, teams suffer. The lack of guidance impedes productivity, frustrates developers, and greatly increases the chances of errors. So, to produce internal documents with care and quality, it's essential to understand what makes for good, effective documentation. 

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.


### Documentation Must Be Clear and Accessible

Clear and accessible documentation is essential for effective knowledge sharing and collaboration within teams. Without it, teams may struggle to understand existing systems, leading to a decrease in development speed and reliability. Sometimes misleading documentation can be worse than missing documentation.

### Documentation Must Be Reliable and Maintained

Documentation must be actively maintained and updated to ensure it remains relevant, reliable, and accurate. This means that developers should make a deliberate effort to regularly review and refine documentation. 

## Assessment

To assess how mature your team or organization is in this capability, consider the four descriptions below. Which term most accurately describes the technical documentation quality in your team or organization today? 

1. **Minimal:** Documentation is often outdated, incomplete, or inaccurate. It is difficult to rely on when working with the services or applications. It's hard to find necessary guides, and team members are often called on for help.
2. **Basic:** Documentation is somewhat reliable, but it's not always easy to find. Updates are sporadic and multiple sources must be dug through to get to the required information. In times of crisis, the documentation might be glanced at, but it's not always trusted.
3. **Good:** Documentation is generally reliable and can usually be found with some effort. Updates are made regularly but not always immediately. The documentation is used to help troubleshoot issues, but clarification from others might still be needed.
4. **Excellent:** Documentation is comprehensive, accurate, and up-to-date. It is easy to find and heavily relied on when working with the services or applications. When issues arise, the documentation is a trustworthy guide for troubleshooting and resolving problems.

If you describe your documentation quality as "minimal" or "basic," then you'll probably gain a lot of value from experimenting with some of the supporting practices listed below. If you describe documentation quality as "good" or "excellent," then you and your team are largely proficient, or well on your way to becoming proficient, in the area of Documentation Quality; you would likely benefit from evaluating your scores in other capabilities.


## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Documentation Quality capability. While not every practice will be beneficial in every situation, they are meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.


### [Use Documentation Auto-Generation Tooling](/practices/use-documentation-auto-generation-tooling.md)

Automate the creation of documentation using tools that generate comprehensive and up-to-date documentation directly from the source code or configuration files. This practice ensures that documentation stays in sync with the codebase, reducing the manual effort required to maintain it, and minimizing the risk of outdated or incomplete information. Tools like [Swagger](https://github.com/swagger-api) create executable documentation, while tools like [RepoAgent](https://github.com/OpenBMB/RepoAgent) use LLMs to automatically keep the documentation in sync as the codebase changes.

### [Implement a Documentation Search Engine](/practices/implement-a-documentation-search-engine.md)

Implementing a documentation search engine enables team members to quickly find relevant documentation, reducing the time spent searching for information and increasing productivity.

### [Schedule Regular Documentation Audits](/practices/schedule-regular-documentation-audits.md)

Scheduling regular documentation audits ensures that documentation remains up-to-date, comprehensive, and accurate. As systems and processes evolve, it's important to spend some time auditing existing documentation to ensure it remains reliable.

## Adjacent Capabilities
The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Documentation Quality)
- Upstream (they are a pre-requisite for Documentation Quality)
- Downstream (Documentation Quality is a pre-requisite for them)

### [Continuous Integration](/capabilities/continuous-integration.md)

High-quality documentation is essential for effective continuous integration, as it enables teams to understand the existing systems and make informed decisions about changes.

### [Learning Culture](/capabilities/learning-culture.md)

A culture of learning and knowledge sharing relies heavily on high-quality documentation. Such careful documentation enables teams to learn from each other and build on existing knowledge.

### [Code Maintainability](/capabilities/code-maintainability.md)

Good documentation is critical for maintaining code quality, as it helps developers understand the codebase and make informed decisions about changes.
