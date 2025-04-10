# [Monitoring and Observability](https://dora.dev/capabilities/monitoring-and-observability/)

*Monitoring* your system means tracking predefined metrics and alerting you when known issues occur, like high latency or error rates. It tells you that something is wrong in your system, but not why.

*Observability* lets you explore system behavior in real time to understand unknown or unexpected failures. It gives you flexibility and context to debug complex issues you didn’t anticipate in advance.

Given these two concepts are so closely related, it's common for teams to set up systems that use monitoring and observability together.

Key elements of monitoring and observability are logs, metrics, spans, and traces. Logs record individual events (sometimes in an unstructured format), providing context about errors or system states. Metrics are numerical data points collected regularly, highlighting performance or usage trends. Spans capture structured data about a request or operation (like request duration or number of button clicks). Traces group multiple spans to illustrate a request's entire journey through various parts of the system.

Correlating these four data points greatly enhances their utility. For example, metrics can be correlated with logs, traces, and spans using timestamps to identify events that occur simultaneously or in sequence. And logs can be correlated with other logs, traces, and spans by including an auto-generated correlation-id or request-id. By linking related data points, monitoring tools can effectively group events and operations. This approach simplifies debugging, accelerates issue resolution, and improves overall system reliability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Don't Let Tooling Sit On The Shelf

Having monitoring and observability tools in place is just the beginning. What matters is how you use them. Teams often invest in dashboards, log aggregators, and tracing systems, only to let them sit idle or use them during major incidents. The real value of these tools emerges when teams actively use these tools during everyday development, incident reviews, and performance tuning.

### Everyone Should Be Empowered To Use This Tooling

Avoid creating a single point of failure by relying on *one* observability expert or specialized team to interpret what's going on in production. Some organizations have Site Reliability Engineers (SREs) with deep operational experience to help improve system reliability. However, SREs shouldn't be gatekeepers. All developers should be empowered, and expected, to use monitoring and observability tools. After all, developers bring the most context about their code and its intent, which is often exactly what’s needed when tracking down an issue.

### Be Careful What You Automate

Automation based on logs, alerts, and metrics can be a powerful way to reduce operational toil: auto-scaling, auto-healing, even auto-remediation of known failure modes. But automation adds its own complexity. If it’s based on noisy or poorly understood signals, it can trigger inappropriately and make a bad situation worse. Cascading failures often start with well-meaning automation responding to incomplete or misleading data. Before wiring automation to monitoring observability signals, make sure those signals are stable, well-tested, and truly reflective of system state.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Monitoring and Observability capability. Generally, score a 1 if monitoring and observability is limited, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is comprehensive and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Monitoring and Observability.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Limited:** There is little to no monitoring or visibility into system performance, making it difficult to identify issues.
2. **Basic:** Some monitoring tools are in place, providing basic metrics and alerts, but with limited visibility into system behavior. These tools are usually only referenced when there is a problem with the system.
3. **Comprehensive:** A comprehensive monitoring system is in place, providing standardized metrics and visibility into system performance. Teams can identify trends and simple issues quickly.
4. **Integrated:** Monitoring data is integrated with logs, traces, and other data sources. Teams can understand and debug complex issues, and gain deep insights into system behavior.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think monitoring and observability is somewhere between basic and comprehensive, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Monitoring and Observability; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Monitoring and Observability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Instrument Systems With Telemetry Data

By instrumenting key parts of your application with telemetry data, teams gain real-time insights into usage patterns, performance bottlenecks, and opportunities to prioritize impactful changes.

### Implement Symptom-Based Alerts

Design alerts that focus on *observable symptoms* impacting users, rather than on specific causes. This helps reduce unnecessary noise and ensures that the most critical, user-facing issues receive prompt attention. By focusing on symptoms, teams can better prioritize responses and improve the mean time to restore (MTTR).

### Enable Self-Service Monitoring Dashboards

Allow teams to create, customize, and update their own monitoring dashboards based on evolving needs. Providing self-service tools encourages teams to quickly adapt to system changes and ensures that developers have the information they need to troubleshoot issues rapidly. This leads to faster identification and resolution of problems.

### Track Alert Metrics

Monitor metrics related to alerting, such as response times, false positives, and unactionable alerts. This practice helps teams understand the effectiveness of their alerting system and identify areas for improvement. By regularly tracking and refining these metrics, teams can enhance their monitoring efficiency and reduce alert fatigue.

### Automate Failure Detection and Rollback

Automate failure detection and rollback to reduce recovery time and minimize user impact. For example, if a deployment spikes error rates, automation can pause or revert it. Be sure to use reliable monitoring signals and add safeguards to prevent overcorrection, though. When thoughtfully applied, this practice boosts system resilience and speeds up recovery.

### Shadow Production with Traffic Replay

Replay real, scrubbed production traffic in staging or testing environments to uncover and understand issues *before* they impact users. This approach mimics realistic load and usage patterns, helping surface problems that synthetic tests might miss. Monitoring and observability tooling can then be used to analyze anomalies, confirm fixes, or validate changes under near-production conditions. This practice is especially valuable for testing config changes, infrastructure updates, or edge cases that don’t appear in standard test suites.

### Monitor and Optimize Resource Usage

By actively monitoring resource usage, you can optimize performance, prevent outages, and control costs. Use monitoring tools and dashboards to gain real-time insights and set up alerts for unusual patterns. The benefit is a more efficient infrastructure that adapts to your organization's needs while minimizing waste.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Monitoring and Observability)
- Upstream (they are a pre-requisite for Monitoring and Observability)
- Downstream (Monitoring and Observability is a pre-requisite for them)

### [Deployment Automation](/capabilities/deployment-automation.md) - Related

Monitoring and observability play a key role in deployment automation. Automated rollouts can be configured to watch for key health metrics, error rates, or latency changes. If something starts to go wrong, observability data enables automated rollback or halts to minimize user impact. Integrating monitoring directly into deployment pipelines helps detect regressions quickly and allows teams to deliver continuously with confidence.

### [Test Automation](/capabilities/test-automation.md) - Related

Test automation complements monitoring and observability by validating expected behaviors before production, reducing the likelihood of undetected issues. Effective test automation helps provide clear metrics that feed into monitoring tools, enhancing overall observability.

### [Pervasive Security](/capabilities/pervasive-security.md) - Downstream

Having monitoring and observability in place supports security because it identifies unusual patterns that indicate breaches or misuse. Examples of such patterns are unauthorized access attempts, privilege escalations, or data exfiltration. Observability tools help security teams trace these behaviors across systems, while logs and metrics provide the forensic trail needed to investigate incidents.

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md) - Downstream

Proactive failure notification relies heavily on robust monitoring and observability. Detecting potential failures early and notifying relevant stakeholders helps reduce downtime and prevent major outages, which aligns with the goals of observability.

### [Visual Management](/capabilities/visual-management.md) - Downstream

Metrics like user engagement, feature adoption, or system latency can be transformed into visual displays that give the team actionable feedback at a glance. Monitoring provides the raw signals. Visual Management turns those signals into accessible cues that help the team spot issues, track improvements, and guide daily decisions.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Downstream

Monitoring and Observability provide the data and platforms that inform business decisions. Without reliable signals from production systems, it’s difficult to measure user behavior, system impact, or the success of new features.
