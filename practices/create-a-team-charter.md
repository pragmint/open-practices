# Create a Team Charter

Having an organizational structure that facilitates problem solving instead of obscuring core inefficiencies is foundational to setting an organization up for success. The goal is to provide leaders with easy to understand information and insight into where problems in the system might be. A reoccurring issue in many organizations is task flow obscurity. Tasks or tickets end up traveling through multiple teams for various reasons. Sometimes a task needs another team in order to make progress, other times the other team acts as a gate keeper for the task completion. Either way the task travels between many teams making it difficult to determine where that task is getting hung up in the process. This issue is often accompanied by statements like "I would have it done but team x..." or "We are done on our side, we're just waiting for team y to...". 

One step in mitigation of this issue is defining team responsibilities. A Team Charter is a foundational practice to start enabling the decoupling of teams. It is a living document that outlines roles, responsibilities,  decision-making processes, escalation paths and boundaries. 

Without clear boundaries, teams often fall into the trap of "passing the buck." Responsibility becomes diffuse across the organization, making it impossible to debug systemic issues. When a team cannot complete work without fine-grained coordination with outsiders, or when they point to another department for deployment failures, they are tightly coupled. A well-crafted charter defines not just how team members treat one another, but explicitly defines where their authority begins and ends, allowing them to take full ownership of their service from design to deployment.

## When to Experiment

- You are a Team Lead or Manager noticing that when things go wrong, the responsibility is spread across 30 or 40 people, making it impossible to "debug" the organization.
- You are a Developer who is technically "code complete" but constantly waiting on a separate DevOps or QA team to release your work, creating friction and delay.
- You are a Product Owner realizing that the team passes responsibility for failures to external dependencies rather than owning the outcome.
- You are forming a new cross-functional team and want to establish the "rules of engagement" and decision-making authority immediately to prevent future bureaucracy.
- You are an Engineering Director attempting to implement a service-oriented architecture, but finding that the organizational structure still mirrors the old monolith.

## How to Gain Traction

Creating a charter is the first step in moving from a culture of hand-offs to a culture of ownership. It does not require permission from upper management to start; it only requires the consensus of the immediate team.

### Define "Where The Buck Stops"

The most critical aspect of using a charter to achieve loose coupling is defining ownership. Gather the team and ask a hard question: "Do we have the authority to fix our own problems?" If a team passes the buck—saying, "I couldn't deploy because I'm waiting on Team B"—you have identified a coupling point.

Use the charter to explicitly list the boundaries of the team's service or product. State clearly that the team accepts full responsibility for the quality, availability, and deployment of their service. If the team currently relies on an external "DevOps" team to deploy, the charter should outline the goal of absorbing that capability so the buck stops with the team. By shrinking the circle of responsibility to the 5-8 people in the room, you make the system debuggable; if there is an error, the solution lies within the team, not in a ticket queue.

### Draft the Social and Technical Contract

Once ownership is defined, outline how the team will execute that responsibility. This section of the charter covers the "how": communication norms, meeting cadences, and conflict resolution. However, for loose coupling, it must also cover technical interfaces.

Document the team's "API" to the rest of the organization. How should other teams request work or data from you? To prevent interruptions and tightness, define standard communication channels (e.g., specific Slack channels, issue trackers, or code contracts). Establishing these ground rules reduces the need for fine-grained, constant communication with outsiders, allowing the team to focus on their independent work streams. Treat this document as a living artifact in a tool like Confluence, where it can be updated as the team evolves.

## Lessons From The Field

- **The DevOps Bottleneck:** In many organizations, developers claim they are blocked because "only the DevOps team has authority to deploy." While this may be the current rule, it creates a lack of responsibility. Teams that used their charter to explicitly identify this dependency as a risk were able to advocate for access or tooling to deploy themselves, eventually achieving the DORA metric of deploying on demand.
- **Debugging the Team:** It is significantly easier to identify the root cause of a failure when the responsibility is contained within a team of five people rather than spread across a department. Teams that embraced "buck stops here" clauses in their charters found that while it felt scary initially, their time-to-recovery (MTTR) dropped drastically because they stopped waiting for others to fix their mess.
- **The Living Poster:** One team turned their charter into a visual "Team Poster" on the wall. It served as a daily "North Star" for their agreements. When scope creep or external interference threatened their autonomy, they pointed to the poster to realign the conversation.
- **Contract Testing as Documentation:** High-performing teams realized that their charter's section on "external dependencies" was best enforced through code. They implemented contract testing to validate that their dependencies were met, effectively turning a social agreement into an automated architectural guardrail.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Reduced Ambiguity in Ownership**. Team members stop saying "that's not my job" or "we are waiting on them" and start asking "how can we unblock this?" There is a palpable sense of control over the team's destiny.

### Slow & Tangible

**Reduction in Handoffs**. The quantitative number of tickets, emails, or Slack messages required to coordinate a release decreases. Measurement of the "wait time" for approvals or external work shows a downward trend as the team absorbs responsibility.

## Supported Capabilities

### [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md)

This practice directly implements loose coupling by defining the boundaries of team authority and responsibility, minimizing the need for external coordination to get work done.

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md)

Charters build psychological safety by clearly defining roles and conflict resolution strategies, fostering a culture where information flows freely and failures are treated as inquiries.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)

By defining the "what" and the "why" in the charter, teams are better positioned to autonomously choose the "how" (tools and technologies) that best fits their specific bounded context.

### [Streamline Change Approval](/capabilities/streamline-change-approval.md)

When a charter establishes that the team has full ownership and accountability for their quality, it builds the trust required to remove external change approval boards and move toward peer review.
