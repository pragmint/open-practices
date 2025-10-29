# Asking Better Questions with OpenTelemetry (Feat. Hazel Weakly)

Resource type: Video + Transcript

Video: https://www.youtube.com/watch?v=wMJEgrUnX7M
Transcript: https://github.com/open-telemetry/sig-end-user/blob/main/video-transcripts/transcripts/2023-09-13T19:26:10Z-opentelemetry-q-a-feat-hazel-weakly.md

This Q&A between Adriana Villela and Hazel Weakly explores the hard-won lessons of implementing OpenTelemetry in real-world engineering environments. Hazel's story reveals the difference between "collecting everything" and building a culture that asks meaningful questions through observability.

## Discussion Guide

### 1. The Shift from Data Volume to Data Value

Hazel's team began by flooding their system with 300 million telemetry events per day. The turning point came when they cut that volume by more than 95%, proving that insight comes from curiosity, not collection.

- What signals do *we* over-collect that no one actually queries?
- What business or reliability questions would justify keeping them?

### 2. Building a Feedback Loop Between Questions and Instrumentation

Hazel reframed observability as an evolutionary process: **"asking meaningful questions and getting useful answers."**

- How can teams treat observability as an iterative feedback loop rather than a one-time setup?
- What signals tell you your current telemetry isn't driving learning?

### 3. The Ergonomics of Instrumentation

Hazel describes the friction of manual instrumentation, language inconsistencies (TypeScript vs. Haskell vs. Python), and context-loss across async boundaries.

- How can platform teams make telemetry ergonomics invisible for developers?
- What would an "OTel starter library" look like in your stack?

### 4. Cost Pressure as a Forcing Function

Budget overruns were what finally motivated engineers to refine what they measured. Cost, in this case, became a design constraint that clarified priorities.

- How might connecting observability to tangible costs sharpen focus on value?

### 5. Making the Case to Executives

Hazel stresses that observability investments should show ROI in roughly four months and must tie the developer lifecycle to business value delivery.

- How do you currently link telemetry outcomes to customer or business impact?
- Could you explain your observability spend to a CFO in one sentence?

## How This Resource Brings Value

This conversation moves beyond tutorials and into organizational behavior—the politics, ergonomics, and incentives behind effective observability. It's ideal for:

- Platform engineers designing shared tracing or metrics frameworks
- Engineering leaders trying to justify observability budgets
- Teams struggling with "too much data, too little insight"

Use it as a **watch-party or discussion starter** to unpack the social and technical challenges that come with scaling OpenTelemetry from proof-of-concept to practice.
