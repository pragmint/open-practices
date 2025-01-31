# [Visibility of Work in the Value Stream](https://dora.dev/devops-capabilities/process/work-visibility-in-value-stream/)

Work visibility in the value stream is a crucial capability that enables organizations to track and understand how work flows from idea to production. When teams lack visibility, they face challenges such as unclear priorities, hidden bottlenecks, and inefficiencies that slow down delivery. By improving visibility, organizations can ensure that all work—whether related to features, bugs, or technical debt—is transparent and aligned with business objectives.

An important aspect of this capability is the ability to identify and address bottlenecks that slow down progress. Work often gets delayed due to dependencies, unclear ownership, or excessive approvals, leading to frustration and reduced productivity. By implementing real-time tracking, dashboards, and collaboration tools, teams can monitor work as it moves through different stages, making it easier to identify problem areas and improve flow efficiency.

## Nuance

### Silos Based on Specialties

Work visibility can be reduced when teams are structured around narrow specializations, such as frontend, backend, or infrastructure. While specialization is valuable, excessive silos make it difficult to see the full value stream and create dependencies that slow down work. Cross-functional collaboration and shared visibility across disciplines are important to reducing these problems.

### Wrong Focus: Fixing Non-Bottlenecks

A common mistake is optimizing areas that aren’t true constraints, adding complexity without improving delivery speed. For example, a team struggling with slow feature releases might streamline code reviews, but if the real bottleneck is a slow manual testing process, this effort won’t meaningfully reduce lead times. Effective visibility should pinpoint where work is actually stuck—whether in testing, approvals, or deployments—so that improvements address real constraints rather than refining already efficient processes.

### Lack of Authority to Act on Insights

Even with clear visibility, teams may struggle to improve workflows if they lack the authority to make necessary changes. If decision-making is centralized or requires excessive approvals, visibility alone won’t solve inefficiencies. To be effective, teams need both insight into bottlenecks and the autonomy to address them quickly.

### Visibility Without Context Leads to Micromanagement

When leadership gains visibility into workflows without proper context, there’s a risk of micromanagement. For example, a manager reviewing cycle times might see that certain developers take longer to complete tickets and demand they "work faster," without realizing they are handling the most complex tasks. Instead of using visibility to enforce rigid oversight, organizations should use it to empower teams, ensuring insights lead to informed decisions rather than unnecessary pressure.

### Focusing Only on Metrics, Not the Flow of Work

Visibility should provide insights into how work moves through the system, not just a set of numbers. For example, a team tracking story points completed per sprint might look productive on paper, but if work is frequently reworked due to unclear requirements, the true flow of value is poor. Metrics alone don’t tell the full story—teams should also analyze dependencies, handoffs, and qualitative feedback to ensure they are improving efficiency, not just increasing output.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Code Maintainability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

[Code Review Process](/practices/conduct-code-reviews.md)

The code review process plays a crucial role in work visibility by providing insights into the status and quality of changes.
A well-structured review process ensures that teams can track work progress, identify slow-moving changes, and resolve blockers efficiently.
Poorly managed reviews, however, can become an invisible bottleneck, delaying work without clear visibility into why.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Visibility of Work in the Value Stream)
- Upstream (they are a pre-requisite for Visibility of Work in the Value Stream)
- Downstream (Visibility of Work in the Value Stream is a pre-requisite for them)

### [Work in Progress (WIP) Limits](/capabilities/work-in-process-limits.md) - Related

Limiting WIP helps maintain visibility by preventing work from piling up in hidden queues. When teams take on too many tasks simultaneously, work becomes harder to track, leading to inefficiencies and delays. Enforcing WIP limits ensures that work remains manageable and transparent, making it easier to identify and resolve bottlenecks in the value stream.

### [Streamlining Change Approval](/capabilities/streamline-change-approval.md) - Related

Work visibility and streamlined change approvals go hand in hand, as unclear approval processes can create hidden bottlenecks that slow down delivery. Without visibility, teams may struggle to track where approvals are delayed or why changes are stuck in review. By making approval steps transparent and reducing unnecessary manual gates, organizations improve workflow efficiency, ensuring changes move smoothly through the value stream.

### [Test Data Management](/capabilities/test-data-management.md) - Upstream

Effective test data management is a prerequisite for work visibility, especially in testing and validation stages. If teams lack access to relevant, consistent test data, they may struggle to track work progress accurately, leading to hidden bottlenecks.

### [Automated Testing](/capabilities/test-automation.md) - Upstream

Automated testing improves work visibility by providing fast feedback on changes.
Without automation, testing becomes a major bottleneck, making it difficult to track progress accurately.
High visibility into automated test results allows teams to detect issues early and maintain a steady workflow, supporting overall value stream efficiency.

## Key Points (This will be deleted when the capability page is completed)

### Summary

Visibility of work represents the extent to which teams have a good understanding of the flow of work from the business all the way through to customers, and whether they have visibility into this flow, including the status of products and features.

### Capabilities of Lean Product Management

* Visibility of work in the value stream
* Working in Small Batches
* Team Experimentation
* Visibility into customer feedback

### Measurements

* Profitability
* Market share
* Productivity

### How to Implement

* Teams understand how work moves through the business from idea to customer, including products or features. (Could be added to how to improve)
* Team has visibility into the flow of this work.
* Flow of working is shown on visual displays or dashboards.

### [Value Stream Mapping](https://books.google.com.do/books/about/Value_Stream_Mapping_How_to_Visualize_Wo.html?id=ll7imAEACAAJ&redir_esc=y) (Maybe a practice)

Metrics:

* Lead time: the time from the point a process accepts a piece of work to the point it hands that work off to the next downstream process.
* Process time: the time it would take to complete a single item of work if the person performing it had all the necessary information and resources to complete it and could work uninterrupted.
* Percent complete and accurate (%C/A): the proportion of times that a process receives something from an upstream process that it can use without requiring rework.

[Lean Enterprise](https://www.oreilly.com/library/view/lean-enterprise/9781491946527/)

### Visualize the current status of work

* Card wall
* Story Board
* Kaban Board (Practice)

### Common pitfalls (Maybe good for nuance section)

(Nuances)
* Silos based on specialties
* Wrong focus: Prioritizing non-bottlenecks wastes effort without improving lead times.
* Lack of authority: Teams need decision-making power to implement changes effectively.

Related capabilities
* Work in Process Limits
* Visual management

### How to improve visibility of the work stream

* Use visual tools: Provide displays to track work, flow, lead times, and rework to identify improvement opportunities.
* Create value stream maps: Map workflows from idea to outcome, measure key metrics, and plan future improvements.
* Share and update artifacts: Ensure visibility of mapping results across the organization and update them at least annually.

### How to measure

* Is there a value stream map?
* Does everybody in the organization have access to a visual display that shows what they're working on and the status of their work?
* Are statistics on metrics such as lead times and %C/A available to the team?

[Kanban: Successful Evolutionary Change for Your Technology Business](https://books.google.com.do/books/about/Kanban.html?id=RJ0VUkfUWZkC&redir_esc=y)

## Summary
## Nuance
## Supporting Practices

* Double-loop learning