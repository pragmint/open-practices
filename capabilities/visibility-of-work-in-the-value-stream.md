# [Visibility of Work in the Value Stream](https://dora.dev/capabilities/work-visibility-in-value-stream/)

To create visibility of work as it passes through all steps of software delivery, you must map out the entire process — or the value stream. A Value Stream Map (VSM) is a visual tool that outlines all the steps in delivering software, from idea to deployment. It highlights how work flows across teams, helping identify delays, bottlenecks, and inefficiencies. 

Visibility of Work in the Value Stream is an important capability for software teams because it reveals wasted time, like slow code reviews or long deployment cycles, and provides clarity and guidance for improving workflows and more quickly delivering value. 

High-performing software teams not only have clearly defined VSMs, they also track the flow-related metrics for each phase of work, such as:

- **Lead Time**: Total time from accepting work to handing it off (including waiting).
- **Process Time**: Total time to complete a task without interruptions.
- **% Complete**: Share of work received that is fully finished as expected.
- **% Accurate**: Share of work received that is error-free and doesn’t need rework.

With this information, you can pinpoint areas with poor-quality outputs (low % Complete and low % Accurate) requiring downstream fixes and steps where lead times are significantly longer than process times. Addressing these issues involves collaborating with stakeholders to create a future-state VSM that outlines the ideal workflow. This sets the foundation for a clear, incremental plan to refine and improve the process over time.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### VSMs Are More Than Just Sprint Boards

Sprint boards track work from the time it enters a sprint to deployment, highlighting all tasks within that sprint. VSMs, however, offer a broader view, starting from the *idea phase* and extending through deployment. They capture phases like analysis, grooming, design, and estimation, as well as the time between and within these phases. This comprehensive tracking highlights inefficiencies and delays that sprint boards alone cannot reveal, enabling teams to optimize the entire workflow.

### Leaders Often Incorrectly Assume Teams Know This Stuff

Many organizations assume that employees have a good understanding of the entire value stream, but this is rarely the case. During value stream mapping exercises, teams often discover unexpected gaps and complexities in how work flows across different departments. Without a comprehensive understanding of the full value stream, teams may struggle to align on priorities and improvement efforts.

### Everyone Needs to be Involved

Value stream mapping isn't just an academic exercise for managers. Participation from everyone involved in the work is essential. Everyone's input is required to ensure the value stream map reflects reality, not assumptions, and highlights actionable areas for improvement. Broad participation also builds alignment and shared accountability for meaningful changes.

### VSMs Are Not For Micro-Managing Individual Stories

VSMs are a tool for teams to visualize and improve the overall flow of work across the value stream. They should empower teams to identify and resolve systemic issues. They should *not* be used by leaders to micro-manage individual stories or track granular progress. The focus should remain on optimizing the process as a whole, not controlling day-to-day details.

### Keep the Focus on Improving Bottleneck Areas

Efforts to improve efficiency in areas that are *not* bottlenecks may have minimal impact or, in some cases, even worsen overall flow. Using the VSM as your guide, improvements should target the most significant constraints in the value stream. This will ensure a meaningful effect on lead times and delivery performance.

### Lack of Authority to Implement Changes

Participants in visibility initiatives often lack the authority to implement necessary changes. When participants lack decision-making power, these efforts can stall, making it harder to achieve the desired future state. Successfully implementing changes related to workflow visibility requires both high-level support and autonomy to act on findings.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Visibility of Work in the Value Stream capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Implement VSM Workshops

Conduct regular VSM workshops involving representatives from each stage of the value stream. Map out both the current VSM and the ideal future-state VSM. Break down the value stream into clear process blocks and identify key metrics like lead time, process time, and percent complete and accurate (%C/A).

### Set Work-in-Process Limits

While setting work-in-progress (WIP) limits is a DORA capability, it is also a technique that is actionable. So, we're including it here as a supporting practice. Establishing and enforcing WIP limits for tasks in the value stream prevents bottlenecks and helps to maintain a steady flow. By limiting the number of tasks that are actively worked on, teams can achieve greater focus, reduce context switching, and enjoy enhanced flow efficiency, leading to faster and smarter software delivery.

### [Code Review Process](/practices/conduct-code-reviews.md)

The code review process plays a crucial role in work visibility because it provides insights into the status and quality of changes. A well-structured code review process ensures that teams can track work progress, identify slow-moving changes, and resolve blockers efficiently. Poorly managed code reviews, however, can become an invisible bottleneck, delaying work for reasons that are unclear.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Visibility of Work in the Value Stream)
- Upstream (they are a pre-requisite for Visibility of Work in the Value Stream)
- Downstream (Visibility of Work in the Value Stream is a pre-requisite for them)

### [Work in Progress Limits](/capabilities/work-in-process-limits.md) - Related

Limiting WIP prevents work from piling up in hidden queues. When teams take on too many tasks simultaneously, work becomes harder to track, leading to inefficiencies and delays. Enforcing WIP limits ensures that work remains manageable and transparent, making it easier to identify and resolve bottlenecks in the value stream.

### [Streamlining Change Approval](/capabilities/streamline-change-approval.md) - Downstream

Visibility of Work in the Value Stream identifies exactly where delays occur in the approval process — whether they're due to excessive manual gates, unclear ownership, or redundant steps. By first focusing on these bottlenecks, teams can then streamline where it matters most. Attempting to streamline non-bottleneck areas is usually a wasted effort that may disrupt the flow of work.

### [Visual Management](/capabilities/visual-management.md) - Downstream

VSM tracks key metrics like lead time, process time, and percent complete and accurate (%C/A) to identify bottlenecks and inefficiencies. Visual Management complements VSM and takes it a step further, by ensuring teams consistently monitor these metrics. This enables timely adjustments to keep work flowing efficiently.

### [Empowering Teams to Choose Tools](/capabilities/empowering-teams-to-choose-tools.md)- Downstream
Visibility of Work in the Value Stream is a prerequisite for the Empoweringing Teams to Choose Tools capability. Teams must first identify bottlenecks in the value stream, then exercise the autonomy to select tools that solve for those bottlenecks and best support the workflow. Choosing tools for areas that aren't solving for bottlenecks is an ineffective and inefficient use of time.
