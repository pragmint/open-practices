# Adopt the OpenTelemetry Standard

Most systems perform thousands of actions every minute: serving pages, calling APIs, and writing to databases. Without records of what happens during those actions, it’s hard to see where time is spent or why errors occur. Telemetry data fills that gap by capturing the details behind system behavior.

Without a shared standard, each service describes its behavior differently. One may log in JSON, another might use a custom tagging system, and a third could send metrics in a format only one tool understands. Doing so would create fragmented, hard-to-compare data. OpenTelemetry (OTel) fixes that with a common standard and open-source tools for most major languages. Teams can instrument their systems consistently and send data to a central monitoring system (like [Honeycomb](https://www.honeycomb.io/), [Grafana](https://grafana.com/), [DataDog](https://www.datadoghq.com/), [Jaeger](https://www.jaegertracing.io/), [Fluent Bit](https://fluentbit.io/), [Uptrace](https://uptrace.dev/), etc). Since most popular monitoring systems support hte OTel format, teams can switch platforms without major disruptions.

When the OpenTelemetry standard is adopted, teams can see how requests move through the system. Scattered logs and isolated metrics become a single, connected view of system behavior. It shows where time is spent, where failures occur, and how components interact. With that visibility debugging is faster, performance work is more deliberate, and improvement efforts are based on evidence rather than hunches.

Beyond better debugging, OTel positions the organization for long-term data leverage. When you control your telemetry pipeline, you own your data, your schema, and your tooling. That gives your organization the ability to evolve, enrich, analyze, and build on the information that drives decisions, without being constrained by a vendor's roadmap or data model.

## When to Experiment

- You're a developer who needs to keep systems operational and performant.
- You're a QA who needs to ensure changes don't introduce systemic failures.
- You're a product leader who needs to track how various changes (or experiments) are affecting the user experience.
- You’re an engineering leader focused on improving system reliability and creating fast feedback loops to understand system health and the impact of every change.

## How to Gain Traction

1. Secure a Champion From Leadership

Every successful OpenTelemetry rollout begins with executive sponsorship. Adopting the OpenTelemetry Standard often requires significant time and budget, competes with other organizational priorities, and may face cultural resistance. It's helpful to have a leader who can connect the work to measurable business goals and clear obstacles when resistance appears. Use [Alibaba’s OpenTelemetry journey](/resources/tech/otel/alibaba-opentelemetry-journey.md) as a reference point; it helps leaders understand both the early friction and the long-term payoff of adopting a shared telemetry standard.

2. Form a Small Cross-Functional Team

Once leadership is aligned, assemble a small pilot team capable of working across boundaries (backend, frontend, data pipelines, infrastructure, etc). Before starting any technical work, make sure this group shares a common understanding of why observability matters and what "good telemetry" looks like. Use [Charity Majors' Observability 2.0](/resources/tech/otel/observability-2-0-honeycomb.md) and [Asking Better Questions with OpenTelemetry](/resources/tech/otel/asking-better-questions-with-opentelemetry.md) to align on what data should be emitted, how it will be structured, and how teams will use it to ask better questions, not just build prettier dashboards.

3. Establish a Foundational Repository

Create a single observability foundation repository that makes OpenTelemetry adoption simple and consistent. Include shared libraries that wrap the OTel SDK, a common telemetry schema for naming and structure, and helper functions that auto-populate useful context like request IDs and build versions.

4. Pilot a Single Path

Start with one business-critical request flow and instrument it end-to-end. Pick something visible, like checkout or signup, where results are easy to demonstrate.

Begin with two simple telemetry configurations:

- **Instrumenting like you log** Make adding spans as easy as calling console.log(). Developers should be able to drop in trace points without complicated dependency wiring, test mocks, or ceremony. During local development, spans should default to printing to stdout, and running silently during tests.

Once signals are clear locally, deploy the collector and instrumentation to pre-prod and then production.

Success at this stage isn’t volume, it's usefulness. The pilot should answer questions engineers and leaders care about, such as where users drop off, what slows down a key flow, and how recent changes affect conversion or error spikes.

5. Standardize and Expand

Once the pilot produces consistent, valuable traces, shift focus from proving value to scaling it. Capture what worked (helper functions, schema conventions, and collector configurations) in the foundation repo and make onboarding self-service. Add concise documentation and validation checks so teams can integrate with minimal friction. Create a clear governance for the repo to guide future changes and version the schema like an API to prevent drift. Expand gradually, measuring progress by consistency rather than speed. Each new integration should strengthen the shared signal, not add noise.

## Lessons From The Field

**Quick Wins Build Momentum** Visibility improvements mean little if no one notices. Publicize early examples of time saved and bugs caught to fuel buy-in.

**Telemetry Surfaces Politics** OTel reveals ownership gaps and bottlenecks. In bureaucratic cultures, this requires tact. Frame findings as shared opportunities, not personal failings.

**Some Assembly Required** OpenTelemetry isn’t plug-and-play—it’s a toolkit of SDKs, exporters, and collectors you assemble to fit your system. Success depends on treating it like infrastructure work: apply clean code, schema discipline, and solid CI practices. Built with care, OTel becomes the connective layer that unifies data and insight across teams.

**Bridge, Don’t Replace** People already have preferred tools. Add trace IDs and references to link systems rather than trying to rip existing ones out early. For example, product teams may have specialized product analytics tooling. OpenTelemetry should compliment that instead of replacing it.

**Expect Uneven Maturity** Logging support and SDK quality vary by language. Set expectations and plan incremental rollout accordingly.

## Deciding to Polish or Pitch

After experimenting with this practice for **4–5 weeks**, bring the team together and determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

- **Mean Time To Recover** Developers should find and confirm root causes faster using telemetry rather than disparate data points and anecdotes. This can be tracked via incident timelines in postmortems or Jira/incident tooling.
- **Faster Deployment Feedback Loops** Engineers should see how changes affect the system within minutes, not hours. Can be measured via deployment pipelines (CI/CD timestamps) and time to first meaningful telemetry signals after deploy.

### Fast & Intangible

- **More Productive Debugging Behaviors** Teams default to tracing and telemetry for understanding issues, instead of log-hunting or adding prints. Capture this via retro notes, engineering Slack chatter, or direct developer feedback.

### Slow & Measurable

- **Product KPIs** Monitor conversion rates, drop-offs, or booking throughput tied to system optimizations.

### Slow & Intangible

- **Cross-Team Collaboration** Engineers, PMs, and leaders reference telemetry when discussing reliability or performance decisions, replacing anecdote-driven debates. Gauge via meeting observations, PM feedback, and roadmap discussions.

## Supporting Capabilities

### [Proactive Failure Notification](/capabilities/proactive-failure-notification.md)

OTel enables proactive observability across systems. Fast feedback loops mean catching issues before they reach the user.

### [Monitoring & Observability](/capabilities/monitoring-and-observability.md)

OTel is the open-source standard for collecting telemetry data across services and uses a unified model to optimize observability in the modern tech landscape.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

OTel enables faster, safer deploys by providing near-real-time feedback loops. Developers can see the impact of changes minutes after release.

### [Team Experimentation](/capabilities/team-experimentation.md)

Unified telemetry lets developers run safe experiments (optimize queries, adjust configs) and immediately measure business impact.

### [Code Maintainability](/capabilities/code-maintainability.md)

OpenTelemetry doesn't make code cleaner by itself, but it does make complexity more visible. Traces highlight tangled dependencies, slow paths, and tightly-coupled services that are hard to change. This clarity gives teams confidence to refactor safely and helps prioritize the areas where cleanup will have the biggest impact.

### [Job Satisfaction](/capabilities/job-satisfaction.md)

Reducing false alarms and giving developers visibility into their real impact improves morale and reduces burnout.
