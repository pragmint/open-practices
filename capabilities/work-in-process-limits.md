# [Work-in-Process Limits](https://dora.dev/capabilities/wip-limits/)

Work-in-Process (WIP) refers to the total amount of work currently in progress. When teams have too much WIP, they experience delays waiting for code reviews or QA, along with frequent context switching. By limiting the number of tasks that are actively worked on, teams can achieve greater focus, reduce context switching, and enjoy an efficient workflow. 

For example, when WIP limits are set and enforced, team members who are blocked or waiting wouldn't start new tickets. Instead, they might pair with other developers on active work, perform code reviews to unblock others, help QA test in-progress items, or mob on complex problems that need multiple perspectives.  

Setting WIP limits **forces prioritization without creating waste.** The goal isn't to minimize WIP for its own sake, but to optimize for flow and value delivery. By hyper-focusing on prioritized items, teams increase system throughput, similar to how an express lane flows better than a congested highway with too many on- or off-ramps. 


## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Doesn't Allow Deferment of Difficult Decisions

Limiting WIP is hard because it continuously forces difficult decisions about reprioritization. This can be especially challenging when priorities are often changing. For teams to have effective conversations about shifting priorities, they need to openly discuss their challenges and align on new priorities. The constraints imposed by WIP limits serve as a forcing function, compelling teams to proactively engage in these discussions. By having these potentially uncomfortable conversations early and often, teams can address issues early, preventing dissent and confusion from building up. This approach also avoids rework, frustration, and decreased morale. 

### Invisible Work

Teams often overlook "invisible work," or tasks that are not clearly represented in the workflow, such as informal discussions or research tasks. For example, a team might spend hours coordinating via chat or email without formally logging this time, leading to an incomplete understanding of their workload. This oversight can obscure true bottlenecks and result in ineffective optimizations. For a deeper understanding of how to manage the challenges of invisible work, refer to the [Visibility of Work in the Value Stream](https://dora.dev/capabilities/visibility-of-work-in-the-value-stream/).

### Oversized WIP Limits

Setting WIP limits that are too high can defeat the purpose of the practice, as it allows too many tasks to be worked on simultaneously. This leads to context switching, delayed completion times, and increased stress for team members. Effective WIP limits should *force prioritization* and *encourage a single-task focus*. If everything is being treated as important, then nothing is actually being treated as important.

WIP limits aren't set in stone—regularly review and adjust. Monitor your flow metrics and team feedback to determine if your limits are too restrictive (causing idle time) or too permissive (allowing context switching and lead time lag). The goal is finding the sweet spot where teams feel focused but not hamstrung.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Work-in-Process Limits capability. Generally, score a 1 if this capability is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is mature and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of WIP limits.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **No Limits:** No WIP limits are set. Teams work on multiple tasks simultaneously, leading to inefficiencies and burnout.
2. **Loose Limits:** WIP limits are set, but they are not enforced. Teams often exceed them, resulting in delays and inefficiencies.
3. **Managed Limits:** WIP limits are set and enforced. Teams prioritize work based on capacity, but there is still room for improvement in reducing lead times and increasing flow.
4. **Optimized Flow:** WIP limits are optimized and continuously refined to minimize lead times, reduce variability, and achieve single-piece flow. There is a focus on continuous improvement and removing obstacles.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think WIP limits within your team are somewhere between loose and managed, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of WIP limits; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Work-in-Process Limits capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Visualize All Work on a Storyboard

Using a storyboard to represent all ongoing tasks helps make work visible, including hidden or auxiliary tasks like meetings or production support. This visualization allows the team to see the full workload and better manage WIP, ensuring that prioritization is based on complete information. The benefit is clearer communication and better identification of bottlenecks across the process.

### Set and Enforce WIP Limits

Start by setting limits that feel ambitious -- this forces teams to make deliberate choices about what work matters most. The exact number depends on your team's context, but the goal is to find the sweet spot where teams feel focused but not hamstrung. Display your WIP limits prominently on your board or dashboard. When the limit is reached, treat it as a hard stop -- no new work enters the system until something completes. This discipline creates the pressure needed to finish what's started and forces the prioritization conversations that lead to better decisions. 

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
