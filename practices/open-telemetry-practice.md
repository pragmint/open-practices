# Adopt OpenTelemetry for Unified Observability

> **Practice framing:**  
> This practice captures a socio-technical shift underway in modern software teams.  
> Observability is moving from the “three pillars” (logs, metrics, traces stored separately)  
> to a unified model where all signals are captured as wide, structured events.  
> OpenTelemetry (OTel) is the open-source standard enabling this shift — reducing vendor lock-in,  
> correlating signals across the stack, and letting developers see their impact in real time.


Observability has never been more important — or more complex. [OpenTelemetry](https://opentelemetry.io/) (OTel) is the open-source standard for collecting telemetry data across services. Instead of juggling separate tools for logs, metrics, and traces, OTel helps teams consolidate context into a single structured format. This gives developers and execs the same “source of truth” about how systems behave — enabling faster debugging, richer product insights, and a direct link between engineering work and business outcomes - without vendor lock-in.

Some popular OpenTelemetry-compatible platforms include:  
- [Honeycomb](https://www.honeycomb.io/) – built around wide, structured events and exploratory debugging  
- [Grafana Tempo](https://grafana.com/oss/tempo/) – integrates with the Grafana stack for trace visualization  
- [Datadog](https://www.datadoghq.com/), [New Relic](https://newrelic.com/), [Dynatrace](https://www.dynatrace.com/) – commercial observability vendors with native OTel support  
- [Uptrace](https://uptrace.dev/) – an OTel-native open-source observability backend  

## When to Experiment

- **Developers** need consistent telemetry that makes debugging easier and helps them see the real-world impact of their code.
- **Ops / SREs** need to reduce alert fatigue, catch issues before customers do, and correlate signals across environments.  
- **Technical leaders** need observability that scales without vendor lock-in and provides flexibility to adapt tools over time.  
- **Non-technical executives** need a trustworthy way to connect system health to business metrics like bookings, throughput, or customer retention.  

## How to Gain Traction

### Start with Education & a Champion
Begin by aligning teams on what OTel is and why it matters. Share Charity Majors’ framing of [“Observability 2.0”](https://www.honeycomb.io/blog/one-key-difference-observability1dot0-2dot0) to shift mindsets from three pillars to structured events. Secure an executive or senior engineer to sponsor the adoption — without a champion, efforts often stall.  

### Establish a Shared Repository
Set up a dedicated observability repo managed like an open-source project. Include schema definitions, testing rules, a README with setup instructions, and usage guidelines. Lock down standards (e.g., TypeScript interfaces for attributes) so all services produce consistent data.

### Pilot with Auto-Instrumentation
Begin with OTel’s auto-instrumentation libraries to generate traces quickly. Expect noise: tune by suppressing low-value metrics and layering abstractions. Wrap complex packages in simple helpers so other developers can adopt without digging into raw node modules.

### Correlate Across Tools
Don’t fight the fact that teams have “their favorite tool.” Instead, enrich OTel spans with IDs and references from those tools. This builds connective tissue and lets people see how siloed data relates inside a unified telemetry stream.

### Show Quick Wins
Surface dashboards that answer the questions execs and devs already care about:  
- “Where are users dropping off?”  
- “What query is slowing down checkout?”  
- “Is this issue ours or the third party’s?”  
Demonstrating visible impact in days builds credibility and momentum.

## Lessons From The Field
- _Champion Power Matters_ – OTel takes root best when there is a champion to lead the charge. Without a sponsor who can hold the line, expect stall-outs. See [OTel in Practice: Alibaba's OpenTelemetry Journey](https://www.youtube.com/watch?v=fgbB0HhVBq8)
- _Schemas Prevent Chaos_ – Defining and versioning attribute schemas up front (e.g., TypeScript interfaces) ensures data is comparable across services. Teams that skip this get unmanageable dashboards. See [OpenTelemetry Q&A Featuring Hazel Weakly](https://github.com/open-telemetry/sig-end-user/blob/main/video-transcripts/transcripts/2023-09-13T19:26:10Z-opentelemetry-q-a-feat-hazel-weakly.md)
- _Correlating External Tools is an Opportunity_ – Instead of resisting siloed tools, smart teams embed their IDs into traces, creating a de-facto unified model. This turns “annoying fragmentation” into a source of leverage. See [The Evolution of Observability Practices](https://github.com/open-telemetry/sig-end-user/blob/main/video-transcripts/transcripts/2023-10-11T20:52:28Z-the-evolution-of-observability-practices.md)
- _Telemetry Surfaces Politics_ – OTel exposes bottlenecks and ownership gaps. In bureaucratic
cultures, this requires social skill: frame insights as opportunities, not punishments.
- _Developer Buy-in Comes From On-Call Relief_ – The fastest way to win hearts is to show OTel reduces noisy, pointless alerts and makes bugs easier to find. See [OTel Q&A Featuring Jennifer Moore](https://github.com/open-telemetry/sig-end-user/blob/main/video-transcripts/transcripts/2023-12-04T23:34:44Z-otel-q-a-feat-jennifer-moore.md)

## Deciding to Polish or Pitch

After experimenting with this practice for **4–5 weeks**, bring the team together and ensure the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable
- **Reduced Debug Time** Incidents should resolve faster once OTel is in place. Track cycle time or ticket to resolution time via [Jira](https://atlassian.com/software/jira)/incident postmortems.
- **Shorter Deployment Feedback Loops.** Expect 10–15 minute telemetry updates instead of waiting hours or days.  

### Fast & Intangible
- **Developer Sentiment** Look for fewer “wake-up-for-nothing” complaints in retros or Slack chatter.  
- **Dashboard Adoption** Track how many non-admins confidently create their own dashboards.  

### Slow & Measurable
- **Reduced Vendor Dependence.** Track spend on observability tools or # of dashboards maintained.  
- **Product KPIs** Monitor conversion rates, drop-offs, or booking throughput tied to system optimizations.  

### Slow & Intangible
- **Cross-Team Trust.** Do PMs and execs begin referencing telemetry data in decision-making instead of anecdote?  

## Supporting Capabilities
### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)
Enables proactive observability across systems. Fast feedback loops mean catching issues before they reach the user.

### [Monitoring & Observability](/capabilities/monitoring-and-observability.md)
Otel is the open source standard for collecting telemetry data across services and utilizes a unified model to optimize observability in the modern tech landscape.

### [Continuous Delivery](/capabilities/continuous-delivery.md)
OTel enables faster, safer deploys by providing near-real-time feedback loops — developers can see the impact of changes minutes after release.

### [Team Experimentation](/capabilities/team-experimentation.md)
Unified telemetry lets devs run safe experiments (optimize queries, adjust configs) and immediately measure business impact.

### [Code Maintainability](/capabilities/code-maintainability.md)
Consistent observability abstractions act as shared infrastructure patterns, helping teams manage complexity across many repos.

### [Job Satisfaction](/capabilities/job-satisfaction.md)
Reducing false alarms and giving developers visibility into their real impact improves morale and reduces burnout.




