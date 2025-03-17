# [Trunk-Based Development](https://dora.dev/capabilities/trunk-based-development/)

Trunk-based development is a version control strategy where developers work on short-lived branches, integrating small code changes into the main branch (trunk) frequently—often multiple times a day. This approach contrasts with the use of long-lived feature branches, which can lead to complex merges and integration challenges. By committing small, manageable batches of code regularly, teams minimize merge conflicts and maintain a more stable codebase.

Implementing trunk-based development is required for effective continuous integration (CI). CI involves combining trunk-based development with a suite of automated tests that run after each commit to ensure the system remains functional. This practice eliminates lengthy integration and stabilization phases, as frequent integration of small code batches promotes clear communication among developers and prevents the accumulation of large, complex merges. Developers are responsible for keeping the build process "green", they must promptly address any issues that arise during integration.

## Nuance

### Automated Testing Must Be Fast and Reliable

Trunk-based development relies on robust automated tests to keep the main branch stable. But tests must also be fast—slow suites create bottlenecks, delaying feedback and hurting productivity. Preferably, unit tests should run with a pre-commit hook to catch issues early, and all tests must run in the CI/CD pipeline to ensure integration stability. Teams should prioritize efficient, accurate tests to maintain smooth continuous integration without unnecessary firefighting.

### Strict Code Reviews Can Counteract the Benefits

Overly rigid code review processes that require multiple approvals can slow down development, negating the speed advantages of trunk-based development. If every small change requires lengthy review cycles, developers might batch up changes, leading to larger, riskier merges. Striking a balance between speed and quality through lightweight, synchronous, or just-in-time reviews can help maintain flow.

### Feature Flags Are Essential for Incomplete Work

Since trunk-based development discourages long-lived branches, teams need a way to deploy incomplete features safely. Feature flags allow developers to merge code early while keeping unfinished functionality hidden from users. However, mismanaging feature flags—such as forgetting to clean up old ones—can lead to technical debt and unnecessary complexity.

### Not All Teams Can Commit Multiple Times a Day

While trunk-based development encourages frequent commits, some teams—especially those working on large monolithic applications or regulated industries—may find it challenging to integrate multiple times daily. In such cases, enforcing this practice rigidly can lead to stress and reduced productivity. Instead, teams should focus on keeping integration as frequent as feasible while maintaining stability.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Trunk Based Development capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Run Pair Programming Sessions](/practices/run-pair-programming-sessions.md)

Pair programming can help teams maintain a high level of code quality and knowledge sharing, which is essential for trunk-based development. By working together, developers can catch issues early, share knowledge, and ensure that code is written in a way that is easy to understand and maintain. Additionally, pair programming can substitute for the code review process, avoiding a bottleneck in the chain of approval and making development more agile.

### [Clean Git History](/practices/clean-git-history.md)

The Clean Git History practice supports trunk-based development by encouraging small, focused commits that keep the main branch stable and releasable. By maintaining a clean, navigable commit history, teams minimize conflicts and simplify integration, which is essential for frequent merges. Additionally, the practice of ensuring each commit is deployable aligns with the trunk-based philosophy of keeping the codebase in a consistently shippable state, reducing risks and enabling faster delivery cycles.

### [Automated Coding Standards](/practices/automate-coding-standards.md)

Automated Coding Standards ensure consistent code quality, enabling frequent merges without delays. By automating style checks and basic quality validations, teams streamline code reviews and maintain a clean, deployable main branch. This supports the fast-paced workflow essential to trunk-based development.

### [Automate Database Migrations](/practices/automate-database-migrations.md)

Automated Database Migrations support Trunk-Based Development by enabling incremental schema changes with rapid rollbacks. This reduces the impact of errors, making teams more comfortable with fast commits and fewer approvals, thus encouraging continuous delivery.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

A consistent testing strategy supports Trunk-Based Development by balancing unit and integration tests to provide fast, reliable feedback. This reduces the risk of breaking the main branch, enabling frequent, smaller merges with confidence, and maintaining high development velocity.

### [Follow the Functional Core, Imperative Shell Pattern](/practices/follow-functional-core-imperative-shell.md)

Follow the Functional Core, Imperative Shell pattern supports Trunk-Based Development by making the functional core highly testable and reliable. With predictable, side-effect-free logic, unit tests provide fast feedback, enabling frequent, small merges with confidence. Meanwhile, the simpler imperative shell reduces integration complexity, minimizing merge conflicts and ensuring smoother continuous integration.

<!-- Include Implement feature flags when done -->

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Trunk Based Development)
- Upstream (they are a pre-requisite for Trunk Based Development)
- Downstream (Trunk Based Development is a pre-requisite for them)

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Upstream

Trunk-Based Development is a pre-requisite for Continuous Delivery because it enables small, frequent merges to the main branch, which reduces integration complexity and conflicts. Without the rapid feedback and stability provided by Trunk-Based Development, maintaining a reliable and efficient Continuous Delivery process would be challenging.

### [Database Change Management](/capabilities/database-change-management.md) - Upstream

Trunk-Based Development requires Database Change Management as it enables continuous integration and rapid rollbacks. By managing database changes effectively, teams can ensure that database updates align with frequent code changes, supporting quick deployments and the ability to revert changes when needed.

### [Working in Small Batches](/capabilities/working-in-small-batches.md) - Upstream

Working in Small Batches is a pre-requisite for Trunk-Based Development because it promotes frequent, incremental changes, reducing integration complexity and conflicts. By keeping changes small and manageable, teams can integrate continuously and receive rapid feedback. Without this practice, large, infrequent changes would lead to complicated merges and hinder the fast-paced collaboration required for Trunk-Based Development.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Test Automation is a pre-requisite for Continuous Integration because it provides rapid and reliable feedback on code changes, ensuring that integrations are smooth and defects are caught early. Without robust automated tests, CI pipelines would require more manual intervention, slowing down development cycles and increasing the risk of introducing bugs.