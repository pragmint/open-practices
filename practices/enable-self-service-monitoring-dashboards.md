# Enable Self-Service Monitoring Dashboards

A self-service monitoring dashboard is one that teams can access, explore, and evolve independently, without relying on a centralized operations or analytics group. Developers should be able to view and adjust visualizations on demand, with data kept up to date through automated refreshes, and with interaction limited to safe, pre-defined controls such as filters and parameters. Exploration happens in the dashboard itself—-there is no need to export, reshape, or request special access to the underlying data.

In practice, this means providing a shared monitoring platform where teams have permission to create and modify their own dashboards without approval workflows or gatekeepers. Teams should not need to file tickets to add a graph, adjust a query, or refine a visualization. The expectation is that teams _own_ their dashboards in the same way they own their services: They define what matters, keep it relevant, and evolve it as the system changes.

By removing friction from access and iteration, self-service dashboards ensure that the people closest to the code also have the fastest path to understanding system behavior. When deployments occur or incidents arise, teams can immediately explore high-fidelity telemetry in ways that match their mental model of the system. Over time, these dashboards become living artifacts that reflect how the service actually operates, supporting faster diagnosis, better decision-making, and a healthier on-call experience.

## When to Experiment

* You're a developer or QA who needs easier access to up-to-date information from Production to troubleshoot issues.
* You're an engineering leader with a focus on decreasing your team's mean time to recovery (MTTR).

## How to Gain Traction

### Do a Spike

#### Locate the Data Your Team Needs

Evaluate recent incidents your team has handled to determine what monitoring data was needed to resolve the incident. Find that data and document how your team can access the data with the current process.

#### Identify Data Security Concerns

Review the data for possible security concerns. If any sensitive data (e.g., PII, PCI, HIPPA) is in your list, consider how it could be replaced or obfuscated.

### Secure a Champion From Leadership

When providing access to potentially sensitive data -- especially when removing existing access controls -- executive sponsorship is essential.  The champion should be able to help address data access requirements to ensure the company maintains compliance with any relevant regulations.

## Lessons From The Field

*Expect Hesitation.* Modifying access controls (whether explicit or implicit) can be a major source of unease for anyone in charge of maintaining compliance requirements. Share your research from the spike about what data is actually needed for the team to work effectively.

*Start Small.* Choose a single team in which to give access to the dashboard. Document how having access to the data has improved their ability to recover from incidents.

## Deciding to Pitch or Polish

After experimenting with this practice for **2-3 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction.

### Fast & Measurable

**Faster Mean Time To Recover**. Developers should find and confirm root cause faster when they have direct access to the data. This can be tracked via incident timelines in postmortems or Jira/incident tooling.

### Fast & Intangible

**Increased Team Confidence When Troubleshooting**. With control over the dashboard and direct access to the data, the team should feel more confident when troubleshooting because they have the tools they need to do their job.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Self-service dashboards are a practical expression of effective observability. When teams can freely explore metrics, logs, and traces through shared visualizations, telemetry becomes something they actively use to understand system behavior rather than a passive stream of data owned by another group.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)

Providing self-service tools for monitoring allows teams to customize their alerting logic to fit their specific technical domain. When teams are empowered to manage their own dashboards, they can adapt more quickly to architectural changes and ensure their troubleshooting workflows remain efficient.

### [User-centric Focus](/capabilities/user-centric-focus.md)

Having easy access to monitoring data, and the ability to create the data visualizations relevant to their work, gives teams direct insight into the users' experience. This will allow them to develop empathy for the users and remind them to consider how each release will affect the users' experience of the application.

### [Well-being](/capabilities/well-being.md)

Easy access to trustworthy dashboards reduces the stress and uncertainty that often accompany incidents and on-call work. When engineers can quickly answer their own questions without waiting on others, cognitive load drops and problem solving becomes calmer, faster, and more sustainable over time.
