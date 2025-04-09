# [Proactive Failure Notification](https://dora.dev/capabilities/proactive-failure-notification/)

Failure notifications are alerts that get generated after a system, service, or component has already failed. These notifications typically indicate that something is broken, degraded, or unavailable—often after users or external systems have already noticed the issue.

Proactive failure notification involves generating alerts when system metrics approach thresholds that are known to lead to failures. Instead of waiting for a system to break or for customers to report problems, teams receive early warnings based on observed signals—such as rising error rates, slowing response times, or unusual behavior. This early detection enables teams to act before the situation becomes critical, reducing downtime and improving system reliability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Alert Fatigue

When teams get too many alerts, they can start to ignore them or take longer to respond. This can lead to missed problems or slower fixes when something goes wrong. To avoid this, alerts should be set up carefully so that only the most important and immediately actionable ones get sent.

### Misconfigured Thresholds

If alert thresholds are set wrong, they can either trigger too many alerts or miss real problems. When thresholds are too strict, teams might get alerts for things that aren't serious. If they’re too relaxed, they might not catch issues early enough. Reviewing past incidents and checking system data regularly can help keep thresholds set at the right level.

### Notification Routing

Alerts need to go to the right people. If they’re sent to the wrong team—or no one at all—fixing the problem can take much longer. This often happens when alert rules don’t match how teams are set up or haven’t been updated after team changes. To avoid this, make sure alert routing is kept up to date with who’s actually responsible for what. It also helps to double-check that teams know which alerts they’ll get and how they’re expected to respond.

### Be Careful What You Automate

Automation based on alerts can be a powerful way to reduce operational toil—auto-scaling, auto-healing, even auto-remediation of known failure modes. But automation adds its own complexity. If it’s based on noisy or poorly understood signals, it can trigger inappropriately and make a bad situation worse. Cascading failures often start with a well-meaning automation responding to incomplete or misleading data. Before wiring automation to observability signals, make sure those signals are stable, well-tested, and truly reflective of system state.

### Lack of Incident Post-Mortems

Without incident post-mortems, teams miss the opportunity to identify potential indicators of failure that were not proactively monitored. Consistent post-mortems help refine monitoring strategies and prevent future incidents by incorporating new, predictive metrics.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Proactive Failure Notification capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Instrument Systems With Telemetry Data

By instrumenting key parts of your application with telemetry data, teams gain real-time insights into usage patterns, performance bottlenecks, and opportunities to prioritize impactful changes effectively.

### Implement Symptom-Based Alerts

Design alerts that focus on observable symptoms impacting users, rather than on specific causes. This helps reduce unnecessary noise and ensures that the most critical, user-facing issues receive prompt attention. By focusing on symptoms, teams can better prioritize responses, improving the mean time to restore (MTTR).

### Automate Failure Detection and Rollback

Automate failure detection and rollback to reduce recovery time and minimize user impact. For example, if a deployment spikes error rates, automation can pause or revert it. Use reliable monitoring signals and add safeguards to prevent overcorrection. When thoughtfully applied, this boosts resilience and speeds up recovery.

### Shadow Production with Traffic Replay

Replay real, scrubbed production traffic in staging or testing environments to uncover and understand issues before they impact users. This approach mimics realistic load and usage patterns, helping surface problems that synthetic tests might miss. Monitoring and observability tooling can then be used to analyze anomalies, confirm fixes, or validate changes under near-production conditions. It’s especially valuable for testing config changes, infrastructure updates, or edge cases that don’t appear in standard test suites.

### Conduct Regular Alert Audits

Review and adjust alerts periodically to ensure relevance and accuracy. Analyze alert patterns and remove redundant or non-actionable alerts, focusing only on those that require immediate attention. Regular alert audits help reduce alert fatigue and maintain a clear focus on critical issues.

### Host Incident Post-Mortems

Hold detailed post-mortem sessions after each incident to identify unmonitored indicators that could have predicted the event. Incorporate these indicators into future monitoring strategies. This practice enhances proactive detection capabilities and improves overall system reliability.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Proactive Failure Notification)
- Upstream (they are a pre-requisite for Proactive Failure Notification)
- Downstream (Proactive Failure Notification is a pre-requisite for them)

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Proactive failure notification relies heavily on robust monitoring and observability. In order for alerts to fire, they need the underlying monitoring tooling to be in place. Once an alert fires, for it to be useful, teams need observability tooling to understand the problem being alerted.

### [Pervasive Security](/capabilities/pervasive-security.md) - Downstream

Proactive failure notification supports security by alerting on unusual patterns that indicate breaches or misuse—like unauthorized access attempts, privilege escalations, or data exfiltration. Without alerts, security minded team members would need to be manually scanning through an overwhelming amount of data. It's not realistic to do that work manually.

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Proactive failure notification plays a key role in mature deployment automation systems. If something starts to go wrong, alerts fire which trigger an automated rollback to minimize user impact. Integrating alerting directly into deployment pipelines helps detect regressions quickly and adds confidence to continuous delivery.
