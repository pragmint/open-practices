# [Documentation Quality](https://dora.dev/capabilities/documentation-quality/)

_Documentation_ describes a range of internal decisions, processes, or policies. Software developers typically create and maintain documentation on technical design details, code changes, product requirements, common pitfalls in the tech stack, service interactions, and testing plans.

_Documentation quality_ refers to the accuracy, clarity, completeness, and accessibility of internal documentation. Excellent documentation enables teams to effectively collaborate, make informed decisions, and deliver high-quality software quickly and reliably.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Importance of Clear and Findable Documentation

It's not enough for documentation to exist; it must also be clear and findable. Clear and findable documentation is essential for effective knowledge sharing and collaboration within teams. Without it, teams may struggle to understand existing systems, leading to a decrease in development speed and reliability. Misleading documentation can be worse than missing documentation.

### Reliability and Maintenance of Documentation

Once documentation is created, the work is not done. Developers must make a deliberate effort to review and refine documentation regularly. The cadence for auditing documentation will look different for different teams. For some teams, reality becomes out of step with documentation every day. For other teams, reality becomes out of step with documentation every month. The goal is to ensure documentation remains reliable and accurate without spinning your wheels. With practice, teams can strike a balance between writing quick, low-level documentation that points people in the right direction and writing more abstract or complex documentation that's unlikely to change much over time.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Documentation Quality capability. Generally, score a 1 if Documentation Quality is minimal or completely lacking from your team or organization, a 2 if it is basic and you feel there is a lot of room for improvement, a 3 if it is good and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Documentation Quality.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Minimal:** The technical documentation is often outdated, incomplete, or inaccurate, making it difficult to rely on when working with the services or applications. It's hard to find what is needed, and others are often asked for help.
2. **Basic:** The technical documentation is somewhat reliable, but it's not always easy to find what is needed. Updates are sporadic, and multiple sources must be dug through to get the required information. In times of crisis, the documentation might be glanced at, but it's not always trusted.
3. **Good:** The technical documentation is generally reliable, and what is needed can usually be found with some effort. Updates are made regularly, but not always immediately. The documentation is used to help troubleshoot issues, but clarification from others might still be needed.
4. **Excellent:** The technical documentation is comprehensive, accurate, and up-to-date. What is needed can easily be found, and the documentation is relied on heavily when working with the services or applications. When issues arise, the documentation is confidently reached for to help troubleshoot and resolve problems.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and good Documentation Quality, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Documentation Quality; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Documentation Quality capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Introduce a Screen Recording Tool](/practices/introduce-a-screen-recording-tool.md)

A screen-recording tool supports documentation quality by capturing details that text often misses, such as workflows, edge cases, and intent behind decisions. Because creating a video is fast and easy, teams can add clear, high-value context to tickets without slowing down their work. As these recordings become a routine part of documentation, the overall accuracy and clarity of requirements improve, reducing misunderstandings and rework.

### [Use Documentation Auto-Generation Tooling](/practices/use-documentation-auto-generation-tooling.md)

Automate the creation of documentation using tools that generate comprehensive and up-to-date documentation directly from the source code or configuration files. This practice ensures that documentation stays in sync with the codebase, reducing the manual effort required to maintain it, and minimizing the risk of outdated or incomplete information. Tools like [Swagger](https://github.com/swagger-api) create executable documentation, while tools like [RepoAgent](https://github.com/OpenBMB/RepoAgent) use LLMs to automatically keep the documentation in sync as the codebase changes.

### [Implement an Enterprise Search Tool](/practices/implement-a-documentation-search-engine.md)

Implementing an enterprise search tool enables team members to quickly find relevant documentation, reducing the time spent searching for information and increasing productivity. For example, [Obsidian](https://obsidian.md/) links documents together, creating a map of related ideas. With [Notion](https://www.notion.so/), users can tag and filter documents for quick organizing and categorizing. And [Confluence](https://www.atlassian.com/software/confluence) gives teams secure, shared access to large volumes of organized documentation.

### [Schedule Regular Documentation Audits](/practices/schedule-regular-documentation-audits.md)

As systems and processes evolve, it's important to spend some time auditing your existing documentation to ensure it's accurate. Scheduling regular documentation audits ensures that documentation remains up-to-date and consistent with the codebase it describes. This practice better aligns documentation and software development, enhancing the overall quality and reliability of both the codebase and the supporting documents.

### Create Runbooks

Runbooks provide step-by-step guidance that helps teams resolve issues quickly and consistently, especially during high-stress or time-sensitive situations. They reduce the need to rely on tribal knowledge, make onboarding easier, and ensure continuity when team members are unavailable. A good runbook is concise, action-oriented, and regularly updated based on real-world usage.

### Introduce a Screen-Recording Tool

By enabling richer, more intuitive communication, screen recording helps teams document intent more clearly, reduce back-and-forth, and improve the efficiency of handoffs without requiring ticket authors to spend a lot of time writing. A lightweight screen-recording tool like [Loom](https://www.loom.com) allows ticket authors to quickly demonstrate the issue or desired behavior using voice and visuals, reducing ambiguity without adding process overhead. 

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Documentation Quality)
- Upstream (they are a pre-requisite for Documentation Quality)
- Downstream (Documentation Quality is a pre-requisite for them)

### [Code Maintainability](/capabilities/code-maintainability.md) - Related

Good documentation is critical for maintaining code quality, as it helps developers understand the codebase and make informed decisions about changes.

### [Learning Culture](/capabilities/learning-culture.md) - Upstream

If a culture of learning and knowledge sharing hasn't been established, high-quality documentation will not be actively created or maintained. This can lead to large gaps of documentation or worse, out-of-date or incorrect information.
