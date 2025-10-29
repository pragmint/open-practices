# Adopt the OpenTelemetry Standard

Most systems perform thousands of actions every minute: serving pages, calling APIs, and writing to databases. Without records of what happens during those actions, it’s hard to see where time is spent or why errors occur. Telemetry data fills that gap by capturing the details behind system behavior.

Without a shared standard, each service describes its behavior differently. One may log in JSON, another might use a custom tagging system, and a third could send metrics in a format only one tool understands. Doing so would create fragmented, hard-to-compare data. OpenTelemetry (OTel) fixes that with a common standard and open-source tools for most major languages. Teams can instrument their systems consistently and send data to a central monitoring system (like [Honeycomb](https://www.honeycomb.io/), [Grafana](https://grafana.com/), [DataDog](https://www.datadoghq.com/), [Jaeger](https://www.jaegertracing.io/), [Fluent Bit](https://fluentbit.io/), [Uptrace](https://uptrace.dev/), etc). Since most popular monitoring systems support hte OTel format, teams can switch platforms without major disruptions.

When the OpenTelemetry standard is adopted, teams can see how requests move through the system. Scattered logs and isolated metrics become a single, connected view of system behavior. It shows where time is spent, where failures occur, and how components interact. With that visibility debugging is faster, performance work is more deliberate, and improvement efforts are based on evidence rather than hunches.

## When to Experiment

- You are a developer who needs to keep systems operational and performant.
- You are a QA who needs to ensure changes don't introduce systemic failures.
- You are a product leader who needs to track how various changes (or experiments) are affecting the user experience.
- You are an engineering leader who wants to improve the reliability of the overall system.

## How to Gain Traction

1. Secure a Champion From Leadership

Every successful OpenTelemetry rollout begins with executive sponsorship. Adopting the OpenTelemetry Standard often requires significant time and budget, competes with other organizational priorities, and may face cultural resistance. It's helpful to have a leader who can connect the work to measurable business goals and clear obstacles when resistance appears. Use [Alibaba’s OpenTelemetry journey](/resources/tech/otel/alibaba-opentelemetry-journey.md) as a reference point; it helps leaders understand both the early friction and the long-term payoff of adopting a shared telemetry standard.

2. Form a Small Cross-Functional Team

Once leadership is aligned, assemble a small pilot team capable of working across boundaries (backend, frontend, data pipelines, infrastructure, etc). Before starting any technical work, make sure this group shares a common understanding of why observability matters and what "good telemetry" looks like. Use [Charity Majors' Observability 2.0](/resources/tech/otel/observability-2-0-honeycomb.md) and [Asking Better Questions with OpenTelemetry](/resources/tech/otel/asking-better-questions-with-opentelemetry.md) to align on what data should be emitted, how it will be structured, and how teams will use it to ask better questions, not just build prettier dashboards.

3. Establish a Foundational Repository

Create a single observability foundation repository that makes OpenTelemetry adoption simple and consistent. Include shared libraries that wrap the OTel SDK, a common telemetry schema for naming and structure, and helper functions that auto-populate useful context like request IDs and build versions.

4. Pilot a Single Path

Start with one business-critical request flow and instrument it end-to-end. Choose something visible, like checkout or signup, where results are easy to show. Begin with auto-instrumentation to get traces quickly, then add manual spans where context adds value. Run locally first with a default OTel Collector and simple viewer like Grafana; once stable, deploy to pre-prod and then production.

At this stage, success is measured by credibility: OTel should help answer questions that matter to both engineers and business stakeholders — where users drop off, what slows down checkout, and how changes affect conversion.

5. Standardize and Expand

Once the pilot produces consistent, valuable traces, shift focus from proving value to scaling it. Capture what worked (helper functions, schema conventions, and collector configurations) in the foundation repo and make onboarding self-service. Add concise documentation and validation checks so teams can integrate with minimal friction. Assign clear ownership and version the schema like an API to prevent drift. Expand gradually, measuring progress by consistency rather than speed. Each new integration should strengthen the shared signal, not add noise.

## Lessons From The Field

**Quick Wins Build Momentum** Visibility improvements mean little if no one notices. Publicize early examples of time saved and bugs caught to fuel buy-in.

**Telemetry Surfaces Politics** OTel reveals ownership gaps and bottlenecks. In bureaucratic cultures, this requires tact. Frame findings as shared opportunities, not personal failings.

**Standardization Is Crucial** Without schema discipline, dashboards turn chaotic within weeks. Treat naming and attribute drift as real tech debt.

**Bridge, Don’t Replace** People already have preferred tools. Add trace IDs and references to link systems rather than trying to rip existing ones out early. For example, product teams may have specialized product analytics tooling. OpenTelemetry should compliment that instead of replacing it.

**Expect Uneven Maturity** Logging support and SDK quality vary by language. Set expectations and plan incremental rollout accordingly.

## Deciding to Polish or Pitch

After experimenting with this practice for **4–5 weeks**, bring the team together and determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable
- **Reduced Debug Time** Incidents should resolve faster once OTel is in place. Track cycle time or ticket-to-resolution time via [Jira](https://atlassian.com/software/jira)/incident postmortems.
- **Shorter Deployment Feedback Loops.** Expect 10– to 15-minute telemetry updates instead of waiting hours or days.

### Fast & Intangible
- **Developer Sentiment** Look for fewer "wake-up-for-nothing" complaints in retros or Slack chatter.
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
