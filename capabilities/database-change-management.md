# [Database Change Management](https://dora.dev/capabilities/database-change-management/)

Database change management involves handling database updates with the same rigor as application code, using version control, automation, and collaboration to ensure low-risk and zero-downtime deployments. Oftentimes, DBAs or specialized teams manage databases. Effective database change managements strategies involve creating a self-service way to apply changes for application development teams, paired with established and effective collaboration patterns to pull in specialists when delicate or complicated changes need to be applied.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Shared Databases

When multiple systems rely on the same database, even small updates risk breaking functionality across applications. A single update may unintentionally break functionality across applications, causing disruptions and delays. Systems should try to minimize the number of applications that rely on a shared database. When that situation is unavoidable, teams should invest in tooling that reduces the cost of errors being introduced: automated testing, version control, anomaly detection, auto-rollbacks, etc.

### Shaping DBA Involvement for Maximum Impact

DBAs are vital to database change management but often support multiple teams, limiting their capacity to manage every detail. To reduce reliance on their time, implement self-service workflows with built-in guardrails for routine tasks. This allows DBAs to focus on complex, performance-critical cases where their expertise is essential - in which case, make sure to involve DBAs early in the process to catch issues before they snowball into bigger ones.

### Integrated Nature of Correctness Verification

Database changes affect both data integrity and application behavior, requiring system-wide validation. To ensure reliability, create production-like testing environments, automate regression tests, and validate functional and performance outcomes. This holistic approach minimizes risks and uncovers hidden issues before deployment.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Learning Culture capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Store Database Changes in Version Control

Keep all database schema changes as scripts in version control alongside application code. This practice ensures that changes are tracked, auditable, and can be integrated into automated deployment pipelines. It also allows teams to create production-like databases in their local environments.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing environments that can be spun up on-demand. These temporary environments create a safe place to deploy and test changes in an integrated environment. The changes that need testing can be to either the application, database, infrastructure, or some combination of the three. Integrated into CI/CD pipelines, they offer continuous, immediate feedback on code changes, allowing developers to find bugs early in the process.

### Follow the Parallel Change Pattern

When you rename a database column, you're breaking any applications that depend on the column having the original name. By following the parallel change pattern, you make these otherwise breaking changes in a phased approach that ensures no applications depend on the outdated schema by the time the outdated bits are removed. Implementing this technique allows teams to deploy database schema changes without disrupting any services, improving availability.

### Draft an Annual DBA-Dev Team Working Agreement

Every year, get each application development team together with the DBA team to cover each team's roadmap of changes. Then have the teams draft a working agreement that outlines how/when the teams will collaborate with each other. Doing so will ensure DBAs are kept in the loop of big upcoming changes and ensures application developers are getting the support they need from their DBA team.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Database Change Management)
- Upstream (they are a pre-requisite for Database Change Management)
- Downstream (Database Change Management is a pre-requisite for them)

### [Version Control](/capabilities/version-control.md) - Upstream

Version Control is fundamental to Database Change Management, as storing database changes in version control enables teams to track, review, and coordinate changes effectively. It ensures that database modifications are synchronized with application code, facilitating consistent and reliable deployments.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery involves automating the release process to enable frequent and reliable deployments. Effective Database Change Management supports Continuous Delivery by ensuring that schema changes are versioned, tested, and deployed alongside application updates, reducing bottlenecks in the delivery pipeline.

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Deployment Automation minimizes manual steps during releases, reducing errors and speeding up the deployment process. Automating database migrations is a key aspect of Deployment Automation. By automating database changes, teams ensure consistent and repeatable deployments across environments.
