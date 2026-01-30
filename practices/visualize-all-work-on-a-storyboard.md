# Visualize All Work on a Storyboard

When everyone is busy, everyone tends to be caught up in their own world. Developers focus on their assigned tickets. QA focuses on testing queues. Ops focuses on incidents. Product focuses on stakeholder requests. Each person optimizes for their slice without seeing how those local optimizations create bottlenecks elsewhere in the system. Teams may work to improve and deliver in their areas of control and point the finger at others.  The result is suboptimization and a system and culture that may be working against itself.

A storyboard makes all work visible in one place. Unlike a sprint board that tracks only committed work, a storyboard captures everything happening across the team: feature work, bug fixes, production support, meetings, spikes, and the invisible coordination that consumes time but never gets tracked. When all work is visible, the team can see where effort is actually going, identify bottlenecks worth swarming on, and make prioritization decisions grounded in reality rather than assumptions.

The storyboard operationalizes your value stream. Start with a [Value Stream Mapping (VSM) workshop](#run-a-value-stream-mapping-workshop) to build a shared understanding of how work flows from idea to delivery. The VSM creates the map; the storyboard becomes the live operational dashboard that tracks work against that map. Together, they provide a data grounded view for assessing performance, spotting constraints, and measuring improvement over time.

## When to Experiment

- You are a team lead who notices that everyone seems busy, yet throughput remains low and lead times seem slow or getting slower.
- You are a developer who keeps getting pulled into unplanned work that never appears on the backlog or sprint board.
- You are a manager who struggles to explain where time goes when stakeholders ask why features take so long.
- You are part of a cross-functional team where handoffs between roles create delays that no one can quantify.
- You are trying to implement WIP limits but lack visibility into the actual work in progress.

## How to Gain Traction

Building a useful storyboard requires more than choosing a tool and creating columns. The value comes from the collective whole team process of mapping, discussing, and agreeing on what work exists and how it flows.

### Run a Value Stream Mapping Workshop

Before building the storyboard, gather the whole team for a VSM workshop. Include everyone who touches the work: developers, QA, product, ops, and anyone else involved in delivery. The goal is not to create a perfect diagram but to surface everyone's perspective on how work actually flows. When a developer hears QA describe waiting three days for a deployable build, or when product learns that "quick fixes" consume 30% of engineering time, the team develops a shared understanding that no individual possessed before. DORA provides a solid breakdown of how to run these workshops [here](https://dora.dev/guides/value-stream-management/). The value is in the collective hearing and telling.

### Identify All Work Types

Most teams undercount their work. Sprint boards may track planned features and bugs, but miss production support, technical debt, meetings, code reviews, on-call rotations, spikes, cross-team coordination, and those high priority features or enhancements that were not planned. During the VSM workshop, explicitly ask: "What else consumes your time that doesn't show up on our board?" Capture these categories. A storyboard that only shows planned work will give a false picture of capacity and create frustration when "unexpected" work inevitably appears.

### Design Columns That Match Your Value Stream

Your storyboard columns should reflect how work actually moves through your system, not an idealized process. If your VSM revealed that work frequently waits for code review, create a "Waiting for Review" column so that wait time becomes visible. If handoffs to QA create delays, make that queue explicit. The columns should make bottlenecks impossible to ignore. Common patterns include: Backlog, Ready, In Progress, Waiting (blocked/review/QA), Done. Adjust based on your actual flow.

### Make the Invisible Visible

Add swim lanes or card types for work that traditionally stays hidden: production support, meetings, unplanned requests, technical debt. When a developer spends half their day on incident response, that should appear on the board. When the team loses a day to an all-hands meeting, capture it. This visibility serves two purposes: it explains where capacity actually goes, and it creates pressure to reduce low-value activities. What gets measured gets managed.

### Establish Rituals Around the Board

A storyboard only works if the team uses it. Build rituals that center on the board: daily standups that walk the board through, bi-weekly reviews that examine flow metrics, and bi-weekly retrospectives that ask what the board revealed. The board should be the single source of truth for "what are we working on?" If conversations happen elsewhere, the board becomes stale and loses its value.

## Lessons From The Field

- *Start Imperfect, Refine Along the Way.* The first version of your storyboard will be wrong. Columns won't match reality, work types will be incomplete, and the team will resist updating it. That's fine. Treat the board as a living artifact that improves through use. After two weeks, revisit what's working and what's not.

- *Resistance Reveals Hidden Work.* When someone says "I don't have time to update the board," that's a signal. Either the board is too cumbersome, or their work is genuinely invisible and needs to be surfaced. Both are problems worth solving.

- *The Conversation Matters More Than the Artifact.* The VSM workshop creates value through discussion, not through the diagram it produces. When a QA engineer explains their bottlenecks and developers hear it for the first time, alignment happens. Don't rush through the workshop to produce a deliverable.

- *Bottlenecks Move.* Once you address the biggest constraint, another will emerge. This is expected. The storyboard helps you continuously identify where to focus improvement efforts rather than optimizing areas that aren't actually bottlenecks.

- *Physical Boards Create Different Conversations.* If your team is co-located, consider a physical board alongside any digital tool. Standing in front of a wall of cards creates different dynamics than clicking through a Jira board. The tactile act of moving cards reinforces ownership and makes blockers harder to ignore.

- *WIP Limits Need Visibility First.* Teams often try to implement WIP limits before they have visibility into actual work in progress. This creates frustration because limits feel arbitrary. Build the storyboard first, observe actual WIP for a few weeks, then set limits based on what you learn.

## Deciding to Polish or Pitch

After experimenting with this practice for 4-6 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Improved Shared Understanding.** Team members should be able to describe what others are working on and where the current bottlenecks are. Cross-functional conversations should reference the board as a shared artifact. If standup discussions become more focused and handoffs smoother, the board is working.

**Stronger Team Camaraderie.** When team members hear each other's challenges during VSM workshops and see each other's work on the board, empathy grows. People stop assuming others have it easy and start appreciating the full picture. This mutual understanding builds trust and shifts the dynamic from finger-pointing to problem-solving together.

### Fast & Tangible

**Reduced Invisible and Unplanned Work.** The gap between "what the board shows" and "what people are actually doing" should shrink. If production support or unplanned work previously went untracked, it should now be visible and quantifiable. You should be able to answer "what percentage of our capacity goes to unplanned work?"

### Slow & Tangible

**Improved Flow Metrics.** Track lead time (idea to delivery) and cycle time (work started to work completed). Over 8-12 weeks, these metrics should stabilize or improve as the team identifies and addresses bottlenecks. If metrics aren't improving, the board may be revealing problems the team isn't acting on.

### Slow & Intangible

**Better Prioritization Decisions.** Conversations about what to work on next should become grounded in data rather than opinion. Stakeholders should understand trade-offs more clearly. The team should feel less reactive and more intentional about where effort goes.

## Supported Capabilities

### [Work in Process Limits](/capabilities/work-in-process-limits.md)

A storyboard makes WIP visible, which is a prerequisite for setting meaningful limits. Without seeing all work in progress, teams cannot know whether they're over capacity or where work is piling up. The storyboard provides the visibility needed to set, enforce, and refine WIP limits based on actual data rather than guesses.

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md)

The storyboard operationalizes your value stream map. While VSM workshops create a shared understanding of how work flows, the storyboard makes that flow visible day-to-day. It surfaces where work waits, where handoffs create delays, and where the team should focus improvement efforts.

### [Visual Management](/capabilities/visual-management.md)

A well-designed storyboard is a core visual management tool. It makes the current state of work obvious at a glance, highlights what's blocked or at risk, and provides the foundation for data-driven conversations about priorities and progress.

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md)

The process of building a storyboard, especially when grounded in a VSM workshop, creates space for cross-functional dialogue and shared ownership. When team members hear each other's challenges and see how their work connects, trust and collaboration improve. The board becomes a neutral artifact that enables difficult conversations about priorities and trade-offs.

### [Well-Being](/capabilities/well-being.md)

Making all work visible reduces the stress of invisible overload. When unplanned work, meetings, and production support appear on the board, teams can have honest conversations about capacity. This visibility helps prevent burnout by making unsustainable workloads obvious rather than hidden.
