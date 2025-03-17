# [Working in Small Batches](https://dora.dev/capabilities/working-in-small-batches/)

Working in small batches means delivering work in small, manageable increments to reduce risk, accelerate feedback, and improve efficiency. While making many small changes may feel slower than a single large change, extensive research—including the DORA reports—shows that teams delivering in smaller batches achieve faster lead times, higher deployment frequency, lower failure rates, and faster recovery times.

Big changes can cause problems when integrating and delay error discovery, creating unpredictable delays. Making small changes spreads those integration challenges out more evenly and surface errors quickly. Even if the progress seems slower, making small changes helps teams learn faster, adjust easier, and maintain a steady pace.

A small batch is smallest possible unit of value that can be tested and iterated upon. This means breaking down features into smaller, deployable increments that provide feedback and validate assumptions early. By continuously refining and adapting based on real-world usage rather than upfront assumptions and predictions, teams can reduce wasted effort and mitigate risk of failure.

For example, consider a team building an internal expense reporting tool. Traditionally, they might spend months creating a complete system with receipt scanning, auto-categorization, and advanced approval workflows. A small-batch approach, however, begins with something simpler, like a basic form for entering expenses manually. After releasing this minimal version, the team might quickly learn that managing receipts is the main frustration, prompting them to prioritize adding a straightforward upload feature next. Over time, they may discover features like auto-categorization or complex approvals aren't as critical as originally thought. By delivering smaller increments and improving based on real user feedback, the team provides value sooner and reduces wasted effort.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Managing Organizational Resistance

Traditionally, software requirements are conceived by either leaders in the organization or with product specialists. Usually the focus is on new features or functionality. When people design systems, they want them to be great. So it's common for them to be conceived with all of the bells and whistles, covering all known edge cases. Then the ideas are presented to designers and developers to turn those dreams into reality. This workflow is not conducive to working in small batches.

Changes tend to have hidden dependencies, intertwined logic, and assumptions that only become clear during implementation. Breaking work into genuinely small, independently deliverable batches demands thoughtful upfront design. Product, engineering, and design teams need to collaborate and have a willingness to rethink designs and priorities continually.

### Misinterpretation of Small Batches

Teams sometimes mistake “small batches” for “small tasks” without considering the value each batch delivers. If small batches lack user value or fail to provide meaningful feedback, they don't support the goal of rapid iteration.

### Neglecting Long-Term Planning

A narrow focus on small, immediate tasks can distract from the bigger picture and long-term objectives of the project. It's important to balance the benefits of incremental work with broader strategic planning to ensure that all updates represent meaningful contributions to the project's overarching goals.

## Supporting Practices

### Target an MVP

Start with defining a clear Minimum Viable Product (MVP)—the simplest version of a product or feature that delivers value to users and allows the team to gather actionable feedback quickly. Focus on identifying core user needs, then delivering just those. A good MVP should be achievable quickly, typically within weeks rather than months, to ensure rapid feedback.

### Run a Story-Splitting Workshop

Hold sessions dedicated to breaking down user stories into smaller, independently valuable increments. Teams can practice decomposing features into smaller, more manageable chunks that can be delivered quickly. This will likely push teams out of their comfort zone and open their minds to a new way of thinking about slicing work.

### Instrument Your System With Telemetry

To understand what batch to target next, it's useful to measure the value your system is creating. By instrumenting key parts of your application with telemetry data, teams gain real-time insights into usage patterns, performance bottlenecks, and opportunities to prioritize impactful changes effectively.

### Use Feature Toggles to Integrate More Frequently

Teams can toggle features on or off, allowing them to separate deployment from release. This functionality allows changes to integrate safely even while development is ongoing. It also establishes the habit of splicing in small changes. Feature toggles are designed to be short-lived; avoid cluttering the codebase with long-term toggles by planning their removal once the feature has proven its value.

### Branch by Abstraction to Integrate More Frequently

Branch by Abstraction is a technique popularized by Martin Fowler which accomplishes a similar outcome as feature toggles. Teams typically prefer branch by abstraction when undertaking complex refactoring of legacy systems, extensive architectural changes, or replacing critical infrastructure where incremental transition is necessary. Feature toggles are meant to be short-lived, where the branch by abstraction pattern provides a path to permanently evolving the codebase without lingering conditional logic.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Working in Small Batches)
- Upstream (they are a pre-requisite for Working in Small Batches)
- Downstream (Working in Small Batches is a pre-requisite for them)

### [Streamline Change Approval](/capabilities/streamline-change-approval.md) - Upstream

Streamlined change approval processes reduce friction and delays, enabling teams to deliver smaller increments more frequently without being slowed down by bureaucratic approvals.

### [Test Automation](/capabilities/test-automation.md) - Upstream

Effective test automation ensures rapid feedback on each small batch, verifying quickly that incremental changes function correctly and safely integrate into the broader system. Without reliable automated tests, frequent small-batch delivery becomes impractical.

### [Version Control](/capabilities/version-control.md) - Upstream

Version control provides teams with the foundational tooling necessary to safely manage and integrate small batches of changes. Without effective version control, small batch delivery becomes difficult or impossible to sustain.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Strong monitoring and observability allow teams to validate quickly whether a small increment is working correctly in an integrated environment. Without this capability in a mature place, that sort of verification needs to happen manually for each batch.

### [Work in Process Limits](/capabilities/work-in-process-limits.md) - Related

WIP Limits help teams manage their workload by setting constraints on concurrent work. This encourages batch completion before taking on new tasks, aligning well with the principle of small batch delivery to maintain flow and efficiency.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Working in small batches enables the continuous part of continuous integration. When changes are smaller and more frequent, they can be integrated quickly, tested reliably, and issues can be detected and resolved earlier, reducing integration friction and improving software quality.

### [Trunk-Based Development](/capabilities/trunk-based-development.md) - Downstream

Small batches enables trunk-based development, encouraging frequent integration of small increments of work into a mainline branch, reducing merge conflicts and ensuring smooth incremental delivery.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Downstream

Working in small batches gives teams the agility needed to respond rapidly to insights gained from monitoring systems, enabling quicker, data-informed decisions that optimize future development priorities.
