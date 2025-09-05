# Adopt OpenTelemetry for Unified Observability

> **Practice framing:**  
> This practice captures a socio-technical shift underway in modern software teams.  
> Observability is moving from the “three pillars” (logs, metrics, traces stored separately)  
> to a unified model where all signals are captured as wide, structured events.  
> OpenTelemetry (OTel) is the open-source standard enabling this shift — reducing vendor lock-in,  
> correlating signals across the stack, and letting developers see their impact in real time.


For modern software teams, observability has never been more important — or more complex. [OpenTelemetry](https://opentelemetry.io/) (OTel) is the open-source standard for collecting telemetry data across services. Instead of juggling separate tools for logs, metrics, and traces, OTel helps teams consolidate context into a single structured format. This gives developers and executives the same “source of truth” about how systems behave, which enables faster debugging, richer product insights, and a direct link between engineering work and business outcomes - all without vendor lock-in.

Some popular OpenTelemetry-compatible platforms include:  
- [Honeycomb](https://www.honeycomb.io/) – built around wide, structured events and exploratory debugging  
- [Grafana Tempo](https://grafana.com/oss/tempo/) – integrates with the Grafana stack for trace visualization  
- [Datadog](https://www.datadoghq.com/), [New Relic](https://newrelic.com/), and [Dynatrace](https://www.dynatrace.com/) – commercial observability vendors with native OTel support  
- [Uptrace](https://uptrace.dev/) – an OTel-native open-source observability backend  

## When to Experiment

- "I am a developer and I need to ensure consistent telemetry so that I can more easily debug and see the real-world impact of my code."
- "I am an Ops / SRE and I need to [learn to / ensure that] so that I can reduce alert fatigue, catch issues before customers do, and correlate signals across environments."  
- "I am a technical leader and I need to ensure we have an observability tool that scales without vendor lock-in and remains flexibile over time."  
- "I am a non-technical executive and I need to ensure the connection between system health and business metrics is reliable so that we have an accurate snapshot of bookings, throughput, and customer retention."

## How to Gain Traction

### Start with Education & a Champion
Begin by aligning teams on what OTel is and why it matters. Share Charity Majors’ blog post framing [“Observability 2.0”](/resources/tech/otel/observability-2-0-honeycomb.md) to begin to shift mindsets from three pillars to structured events. Secure an executive or senior engineer to sponsor the adoption — without a champion, efforts often stall.  See [OTel in Practice: Alibaba’s OpenTelemetry Journey](/resources/tech/otel/alibaba-opentelemetry-journey.md).

### Establish a Shared Repository
Set up a dedicated observability repo managed like an open-source project. Include schema definitions, testing rules, a README with setup instructions, and usage guidelines. Lock down standards (e.g., TypeScript interfaces for attributes) so all services produce consistent data.  Teams that skip this get unmanageable dashboards. See [OpenTelemetry Q&A Featuring Hazel Weakly](/resources/tech/otel/opentelemetry-qa-hazel-weakly.md).

### Pilot with Auto-Instrumentation
Begin with OTel’s auto-instrumentation libraries to generate traces quickly. Expect noise: Tune by suppressing low-value metrics and layering abstractions. Wrap complex packages in simple helpers so other developers can adopt without digging into raw node modules.

### Correlate Across Tools
Don’t fight the fact that teams have “their favorite tool.” Instead, enrich OTel spans with IDs and references from those tools. This builds connective tissue and lets people see how siloed data relates inside a unified telemetry stream. See [The Evolution of Observability Practices](/resources/tech/otel/evolution-of-observability-practices.md).

### Show Quick Wins
The fastest way to win hearts is to show OTel reduces noisy, pointless alerts and makes bugs easier to find. Surface dashboards that answer the questions executives and developers care about:  
- “Where are users dropping off?”  
- “What query is slowing down checkout?”  
- “Is this issue ours or the third party’s?”  
Demonstrating visible impact in days builds credibility and momentum. See [OpenTelemetry Q&A Featuring Jennifer Moore](/resources/tech/otel/opentelemetry-qa-jennifer-moore.md).

## Lessons From The Field
- _Telemetry Surfaces Politics_ – OTel exposes bottlenecks and ownership gaps. In bureaucratic
cultures, this requires social skill: frame insights as opportunities, not punishments.
- _SAP’s Massive-Scale Modernization_ – SAP revamped its observability architecture across a fleet of 11,000+ OpenSearch instances by adopting OpenTelemetry and rebuilding ingestion pipelines with Data Prepper. This enabled unified logs, metrics, and traces, provided low-risk migration to OpenSearch 2.x, and dramatically sped up incident response. See [SAP Case Study: Massive-Scale Observability Modernization](/resources/tech/otel/sap-opentelemetry-case-study.md).
- _Pax8 Unleashes Curious, Cost‑Effective Instrumentation_ – By moving to Honeycomb’s Observability 2.0 platform, Pax8 empowered engineers, product managers, and ops with structured telemetry and dropped their observability costs by 30%. Their user base grew from 50 to 210 users, democratizing access without breaking the budget. See [Pax8 Case Study: Democratizing Observability 2.0](/resources/tech/otel/pax8-observability-2-0-case-study.md). 


## Deciding to Polish or Pitch

After experimenting with this practice for **4–5 weeks**, bring the team together and determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable
- **Reduced Debug Time** Incidents should resolve faster once OTel is in place. Track cycle time or ticket-to-resolution time via [Jira](https://atlassian.com/software/jira)/incident postmortems.
- **Shorter Deployment Feedback Loops.** Expect 10– to 15-minute telemetry updates instead of waiting hours or days.  

### Fast & Intangible
- **Developer Sentiment** Look for fewer “wake-up-for-nothing” complaints in retros or Slack chatter.  
- **Dashboard Adoption** Track how many non-admins confidently create their own dashboards.  

### Slow & Measurable
- **Reduced Vendor Dependence.** Track spend on observability tools or number of dashboards maintained.  
- **Product KPIs** Monitor conversion rates, drop-offs, or booking throughput tied to system optimizations.  

### Slow & Intangible
- **Cross-Team Trust.** Do PMs and executives begin referencing telemetry data in decision-making instead of anecdotes?  

## Supporting Capabilities
### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)
Otel enables proactive observability across systems. Fast feedback loops mean catching issues before they reach the user.

### [Monitoring & Observability](/capabilities/monitoring-and-observability.md)
Otel is the open-source standard for collecting telemetry data across services and uses a unified model to optimize observability in the modern tech landscape.

### [Continuous Delivery](/capabilities/continuous-delivery.md)
OTel enables faster, safer deploys by providing near-real-time feedback loops — developers can see the impact of changes minutes after release.

### [Team Experimentation](/capabilities/team-experimentation.md)
Unified telemetry lets developers run safe experiments (optimize queries, adjust configs) and immediately measure business impact.

### [Code Maintainability](/capabilities/code-maintainability.md)
Consistent observability abstractions act as shared infrastructure patterns, helping teams manage complexity across many repos.

### [Job Satisfaction](/capabilities/job-satisfaction.md)
Reducing false alarms and giving developers visibility into their real impact improves morale and reduces burnout.

