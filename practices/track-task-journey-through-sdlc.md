# Track Task Journey Through SDLC

When development teams struggle to improve their lead time, the root cause is often invisible. Work moves through planning, development, review, testing, and deployment, but no one has a clear picture of where time is actually spent. Developers may sense that something is slow — a PR can sit in review for days, or a deployment can wait in a queue — yet without data, the team is left guessing at where to focus improvement efforts. That guesswork leads to interventions that address symptoms rather than constraints.

Tracking work items as they move through each stage of the software development lifecycle gives teams the data they need to stop guessing. By recording the time a task spends at each stage — from the moment it enters development to when it reaches production — teams build a concrete picture of where work accelerates and where it stalls. The stages with disproportionately long average times or high variance are the bottlenecks worth targeting.

When bottlenecks are visible, improvement becomes intentional. Rather than applying pressure across the whole process, teams can focus their energy where it will have the greatest impact on lead time. Over time, as bottlenecks are addressed and new ones surface, the data becomes the basis for a continuous improvement cycle grounded in evidence rather than intuition.

## When to Experiment

- You are a **developer** who knows the delivery process feels slow but cannot point to which stage is responsible for the delay.
- You are a **team lead** who wants to make targeted improvements to lead time but lacks the data to justify where to invest.
- You are an **engineering manager** who needs to demonstrate the impact of process changes and wants before-and-after metrics to make that case.
- You are a **product manager** who is fielding questions from stakeholders about why features take longer than expected and cannot give a data-backed answer.
- You are **part of a cross-functional team** where handoffs between roles create delays that are felt but never quantified.

## How to Gain Traction

Getting useful data from this practice depends on setting it up carefully before any tracking begins. A few hours of preparation — defining stages, agreeing on tracking conventions, and identifying which tasks to track — will produce far more reliable results than jumping straight into data collection.

### Map the Stages of Your Process

Before tracking anything, bring the team together to agree on what the stages of your development and deployment process actually are. Walk through a recent task from first commit to production deployment and name each distinct phase it passed through. This mapping exercise often surfaces surprising disagreements about what the process even looks like. Document the agreed-upon stages clearly, including what it means for a task to enter and exit each one. Shared definitions are what make the data consistent across team members.

### Select Tasks and Start Tracking

Choose a representative set of tasks to track during the experiment — enough to yield meaningful averages, but not so many that tracking becomes a burden. For each task, record the timestamp when it transitions into and out of each stage. Use whichever tools your team already has (a project management tool like Jira or Linear works well) to capture these timestamps with minimal overhead. The goal during this phase is consistency: every team member recording transitions the same way is more important than capturing every possible data point.

### Compile and Analyse the Data

At the end of the experiment, calculate the average time tasks spent in each stage. Sort the stages from longest to shortest average time. Look not just at the mean but also at variance — a stage with consistently short times but occasional extreme outliers is a different kind of problem than a stage that is uniformly slow. Share the ranked list with the team and facilitate a discussion about which stages represent true bottlenecks versus expected or acceptable delays.

### Automate Where Possible

Manual tracking adds overhead and is difficult to sustain indefinitely. Once the team has validated that the stage definitions are useful and the data is actionable, look for opportunities to automate data collection. Many project management and CI/CD tools expose timestamps through their APIs or have built-in reporting features. Treat automation as an explicit next step with a named owner and a deadline, rather than a vague future intention.

## Lessons From The Field

- *Consistency Beats Precision.* It is more valuable for every team member to record transitions in the same way than for anyone to record them with perfect accuracy. Invest time upfront in clear stage definitions and a simple tracking template. Ambiguity about when a stage starts or ends is the most common source of unreliable data.

- *Some Bottlenecks Will Be Outside Your Control.* The data will sometimes point to constraints that the team cannot resolve on its own — an external approval process, an organisational dependency, or an infrastructure limitation. Document these findings anyway. Data-backed evidence is far more persuasive when escalating to leadership than anecdotal frustration.

- *Manual Tracking Has a Short Shelf Life.* Teams that rely on manual processes indefinitely tend to see data quality degrade as the novelty wears off. Timebox the manual phase and treat automation as a commitment, not an aspiration. The tracking discipline you build manually is what informs a good automated solution.

- *The Conversation Around the Data Matters.* The ranked list of stage times is a starting point, not an answer. The value comes from the team discussing root causes together: why does code review take three days on average? Is it reviewer availability, PR size, unclear expectations? The data opens the conversation; the conversation surfaces the fix.

- *Bottlenecks Shift Once You Address Them.* Resolving the biggest constraint will often reveal the next one. This is expected and healthy. The goal is not to eliminate all bottlenecks at once but to build a practice of seeing them clearly and addressing them in priority order.

## Deciding to Polish or Pitch

After experimenting with this practice for **6 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Average Time Per Stage Tracked and Reported.** By the end of the experiment, every stage in the development and deployment process should have a recorded average time based on the tracked tasks. This data should be compiled into a ranked list that makes it easy to see at a glance where time is being spent. If the data is incomplete or inconsistent, treat that as a signal to revisit the tracking setup before drawing conclusions.

### Slow & Measurable

**Bottlenecks Identified and Documented.** Using the per-stage average time data, the team should be able to identify at least two stages where time is disproportionately high or highly variable. A bottleneck counts as identified when the team agrees on the stage, has a hypothesis about the root cause, and has outlined a potential path to address it. This moves the practice from data collection into actionable improvement.

### Slow & Intangible

**Shift Toward Data-Driven Improvement Conversations.** Over time, the team should notice that conversations about process improvement become more specific and less speculative. Instead of "I feel like code review is slow," team members should be able to say "code review averages 2.4 days and is our biggest contributor to lead time." This shift in how the team talks about its process is a strong signal that the practice is taking hold.

## Supported Capabilities

### [Visibility of Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md)

Tracking the task journey through the SDLC directly operationalises value stream visibility. Rather than knowing roughly how work flows, the team gains a data-backed view of where time is spent at each stage. This makes the value stream measurable and turns abstract discussions about delivery performance into concrete conversations grounded in evidence.

### [Monitoring Systems to Inform Business Decisions](/capabilities/monitoring-systems-to-inform-business-decisions.md)

Lead time is a business metric as much as a technical one. When teams track where time is spent in their delivery process, they create a feedback loop that connects engineering process decisions to outcomes stakeholders care about. Data on stage-level bottlenecks gives leaders the information they need to make resource, prioritisation, and process decisions based on evidence rather than perception.

### [Visual Management](/capabilities/visual-management.md)

A ranked list of average stage times is a simple but powerful visual management artifact. It makes the current state of the delivery process obvious and directs attention toward where improvement effort should go. Pairing this data with a storyboard or value stream map amplifies its impact by giving the team a shared reference point during improvement discussions.

### [Working in Small Batches](/capabilities/working-in-small-batches.md)

Stage-level time tracking often reveals that larger tasks accumulate disproportionately long wait times, particularly in review and testing stages. This data can motivate the team to break work into smaller batches, since smaller items move through each stage faster and produce more consistent flow. The tracking data provides the evidence needed to make that case convincingly.
