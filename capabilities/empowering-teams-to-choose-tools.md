# [Empowering Teams To Choose Tools](https://dora.dev/capabilities/teams-empowered-to-choose-tools/)

This capability is about letting teams select the tools and technologies that support their unique workflows and tasks. The DORA research has found that the most qualified decision-makers are the individual contributors themselves. Empowering teams to choose their own tools was found to create higher software delivery performance and increases in job satisfaction.

## Nuance

### Balancing Freedom with Constraints

It’s crucial to balance tool choice with the potential costs of acquisition, support, and added complexity in communication between teams using different tools. A baseline set of approved tools should be established, which can cover the majority of the organization's needs while allowing room for innovation. Typically, organizations have platform teams that do a lot of the "behind the scenes" support work required to keep a technology stack compliant and efficient.

But if a team feels strongly that a different tool or technology is best for their case, they are free to choose it. They should know that their choice means they must also do the work of supporting this new tool or set of tools.

Sometimes that support work can be easy to gloss over. Take for example the decision to use a different language. The teams will need to build out a whole new CI/CD pipeline and ensure they have a environments suitable to run the code in the new language. They'll also need to introduce tooling that scans for security vulnerabilities and a host of other tasks that a company's platform team likely already handles.

### Risk of Tool Overproliferation

**Allowing teams to choose their tools doesn't mean unrestricted freedom.**

Too much freedom in tool choice can lead to a fragmented tech stack, increasing technical debt and fragility over time. Each new tool requires maintenance and integration efforts, which can dilute the benefits of the new technology. It's essential to define a process for exceptions and ensure teams understand the implications of their choices.

## Supporting Practices

### [Establish Golden Paths](/practices/establish-golden-paths.md)

Spotify coined the term [Golden Path](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/) to mean selecting a set of officially supported tools that engineers throughout the org can use. This baseline tooling should be comprehensive enough to address most organizational needs, including programming languages, libraries, testing tools, data storage, and infrastructure. This practice promotes standardization while allowing flexibility for exceptional cases. The benefit is a balanced approach that minimizes the risk of technical debt while allowing teams to focus on delivering value to their stakeholders.

### [Schedule Regular Tooling Audits](/practices/schedule-regular-tooling-audits.md)

Conduct regular audits of the organization's toolset to evaluate its effectiveness and relevance. During these audits, discuss and document the benefits and drawbacks of current tools and explore new technologies. Make sure to invite commentary from all levels of the organization. This practice helps keep the tools aligned with the organization’s evolving goals and fosters a culture of continuous improvement and adaptation.

### [Schedule Time for Experimentation](/practices/schedule-time-for-experimentation.md)

Regularly allocate time for teams to experiment with new tools, such as through hackathons or innovation days. Encourage team members to test new technologies and assess their suitability for the organization's needs. This practice fosters a culture of experimentation and growth, which can lead to significant performance improvements and greater team engagement.

## Related Capabilities

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md) - Related

A generative organizational culture promotes learning, innovation, and trust, which are essential for empowering teams to make their own tool choices. By fostering a culture that values experimentation and feedback, teams are more likely to feel confident in selecting tools that best fit their needs.

### [Team Experimentation](/capabilities/team-experimentation.md) - Related

Team experimentation is closely related to empowering teams to choose tools, as it encourages a mindset of testing and evaluating new approaches. The freedom to select tools aligns well with a culture that values experimentation, allowing teams to rapidly iterate and find the best solutions for their specific challenges.

### [Job Satisfaction](/capabilities/job-satisfaction.md) - Downstream

The DORA research has found that Job Satisfaction tends to be higher in teams that feel empowered to choose their own tools.

### [Code Maintainability](/capabilities/code-maintainability.md) - Downstream

The DORA research has found that Code Maintainability tends to be higher in teams that feel empowered to choose their own tools.
