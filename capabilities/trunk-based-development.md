# [Trunk-Based Development](https://dora.dev/capabilities/trunk-based-development/)

Trunk-based development is a version control strategy where developers work on short-lived branches, integrating small code changes into the main branch (trunk) frequently—often multiple times a day. This approach contrasts with the use of long-lived feature branches, which can lead to complex merges and integration challenges. By committing small, manageable batches of code regularly, teams minimize merge conflicts and maintain a more stable codebase.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Automated Testing Must Be Fast and Reliable

Trunk-based development relies on robust automated tests to keep the main branch stable. But tests must also be fast—slow suites create bottlenecks, delaying feedback and hurting productivity. Preferably, unit tests should run with a pre-commit hook to catch issues early, and all tests must run in the CI/CD pipeline to ensure integration stability. Teams should prioritize efficient, accurate tests to maintain smooth continuous integration without unnecessary firefighting.

### Lengthy Approval Processes Can Counteract the Benefits

If every small change requires a lengthy approval process, developers are likely to batch up changes, leading to larger, riskier merges. Changes can be reviewed synchronously by pair or mob programming or asynchronously at regular intervals in a way that doesn't block integration. For example, teams can start each day by reviewing all of the changes that were integrated at the start of each day to spot issues and align on the plan for the day.

### Long Lived Feature Flags

When teams are new to trunk-based development, they tend to reach for feature flags as a way to integrate their changes without risking their changes going live before they're ready. While that's generally good advice, this can become a problem if feature flags live for weeks at a time. One of the main benefits of trunk-based development is how it forces developers to break apart their tasks into small increments (see [Working in Small Batches](/capabilities/working-in-small-batches.md)). The longer code sits behind a feature flag, the larger the batch size becomes and the riskier it is to switch that feature flag on.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Trunk Based Development capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Run Pair Programming Sessions](/practices/run-pair-programming-sessions.md)

Pair programming can help teams maintain a high level of code quality and knowledge sharing, which is essential for trunk-based development. By working together, developers can catch issues early, share knowledge, and ensure that code is written in a way that is easy to understand and maintain. Additionally, pair programming can substitute for the code review process, avoiding a bottleneck in the chain of approval and making development more agile.

### [Clean Git History](/practices/clean-git-history.md)

The Clean Git History practice supports trunk-based development by encouraging small, focused commits that keep the main branch stable and releasable. By maintaining a clean, navigable commit history, teams minimize conflicts and simplify integration, which is essential for frequent merges. Additionally, the practice of ensuring each commit is deployable aligns with the trunk-based philosophy of keeping the codebase in a consistently shippable state, reducing risks and enabling faster delivery cycles.

### [Automated Coding Standards](/practices/automate-coding-standards.md)

Automated Coding Standards ensure consistent code quality, enabling frequent merges without delays. By automating style checks and basic quality validations, teams streamline code reviews and maintain a clean, deployable main branch. This supports the fast-paced workflow essential to trunk-based development.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

A consistent testing strategy supports Trunk-Based Development by balancing unit and integration tests to provide fast, reliable feedback. This reduces the risk of breaking the main branch, enabling frequent, smaller merges with confidence, and maintaining high development velocity.

### Use Feature Toggles to Integrate More Frequently

Teams can toggle features on or off, allowing them to separate deployment from release. This functionality allows changes to integrate safely even while development is ongoing. It also establishes the habit of splicing in small changes. Feature toggles are designed to be short-lived; avoid cluttering the codebase with long-term toggles by planning their removal once the feature has proven its value.

### Branch by Abstraction to Integrate More Frequently

Branch by Abstraction is a technique popularized by Martin Fowler which accomplishes a similar outcome as feature toggles. Teams typically prefer branch by abstraction when undertaking complex refactoring of legacy systems, extensive architectural changes, or replacing critical infrastructure where incremental transition is necessary. Feature toggles are meant to be short-lived, where the branch by abstraction pattern provides a path to permanently evolving the codebase without lingering conditional logic.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Trunk Based Development)
- Upstream (they are a pre-requisite for Trunk Based Development)
- Downstream (Trunk Based Development is a pre-requisite for them)

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Trunk-Based Development is a pre-requisite for Continuous Delivery because it enables small, frequent merges to the main branch, which reduces integration complexity and conflicts. Without the rapid feedback and stability provided by Trunk-Based Development, maintaining a reliable and efficient Continuous Delivery process would be challenging.

### [Database Change Management](/capabilities/database-change-management.md) - Upstream

Trunk-Based Development requires Database Change Management as it enables continuous integration and rapid rollbacks. By managing database changes effectively, teams can ensure that database updates align with frequent code changes, supporting quick deployments and the ability to revert changes when needed.

### [Working in Small Batches](/capabilities/working-in-small-batches.md) - Upstream

Working in Small Batches is a pre-requisite for Trunk-Based Development because it promotes frequent, incremental changes, reducing integration complexity and conflicts. By keeping changes small and manageable, teams can integrate continuously and receive rapid feedback. Without this practice, large, infrequent changes would lead to complicated merges and hinder the fast-paced collaboration required for Trunk-Based Development.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Test Automation is a pre-requisite for Continuous Integration because it provides rapid and reliable feedback on code changes, ensuring that integrations are smooth and defects are caught early. Without robust automated tests, CI pipelines would require more manual intervention, slowing down development cycles and increasing the risk of introducing bugs.

### [Streamline Change Approval](/capabilities/streamline-change-approval.md) - Upstream

Streamlined change approval processes reduce friction and delays, enabling teams to push changed directly to trunk frequently without being slowed down by bureaucratic approvals.

### [Version Control](/capabilities/version-control.md) - Upstream

Version control provides teams with the foundational tooling necessary to safely manage and integrate small batches of changes. Without effective version control, trunk-based development becomes difficult or impossible to sustain.
