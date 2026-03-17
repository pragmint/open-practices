# Implement Symptom-based Alerts

Traditional monitoring often focuses on specific causes, triggering alerts based on infrastructure metrics like high CPU usage or memory consumption. While these metrics are useful for debugging, they're often poor indicators of actual service health; a server running at high utilization might still be serving requests perfectly. Implementing symptom-based alerts shifts the focus to observable symptoms that directly impact (or lead to directly impacting) the user, such as latency, error rates, and traffic volume.

By focusing on symptoms instead of metrics, teams ensure that alerts are tied to the user experience rather than internal anomalies. This distinction is critical for reducing alert fatigue. When engineers are paged only for issues that degrade the customer experience, trust in the monitoring system increases. This approach filters out low-risk, self-healing, or purely internal fluctuations that do not require immediate human intervention.

Ultimately, this practice streamlines incident response and improves the Mean Time to Restore (MTTR). When an alert fires, the team knows immediately that a critical, user-facing issue is occurring, eliminating the guesswork associated with noisy, cause-based data. This alignment prioritizes resources on incidents that matter most, protecting both the customer's satisfaction and the engineering team's cognitive load.

## When to Experiment

* You're an SRE or devops engineer who is overwhelmed by alerts that don't require immediate fixes.
* You're an engineering leader and your team cannot distinguish between urgent incident alerts and expected, information system alerts.
* You're an engineering leader and you have monitoring implemented, but you don't have any automated alerts.

## How to Gain Traction

### Host a Roundtable Discussion
You can use the following conversation prompts:

- What existing alerts are consistently actionable and clearly communicate the symptom being observed?
- Brainstorm symptoms that would clearly show a degraded user experience.
- Rank those symptoms from highest impact on user experience to lowest impact.
- Which symptoms are readily available with the current monitoring & observability data?
- What needs to be added to the monitoring & observability tooling to notify team members of the other symptoms?

## Lessons From The Field
*Prioritize High-impact or Leading Symptoms.* When migrating to alerting on symptoms, one goal is to reduce the alerting noise. Focusing on alerting on the earliest symptoms that indicate a significant impact to user experience reduces less critical alerts.

*Choose Alert Recipients Carefully.* When alerts are based on symptoms, they inherently have a context where they are relevant. Send alerts to the teams that are responsible and equipped to respond. Sending alerts to individuals that cannot respond increases alert fatigue.

## Deciding to Pitch or Polish
After experimenting with this practice for **2-3 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction.

### Fast & Measurable

**Higher Rate of Actionable Alerts**. The percentage of alerts that lead to action that improves the users' experience should go up because there are fewer alerts purely on metrics.

### Slow & Measurable

**Decreased Mean Time To Repair**. As teams realize each alert is more valuable, they will become more responsive to the alerts. This should lead to a decrease in the mean time to repair. 


### Slow & Intangible

**Reduced Alert Fatigue**. Teams report that alert fatigue has reduced and they notice alerts are more valuable and actionable.

## Supported Capabilities

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md)

Symptom-based alerting helps to develop a team's observability capability. It moves the focus from simple "up/down" checks or raw infrastructure metrics to high-fidelity signals that represent the true health of the system.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)

This practice ensures that notifications are actionable and timely by triggering only when the system behaves in a way that will affect or currently affects the user experience. It prevents the team from becoming desensitized to alerts, ensuring that when a notification is sent, it acts as a genuine call to action for a service interruption.

### [User-centric Focus](/capabilities/user-centric-focus.md)

By aligning alerting thresholds with user pain points, such as slow page loads or failed transactions, teams prioritize the customer experience over internal system elegance. This ensures that operational efforts are always expended on maintaining value for the end user.

### [Well-Being](/capabilities/well-being.md)

A major contributor to burnout is "alert fatigue," caused by constant, non-actionable interruptions during on-call shifts. By filtering out noise and alerting only on genuine symptoms, this practice protects the work-life balance and mental focus of the engineering team.
