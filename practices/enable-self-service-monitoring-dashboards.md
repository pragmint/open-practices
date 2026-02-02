# Enable Self-Service Monitoring Dashboards

Symptom-based alerting focuses on notifying teams when a user-facing problem occurs—such as increased error rates or high latency—rather than alerting on every underlying cause or component failure. By prioritizing symptoms over causes, teams can significantly reduce alert fatigue and focus their attention on the issues that directly impact customer experience. This approach acknowledges that complex systems often have "noise" or transient failures that do not require immediate human intervention if the system remains functional.

To implement this effectively, teams must transition to a self-service monitoring model. Developers should have the autonomy to define, create, and refine their own dashboards and alerting rules based on the evolving needs of their specific services. When teams own their telemetry, they are better equipped to distinguish between a "noisy neighbor" in the infrastructure and a genuine degradation in service quality, leading to faster troubleshooting and higher system reliability.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Symptom-based alerts are the practical application of a robust observability strategy, ensuring that telemetry data is actionable rather than overwhelming. By focusing on high-level symptoms, teams can use their monitoring tools to gain a clearer picture of overall system health and user impact.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)

This practice ensures that notifications are meaningful and timely, allowing teams to respond to failures before they escalate into major outages. By filtering out non-critical infrastructure fluctuations, the signal-to-noise ratio improves, making proactive responses more sustainable for the engineering team.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)

Providing self-service tools for monitoring allows teams to customize their alerting logic to fit their specific technical domain. When teams are empowered to manage their own dashboards, they can adapt more quickly to architectural changes and ensure their troubleshooting workflows remain efficient.

### [Well-being](/capabilities/well-being.md)

Reducing "alert storms" and false positives directly impacts the mental health and work-life balance of on-call engineers. Symptom-based alerting prevents burnout by ensuring that engineers are only paged for incidents that truly require human intervention to restore service to the customer.
