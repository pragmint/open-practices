# [Monitoring and Observability](https://dora.dev/devops-capabilities/technical/monitoring-and-observability/)

<!-- TODO: insert summary of capability -->

<!-- ## Supporting Practices -->

<!-- TODO: insert a list of [linked practices](/practices) that support this capability. For each item, give a brief explanation of how the linked practice supports / relates to this capability. Also categorize each linked practice as one of the following: Enables, Requires, Improves -->

<!-- ## Related Capabilities -->

<!-- TODO: insert a list of [linked capabilities](/capabilities) that support this capability. For each item, give a brief explanation of how the linked capability supports / relates to this capability. Also categorize each linked capability as one of the following: Enables, Requires, Improves -->

## Key Points

* Monitoring: is tooling or a technical solution that allows teams to watch and understand the state of their systems. Monitoring is based on gathering predefined sets of metrics or logs.

* Observability: is tooling or a technical solution that allows teams to actively debug their system. Observability is based on exploring properties and patterns not defined in advance.

* To do a good job
  * Report health of systems (functioning? Enough resources?)
  * Reporting on system state as experienced by customers (Do my customers know if my system is down and have a bad experience?)
  * Monitoring for key business and systems metrics.
  * Tooling to help you understand and debug your systems in production.
  * Tooling to find information about things you did not previously know (that is, you can identify unknown unknowns).
  * Access to tools and data that help trace, understand, and diagnose infrastructure problems in your production environment, including interactions between services.

### How to implement
  * Provide leading indicators of an outage or service degradation.
  * Detect outages, service degradations, bugs, and unauthorized activity.
  * Help debug outages, service degradations, bugs, and unauthorized activity.
  * Identify long-term trends for capacity planning and business purposes.
  * Expose unexpected side effects of changes or added functionality.
  * Empower all developers to be proficient with monitoring and observability tools.
  * TTR time-to-restore.
  * Resource: [Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)

### Blackbox Monitoring
  * Blackbox Monitoring Overview:
    * Involves sending input to the system in a way that mimics customer interactions.
    * Examples include HTTP or RPC calls to APIs, or requesting full web page renders.
  * Sampling-Based Approach:
    * Monitors the same system that handles user requests.
    * Provides coverage by probing external API methods or simulating a mix of requests to mimic customer behavior (e.g., 100 reads to 1 write).
  * Implementation:
    * Uses a scheduling system to determine the frequency of inputs for adequate sampling.
    * Includes a validation engine:
      * Can check response codes or use regex for simple validations.
      * Might involve rendering pages in a headless browser to check DOM elements.
  * Outcome Management:
    * After validation, results (pass/fail) and metadata are stored for reporting and alerting.
    * Storage of failure snapshots with context aids in diagnosing issues.

### Whitebox Monitoring
  * Components:
    * Metrics: Numerical measurements representing system states, used for statistical analysis and visualization. Common types include counters, distributions, and gauges.
    * Logs: Append-only records of system events or actions, either simple strings or structured with metadata. Logs provide reliable data for post-processing, real-time metrics generation, and can be parsed for detailed analysis.
    * Traces: Consist of spans that track user actions or events across distributed systems, illustrating request flow, timing, and interactions. Tools like OpenTelemetry facilitate tracing by creating a detailed view of system operations.
  * Data Collection:
    * Data (metrics, logs, traces) is sent from the monitored workload to the monitoring system either directly by the system or via an adjacent agent.
  * Additional Considerations:
    * Events: Sometimes monitored, representing user interactions or system state changes, enhancing the observability of the system's behavior over time.

### Computation in Monitoring:
  * Data Aggregation: After collecting data, statistics are generated and data is aggregated across various dimensions like user cohorts, compute regions, or customer locations. On-the-fly statistics generation is beneficial but resource-intensive.
  * Tooling and Instrumentation Considerations:
    * Cardinality: Refers to the number of unique values for a metric. High cardinality (e.g., user IDs) can significantly increase resource demands.
    * Dimensionality: Involves recording multiple attributes with metrics, not just a single value over time. Adding dimensions like server, cluster, environment, and service can provide rich context but also increases data complexity.
  * Impact on System Scaling:
    * High cardinality combined with high dimensionality can lead to exponential growth in compute and storage needs, potentially making monitoring systems inefficient or unscalable. This requires careful planning by developers when implementing monitoring solutions.
    * Cardinality refers to the number of unique values or combinations in a dataset that a monitoring system tracks. Specifically, in time-series monitoring systems (like those using databases such as Prometheus), cardinality often describes the total number of unique time series. A time series is a sequence of data points (e.g., metric values over time) identified by a unique combination of labels or tags.
      * Example: Suppose you’re monitoring CPU usage with a label called server_name. If you have 100 distinct servers, each server generates its own time series, resulting in a cardinality of 100.
      * High Cardinality: This occurs when labels have many unique values. For instance, a label like user_id in a system with millions of users could lead to extremely high cardinality, as each user generates a unique time series.
    * Dimensionality refers to the number of labels or dimensions used to categorize or describe the metrics in a monitoring system. Each label adds a new "dimension" to the data, providing additional context to the metrics being tracked.
      * Example: If you track CPU usage with just one label, server_name, the dimensionality is 1. Adding a second label, like cpu_core, increases the dimensionality to 2. A third label, such as application, brings the dimensionality to 3.
      * High Dimensionality: This occurs when a monitoring system uses many labels to describe its metrics, increasing the complexity and granularity of


### Learning and Improving Monitoring Systems
  * Operating a system involves learning from outages and mistakes through retrospectives or **postmortems**, which include corrective actions.
  * A key outcome is enhancing monitoring systems, which must be quickly and efficiently updateable by anyone in a fast-moving organization.
  * Monitoring configuration is critical and requires:
    * Review and approval processes, similar to code development.
    * Storage in a version control system to enable broad access while maintaining control.
  * Automation improves monitoring configuration:
    * Using an automation pipeline ensures validity and consistent application.
    * Treating monitoring configuration as code allows deployment via the same automation process used by the team.

### Common Pitfalls of Monitoring and Observability
  * No plug-and-play solution exists; effective monitoring requires deep understanding of system components and code instrumentation.
  * Avoid relying on a single person or team for monitoring to prevent single points of failure and enhance organization-wide system understanding.
    * All developers should have baseline knowledge of monitoring and observability, not just operations or NOC teams.
    * Use continuous deployment (CD) patterns instead of restricting changes to specific teams.
  * Alerting pitfalls:
    * Avoid cause-based alerting (listing all error conditions); focus on symptom-based alerting (user-facing issues or predictions).
    * Non-user-facing systems should be observable but not trigger alerts unless symptoms affect users (internal or external).
    * Delivery should use multiple channels (SMS, apps, calls, email), avoiding team-wide email lists to prevent ignored alerts.
    * Poor signal-to-noise ratio causes alarm fatigue; non-actionable alerts drown out critical ones.
    * Track alert suppression carefully to avoid overuse or overly broad application.
  * Dashboard pitfalls:
    * Avoid curating a “Perfect Dashboard” as systems change too fast, rendering it outdated.
    * Enable team members to quickly create tailored visualizations instead.
  * Separate product/executive metrics (e.g., user acquisition, revenue) from operational/service health dashboards for clarity and focus.

### Identified Practices

* Retrospectives
* Postmortems
* Monitoring Configuration as Code
* Monitoring Configuration Review and Approval
* Monitoring Configuration Version Control
* Monitoring Configuration Automation
* Measure TTR (Time to Restore)