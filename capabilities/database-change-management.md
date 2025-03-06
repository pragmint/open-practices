# [Database Change Management](https://dora.dev/capabilities/database-change-management/)

The Database Change Management capability involves handling database updates with the same rigor as application code, using version control, automation, and collaboration. A team that is mature in this capability enjoys low-risk and zero-downtime deployments.

DBAs or specialized teams often manage databases. So, for application development teams looking to practice database change management, an effective strategy involves creating an automated self-service method for the team to apply changes and pulling in specialists when delicate or complicated changes need to be applied.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Risks With Shared Databases

When multiple systems rely on the same database, even small updates risk breaking functionality across applications. A single update may unintentionally break functionality across applications, causing disruptions and delays. Systems should be set up in such a way to minimize the number of applications that rely on a shared database. When that situation is unavoidable, teams should invest in techniques that reduce the cost of errors being introduced. This includes techniques like automated testing, version control, anomaly detection, and auto-rollbacks.

### Shaping DBA Involvement for Maximum Impact

DBAs are vital to database change management but often support multiple teams, limiting their support capacity. To reduce reliance on their time, implement automated self-service workflows with built-in guardrails for routine tasks. This allows DBAs to be pulled in for manual, complex, and performance-critical cases where their expertise is essential. In these cases, make sure to involve DBAs early in the process to catch smaller issues before they snowball into bigger ones.

### Integrated Validation

Database changes affect both data integrity and application behavior, requiring system-wide validation. To ensure reliability, create production-like testing environments, automate regression tests, and validate functional and performance outcomes. This holistic approach minimizes risks and uncovers hidden issues before deployment.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Database Change Management capability. Generally, score a 1 if database changes are manual and error-prone, a 2 if they are partially automated and you feel there is a lot of room for improvement, a 3 if they are mostly automated and you feel there is some room for improvement, and a 4 if they are fully automated and your team is exemplary in the area of Database Change Management.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. Manual and Error-Prone: Database changes are made manually, with a high risk of errors. Deployments are slow, sometimes taking hours to complete, and sometimes requiring downtime.
2. Partially Automated: Some database changes are automated, but many changes require manual intervention and/or testing to complete.
3. Mostly Automated: Most database changes are made using a fully automated process, with some manual review and/or testing. Changes are generally deployed quickly, taking minutes. Reliability is fairly good, with few failed changes.
4. Fully Automated and Zero-Downtime: All database changes are made using a fully automated process, with no manual intervention or approval required. Changes are deployed rapidly, taking seconds or minutes, and the process is highly reliable with zero downtime to dependent applications. When failures are introduced, they’re automatically and safely reverted.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think database changes in your team or organization are somewhere between partially automated and mostly automated, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Database Change Management; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Database Change Management capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Automate Database Migrations](/practices/automate-database-migrations.md)

Implementing automated database migrations ensures database schema changes are consistently applied. Typically, this practice works in concert with code changes, ensuring the whole system is integrated, tested, and deployed in a unified manner.

### Store Database Changes in Version Control

Keep all database schema changes as scripts in version control alongside application code. This practice ensures that changes are tracked, auditable, and integrated into automated deployment pipelines. It also allows teams to create production-like databases in their local environments.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing environments that can be spun up on-demand. These temporary environments reduce conflicts, promote early bug detection, and improve reproducibility. Integrated into CI/CD pipelines, they offer continuous and immediate feedback on code changes, whether those changes are made to the application, database, infrastructure, or some combination of the three.

### Follow the Parallel Change Pattern

When you rename a database column, you're breaking any applications that depend on the column having the original name. By following the parallel change pattern, you make these otherwise breaking changes in a phased approach that ensures no applications depend on the outdated schema by the time the outdated bits are removed. Implementing this technique allows teams to deploy database schema changes without disrupting any services, improving availability.

### Draft an Annual DBA-Dev Team Working Agreement

Every year, get each application development team together with the DBA team to cover each team's roadmap of changes. Then, help the teams draft a working agreement that outlines how and when the teams will collaborate with each other. Doing so will ensure DBAs are kept in the loop of big upcoming changes and application developers are getting the support they need from the DBA team.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Database Change Management)
- Upstream (they are a pre-requisite for Database Change Management)
- Downstream (Database Change Management is a pre-requisite for them)

### [Version Control](/capabilities/version-control.md) - Upstream

Version Control is fundamental to Database Change Management. Storing database changes in version control enables teams to effectively track, review, and coordinate the changes. It ensures that database modifications are synchronized with application code, facilitating consistent and reliable deployments.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery involves automating the release process to enable frequent and reliable deployments. With an effective Database Change Management capability in place, you can be assured that schema changes are versioned, tested, and deployed alongside application updates, reducing bottlenecks in the delivery pipeline. This directly supports the Continuous Delivery capability.

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Deployment automation minimizes manual steps during releases, reducing errors and speeding up the deployment process. A key aspect of automating deployment is automating database migrations. By automating database changes, teams ensure consistent and repeatable deployments across environments.
