# Enable Self-Service Monitoring Dashboards

A self-service monitoring dashboard is one that teams can access, explore, and evolve independently, without relying on a centralized operations or analytics group. Developers should be able to view and adjust visualizations on demand, with data kept up to date through automated refreshes, and with interaction limited to safe, predefined controls such as filters and parameters. Exploration happens in the dashboard itself—there is no need to export, reshape, or request special access to the underlying data.

In practice, this means providing a shared monitoring platform where teams have permission to create and modify their own dashboards without approval workflows or gatekeepers. Teams should not need to file tickets to add a graph, adjust a query, or refine a visualization. The expectation is that teams _own_ their dashboards in the same way they own their services: they define what matters, keep it relevant, and evolve it as the system changes.

By removing friction from access and iteration, self-service dashboards ensure that the people closest to the code also have the fastest path to understanding system behavior. When deployments occur or incidents arise, teams can immediately explore high-fidelity telemetry in ways that match their mental model of the system. Over time, these dashboards become living artifacts that reflect how the service actually operates, supporting faster diagnosis, better decision-making, and a healthier on-call experience.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Self-service dashboards are a practical expression of effective observability. When teams can freely explore metrics, logs, and traces through shared visualizations, telemetry becomes something they actively use to understand system behavior rather than a passive stream of data owned by another group.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)

Providing self-service tools for monitoring allows teams to customize their alerting logic to fit their specific technical domain. When teams are empowered to manage their own dashboards, they can adapt more quickly to architectural changes and ensure their troubleshooting workflows remain efficient.

### [Well-being](/capabilities/well-being.md)

Easy access to trustworthy dashboards reduces the stress and uncertainty that often accompany incidents and on-call work. When engineers can quickly answer their own questions without waiting on others, cognitive load drops and problem-solving becomes calmer, faster, and more sustainable over time.
