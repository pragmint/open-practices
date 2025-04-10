# [Visual Management](https://dora.dev/capabilities/visual-management/)

Visual management is the practice of using displays to make work visible and actionable. In the same way factories use lights, color codes, and floor markings to highlight flow and flag issues, software teams can use kanban boards, deployment monitors, and system dashboards to surface progress, priorities, and problems in real time. The goal is not just to share information—but to make it obvious what’s normal, what’s not, and what needs to be done next. When visual cues are clear, teams can stay aligned, maintain focus on critical processes, and drive faster problem-solving.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Systems-Level Constraints Get Ignored

When a board shows a failing build, high WIP, or missed throughput goals, it’s a signal, not the root cause. The mistake comes when teams treat that signal as the full story and rush to solve for the symptom without asking why the issue occurred in the first place.

### If Teams Don’t Choose It, They Won’t Use It

Dashboards don’t drive behavior—people do. If a metric isn’t meaningful to the team, it becomes background noise. When teams help choose what’s tracked, they’re more likely to question it, act on it, and improve it. It’s not just about measurement—it’s about ownership.

### Ensure Simplicity and Actionability

The power of visual management lies in what you don’t need to explain. If a display takes more than a few seconds to understand, it’s not helping. Good visualizations surface tension in the system and point to next steps—without adding friction or noise.

### Evolve Visual Displays Regularly

What was once insightful can become invisible through repetition. Visuals must grow with the team—surfacing new risks, bottlenecks, or goals as they emerge. Treat dashboards like code: refactor them often to reflect what matters now.

### Don’t Confuse Activity with Progress

Highly active boards can give a false sense of momentum. Just because a lot is happening doesn't mean the right things are happening. Visual management should highlight value flow—not just motion—so teams can spot when effort isn’t translating into outcomes.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Visual Management capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Incorporate Visual Displays Into Team Planning Meetings

Don’t let dashboards collect dust. Visual displays are most effective when they’re woven into the rhythm of team decision-making. Use them in planning meetings to ground conversations in reality—what’s blocked, what’s flowing, what’s at risk. When visuals reflect the team’s current situation, they become a shared language for prioritization and focus.

### Host Targeted Retrospectives Aimed At Refreshing Visual Displays

Visual management isn’t a set-it-and-forget-it practice. Just like code or architecture, dashboards benefit from regular refactoring. Hosting retrospectives focused on what’s no longer useful—or what’s missing—helps keep displays sharp. Ask the team: what are we no longer seeing that we need to? What’s become noise? The answers reveal what’s next for your display strategy.

### Shift Teams To Track Outcomes Instead Of Outputs

It’s easy to default to tracking what’s easy to count—tickets closed, lines of code, story points. But these are outputs, not outcomes. To drive meaningful improvement, displays should connect work to its impact: customer behavior, system reliability, revenue generated, or time to resolve issues. When teams see the effects of their work, they can make smarter trade-offs and course-correct faster.

### Set Work-in-Process Limits

While setting work-in-progress (WIP) limits is a DORA capability, it is also a technique that is actionable. So, we're including it here as a supporting practice. Visually tracking and enforcing WIP limits prevents bottlenecks and helps to maintain a steady flow. By limiting the number of tasks that are actively worked on, teams can achieve greater focus, reduce context switching, and enjoy enhanced flow efficiency, leading to faster and smarter software delivery.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Visual Management)
- Upstream (they are a pre-requisite for Visual Management)
- Downstream (Visual Management is a pre-requisite for them)

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related

These two capabilities are closely related but serve different purposes in improving software delivery. Think of the value stream as your map and visual management as your GPS. Visibility of work in the value stream shows the entire route—from idea to customer—and helps spot systemic slowdowns like bottlenecks or rework loops. Visual management shows where you are right now, highlighting real-time progress, problems, and what to do next. One gives strategic insight, the other supports day-to-day navigation. You need both to reach your destination efficiently.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Metrics like user engagement, feature adoption, or system latency can be transformed into visual displays that give the team actionable feedback at a glance. Monitoring provides the raw signals. Visual Management turns those signals into accessible cues that help the team spot issues, track improvements, and guide daily decisions.
