# [Platform Engineering AI](https://dora.dev/capabilities/platform-engineering/)

Platform Engineering is primarily about enabling value stream developers to do their jobs faster and with less cognitive load by creating an internal platform which is treated with the same care as the main product. Because of the rise of AI in development, having a strong platform has become "no longer optional". It has become necessary to allow gains from AI in development to not get negated by other organizational inefficiencies down the line.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Build It and They Will Come" Trap

One of the most common pitfalls is building a platform based on top-down assumptions rather than user research. When a platform team operates in a vacuum, they often create tools that don't solve real-world developer problems or fit existing workflows. This leads to low adoption rates and the rise of "shadow IT," where teams bypass the platform entirely to get their work done, defeating the purpose of standardization.

### The "One-Size-Fits-All" Golden Cage

Different types of development—such as data science, mobile, and legacy systems—have unique requirements. A platform that fails to provide enabling constraints and instead mandates a single, inflexible workflow will frustrate specialized teams and hinder the very innovation it was meant to accelerate.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Platform Engineering AI capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Adopt a Product Management Mindset
Treat the platform as a product and developers as customers. This involves assigning a dedicated product manager to map critical user journeys—like "spinning up a new service" or "debugging production"—and creating a roadmap based on alleviating developer friction. Success is measured by developer satisfaction (DevEx) and the ease with which users can self-serve.

### Proactively "Shift Down" Cognitive Load
The platform should abstract away the complexities of Kubernetes, cloud networking, and security policies. By "shifting down" these requirements into the platform's automated pathways, developers are freed from needing to be infrastructure experts. This independence is a significant driver of productivity, allowing teams to focus almost exclusively on delivering user value.

### Prioritize Clear and Actionable Feedback
DORA data highlights that the capability most correlated with a positive user experience is receiving "clear feedback on the outcome of my tasks." Platforms must provide immediate, transparent logs and diagnostics when a task (like a deployment or test suite) fails. This empowers developers to troubleshoot independently without opening support tickets, maintaining the "flow" of development.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Platform Engineering AI)
- Upstream (they are a pre-requisite for Platform Engineering AI)
- Downstream (Platform Engineering AI is a pre-requisite for them)

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md) - Upstream
A platform requires high trust and collaboration to succeed. A generative culture ensures that the feedback loops between platform teams and developers are honest and productive, preventing the "ivory tower" approach where standards are dictated without empathy for the developer experience.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream
Platform engineering provides the "paved road" required for true Continuous Delivery. Without the automated, secure, and compliant pathways built by platform engineers, achieving the frequent, low-risk releases characterized by CD is nearly impossible at scale.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md) - Related
This capability balances the platform's goal of standardization. While the platform provides "golden paths," empowering teams to choose tools ensures that the organization remains flexible enough to adopt new technologies that might eventually become the next standard within the platform.

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related
A quality platform naturally increases visibility by centralizing where work happens. By integrating telemetry and tracking into the platform's toolchain, organizations gain a clearer view of bottlenecks and lead times across the entire value stream.
