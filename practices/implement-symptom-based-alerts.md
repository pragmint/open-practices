# Implement Symptom-Based Alerts

Traditional monitoring often focuses on specific causes, triggering alerts based on infrastructure metrics like high CPU usage or memory consumption. While these metrics are useful for debugging, they are often poor indicators of actual service health; a server running at high utilization might still be serving requests perfectly. Implementing symptom-based alerts shifts the focus to observable symptoms that directly impact (or lead to directly impacting) the user, such as latency, error rates, and traffic volume.

By focusing on symptoms, teams ensure that alerts are tied to the user experience rather than internal anomalies. This distinction is critical for reducing alert fatigue. When engineers are paged only for issues that degrade the customer experience, trust in the monitoring system increases. This approach filters out low-risk, self-healing, or purely internal fluctuations that do not require immediate human intervention.

Ultimately, this practice streamlines incident response and improves the Mean Time to Restore (MTTR). When an alert fires, the team knows immediately that a critical, user-facing issue is occurring, eliminating the guesswork associated with noisy, cause-based data. This alignment prioritizes resources on incidents that matter most, protecting both the customer's satisfaction and the engineering team's cognitive load.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Symptom-based alerting is a specific implementation strategy that matures a team's observability practice. It moves the focus from simple "up/down" checks or raw infrastructure metrics to high-fidelity signals that represent the true health of the system.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)

This practice ensures that notifications are actionable and timely by triggering only when the system behaves in a way that will affect or currently affects the user experience. It prevents the team from becoming desensitized to alerts, ensuring that when a notification is sent, it acts as a genuine call to action for a service interruption.

### [User-Centric Focus](/capabilities/user-centric-focus.md)

By aligning alerting thresholds with user pain points—such as slow page loads or failed transactions—teams prioritize the customer experience over internal system elegance. This ensures that operational efforts are always expended on maintaining value for the end user.

### [Well-Being](/capabilities/well-being.md)

A major contributor to burnout is "alert fatigue," caused by constant, non-actionable interruptions during on-call shifts. By filtering out noise and alerting only on genuine symptoms, this practice protects the work-life balance and mental focus of the engineering team.
