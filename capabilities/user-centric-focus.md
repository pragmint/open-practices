# [User-centric Focus](https://dora.dev/capabilities/user-centric-focus/)

The value of software is ultimately defined by its usefulness to human beings, making a user-centric focus the essential "North Star" for development teams. In the era of AI-assisted coding, this focus on the user ensures that increased velocity leads to meaningful solutions rather than just faster mistakes. By prioritizing actual user outcomes over simple technical output, organizations achieve significantly higher performance and job satisfaction.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Feature Factory" Trap
When shifting the focus to the user, one of the most common pitfalls is getting into the "feature factory" mindset, where success is measured by output (velocity and features shipped) rather than outcomes (user value). When teams optimize for activity, they risk building "shiny but hardly used" features. AI can significantly exacerbate this problem; because AI makes it easier to write code, teams may find themselves producing a high volume of low-value software faster than ever, leading to high activity but low impact.

### Organizational Silos and "Solutionism"
Organizational structures often create a "gatekeeper" model, where product managers or researchers sit between developers and end users. This disconnect robs engineers of the context needed to build intuitive solutions and effectively verify AI-generated outputs. This often leads to "resumé-driven development" or "solutionism," where teams adopt complex AI models or new technologies for their own sake rather than to solve a specific, validated user problem.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team on this capability: score a 1 if you are a Feature Factory focused on shipping volume without validation; a 2 if Reactive & Proxy-Led, using AI to close tickets rather than drive outcomes; a 3 if Integrated & Spec-Driven, grounding AI in verified requirements and user observation; and a 4 if User-Invested & Self-Correcting, using AI as a discovery partner to pivot toward maximum value.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **The Feature Factory:** Teams focus on output volume and use AI to ship more features without validating user impact or feedback.
2. **Reactive & Proxy-Led:** Teams rely on siloed feedback and manual hand-offs, using AI to accelerate ticket completion rather than user outcomes.
3. **Integrated & Spec-Driven:** Teams use spec-driven development and direct user observation to ensure AI outputs are grounded in verified requirements.
4. **User-Invested & Self-Correcting:** Teams treat AI as a discovery partner, using real-time user metrics and rapid prototyping to pivot toward maximum value.

The number you selected represents your overall score for this capability. If you feel like your organization fits somewhere in between two scores, it's okay to use a decimal.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means your team or organization is largely proficient, or well on its way to becoming proficient, in the area of data health; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's User-centric Focus capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Talk Directly With Users

Teams should establish direct channels for user feedback that are accessible to developers immediately. For teams using AI, these feedback loops are critical for refining workflows and validating that the AI’s output aligns with reality. When feedback is integrated directly into the development cycle, the backlog can be continuously reprioritized, based on what users actually need.

### Implement Spec-driven Development (SDD)

To keep AI efforts aligned with user needs, teams can use Spec-driven Development. In this approach, developers refine user requirements and constraints into detailed documentation (specs) before any code is written. These specs serve as the source of truth for AI agents. By constraining AI output to validated user requirements, teams ensure that generated code solves user problems rather than just following generic coding patterns.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to User-centric focus)
- Upstream (they are a pre-requisite for User-centric focus)
- Downstream (User-centric focus is a pre-requisite for them)

### [Customer Feedback](/capabilities/customer-feedback.md) - Related

Customer feedback provides the raw data and insights necessary to build a user-centric focus. While user-centricity is the mindset and prioritization strategy, the Customer Feedback capability focuses on the technical and procedural methods used to gather that information.

### [Documentation Quality](/capabilities/documentation-quality.md) - Upstream

High-quality documentation is a pre-requisite for practices like Spec-driven Development. For AI to effectively assist in a user-centric way, the underlying requirements, user stories, and technical specs must be clear, accurate, and well-maintained.

### [Team Experimentation](/capabilities/team-experimentation.md) - Downstream

Once a team has a strong user-centric focus, they can more effectively engage in experimentation. A deep understanding of the user allows teams to create meaningful hypotheses, using A/B testing and other experimental methods to see which solutions actually drive the desired user outcomes.

### [Job Satisfaction](/capabilities/job-satisfaction.md) - Downstream

DORA research indicates that a user-centric focus is a strong predictor of job satisfaction. Developers who see the direct impact of their work on real users and feel they are solving meaningful problems are typically more engaged, and overall team morale tends to be higher.
