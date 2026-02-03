# [Proactive Failure Notification](https://dora.dev/capabilities/proactive-failure-notification/)

Failure notifications are alerts that are generated after a system, service, or component has already failed. These notifications typically indicate that something is broken, degraded, or unavailable -- often *after* users or external systems have already noticed the issue.

Proactive failure notification involves generating alerts *before* failure occurs, when system metrics are approaching thresholds that are known to lead to failures. Instead of waiting for a system, service, or component to break (or for customers to report problems), teams receive early warnings based on observed signals such as rising error rates, slowing response times, or unusual behavior. This early detection enables teams to act before the situation becomes critical, reducing downtime and improving system reliability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Alert Fatigue

In an ideal setup, alerts are only sent when the system detects an issue (or an elevated risk of one) and either takes corrective action or calls for human intervention. Teams aren't alerted about transient and non-systemic issues like timeouts, because there's no action required.

When teams get too many alerts, they can start to ignore them or take longer to respond. This can lead to missed problems or slower fixes when something actually does go wrong. To avoid this, alerts should be set up carefully so that only the most important and immediately actionable ones get sent.

### Misconfigured Thresholds

If alert thresholds are set incorrectly, they can either trigger too many alerts or miss real problems. When thresholds are too strict, teams might get alerts for things that aren't serious issues. When thresholds are too relaxed, teams might not catch issues early enough (or at all). Reviewing past incidents and checking system data regularly can help keep thresholds set at the right level.

### Incorrect Notification Routing

Alerts need to go to the right people. If alerts are sent to the wrong team, or to no one at all, fixing the problem can take much longer. This often happens when alert rules don’t match how teams are set up or haven’t been updated after teams change. On the other hand, if alerts are sent to a single place where a lot of people see them, this can create a dangerous "not my problem" attitude.

To ensure notifications are sent to the correct teams and individuals, make sure alert routing is kept up-to-date with who’s actually responsible for what. It also helps to double-check that teams know which alerts they’ll get and how they’re expected to respond.

### Potential Cascading Effects of Automation

Automation based on alerts can be a powerful way to reduce operational toil: auto-scaling, auto-healing, even auto-remediation of known failure modes. But automation adds its own complexity. If it’s based on noisy or poorly understood signals, it can trigger inappropriately and make a bad situation worse. Cascading failures often start with a well-meaning automation responding to incomplete or misleading data. Before wiring automation to observability signals, make sure those signals are stable, well-tested, and truly reflective of system state.

### Lack of Incident Post-Mortems

Without incident post-mortems, teams miss the opportunity to identify potential indicators of failure that were *not* proactively monitored. Consistent post-mortems help refine monitoring strategies and prevent future incidents by incorporating new, predictive metrics.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Proactive Failure Notification capability. Generally, score a 1 if notifications are limited or completely lacking from your team or organization, a 2 if they are basic and you feel there is a LOT of room for improvement, a 3 if they are mature and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Proactive Failure Notification.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **No Notifications:** There is no automated system of notifying teams that a failure has occurred in deployed environments. Failures are typically caught via manual QA or reported by users.
2. **Rudimentary Notifications:** Some alerting rules are in place, but thresholds are not well-defined. Notifications are often irrelevant or too frequent.
3. **Threshold-based Notifications:** Alerting rules are well-defined, with failure thresholds tuned to accurately spot issues. Notifications are relevant and timely.
4. **Proactive Notification:** Rate of change metrics are tracked to proactively spot potential issues. There are automated responses to many notifications, and teams continuously review and refine alerting rules to anticipate and prevent failures.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and mature notifications, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Proactive Failure Notification; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Proactive Failure Notification capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Instrument Systems With Telemetry Data

By instrumenting key parts of your application with telemetry data, teams gain real-time insights into usage patterns and performance bottlenecks. This gives them opportunities to prioritize changes that will have the greatest impact on the system.

### [Implement Symptom-Based Alerts](/practices/implement-symptom-based-alerts.md)

Prioritize alerting on issues that either impact users directly or are strong indicators of future user impact. Avoid alerting on low-risk, self-healing, or purely internal anomalies unless they threaten to escalate. This helps reduce noise and ensures that teams focus their attention on incidents that matter most. By aligning alerts with user impact, teams can respond more effectively and improve mean time to restore (MTTR).

### Automate Failure Detection and Rollback

Automate failure detection and rollback to reduce recovery time and minimize user impact. For example, if a deployment spikes error rates, automation can pause or revert it. Use reliable monitoring signals and add safeguards to prevent overcorrection. Automation that is thoughtfully (not haphazardly) applied, boosts system resilience and speeds up recovery.

### Shadow Production with Traffic Replay

Replay real, scrubbed production traffic in staging or testing environments to uncover and understand issues *before* they impact users. This practice mimics realistic load and usage patterns, helping surface problems that synthetic tests might miss. Monitoring and observability tooling can then be used to analyze anomalies, confirm fixes, or validate changes under near-production conditions. This is especially valuable for testing config changes, infrastructure updates, or edge cases that don’t appear in standard test suites.

### Conduct Regular Alert Audits

Review and adjust alerts, and the thresholds that trigger them, periodically to ensure relevance and accuracy. Analyze alert patterns and remove redundant or non-actionable alerts, focusing only on those that require immediate attention. Regular alert audits help reduce alert fatigue and maintain a clear focus on critical issues.

### Host Incident Post-Mortems

Hold detailed post-mortem sessions after each incident to identify unmonitored indicators that could have predicted the event. Incorporate these indicators into future monitoring strategies. Post-mortems also provide an opportunity to ensure notification routing is current and that teams know what's expected of them.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Proactive Failure Notification)
- Upstream (they are a pre-requisite for Proactive Failure Notification)
- Downstream (Proactive Failure Notification is a pre-requisite for them)

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Proactive failure notification relies heavily on robust monitoring and observability. In order for alerts to fire, they need the underlying monitoring tooling to be in place. Once an alert fires, teams need observability tooling to understand and act on the problem.

### [Pervasive Security](/capabilities/pervasive-security.md) - Downstream

Proactive failure notification supports security by alerting on unusual patterns that indicate breaches or misuse such as unauthorized access attempts, privilege escalations, or data exfiltration. Without alerts, security-minded team members would need to manually scan an overwhelming amount of data, which is unrealistic.

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Proactive failure notification plays a key role in mature deployment automation systems. If something starts to go wrong, alerts fire and trigger an automated rollback to minimize user impact. Integrating alerting directly into deployment pipelines helps detect regressions quickly and lets teams practice continuous delivery with confidence.
