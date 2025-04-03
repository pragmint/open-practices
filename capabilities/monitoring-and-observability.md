# [Monitoring and Observability](https://dora.dev/capabilities/monitoring-and-observability/)

Monitoring tracks predefined metrics to alert you when known issues occur, like high latency or error rates. It tells you that something is wrong, but not why. Observability lets you explore system behavior in real time to understand unknown or unexpected failures. It provides the context and flexibility to debug complex issues you didn’t anticipate in advance. Given these concepts are so closely related, it's common for teams to set up systems that use monitoring and observability together.

Logs, metrics, spans, and traces are key elements of monitoring and observability. Logs record individual events (sometimes in an unstructured format), providing context about errors or system states. Metrics are numerical data points collected regularly, highlighting performance or usage trends. Spans capture structured data about a request or operation (like request duration, number of button clicks, etc). Traces group multiple spans to illustrate a request's entire journey through various parts of the system.

Correlating these data points greatly enhances their usefulness. Metrics can be correlated with logs, traces, and spans using timestamps to identify events occurring simultaneously or in sequence. Logs can similarly be correlated with other logs, traces, and spans by including an auto-generated correlation-id or request-id. Using these identifiers helps link related data points together, allowing monitoring tools to group events and operations effectively. This approach simplifies debugging, accelerates issue resolution, and improves overall system reliability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Don't Let Tooling Sit On The Shelf

Having observability tools in place is just the beginning—what matters is how you use them. Teams often invest in dashboards, log aggregators, and tracing systems, only to let them sit idle or use them only during major incidents. The real value emerges when teams actively use these tools during everyday development, incident reviews, and performance tuning—not just in emergencies.

### Everyone should use this tooling

Avoid creating a single point of failure by relying on one observability expert or a specialized team to interpret what's going on in production. Some organizations have Site Reliability Engineers (SREs) who can bring deep operational experience and help improve system reliability. However, they shouldn't be gatekeepers. All developers should be empowered—and expected—to use monitoring and observability tools themselves. They bring the most context about the code and its intent, which is often exactly what’s needed when tracking down an issue.

### Be Careful What You Automate

Automation based on logs, alerts, and metrics can be a powerful way to reduce operational toil—auto-scaling, auto-healing, even auto-remediation of known failure modes. But automation adds its own complexity. If it’s based on noisy or poorly understood signals, it can trigger inappropriately and make a bad situation worse. Cascading failures often start with a well-meaning automation responding to incomplete or misleading data. Before wiring automation to observability signals, make sure those signals are stable, well-tested, and truly reflective of system state.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Monitoring and Observability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Instrument Systems With Telemetry Data

By instrumenting key parts of your application with telemetry data, teams gain real-time insights into usage patterns, performance bottlenecks, and opportunities to prioritize impactful changes effectively.

### Implement Symptom-Based Alerts

Design alerts that focus on observable symptoms impacting users, rather than on specific causes. This helps reduce unnecessary noise and ensures that the most critical, user-facing issues receive prompt attention. By focusing on symptoms, teams can better prioritize responses, improving the mean time to restore (MTTR).

### Enable Self-Service Monitoring Dashboards

Allow teams to create, customize, and update their own monitoring dashboards based on evolving needs. Providing self-service tools encourages quick adaptation to system changes and ensures that developers have the information they need to troubleshoot issues rapidly. This leads to faster identification and resolution of problems.

### Track Alert Metrics

Monitor metrics related to alerting, such as response times, false positives, and unactionable alerts. This practice helps teams understand the effectiveness of their alerting system and identify areas for improvement. By regularly tracking and refining these metrics, teams can enhance their monitoring efficiency and reduce alert fatigue.

### Automate Failure Detection and Rollback

Automate failure detection and rollback to reduce recovery time and minimize user impact. For example, if a deployment spikes error rates, automation can pause or revert it. Use reliable monitoring signals and add safeguards to prevent overcorrection. When thoughtfully applied, this boosts resilience and speeds up recovery.

### Shadow Production with Traffic Replay

Replay real, scrubbed production traffic in staging or testing environments to uncover and understand issues before they impact users. This approach mimics realistic load and usage patterns, helping surface problems that synthetic tests might miss. Monitoring and observability tooling can then be used to analyze anomalies, confirm fixes, or validate changes under near-production conditions. It’s especially valuable for testing config changes, infrastructure updates, or edge cases that don’t appear in standard test suites.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Monitoring and Observability)
- Upstream (they are a pre-requisite for Monitoring and Observability)
- Downstream (Monitoring and Observability is a pre-requisite for them)

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Monitoring and observability play a key role in deployment automation. Automated rollouts can be configured to watch for key health metrics, error rates, or latency changes. If something starts to go wrong, observability data enables automated rollback or halts to minimize user impact. Integrating monitoring directly into deployment pipelines helps detect regressions quickly and adds confidence to continuous delivery.

### [Test Automation](/capabilities/test-automation.md) - Related

Test Automation complements Monitoring/Observability by validating expected behaviors before production, reducing the likelihood of undetected issues. Effective test automation helps provide clear metrics that feed into monitoring tools, enhancing overall observability.

### [Pervasive Security](/capabilities/pervasive-security.md) - Downstream

Monitoring and observability support security by identifying unusual patterns that indicate breaches or misuse—like unauthorized access attempts, privilege escalations, or data exfiltration. Observability tools help security teams trace these behaviors across systems, while logs and metrics provide the forensic trail needed to investigate incidents.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md) - Downstream

Proactive Failure Notification relies heavily on robust monitoring and observability. By detecting potential failures early and notifying relevant stakeholders, this capability helps reduce downtime and prevent major outages, aligning well with observability goals.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Downstream

Business dashboards often rely on data surfaced by monitoring systems. Metrics like user engagement, feature adoption, or system latency directly inform product and strategy decisions. The same infrastructure used to detect and debug outages can also help track business KPIs. Making observability data accessible to product managers, analysts, and executives bridges the gap between technical and business performance.
