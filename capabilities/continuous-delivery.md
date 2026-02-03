# [Continuous Delivery](https://dora.dev/capabilities/continuous-delivery/)

Continuous Delivery, as a capability, is about delivering changes to a system continuously and safely. Breaking that down a bit further, Continuous Delivery means:

1. Systems are kept in a deployable state, even as changes are in an incomplete state.
2. It's clear if, when, and how a specific set of changes broke the system.
3. User-facing changes are released frequently.

Teams that are proficient in Continuous Delivery can deploy code to production in a low-risk manner during normal business hours without impacting users. By possessing this capability, organizations can respond swiftly to market demands, improve product quality, and gain a competitive advantage.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Risk and Continuous Delivery

A common first take of continuous delivery is to call it "risky." That's because there are real costs and risks involved when continuously deploying your existing systems. In order to get the value from continuous delivery while _de-risking_ the deployment process, ALL of the other DORA Capabilities have to be in place to some degree. For example, if a team attempts to deploy more frequently without first automating their test suite, they'll likely spend an inordinate amount of time manually verifying system correctness. A similar example could be created for any missing DORA Capability.

### Distinction From Continuous Deployment

Continuous delivery is often conflated with continuous deployment. While similar, continuous delivery has one extra facet to it: user-facing changes. A system could be deployed every week but if all user-facing changes sit behind feature flags or remain disconnected from live user flows, there isn't any business value to deploying the changes. The [Working in Small Batches](/capabilities/working-in-small-batches.md) capability dives into strategies for ensuring teams avoid "big bang" style releases, even if they're deploying frequently.

### Applicable to All Software Contexts

Continuous delivery is not limited to web services; it applies to all kinds of software, including mobile apps, firmware, and mainframe systems. This universality means that practices must be adapted to different software contexts, taking into account the specific constraints and requirements of various environments.

## Assessment

To assess how mature your team or organization is in this capability, complete this four-part exercise.

Consider the descriptions in the four areas of focus below: Value Delivery Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Services. Score yourself on each area. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team's lead time for changes is somewhere between weeks and days, then you would score a 2.5 for that area.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

### Value Delivery Frequency

1. Infrequent Updates: User-facing updates are delivered less than once per quarter, with long periods of time between releases. Deployments that are void of business value or are sitting behind feature flags are not considered user-facing.
2. Occasional Updates: User-facing updates are delivered quarterly or monthly.
3. Regular Updates: User-facing updates are delivered bi-weekly or weekly.
4. Continuous Updates: User-facing updates are delivered multiple times per week (sometimes even multiple times a day), with a fully automated process and minimal manual intervention.

### Lead Time for Changes

1. Months: Changes typically take multiple months to go from code commit to production.
2. Weeks: Changes typically take multiple weeks to go from code commit to production.
3. Days: Changes typically take multiple days to go from code commit to production.
4. Hours: Changes typically take hours or one day to go from code commit to production.

### Change Failure Rate

1. High Failure Rate: More than 15% of changes to production results in a degraded service and requires immediate remediation.
2. Moderate Failure Rate: Between 3-15% of changes to production results in a degraded service and requires immediate remediation.
3. Low Failure Rate: Less than 3% of changes to production results in a degraded service and requires immediate remediation.
4. Very Low Failure Rate: Less than 1% of changes to production results in a degraded service and requires immediate remediation.

### Time to Restore Service

1. Days: It typically takes multiple days to restore service after a change failure.
2. Hours: It typically takes multiple hours to restore service after a change failure.
3. Under An Hour: It typically takes somewhere between 10 and 60 minutes to restore service after a change failure.
4. A Couple Of Minutes: It typically takes under 10 minutes to restore service after a change failure.

Now, average your scores for all four areas of focus. You'll then have your overall score for this capability. So, if your score for Value Delivery Frequency was 2, your score for Lead Time Changes was 3, your score for Change Failure Rate was 1, and your score for Time to Restore Service was 1, then your overall score for Continuous Delivery would be 1.75.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Continuous Delivery; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Continuous Delivery capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Enforce a Clean Git History](/practices/clean-git-history.md)

Maintaining a clean Git history ensures a clear and comprehensible project history. Each commit should be concise and deployable. By making the revision history simple to understand and easy to traverse, the system becomes easier to deploy and less expensive to maintain. This practice facilitates better understanding, collaboration, troubleshooting, and rollbacks.

### [Automate Deployment Scripts](/practices/automate-deployment-scripts.md)

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions, reduce the risk of human error, and lessen deployment pain. A repeatable and reliable deployment process can then be triggered with minimal effort. This enhances not only deployment speed and consistency but also employee well-being.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a consistent testing strategy means providing a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software.

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks ensures continuous and immediate feedback on code changes within the CI pipeline. This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy. By maintaining realistic coverage thresholds for different modules, automating test coverage checks optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

## Adjacent Capabilities

Many of the other DORA Capabilities are pre-requisites for Continuous Delivery to be effective. If a team was to attempt Continuous Delivery without having those pre-requisites in a mature place, the risk of introducing costly errors into the system would inflate beyond the level that's acceptable for mature organizations. Those pre-requisite Capabilities include:

- [Code Maintainability](/capabilities/code-maintainability.md) ensures that the codebase is clean, modular, and easy to modify without introducing errors. This reduces risks by making changes less error-prone and easier to test, supporting more frequent and safer deployments.
- [Continuous Integration](/capabilities/continuous-integration.md) regularly integrates code changes to detect issues early and maintain a healthy codebase. Continuous integration reduces the risk of complex merge conflicts and ensures that errors are caught early, facilitating smoother deployments.
- [Database Change Management](/capabilities/database-change-management.md) manages and tracks changes to the database to maintain integrity and prevent disruptions. By ensuring database modifications are controlled and predictable, teams minimize downtime and reduce rollback risks during deployments.
- [Deployment Automation](/capabilities/deployment-automation.md) automates the release process to reduce manual errors and accelerate safe deployments. Automation ensures consistency and repeatability, significantly lowering the risk of human error in critical production releases.
- [Documentation Quality](/capabilities/documentation-quality.md) provides clear, up-to-date information that helps teams understand and safely change the system. With accurate documentation, teams can avoid misunderstandings and costly mistakes, thereby accelerating continuous delivery.
- [Flexible Infrastructure](/capabilities/flexible-infrastructure.md) offers scalable and adaptable environments that support rapid and reliable deployments. In particular, the self-service aspect of flexible infrastructure allows teams to automatically provision the necessary resources, reducing dependency on manual intervention and minimizing delays during deployment.
- [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md) encourages independent team operation with minimal dependencies, enhancing responsiveness. Such autonomy reduces bottlenecks and the risk of cascading failures across teams, thereby supporting smoother, continuous delivery.
- [Monitoring & Observability](/capabilities/monitoring-and-observability.md) delivers real-time insights into system performance, enabling fast detection and resolution of issues. Monitoring & observability reduces risks by allowing teams to inspect anomalies in detail, thus reducing downtime during releases.
- [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) verifies that each change delivered contributes to the expected business outcomes. Without robust monitoring, continuous delivery risks becoming an aimless process lacking clear, actionable insights.
- [Pervasive Security](/capabilities/pervasive-security.md) integrates security best practices into every stage of development to mitigate vulnerabilities. By embedding security controls throughout the delivery pipeline, teams reduce the risk of breaches and ensure safe, continuous updates.
- [Proactive Failure Notification](/capabilities/proactive-failure-notification.md) provides timely alerts on failures to facilitate rapid response and minimize downtime. Early warnings help teams address issues before they escalate, thereby reducing the risk and impact of deployment failures.
- [Streamline Change Approval](/capabilities/streamline-change-approval.md) simplifies the review and approval process, reducing delays and friction in deployments. By accelerating feedback loops and decision-making, teams minimize the time between identifying necessary changes and implementing them, thereby reducing risks and improving delivery velocity.
- [Test Automation](/capabilities/test-automation.md) ensures failures get flagged early in the development process and reduce the overhead associated with verifying correctness. Automated tests reduce the risk of introducing defects into production, enabling faster and safer continuous delivery.
- [Test Data Management](/capabilities/test-data-management.md) manages realistic and secure test data to improve the quality and reliability of testing environments. By providing reliable data for testing, teams reduce risks associated with inaccurate tests and support confident, continuous deployments.
- [Trunk-Based Development](/capabilities/trunk-based-development.md) promotes frequent merging into a shared mainline to minimize integration conflicts and enable faster feedback. This practice reduces risks by ensuring that changes are continuously validated in a shared context, enhancing overall system stability.
- [Work in Process Limits](/capabilities/work-in-process-limits.md) curtails concurrent tasks to help teams maintain focus and reduce complexity in changes. This constraint lowers the risk of integration conflicts and ensures that changes are well-managed and safe to deploy.
- [Working in Small Batches](/capabilities/working-in-small-batches.md) encourages breaking changes into smaller, manageable pieces to lower risk and ease troubleshooting. Smaller batches limit the scope of potential issues, making it easier to identify, isolate, and fix problems quickly during delivery cycles.
- [Version Control](/capabilities/version-control.md) provides robust management of code changes, supporting collaboration and traceability. Version control reduces risks by allowing teams to quickly revert problematic changes and trace the source of errors, essential for continuous delivery.
- [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) highlights bottlenecks and inefficiencies in the flow of work from idea to deployed in production. This clarity allows teams to solve for otherwise invisible problems in their deployment process, increasing speed and value of the deployments.
- [Visual Management](/capabilities/visual-management.md) uses visual tools and dashboards to enhance transparency and support informed decision-making. Visual insights allow teams to quickly identify risks and bottlenecks, ensuring that continuous delivery processes remain efficient and safe.
