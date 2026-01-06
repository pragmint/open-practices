# [User-centric focus](https://dora.dev/capabilities/user-centric-focus/)

Software value is ultimately defined by its usefulness to human beings, making a user-centric focus the essential "North Star" for development teams. In the era of AI-assisted coding, this focus ensures that increased velocity leads to meaningful solutions rather than just faster mistakes. By prioritizing actual user outcomes over simple technical output, organizations achieve significantly higher performance and job satisfaction.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Feature Factory" Trap

One of the most common pitfalls is the "feature factory" mindset, where success is measured by output (velocity and features shipped) rather than outcomes (user value). When teams optimize for activity, they risk building "shiny but hardly used" features. AI can significantly exacerbate this problem; because AI makes it easier to write code, teams may find themselves producing a high volume of low-value software faster than ever, leading to high activity but low impact.

### Organizational Silos and "Solutionism"

Organizational structures often create a "gatekeeper" model where product managers or researchers sit between developers and end users. This disconnect robs engineers of the context needed to build intuitive solutions and effectively verify AI-generated outputs. This often leads to "resume-driven development" or "solutionism," where teams adopt complex AI models or new technologies for their own sake rather than to solve a specific, validated user problem.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's User-centric focus capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Integrate Low-Latency Feedback Loops

Teams should establish direct channels for user feedback—such as in-app surveys or observation sessions—that are accessible to developers immediately. For teams using AI, these loops are critical for refining workflows and validating that the AI’s output aligns with reality. When feedback is integrated directly into the development cycle, it allows for the continuous reprioritization of the backlog based on what users actually need.

### Implement Spec-driven Development (SDD)

To keep AI aligned with user needs, teams can use Spec-driven Development. In this approach, developers refine user requirements and constraints into detailed documentation (specs) before any code is written. This documentation serves as the source of truth for AI agents. By constraining AI output to validated user requirements, teams ensure that the generated code solves the intended problem rather than just following generic coding patterns.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to User-centric focus)
- Upstream (they are a pre-requisite for User-centric focus)
- Downstream (User-centric focus is a pre-requisite for them)

### [Customer feedback](/capabilities/customer-feedback.md) - Related

Customer feedback provides the raw data and insights necessary to build a user-centric focus. While user-centricity is the mindset and prioritization strategy, the customer feedback capability focuses on the technical and procedural methods used to gather that information.

### [Documentation quality](/capabilities/documentation-quality.md) - Upstream

High-quality documentation is a prerequisite for practices like Spec-driven Development. For AI to effectively assist in a user-centric way, the underlying requirements, user stories, and technical specs must be clear, accurate, and well-maintained.

### [Team experimentation](/capabilities/team-experimentation.md) - Downstream

Once a team has a strong user-centric focus, they can more effectively engage in experimentation. A deep understanding of the user allows teams to create meaningful hypotheses, using A/B testing and other experimental methods to see which solutions actually drive the desired user outcomes.

### [Job satisfaction](/capabilities/job-satisfaction.md) - Downstream

DORA research indicates that a user-centric focus is a strong predictor of job satisfaction. When developers see the direct impact of their work on real users and feel they are solving meaningful problems, it leads to higher engagement and morale.
