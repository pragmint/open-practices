# [Platform Engineering](https://dora.dev/capabilities/platform-engineering/)
Platform Engineering is primarily about enabling value stream developers to do their jobs faster and with less cognitive load by creating an internal platform that is treated with the same care as the main product. Because of the rise of AI in development, having a strong platform is no longer an option; it is necessary. Platform Engineering, as a capability, ensures that gains from AI-driven development are not negated by other organizational inefficiencies down the line.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Build It and They Will Come" Trap
One of the most common pitfalls that teams run into is building a platform based on top-down assumptions rather than actual user research. When a platform team operates in a vacuum, they often create tools that don't solve real-world developer problems or fit existing workflows. This leads to low adoption rates and the rise of "shadow IT," where teams bypass the platform entirely to get their work done, defeating the purpose of standardization.

### The "One-Size-Fits-All" Golden Cage
Different types of development—-such as data science, mobile, and legacy systems-—have unique requirements. A platform that fails to provide relevant constraints and instead mandates a single, inflexible workflow will frustrate specialized teams and hinder the very innovation it was meant to accelerate.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Platform Engineering capability. Generally, score a 1 if xxx, a 2 if xxx, a 3 if xxx, and a 4 if xxx.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

...

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think xxx is both xxx and xxx, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Platform Engineering; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Platform Engineering capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Adopt a Product Management Mindset
During the building process, platform teams should treat the platform as a product and developers as customers. This involves two things: 1) assigning a dedicated product manager to map critical user journeys (like spinning up a new service or debugging production), and 2) creating a roadmap aimed at alleviating developer friction. Success with the platform is measured by developer satisfaction (DevEx) and the ease with which users can self-serve.

### Proactively "Shift Down" Cognitive Load
The platform should abstract away the complexities of Kubernetes, cloud networking, and security policies. By "shifting down" these requirements into the platform's automated pathways, developers are freed from needing to be infrastructure experts. This independence is a significant driver of productivity, allowing developers to focus almost exclusively on delivering user value.

### Prioritize Clear and Actionable Feedback
DORA data highlights that a positive user experience is most commonly correlated with developers receiving "clear feedback on the outcome of my tasks." Platforms must provide immediate, transparent logs and diagnostics when a task (like a deployment or test suite) fails. This empowers developers to troubleshoot independently without opening support tickets, maintaining the "flow" of development.

## Adjacent Capabilities
The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Platform Engineering)
- Upstream (they are a pre-requisite for Platform Engineering)
- Downstream (Platform Engineering is a pre-requisite for them)

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md) - Related
This capability balances the platform's goal of standardization. While the platform provides "golden paths," empowering teams to choose tools ensures that the organization remains flexible enough to adopt new technologies that might eventually become the next standard within the platform.

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related
A quality platform naturally increases visibility by centralizing where work happens. By integrating telemetry and tracking into the platform's toolchain, organizations gain a clearer view of bottlenecks and lead times across the entire value stream.

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md) - Upstream
A platform requires high trust and collaboration to succeed. A generative culture ensures that the feedback loops between platform teams and developers are honest and productive, preventing the "ivory tower" approach where standards are dictated without empathy for the developer experience.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream
Platform engineering provides the "paved road" required for true Continuous Delivery. Without the automated, secure, and compliant pathways built by platform engineers, achieving the frequent, low-risk releases characterized by CD is nearly impossible at scale.
