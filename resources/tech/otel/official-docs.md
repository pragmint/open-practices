# OpenTelemetry Documentation

Resource type: Documentation

https://opentelemetry.io/docs/

The OpenTelemetry documentation is the definitive place for learning how to instrument modern systems with consistent telemetry. It explains the core ideas behind traces, metrics, and logs, how they work together, and how to apply them in real applications. The docs also walk through setup for different languages and show how to use the OpenTelemetry Collector to manage and route telemetry data.

You want to start reading the docs once you've gotten your hands dirty enough to contextualize the information, but before you're stuck without a clean way forward and teammates begin imitating patterns you never meant to standardize. Treat the docs as a core learning asset—not a quickstart. They may seem intimidating, but they accelerate mastery and make OTel adoption smoother, cleaner, and far less frustrating.

## Sequencing the Material

1. Start with the Concepts section to align vocabulary
2. Follow the language-specific guides for your stack
3. Spin up the Collector locally to see data flow end-to-end in a simple hello world application
4. Bookmark semantic conventions as a reference while instrumenting
5. Pair further reading with adding real instrumentation to your system (e.g., signup, checkout, a job path). Instrument it together, referencing the docs as you go.

## Discussion Prompts

If going through the material with your team, it might be helpful to host a series of book clubs where the content gets discussed. Some of the following questions might be helpful to get a productive conversation flowing:

### Core Concepts & Mental Models

- How do traces, metrics, and logs relate? When does each add value?
- What is context propagation and why is it fundamental in distributed systems?
- What are "semantic conventions" and how do they reduce cognitive load?

### Instrumentation Strategy

- Should we start with auto-instrumentation or manual instrumentation? Why?
- Where in our stack should instrumentation begin? API edge, async jobs, data layer?
- What signals should we emit first (traces, metrics, logs)?
- How do we ensure we're not over-instrumenting and generating noise?
- What criteria help us decide when a span should be nested vs. separate?
- What does "done" look like for our first end-to-end instrumented flow?

### Collector Design & Deployment

- What's the simplest meaningful Collector pipeline we can start with?
- Do we benefit more from local agent collectors, a centralized gateway model, or a hybrid approach? How does that choice affect developer experience, reliability, and cost?
- Which processors and exporters make sense for us initially?
- Given OTel's support for multiple pipelines, shared receivers, fan-out to multiple exporters, and processor isolation per pipeline, how should we architect our telemetry flow to balance performance, reliability, and extensibility?
- How do we handle secure export (TLS, auth) across environments?

### Semantic Conventions & Naming

- How do we choose naming conventions for spans, attributes, and services?
- What attributes are required vs. recommended for HTTP, DB, messaging, etc.?
- How will we version conventions and document expected patterns internally?
- What process should engineers follow if semantic conventions conflict with real-world needs?

### Performance & Overhead

- What performance impact should we expect from instrumentation?
- When is sampling appropriate, and which sampling strategy fits our workloads?
- How should we measure and tune telemetry cost vs. value?
- Where do bottlenecks typically appear in telemetry pipelines?

### Operational Maturity

- How do we track when spans go missing or context propagation breaks?
- How will we teach new engineers to contribute instrumentation confidently?

### Integration with Existing Tools

- How do we layer OTel into our current APM / logging / metrics stack without disruption?
- When should we replace vendor-specific SDKs with OTel instrumentation?
- How do we validate data parity and reliability across platforms?

### Organizational Behavior & Culture

- How do we make observability a practice of learning and improving instead of a compliance task?
- What metrics or signals help us prove telemetry's value to leadership?
- How do we encourage teams to debug from traces instead of logs alone?
- How can we hack our existing rituals (PR review, pairing, demos, etc) to help telemetry adoption stick?

### Good Capstone Questions

- What's one misunderstanding you cleared up by reading the docs?
- What piece of the stack feels most urgent to instrument next—and why?
- What's one convention or pattern we should codify before scaling adoption?
- What blockers do we foresee, and how can we remove them now?
