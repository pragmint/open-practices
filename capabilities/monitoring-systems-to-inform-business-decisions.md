# [Monitoring Systems to Inform Business Decisions](https://dora.dev/capabilities/monitoring-systems/)

Monitoring isn’t just about uptime -- it’s about insight. The real power of monitoring lies in connecting system signals to business outcomes.

Every system emits data: response times, errors, user behavior. But these aren’t just technical metrics; they're proxies for customer experience, revenue, cost, and product impact.

When you use metrics to inform business decisions, the question shifts from simply *What’s happening?* to *What does it mean?* Why aren't users adopting our latest feature? Where are we leaking revenue? Which investments are actually moving the needle? These questions can be answered when the data is available, accessible, and analyzed properly.

When teams frame monitoring around business questions, data becomes a tool for learning, not just for observing daily operations. This shift encourages hypotheses, fuels iteration, and ties technical work to customer value.

Monitoring also shortens the feedback loop. Insights from operations or support flow upstream to dev and product, enabling checks on earlier decisions and faster course-correction. Start with business goals, then instrument your systems to ask, and answer, *the right questions*. Make insights accessible, relevant, and timely for all stakeholders.

Monitoring done well turns noise into narrative and day-to-day visibility into strategic clarity.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### No Ownership or Accountability

Monitoring data is only useful if someone acts on it. When no one is clearly responsible for interpreting or responding to signals, issues linger or repeat. Assigning ownership for specific metrics or alerts helps ensure follow-through and continuous improvement.

### Tracking Everything and Understanding Nothing

Monitoring everything can create noise and overwhelm teams with data, making it difficult to pinpoint critical insights. The goal isn’t more data, it’s to access and analyze the right data to make better decisions. When you contextualize data with historical comparisons or business relevance, you can more fully understand and use it to make informed decisions.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on this capability. Generally, score a 1 if monitoring is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is maturing and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Monitoring Systems to Inform Business Decisions.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Ad-hoc Monitoring:** Monitoring is done on an as-needed basis, with little formal process or visibility into system performance. Data is not used to inform business decisions.
2. **Basic Monitoring:** Some monitoring data is collected and reported, but it is not regularly used to inform business decisions.
3. **Mature Monitoring:** Monitoring data is regularly collected and used to inform business decisions, but there is room for improvement in terms of data quality and scope.
4. **Strategic Monitoring:** Monitoring is a key part of the organization's strategy, with high-quality data collected and used to drive business decisions and optimize system performance.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and mature monitoring, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Monitoring Systems to Inform Business Decisions; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Monitoring Systems to Inform Business Decisions capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Adopt Double-loop Learning

Double-loop learning goes beyond tracking outcomes; it connects your work to the assumptions behind your strategy. Instead of just asking *Are we hitting our numbers?*, this practice encourages you to ask *Are we working on the right things to drive those numbers, and are our assumptions still valid?*

When you practice double-loop learning, you map the relationships between projects, input metrics, and business KPIs. This lets you:

- See how current efforts are (or aren’t) moving the right metrics
- Adjust course when assumptions prove false
- Align teams by making strategy visible and testable

Rather than treating dashboards as static reports, double-loop learning turns them into dynamic systems for continuous improvement.

### Train Teams on Data Interpretation

Provide training sessions for teams to understand how to interpret monitoring data and apply it to their roles. Focus on teaching team members how to relate metrics to business objectives. This will enable more informed decision making and provide context for operational changes.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Monitoring Systems to Inform Business Decisions)
- Upstream (they are a pre-requisite for Monitoring Systems to Inform Business Decisions)
- Downstream (Monitoring Systems to Inform Business Decisions is a pre-requisite for them)

### [Team Experimentation](/capabilities/team-experimentation.md) - Downstream

Monitoring systems provide the data necessary for teams to experiment with confidence, enabling them to measure the impact of changes and validate hypotheses. In turn, successful experimentation relies on robust monitoring to inform decisions and adjust strategies quickly.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Upstream

Monitoring and Observability provide the data and platforms that inform sound business decision making. Without reliable signals from production systems, it’s difficult to measure user behavior, system impact, or the success of new features.

### [Visual Management](/capabilities/visual-management.md) - Upstream

Visual Management makes monitoring data easy to see and understand. It helps teams and stakeholders quickly spot what’s working, what’s broken, and what needs attention. Without clear visuals, important trends or problems can get missed. When monitoring data is shown in simple, useful ways -- like dashboards or kanban boards -- it has a greater impact on business decisions.
