# Enable Self-Service Monitoring Dashboards

In modern software environments, the speed of delivery often outpaces the ability of a centralized operations team to maintain relevant monitoring. When developers have to file tickets to see their own metrics, troubleshooting slows down and system visibility becomes a bottleneck. By enabling self-service monitoring dashboards, organizations empower individual teams to create, customize, and iterate on their own telemetry visualizations without gatekeepers.

This practice involves providing a standardized platform—such as Grafana, Datadog, or New Relic—where teams are granted the autonomy to define their own Service Level Indicators (SLIs) and visualize them in real-time. This ensures that the people closest to the code are also the ones defining what "healthy" looks like for their specific services. When a deployment occurs or an incident arises, the team has immediate access to the high-fidelity data they need to make informed decisions.

Furthermore, self-service monitoring fosters a culture of accountability and continuous improvement. As teams evolve their services, their monitoring needs change; a self-service model allows dashboards to be "living documents" that adapt alongside the architecture. This rapid feedback loop shortens the Mean Time to Repair (MTTR) and helps teams catch regressions before they impact the end user, ultimately leading to more resilient systems.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Symptom-based alerts are the practical application of a robust observability strategy, ensuring that telemetry data is actionable rather than overwhelming. By focusing on high-level symptoms, teams can use their monitoring tools to gain a clearer picture of overall system health and user impact.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)

This practice ensures that notifications are meaningful and timely, allowing teams to respond to failures before they escalate into major outages. By filtering out non-critical infrastructure fluctuations, the signal-to-noise ratio improves, making proactive responses more sustainable for the engineering team.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)

Providing self-service tools for monitoring allows teams to customize their alerting logic to fit their specific technical domain. When teams are empowered to manage their own dashboards, they can adapt more quickly to architectural changes and ensure their troubleshooting workflows remain efficient.

### [Well-being](/capabilities/well-being.md)

Reducing "alert storms" and false positives directly impacts the mental health and work-life balance of on-call engineers. Symptom-based alerting prevents burnout by ensuring that engineers are only paged for incidents that truly require human intervention to restore service to the customer.
