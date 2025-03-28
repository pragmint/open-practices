# [Working in Small Batches](https://dora.dev/capabilities/working-in-small-batches/)

Working in small batches means delivering work in little, manageable increments. Think of "small batch" as smallest possible unit of value that can be tested and iterated upon. This means breaking down features into smaller, deployable increments that provide feedback and validate assumptions early. 

Making many small changes may feel slower than a single large change. But extensive research -- including the DORA reports -- shows that teams that continuously refine and adapt based on real-world usage, rather than upfront assumptions and predictions, achieve faster lead times, higher deployment frequency, lower failure rates, and faster recovery times. Big changes can cause integration problems and delay error discovery, creating unpredictable hiccups. Even if the progress seems slower, making small changes helps teams learn faster, adjust easier, and maintain a steady pace.

For example, consider a team building an internal expense reporting tool. Traditionally, they might spend months creating a complete system with receipt scanning, auto-categorization, and advanced approval workflows. A small-batch approach, however, begins with something simpler, like a basic form for entering expenses manually. After releasing this minimal version, the team might quickly learn that managing receipts is the main user frustration, prompting them to prioritize adding a straightforward upload feature next. Over time, they may discover features like auto-categorization or complex approvals aren't as critical as originally thought. 

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Thoughtful, Collaborative Upfront Design

Traditionally, software requirements are conceived by leaders or product specialists. The focus is usually on new features or functionality, covering all bells and whistles and all known edge cases. The ideas are presented to designers and developers who must then turn these dreams into reality. But dependencies, intertwined logic, and incorrect assumptions tend to surface during implementation. This workflow is not conducive to working in small batches. 

Breaking work into small, independently deliverable batches requires thoughtful upfront software design. Product, engineering, and design teams need to collaborate on requirements early and be willing to continually rethink designs and priorities throughout implementation.

### Misinterpretation of "Small Batches"

Teams sometimes mistake “small batches” for “small tasks” without considering the value each batch delivers. If small batches lack user value, or fail to provide meaningful feedback, then they don't support the goal of rapid iteration.

### Neglecting Long-Term Objectives

A narrow focus on small, immediate "tasks" can distract from the project's long-term objectives. It's important to balance the benefits of incremental work with broader strategic planning to ensure that all updates represent *meaningful contributions* to the project's overarching goals.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Working in Small Batches capability. Generally, score a 1 if this capability is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is mature and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Working in Small Batches.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Large Batches:** Work is done in large batches that take a long time (months) to complete, resulting in reduced visibility into progress, increased integration effort, delayed value, and high variability.
2. **Moderate Batches:** Batches are moderately sized, taking several weeks to complete. There may be some delays in integration and value delivery, and moderate variability, making it difficult to track progress.
3. **Small Batches:** Work is broken down into small batches that can be completed and integrated quickly (days). There is clear visibility into progress, relatively low integration effort, and faster value delivery with some variability.
4. **Minimal Viable Batches:** Work is decomposed into extremely small, minimal viable batches that can be completed and integrated rapidly (hours). There is clear and continuous visibility into progress, minimal integration effort, and fast value delivery with low variability.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team works somewhere between moderate and small batches, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Working in Small Batches; you would likely benefit from evaluating your scores in other capabilities.


## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Working in Small Batches capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.


### Target an MVP

Start with defining a clear Minimum Viable Product (MVP). This is the simplest version of a product or feature that delivers value to users and allows the team to gather actionable feedback quickly. Focus on identifying core user needs, then work in small batches to deliver on just those. A good MVP should be achievable quickly, typically within weeks rather than months, to ensure rapid feedback.

### Run a Story-Splitting Workshop

Hold sessions to break down user stories into smaller, independently valuable increments. Teams can practice decomposing features into smaller, more manageable chunks that can be delivered quickly. This will likely push teams out of their comfort zone and open their minds to a new way of thinking about slicing work.

### Instrument Your System With Telemetry

To understand which batch to target next, it's useful to measure the value your system is creating. Instrument key parts of your application with telemetry data to gain real-time insights into usage patterns, performance bottlenecks, and opportunities to prioritize impactful changes.

### Use Feature Toggles to Integrate More Frequently

When teams can toggle features on or off, they can separate deployment from release and safely integrate changes while development is ongoing. This functionality also encourages the habit of splicing in small changes. Feature toggles are designed to be short-lived; avoid cluttering the codebase with long-term toggles by planning their removal once the feature has proven its value.

### Branch by Abstraction to Integrate More Frequently

Branch by Abstraction, a technique popularized by Martin Fowler, delivers a similar outcome as feature toggles. Teams typically prefer Branch by Abstraction when undertaking complex refactoring of legacy systems, extensive architectural changes, or replacing critical infrastructure where incremental transition is necessary. Feature toggles are meant to be short-lived, whereas Branch by Abstraction provides a path to permanently evolving the codebase without lingering conditional logic.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Working in Small Batches)
- Upstream (they are a pre-requisite for Working in Small Batches)
- Downstream (Working in Small Batches is a pre-requisite for them)

### [Streamline Change Approval](/capabilities/streamline-change-approval.md) - Upstream

Streamlined change approval processes reduce friction and delays, enabling teams to deliver smaller increments more frequently without being slowed down by bureaucratic approvals.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Effective test automation ensures rapid feedback on each small batch. It quickly verifies that incremental changes function correctly and safely integrate into the broader system. Without reliable test automation, frequent small-batch delivery becomes impractical.

### [Version Control](/capabilities/version-control.md) - Upstream

Version control gives teams the foundational tooling necessary to safely manage and integrate small batches of changes. Without effective version control, small-batch delivery becomes difficult or impossible to sustain.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Strong monitoring and observability allow teams to quickly validate whether a small increment is working correctly in an integrated environment. If the capability of Monitoring and Observability is not in a mature place, then verification must be done manually for each batch.

### [Work in Process Limits](/capabilities/work-in-process-limits.md) - Related

Work in Process (WIP) Limits help teams manage their workload by setting constraints on concurrent work. This encourages batch completion before taking on new tasks, which aligns with the principle of small-batch delivery to maintain flow and efficiency.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Working in small batches enables the *continuous* part of continuous integration. When changes are smaller and more frequent, they can be tested and integrated quickly, and issues can be detected and resolved early. This reduces integration friction and improves software quality.

### [Trunk-Based Development](/capabilities/trunk-based-development.md) - Downstream

Working in small batches enables trunk-based development by encouraging frequent integration of small increments of work into a mainline branch, reducing merge conflicts and ensuring smooth delivery.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Downstream

Working in small batches gives teams the agility to respond rapidly to insights gained from monitoring systems. This enables quicker, data-informed decisions that also help determine future development priorities.
