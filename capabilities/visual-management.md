# [Visual Management](https://dora.dev/capabilities/visual-management/)

Visual Management, as a capability, means using displays to make work visible and actionable. In the same way factories use lights, color codes, and floor markings to highlight flow and flag issues, software teams can use kanban boards, deployment monitors, and system dashboards to surface progress, priorities, and problems in real time. The goal of visual management is not just to share information but to make obvious what’s normal, what’s not, and what needs to be done next. When visual cues are clear, teams can stay aligned, maintain focus on critical processes, and solve problems faster.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Systems-level Constraints Get Ignored

When a board shows a failing build, high WIP, or missed throughput goals, it’s a signal, not a root cause. The mistake comes when teams treat that signal as the full story and rush to solve for the symptom without asking why the issue occurred in the first place. Ensure the deeper, systems-level root causes aren't overlooked.

### If Teams Don’t Choose It, They Won’t Use It

Dashboards don’t drive behavior -- people do. If a metric isn’t meaningful to the team, it becomes background noise. When teams help choose what’s tracked, they’re more likely to question it, act on it, and improve it. Visual management is not just about measurement, it’s about ownership.

### Ensure Tools Are Simple and Actionable

The power of visual management lies in what you don’t need to explain. If a display takes more than a few seconds to understand, it’s not helping. It's common for dashboards to collect dust, partly because their utility is unclear or complicated. Good visualizations surface tension in the system and point to next steps without adding friction or noise.

### Evolve Visual Displays Regularly

What was once insightful can become invisible through repetition. Visuals must grow with the team: surfacing new risks, bottlenecks, or goals as they emerge. Treat dashboards like code: Refactor them often to reflect what matters now.

### Don’t Confuse Activity with Progress

Highly active boards can give a false sense of momentum. Just because a lot is happening doesn't mean the right things are happening. Visual management should highlight key metrics and value flow, not just motion, so teams can spot when effort *isn’t* translating into outcomes.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Visual Management capability. Generally, score a 1 if visual management is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is informative and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Visual Management.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **No Visibility:** No visual management displays or dashboards are used. Teams lack visibility into their processes and progress.
2. **Basic Dashboards:** Simple dashboards or visual displays are used, but they are not regularly updated. Teams do not actively use them to inform their work.
3. **Informative Displays:** Visual management displays are used to track key metrics and progress. Teams regularly review and update them to inform their work and identify areas for improvement.
4. **Real-time Feedback:** Advanced visual management displays provide real-time feedback and insights. Teams can quickly identify and address issues, and make data-driven decisions to adjust their priorities and drive continuous improvement.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think visual management is somewhere between basic and informative, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Visual Management; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Visual Management capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Incorporate Visual Displays Into Team Planning Meetings

Don’t let dashboards collect dust. Visual displays are most effective when they’re woven into the rhythm of team decision-making. Use them in planning meetings to ground conversations in reality. Look at what’s blocked, what’s flowing, and what’s at risk. When visuals reflect the team’s current situation, they become a shared language for prioritization and focus.

### Host Targeted Retrospectives Aimed At Refreshing Visual Displays

Visual management isn’t a set-it-and-forget-it practice. Just like code or architecture, dashboards benefit from regular refactoring. Hosting retrospectives focused on what’s no longer useful, or what’s missing, helps keep displays sharp. Ask the team: What are we not seeing that we need to see? What’s become noise? The answers reveal what’s next for your display strategy.

### Shift Teams To Track Outcomes Instead of Outputs

It’s easy to default to tracking what’s easy to count: tickets closed, lines of code, story points. But these are outputs, not outcomes. To drive meaningful improvement, displays should connect work to its impact: customer behavior, system reliability, revenue generated, or time to resolve issues. When teams see the impact of their work, they can make smarter trade-offs and course-correct faster.

### [Visualize All Work on a Storyboard](/practices/visualize-all-work-on-a-storyboard.md)

A storyboard serves as a real-time visual display of all work across the team, including hidden work like production support, meetings, and unplanned requests. By making the full workload visible at a glance, teams can spot bottlenecks, track flow, and have grounded conversations about priorities. The board becomes the shared artifact that drives standups, planning, and retrospectives.

### Set Work-in-Process Limits

While setting work-in-progress (WIP) limits is a DORA capability, it is also a technique that is actionable. So, we're including it here as a supporting practice. Visually tracking and enforcing WIP limits prevents bottlenecks and helps to maintain a steady flow. By limiting the number of tasks that are actively worked on, teams can achieve greater focus, reduce context switching, and enjoy enhanced flow efficiency. This leads to faster and smarter software delivery.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Visual Management)
- Upstream (they are a pre-requisite for Visual Management)
- Downstream (Visual Management is a pre-requisite for them)

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related

These two capabilities are closely related but serve different purposes in improving software delivery. Think of the value stream as your map and visual management as your GPS. Visibility of work in the value stream shows the entire route -- from idea to customer -- and helps spot systemic slowdowns like bottlenecks or rework loops. Visual management shows where you are right now, highlighting real-time progress, problems, and priorities. One gives strategic insight and the other supports day-to-day navigation. You need both to reach your destination efficiently.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Metrics like user engagement, feature adoption, or system latency can be transformed into visual displays that give the team actionable feedback at a glance. Monitoring provides the raw signals. Visual Management then turns those signals into actionable cues that help the team spot issues, track improvements, and guide daily decisions.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md) - Downstream

Visual Management makes monitoring data easy to see and understand. It helps teams and stakeholders quickly spot what’s working, what’s broken, and what needs attention. Without clear visuals, important trends or problems can get missed. When monitoring data is shown in simple, useful ways -- like dashboards or kanban boards -- it has a greater impact on business decisions.
