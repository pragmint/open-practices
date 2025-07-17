# [Continuous Integration](https://dora.dev/capabilities/continuous-integration/)

Continuous Integration (CI) is a development practice where developers integrate code changes into the main branch regularly, ideally several times a day. Each integration triggers an automated build and series of tests to detect errors quickly, ensuring the software remains in a deployable state. The primary benefit of CI is fast feedback on stability and integration concerns.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Large Changes

One of the common pitfalls is that developers often delay merging changes into the main branch, resulting in longer-lived branches that are harder to integrate. This leads to complex merges, increased conflicts, and longer feedback loops, undermining the effectiveness of CI.

### Slow or Unreliable Checks

If automated tests and other checks take too long to run, developers may skip running them or fail to integrate frequently, which increases the risk of issues going undetected. Ideally, all CI checks should run in under 90 seconds to ensure quick feedback and maintain developer engagement with the CI process.

### Infrastructure and Environment Issues

CI systems can become unreliable due to infrastructure problems, such as resource constraints, network issues, or environment inconsistencies between local development and CI environments. When builds fail due to infrastructure or environment reasons rather than code issues, developers lose trust in the CI process and may start ignoring build failures, undermining the entire CI practice.

### Integration Blockers and Bottlenecks

Mandatory code reviews, approval processes, or other integration blockers can create bottlenecks that prevent developers from integrating frequently. When code sits in review queues for extended periods, it increases the risk of merge conflicts and reduces the benefits of CI. Additionally, if the review process is too rigid or slow, developers may batch larger changes to minimize the overhead, which contradicts the core principle of frequent, small integrations.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Continuous Integration capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Run Automated Tests During Build Process

Automatically execute unit tests, integration tests, and other automated tests as part of the CI build process. This ensures that every code change is validated against the existing test suite, catching regressions early and maintaining code quality. The tests should run quickly and provide clear feedback on what failed and why.

### Run Linter in Pre-Commit Hook

Configure linting tools to run automatically before code is committed to version control. This catches code style violations, potential bugs, and basic security issues early in the development process, preventing these issues from reaching the main branch and reducing the burden on the CI pipeline.

### Run CVD and CWE Checks During Build Process

Integrate Common Vulnerabilities and Exposures (CVE) and Common Weakness Enumeration (CWE) scanning into the CI build process. This helps identify known security vulnerabilities in dependencies and common coding weaknesses that could lead to security issues, ensuring security is built into the development process from the start.

### Parallelize Long-Running Tests

If the test suite takes too long to run, divide it into smaller, parallelized tests that can be executed simultaneously. This reduces the time required for CI builds, improving feedback speed and encouraging frequent integrations.

### Treat Broken Builds Like Outages

Establish a rule that when the CI build breaks, it takes precedence over other work. This practice ensures a consistently stable main branch, builds trust in the CI process, and prevents technical debt from accumulating.

### Perform Non-Integration Blocking Code Review

Implement code review processes that provide feedback and learning opportunities without blocking the integration of changes into the main branch. This allows teams to maintain the benefits of peer review while preserving the rapid feedback cycles that make CI effective. Practices like pair programming, mob programming, or daily group code review sessions can provide continuous feedback and knowledge sharing without creating integration bottlenecks.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Ephemeral environments are isolated, production-like spaces that can be spun up on demand. Each environment starts with a clean state. Teams can generate, load, and reset data without affecting others. This reduces test flakiness, ensures consistent results, and supports more accurate debugging. When integrated into CI/CD pipelines, ephemeral environments give teams fast, reliable feedback across app, data, and infrastructure changes.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Continuous Integration)
- Upstream (they are a pre-requisite for Continuous Integration)
- Downstream (Continuous Integration is a pre-requisite for them)

### [Trunk-Based Development](/capabilities/trunk-based-development.md) - Related

Trunk-based development is closely tied to CI, as it encourages small, frequent merges into the mainline branch, minimizing integration challenges. It ensures faster feedback loops and reduces the likelihood of long-lived branches, supporting a more effective CI process.

### [Test Data Management](/capabilities/test-data-management.md) - Upstream

Effective test data management ensures that CI builds have access to consistent, reliable test data that accurately represents production scenarios. This includes creating, maintaining, and versioning test datasets, as well as managing data privacy and security requirements across different testing environments.

### [Streamline Change Approval](/capabilities/streamline-change-approval.md) - Upstream

Streamlining change approval processes reduces bottlenecks that can prevent frequent integration. This involves automating approval workflows where possible, setting clear criteria for when approvals are needed, and ensuring that approval processes don't become barriers to the rapid feedback that CI provides.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Test automation is essential for CI, as it provides rapid feedback on code changes. A comprehensive suite of automated tests is necessary to catch regression bugs quickly and maintain the integrity of the codebase during integration.

### [Pervasive Security](/capabilities/pervasive-security.md) - Downstream

Continuous Integration lays the groundwork for scalable, pervasive security by automating builds and tests. It enables teams to embed security scans, vulnerability checks, and tests directly into the development workflow, making security a built-in part of the process.

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Deployment automation complements CI by enabling automatic, seamless deployment of builds to different environments. This allows teams to deploy changes more frequently, further reinforcing CI's benefits of rapid feedback and software stability.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery builds upon CI by automating the entire release process, from code commit to production deployment. It ensures that every change that passes CI is automatically prepared for release, reducing manual intervention and enabling faster, more reliable deployments.

### [Working In Small Batches](/capabilities/working-in-small-batches.md) - Upstream

Working in small batches supports CI by making changes easier to integrate, test, and debug. Smaller changes reduce the complexity of merges, decrease the likelihood of conflicts, and enable faster feedback cycles, all of which are essential for effective CI.

### [Version Control](/capabilities/version-control.md) - Upstream

Version control is fundamental to CI, providing the infrastructure for tracking changes, managing branches, and enabling collaborative development. Effective version control practices, such as clear commit messages, proper branching strategies, and conflict resolution processes, are essential for maintaining a healthy CI workflow.
