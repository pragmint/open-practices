# Set and Enforce Work-in-Process Limits

Teams often have too much work in progress at once. This leads to long-lived branches, delayed code reviews, bottlenecks in QA, and constant context switching. When individuals juggle multiple tasks, cognitive load increases, and the time required to complete any single task expands significantly due to the cost of refocusing.

Setting and enforcing work-in-process (WIP) limits helps teams stay focused, finish work already in motion, and reduce the overhead caused by task-switching. By artificially constraining the number of active items in a specific stage of the workflow, the team creates a "pull system" where new work is only started when there is capacity to handle it.

Ultimately, this practice shifts the team’s mindset from resource efficiency (keeping everyone busy) to flow efficiency (getting value to the customer). It encourages swarming on blocked items and exposes bottlenecks in the process that were previously hidden by a mountain of open tickets.

## When to Experiment

- You are a Developer and you need to learn how to prioritize tasks so you can move work across the finish line more quickly and avoid context switching.
- You are a Team Leader and you need to ensure members stay focused on work that matters most so that you can avoid team burnout.
- You are a Product Owner and you need to see a more predictable flow of value delivery rather than a large batch of features that are "almost done."
- You are a QA Engineer and you need to prevent a flood of testing tickets from arriving at the end of the sprint, which compromises quality.

## How to Gain Traction

Implementing WIP limits changes the fundamental mechanics of how a team works. It is best to start simply, visualize the constraints, and agree as a team that the limit is a trigger for conversation, not just a rule to be broken.

### Set Limits that Feel Ambitious

When teams start by setting limits that feel ambitious, it forces them to make deliberate choices about what work matters most. The exact number depends on your team's context, but the goal is to find the sweet spot where teams feel focused but not hamstrung. A common starting calculation is to set the total WIP limit to `(Team Size * 2) - 1`. For a team of 4, try a limit of 7 active items across the board. If the limit is rarely hit, it is too high; if it is hit constantly without resolution, it is too low.

### Finish Work Before Starting New Work

Adopt the mantra: "Stop starting, start finishing." When team members are blocked or waiting, instead of starting new tickets, they should look for ways to contribute to tickets already on the board. This might include refining upcoming tickets, pairing on active work with other developers, performing code reviews, or helping QA test in-progress items. These activities keep the team moving without adding more work to the queue, reducing the average cycle time per ticket.

### Visualize All Work

Use a storyboard or dashboard tool to visualize all ongoing tasks, including hidden or auxiliary tasks like meetings, unplanned maintenance, or production support. When the board shows that a limit has been reached, treat it as a hard stop—no new work enters the system until something completes. This creates the pressure needed to finish what's started and forces the prioritization conversations that lead to better decisions.

## Lessons From The Field

- Teams often try to "game" the system by creating a "Blocked" or "Waiting" column with infinite capacity. This defeats the purpose; blocked work is still work in process and consumes mental energy. Keep blocked items in their active column to visualize the pain of the dependency.
- Management may initially fear "idleness" if a developer cannot pull a new ticket because the limit is hit. It is crucial to explain that "slack" in the system is necessary for flow and that an idle developer should swarm to help a bottlenecked peer rather than starting new features.
- A common pattern is realizing that the bottleneck isn't development, but Code Review or QA. WIP limits effectively highlight these stages, forcing the whole team to take responsibility for quality rather than throwing code over the wall.
- WIP limits usually fail if they are not visualized. If the limit exists only in a policy document but not on the Jira board or physical wall, it will be ignored within a week.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Standup Quality**. Daily standups shift from status updates ("I did this, I will do that") to blocker-focused discussions ("We are at our limit in QA, who can help clear this?").

### Fast & Tangible

**Reduction in Active Tickets**. The total count of tickets in "In Progress," "Review," and "Testing" states decreases, matching the agreed-upon limits.

### Slow & Tangible

**Decreased Cycle Time**. The time it takes for a single work item to move from "Started" to "Done" drops significantly as work stops languishing in queues.

### Slow & Intangible

**Improved Morale and Lower Stress**. Team members report feeling less overwhelmed and more satisfied by the frequency of actually completing tasks, rather than having many tasks permanently "in flight."

## Supported Capabilities

### [Work-in-Process Limits](/capabilities/work-in-process-limits.md)

WIP limits help teams deliver more value by finishing what matters most. The focus shifts from starting new work to moving existing work across the finish line with greater speed and quality.

### [Visual Management](/capabilities/visual-management.md)

You cannot limit what you cannot see. Visualizing the work and the limits explicitly on a board is the primary mechanism for enforcing this practice and identifying system constraints.

### [Well-Being](/capabilities/well-being.md)

By reducing context switching and the pressure of juggling multiple unfinished tasks, WIP limits directly contribute to a sustainable pace of work and reduced burnout for team members.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

Lowering WIP is a prerequisite for continuous delivery. By reducing the batch size of work in the system, code moves through the pipeline faster, enabling more frequent and reliable releases.
