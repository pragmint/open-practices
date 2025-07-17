# [Work in Process Limits](https://dora.dev/capabilities/wip-limits/)

Work in Process (WIP) refers to the total amount of work currently in progress. Setting limits on WIP is an effective strategy to reduce lead times, enabling organizations to respond more quickly to the most important customer demands.

When teams have too much work in progress simultaneously, they experience delays waiting for code reviews or QA along with frequent context switching. WIP limits help teams stay focused and finish work already in motion, reducing the overhead caused by juggling multiple tasks. When team members are blocked or waiting, instead of starting new tickets, they can contribute in other ways such as: pairing on active work with other developers, performing code reviews, or helping QA test in-progress items.

The key insight is that **WIP limits should force prioritization without creating waste.** The goal isn't to minimize WIP for its own sake, but to optimize for flow and value delivery. By hyper-focusing on prioritized items, teams increase system throughput, similar to how an express lane flows better than a congested highway with too many on/off-ramps. This approach creates shorter lead times, fewer stuck tickets, less context switching, and higher overall value delivery.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Doesn't Allow Deferment of Difficult Decisions

Limiting WIP is hard because it continuously forces difficult prioritization questions, especially as priorities often change. For teams to have effective conversations about these shifting priorities, they need to openly discuss their challenges and align on new priorities. By front-loading these small but potentially uncomfortable conversations, teams can address issues early, preventing dissent and confusion from building up.

The constraints imposed by WIP limits serve as a forcing function, compelling teams to engage in these discussions proactively. This proactive approach avoids the risk of significant corrections later in the process, which can lead to rework, frustration, and decreased morale. High-performing teams make it a habit to engage in these discussions early and often to ensure clarity and alignment, ultimately fostering a more cohesive and productive work environment.

### Invisible Work

Teams often overlook "invisible work" tasks not clearly represented in the workflow, such as informal discussions or research tasks. For example, a team might spend hours coordinating via chat or email without formally logging this time, leading to an incomplete understanding of their workload. This oversight can obscure true bottlenecks and result in ineffective optimizations. For a deeper understanding of how to manage these challenges, refer to the [Visibility of Work in the Value Stream](https://dora.dev/capabilities/visibility-of-work-in-the-value-stream/) for more insights.

### Oversized WIP Limits

Setting WIP limits that are too high can defeat the purpose of the practice, as it allows too many tasks to be worked on simultaneously. This leads to context switching, delayed completion times, and increased stress. Effective WIP limits should force prioritization and encourage a single-task focus. If everything is being treated as important, then nothing is actually being treated as important.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Work in Process Limits capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Visualize All Work on a Storyboard

Using a storyboard to represent all ongoing tasks helps make work visible, including hidden or auxiliary tasks like meetings or production support. This visualization allows the team to see the full workload and better manage WIP, ensuring that prioritization is based on complete information. The benefit is clearer communication and better identification of bottlenecks across the process.

### Enforce WIP Limits

Start by setting limits that feel ambitious. This forces teams to make deliberate choices about what truly matters. The exact number depends on your team's context, but the goal is to create enough constraint to drive more effective prioritization and collaboration.

When work gets blocked, collaborate rather than start new work. Instead of picking up new tickets, team members should:
- Pair with other developers on active work
- Perform code reviews to unblock others
- Help QA test in-progress items
- Mob on complex problems that need multiple perspectives

Make the WIP constraint visible and respected. Display your WIP limits prominently on your board or dashboard. When the limit is reached, treat it as a hard stop—no new work enters the system until something completes. This discipline creates the pressure needed to finish what's started and forces the prioritization conversations that lead to better decisions.

Regularly review and adjust. WIP limits aren't set in stone. Monitor your flow metrics and team feedback to determine if your limits are too restrictive (causing idle time) or too permissive (allowing context switching and lead time lag). The goal is finding the sweet spot where teams feel focused but not hamstrung.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Work in Process Limits)
- Upstream (they are a pre-requisite for Work in Process Limits)
- Downstream (Work in Process Limits is a pre-requisite for them)

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Upstream

Visibility of Work in the Value Stream makes all tasks, workflows, and bottlenecks transparent across the entire value stream, ensuring teams have complete awareness of work items and their current status.

By providing comprehensive visibility into work patterns and bottlenecks, teams can set more accurate WIP limits based on real data rather than assumptions. This upstream capability enables teams to identify where work gets stuck and make informed decisions about where to apply WIP limits for maximum impact.

### [Working in Small Batches](/capabilities/working-in-small-batches.md) - Related

Working in Small Batches promotes incremental progress by breaking work into manageable, completable units that can flow through the system more efficiently, enabling faster feedback loops and more predictable delivery patterns.

Smaller batches naturally support WIP limits by making work items more completable and reducing the risk of work getting stuck in progress. When teams work in small batches, they can more easily adhere to WIP limits because individual items complete faster, creating space for new work to enter the system.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery enables teams to release software changes reliably and frequently by automating the entire delivery pipeline from code commit to production deployment.

WIP limits enhance Continuous Delivery by ensuring teams complete work before starting new tasks, which reduces the risk of integration problems and enables more frequent, reliable releases. When teams maintain appropriate WIP limits, they can focus on finishing and delivering work rather than accumulating partially complete features that create deployment complexity.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Related

Monitoring Systems to Inform Business Decisions provides teams with data-driven insights about system performance and business outcomes through comprehensive monitoring and observability practices.

Effective monitoring helps teams understand how WIP limits impact their delivery performance by tracking metrics like lead time, cycle time, and throughput. By correlating WIP limit changes with these key performance indicators, teams can make data-driven decisions about whether their limits are optimally configured for maximum flow and delivery speed.
