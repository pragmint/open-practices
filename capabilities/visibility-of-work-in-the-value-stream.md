# [Visibility of Work in the Value Stream](https://dora.dev/capabilities/work-visibility-in-value-stream/)

To create visibility of work as it passes through a value stream, one first needs to map out the value stream. A Value Stream Map (VSM) is a visual tool that outlines all the steps in delivering software, from idea to deployment. It highlights how work flows across teams, helping identify delays, bottlenecks, and inefficiencies.

For software teams, VSMs reveal wasted time, like slow code reviews or long deployment cycles, and provide clarity to improve workflows and deliver value faster.

High-performing teams not only have clearly defined VSMs, but they track the flow-related metrics for each phase of work like the following:

- **Lead Time**: Total time from accepting work to handing it off (including waiting).
- **Process Time**: Time to complete a task without interruptions.
- **% Complete**: Share of work received that is fully finished as expected.
- **% Accurate**: Share of work received that is error-free and doesn’t need rework.

With this information, you can pinpoint areas with poor-quality outputs requiring downstream fixes (low %C/A) and steps where lead times are significantly longer than process times. Addressing these issues involves collaborating with stakeholders to create a future-state VSM that outlines the ideal workflow. This sets the foundation for a clear, incremental plan to refine and improve the process over time - thus delivering value to users faster.

## Nuance

### Value Stream Mapping is More Than Just Having a Sprint Board

Sprint boards track work from the time it enters a sprint to deployment, focusing on tasks within that sprint. Value Stream Maps (VSMs), however, provide a broader view, starting from the idea phase and extending through deployment. They capture phases like analysis, grooming, design, and estimation, as well as the time between and within these phases. This comprehensive tracking highlights inefficiencies and delays that sprint boards alone cannot reveal, enabling teams to optimize the entire workflow.

### Leaders Often Incorrectly Assume Teams Know This Stuff

Many organizations assume that employees have a good understanding of the entire value stream, but this is rarely the case. During value stream mapping exercises, team members often discover unexpected gaps and complexities in how work flows across different departments. Without a comprehensive view, teams may struggle to align on priorities and improvement efforts, reducing the effectiveness of value stream improvements.

### Everyone Needs To Be Involved

This isn't just an academic exercise for managers. Participation from everyone involved in the work is essential.  Everyone's input is required to ensure the value stream map reflects reality, not assumptions, and highlights actionable areas for improvement. Broad participation also builds alignment and shared accountability for making meaningful changes.

### Don't Use To Micro-Manage Individual Stories

This is a tool for teams to visualize and improve the overall flow of work across the value stream. It should empower teams to identify and resolve systemic issues rather than being used by leaders to micro-manage individual stories or track granular progress. The focus should remain on optimizing the process as a whole, not controlling day-to-day details.

### Focusing on Improving Non-Bottleneck Areas

Efforts to improve efficiency in areas that are not bottlenecks may have minimal impact or, in some cases, even worsen overall flow. Improvements should target the most significant constraints in the value stream to have a meaningful effect on lead times and delivery performance.

### Lack of Authority to Implement Changes

Participants in visibility initiatives often lack the authority to implement necessary changes. Without decision-making power, these efforts can stall, making it harder to achieve the desired future state. Successful implementation requires both support and autonomy to act on findings.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Code Maintainability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Implement Value Stream Mapping Workshops

Conduct regular value stream mapping (VSM) workshops involving representatives from each stage of the value stream. Focus on both mapping out the current VSM and on ideal future-state VSMs. Break down the flow into clear process blocks and identify key metrics like lead time, process time, and percent complete and accurate (%C/A)

### Set Work-in-Process (WIP) Limits

Establish and enforce WIP limits for tasks in the value stream to prevent overload and maintain a steady flow. By limiting the number of tasks being actively worked on, teams can focus better, reduce context switching, and enhance flow efficiency, leading to faster delivery.

### [Code Review Process](/practices/conduct-code-reviews.md)

The code review process plays a crucial role in work visibility by providing insights into the status and quality of changes. A well-structured review process ensures that teams can track work progress, identify slow-moving changes, and resolve blockers efficiently. Poorly managed reviews, however, can become an invisible bottleneck, delaying work without clear visibility into why.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Visibility of Work in the Value Stream)
- Upstream (they are a pre-requisite for Visibility of Work in the Value Stream)
- Downstream (Visibility of Work in the Value Stream is a pre-requisite for them)

### [Work in Progress Limits](/capabilities/work-in-process-limits.md) - Related

Limiting WIP helps maintain visibility by preventing work from piling up in hidden queues. When teams take on too many tasks simultaneously, work becomes harder to track, leading to inefficiencies and delays. Enforcing WIP limits ensures that work remains manageable and transparent, making it easier to identify and resolve bottlenecks in the value stream.

### [Streamlining Change Approval](/capabilities/streamline-change-approval.md) - Downstream

Visibility of Work in the Value Stream identifies exactly where delays occur in the approval process—whether due to excessive manual gates, unclear ownership, or redundant steps. By focusing on these bottlenecks, teams can prioritize streamlining where it matters most. Attempting to streamline non-bottleneck areas wastes effort and risks disrupting the flow of work.

### [Visual Management](/capabilities/visual-management.md) - Downstream

Value Stream Mapping (VSM) tracks key metrics like lead time, process time, and percent complete and accurate (%C/A) to identify bottlenecks and inefficiencies. Visual Management complements VSM by ensuring teams consistently monitor these metrics, enabling timely adjustments to keep work flowing efficiently.
