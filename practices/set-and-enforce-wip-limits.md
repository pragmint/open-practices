# Set and Enforce Work in Process Limits

When teams take on a large amount of work at the same time, it can create longer-lived branches, delayed reviews, and bottlenecks in quality assurance (QA). Individuals who are balancing multiple tasks may experience higher cognitive load, which tends to stretch out completion time as attention is repeatedly shifted.

Setting and enforcing work in process (WIP) limits helps teams stay focused, finish work already in motion, and reduce the overhead caused by context switching. By artificially constraining the number of active items in a specific stage of the workflow, the team creates a "pull system." New work starts only when there's capacity to handle it.

Ultimately, this practice shifts the team's mindset from resource efficiency (keeping everyone busy) to flow efficiency (getting value to the customer). It encourages swarming on blocked items and exposes bottlenecks in the process that were previously hidden by a mountain of open tickets.

## When to Experiment

- You're a developer who needs to learn how to prioritize tasks so you can move work across the finish line more quickly and avoid context switching.
- You're a team leader who needs to ensure members stay focused on work that matters most so you can avoid team burnout.
- You're a product owner who needs to see a more predictable flow of value delivery rather than a large batch of features that are "almost done."
- You're a QA engineer who needs to prevent a flood of testing tickets from arriving at the end of the sprint, which compromises quality.

## How to Gain Traction

Implementing WIP limits changes the fundamental mechanics of how a team works. It's best to start small, visualize the constraints, and agree as a team that the limit is a trigger for conversation, not just a rule to be broken.

### Set Limits That Feel Ambitious

When teams start by setting limits that feel ambitious, it forces them to make deliberate choices about what work matters most. The exact number depends on your team's context, but the goal is to find the sweet spot where teams feel focused but not hamstrung. A common starting point is to set your WIP limit to the size of the team plus one. For a team of four, try a limit of five active items across the board. If the limit is rarely hit, then it's too high; if it's hit constantly without resolution, then it's too low.

### Finish Work Before Starting New Work

Adopt the mantra: "Stop starting, start finishing." When team members are blocked or waiting, instead of starting new tickets, they should look for ways to contribute to tickets already on the board. This might include refining upcoming tickets, pairing on active work with other developers, performing code reviews, or helping QA test in-progress items. These activities keep the team moving without adding more work to the queue, reducing the average cycle time per ticket.

### Visualize All Work

Use a storyboard or value stream map to visualize all ongoing tasks, including hidden or auxiliary tasks like meetings, unplanned maintenance, or production support. When the board shows that a limit has been reached, treat it as a hard stop: No new work enters the system until something completes. This creates the pressure needed to finish what's started and forces the prioritization conversations that lead to better decisions.

## Lessons From The Field

- *Blocked Columns Still Count as Work in Process.* Teams often try to "game" the system by creating a "Blocked" or "Waiting" column with infinite capacity. This defeats the purpose. Blocked work is still work in process and consumes mental energy. Keep blocked items in their active column to visualize the pain of the dependency.
- *Slack Enables Swarming, Not Idleness.* Management may initially fear "idleness" if a developer can't pull a new ticket because the limit is hit. Explain that "slack" in the system is necessary for flow and that an idle developer should swarm to help a bottlenecked peer rather than start new features.
- *Limits Fail Without Visualization.* WIP limits usually fail if they aren't visualized. If the limit exists only in a policy document but not on the Jira board or physical wall, it will be ignored within a week.

## Deciding to Polish or Pitch

After experimenting with this practice for **2-3 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction.

### Fast & Intangible

**Standup Quality**. Daily standups shift from status updates ("I did this, I will do that") to blocker-focused discussions ("We are at our limit in QA, who can help clear this?").

### Fast & Measurable

**Reduction in Active Tickets**. The total count of tickets in "In Progress," "Review," and "Testing" states decreases, matching the agreed-upon limits.

### Slow & Intangible

**Improved Morale and Lower Stress**. Team members report feeling less overwhelmed and more satisfied by the frequency of actually completing tasks, rather than having many tasks permanently "in flight." Team members should also feel more supported by their peers, as they come in to swarm on blocked work more often.

### Slow & Measurable

**Decreased Cycle Time**. The time it takes for a single work item to move from "Started" to "Done" drops significantly as work stops languishing in queues.

## Supporting Capabilities

### [Work in Process Limits](/capabilities/work-in-process-limits.md)

WIP limits help teams deliver more value by finishing what matters most. The focus shifts from starting new work to moving existing work across the finish line with greater speed and quality.

### [Visual Management](/capabilities/visual-management.md)

You cannot limit what you cannot see. Visualizing the work and the limits explicitly on a board is the primary mechanism for enforcing this practice and identifying system constraints.

### [Well-being](/capabilities/well-being.md)

By reducing context switching and the pressure of juggling multiple unfinished tasks, WIP limits directly contribute to a sustainable pace of work and reduced burnout for team members.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

Lowering WIP is a prerequisite for continuous delivery. By reducing the batch size of work in the system, code moves through the pipeline faster, enabling more frequent and reliable releases.
