# [Streamline Change Approval](https://dora.dev/capabilities/streamlining-change-approval/)

Streamlining change approval optimizes how system changes are reviewed and authorized for deployment. Traditional change management practices often depend on external reviewers or Change Approval Boards (CABs), which can introduce delays without significantly mitigating operational or security risks. Instead of eliminating the review function, the goals should be to *integrate corrective feedback earlier* in the development process and *automate routine tasks*, such as the number of spaces before code. This approach ensures a more consistent review process and frees up reviewers to focus on risks that are specific to a new change, such as security issues that may have been introduced. The result is a reduced review fatigue and faster, more rigorous review that requires less effort overall.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Risk Avoidance is Human Nature

When instability hits a system, our instinct is often to clamp down on controls and retreat to familiar—but-slower ways of working. However, responding to instability by adding heavier controls and time-consuming approvals can worsen delays and increase batch sizes, creating a vicious cycle that further degrades performance.

Failure is inevitable. Rather than trying to prevent all failures, focus on *minimizing their impact.* This encourages experimentation and continuous improvement. Over time, failures should naturally decrease as teams regularly learn from mistakes without fear of negative consequences.

### Cultural Resistance to Change

Team members may initially resist moving away from traditional change approval processes, fearing loss of control or exposure to risk. It's important to foster an environment of trust and transparency where the benefits of automation and early feedback are clearly communicated. Providing training and continuous support can help shift the organizational mindset toward embracing change and achieving a more agile workflow.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Streamline Change Approval capability. Generally, score a 1 if change approval is manual or completely lacking from your team or organization, a 2 if approvals are peer-reviewed and coordinated but you feel there is a LOT of room for improvement, a 3 if approvals are automated and efficient but you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of change approval.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Manual and Gatekeeping:** Changes require manual approval from a centralized Change Advisory Board (CAB) or external reviewers, creating a bottleneck and slowing down the delivery process.
2. **Peer-Reviewed and Coordinated:** Changes are manually verified, reviewed, and subsequently approved by peers. Changes require high levels of coordination when they affect multiple teams. It usually takes close to a week or more to get approval.
3. **Semi-automated and Efficient:** Changes are reviewed and approved through a mix of automated and manual processes, with peer review still in place. Coordination is more efficient and approval times are faster. When change approval is required, feedback is typically provided within a day or two.
4. **Streamlined:** The high level of automation in change approvals significantly reduces, and in some cases eliminates, the burden of peer review. A Change Advisory Board (CAB) may still exist, but their role is to simply advise and facilitate important discussions. When change approval is required, feedback is typically provided in under 24 hours.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think change approvals are somewhere between peer-reviewed and semi-automated, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Streamline Change Approval; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Streamline Change Approval capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Run Pair Programming Sessions](/practices/run-pair-programming-sessions.md)

Pair programming sessions facilitate collaboration, real-time code review, and knowledge sharing among developers. By working in pairs, developers can also catch issues early and ensure code is comprehensible, consistent, and in adherence with coding standards. This practice accelerates the onboarding process for new team members while helping experienced developers refine their skills. 

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

Conducting code reviews typically slows down the change approval process. But if code reviews don't block the ability to integrate changes and the focus remains on getting feedback early in the development process, then this practice can actually *accelerate* the change approval process.

### [Automate Coding Standards](/practices/automate-coding-standards.md)

Automating coding standards involves using tools and processes to automatically enforce coding standards, style guides, and other best practices during the coding phase. Doing so removes the burden of manual reviews for stylistic and some functional issues, allowing developers to focus on more complex problems and innovative solutions.

### [Perform Static Code Analysis](/practices/perform-static-code-analysis.md)

Performing static code analysis involves using automated tools to enhance code quality, consistency, and readability. These tools meticulously scan the codebase to identify potential issues — such as code smells, security vulnerabilities, and performance bottlenecks — early in the development process. By integrating static code analysis into version control systems, IDEs, and CI/CD pipelines, teams can receive immediate feedback on code changes, ensuring adherence to coding standards and best practices. This proactive approach reduces the cognitive load on reviewers, allowing them to focus on any unique risks that new changes present.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Streamline Change Approval)
- Upstream (they are a pre-requisite for Streamline Change Approval)
- Downstream (Streamline Change Approval is a pre-requisite for them)

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

To continuously integrate changes, the approval process must be streamlined. A lengthy approval process increases the number and size of changes waiting to be merged. This creates a review bottleneck that makes continuous integration impractical.

### [Monitoring & Observability](/capabilities/monitoring-and-observability.md) - Upstream

Having comprehensive monitoring and observability in place provides real-time feedback on the performance and stability of recently deployed changes,  reducing the burden on code reviewers. With the Monitoring & Observability capability met, teams can deploy changes with the confidence that any issues can be resolved quickly. This reduces the impact of bugs and the cost of missing something in the review process.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Test Automation enables Streamlining Change Approval by automatically ensuring code changes work as expected. This reduces the need for external approvals and speeds up the code review process.

### [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md) - Upstream

Loosely Coupled Teams can make independent changes without requiring extensive coordination with other teams. This autonomy enables teams to streamline their change approval processes, as they are not hindered by dependencies or external approvals.

### [Pervasive Security](/capabilities/pervasive-security.md) - Upstream

Pervasive Security embeds security practices throughout the development lifecycle, proactively addressing vulnerabilities *before* code review. By building security directly into the process, teams reduce the complexity and overhead of change approvals, and achieve faster and safer deployments.
