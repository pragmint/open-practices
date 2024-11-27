# [Empowering Teams To Choose Tools](https://dora.dev/capabilities/teams-empowered-to-choose-tools/)

This capability is about empowering teams to select the tools and technologies that best support their unique workflows and tasks. The DORA research has found that the most qualified decision-makers are the individual contributors themselves. When teams are empowered to choose their own tools, we tend to see higher software delivery performance and increases in job satisfaction.

## Nuance

### Balancing Choice with Complexity

It’s crucial to balance tool choice with the potential costs of acquisition, support, and added complexity that come with adding new tools to a tech stack. 

Typically, organizations have platform teams that do a lot of the "behind the scenes" support work required to keep a technology stack compliant and efficient. A baseline set of approved tools should be established for all teams, which can cover the majority of the organization's needs while allowing room for innovation. If one team feels strongly that a different tool or technology is best for their case, they should feel free to choose it. However, they should know that their choice means they must also do the work of _supporting_ this new tool or set of tools.

Sometimes that support work can be easy to gloss over. Take, for example, the decision to use a different language. Once this decision is made, the team will need to build out a whole new CI/CD pipeline and ensure its environments are suitable to run their code in the new language. They'll also need to introduce other new tooling that scans for security vulnerabilities and a host of other tasks, which the organization's platform team likely already handles. As you can see, one team's decision to use another tool has created a domino effect in terms of support, and has potentially added a layer of complexity in communication between teams. 

**Allowing teams to choose their tools doesn't mean unrestricted freedom.**

Too much freedom in tool choice can lead to a fragmented tech stack, increasing technical debt and fragility over time. Each new tool requires maintenance and integration efforts, which can dilute the benefits of the new technology. It's essential to define a standardized process for evaluating and adopting new tools, and to ensure teams understand the implications of their choices.


##Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team on this capability. Generally, score a 1 if your team's toolset is insufficient and there is no clear way for team members to adopt new technologies, a 2 if your team has an adequate but limited toolset and you feel there is a LOT of room for improvement, a 3 if your team's toolset is capable but there is some room for improvement, and a 4 if your team is using superior tools and is empowered to recommend new tools when necessary.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. Insufficient Tools: The current tools are inadequate for getting the job done, and there is no clear way to evaluate or adopt new ones.
2. Adequate but Limited: The current tools are sufficient but limited, and new tools are occasionally adopted through an informal process.
3. Capable and Evolving: The current tools are capable of meeting needs, and a standardized process is in place for evaluating and adopting new tools should the need arise.
4. Best-in-Class Tools: The best tools available are used to get the job done, and new tools are proactively researched and teams are empowered to recommend their adoption via a standardized process.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team's toolset represents something between adequate and capable, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed below. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in being empowered to choose tools; you would likely benefit from evaluating your scores in other capabilities.


## Supporting Practices

The following is a curated list of supporting practices to consider when looking to empower your team to choose tools. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.


### [Establish Golden Paths](/practices/establish-golden-paths.md)

Spotify coined the term [Golden Path](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/), which means selecting a set of officially supported tools that engineers throughout the organization can use. This baseline tooling should be comprehensive enough to address most organizational needs, including programming languages, libraries, testing tools, data storage, and infrastructure. This practice promotes standardization while allowing flexibility for exceptional cases. The benefit is a balanced approach to tooling that minimizes the risk of technical debt while allowing teams to deliver value to their stakeholders using the best tools available.

### [Schedule Regular Tooling Audits](/practices/schedule-regular-tooling-audits.md)

Conduct regular audits of the organization's toolset to evaluate its effectiveness and relevance. During these audits, discuss and document the benefits and drawbacks of current tools, and explore new technologies. Make sure to invite commentary from all levels of the organization. This practice helps keep the tools aligned with the organization’s evolving goals and fosters a culture of continuous improvement and adaptation.

### [Schedule Time for Experimentation](/practices/schedule-time-for-experimentation.md)

Regularly allocate time for teams to experiment with new tools, such as through hackathons or innovation days. Encourage team members to test new technologies and assess their suitability for the organization's needs. This practice fosters a culture of experimentation and growth, which can lead to significant performance improvements and greater team engagement.


## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Empowering Teams to Choose Tools)
- Upstream (they are a pre-requisite for Empowering Teams to Choose Tools)
- Downstream (Empowering Teams to Choose Tools is a pre-requisite for them)

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md) - Related

A generative organizational culture promotes learning, innovation, and trust, which are essential for empowering teams to make their own tool choices. By fostering a culture that values experimentation and feedback, teams are more likely to feel confident in recommending and selecting tools that best fit their evolving needs.

### [Team Experimentation](/capabilities/team-experimentation.md) - Related

Team experimentation is closely related to empowering teams to choose tools, as it encourages a mindset of testing and evaluating new approaches. A culture that values experimentation allows teams to rapidly iterate and find the best solutions for their specific challenges.

### [Job Satisfaction](/capabilities/job-satisfaction.md) - Downstream

The DORA research has found that job satisfaction tends to be higher in teams that feel empowered to choose their own tools.

### [Code Maintainability](/capabilities/code-maintainability.md) - Downstream

The DORA research has found that code maintainability tends to be higher in teams that feel empowered to choose their own tools.
