# Conduct Code Reviews

Code review is a crucial part of software development, where peers examine code changes to ensure quality and reliability; it helps catch bugs, enforce best practices, and promote collaboration. Having clear guidelines for code reviews, along with using checklists that can be continuously refined during retrospectives, is important for ensuring consistency, improving the quality of reviews, and fostering continuous improvement in the development process.
Automating parts of code review helps ensure consistency, save time, and allows people to focus on more important tasks, making the software development process better and faster.
Many aspects of code review can be automated, including checking for coding standards compliance, syntax errors, test coverage, static code analysis, dependency management, performance profiling, and documentation generation.

## Nuance

### Contextual Understanding

Reviewers need to understand the broader context of the changes being made, including user requirements.
Lacking this context can result in misguided feedback or approval of suboptimal solutions.
Ideally, the reviewer should engage in pair programming with the author during the development process.
This collaboration provides an opportunity to gain context, understand the rationale behind design decisions, 
and grasp the intricacies of the code changes, thus resulting in a more informed and insightful code review.

### Accounting for Subjectivity

Different developers may have varying opinions on code style, architecture, and implementation details.
It's important to recognize that some feedback may be subjective and prioritize changes that align with the project's overall objectives rather than personal preferences.

### Managing Workload

Code reviews can become a bottleneck if not managed effectively.
Teams should establish clear guidelines for review turnaround times and distribute review responsibilities evenly.
It's important for the team to agree on strategies to avoid long pull requests, as these can overwhelm reviewers and lead to delays.

### Feedback Sensitivity

Giving and receiving feedback during code reviews requires tact and diplomacy.
Developers should be mindful of how their comments are phrased to avoid demoralizing colleagues or creating a hostile environment.
At the same time developers should be open to constructive criticism and view it as an opportunity for growth.

### Checklists

Using checklists to conduct code reviews helps ensure consistency and thoroughness in the evaluation process.
However, it's important to note that checklists should not remain static; rather, they should be continuously refined during retrospectives.
This involves soliciting feedback from team members and incorporating lessons learned from previous reviews to improve the effectiveness of the checklist over time.

## Introspective Questions

### Contextual Understanding

* Do our reviewers have a clear understanding of the broader context surrounding code changes, including user requirements and project goals?
* Are there opportunities for reviewers to engage in pair programming or collaborative discussions with developers to gain deeper insights into the code being reviewed?

### Accounting for Subjectivity

* How do we handle differing opinions among developers regarding code style, architecture, and implementation details during code reviews?
* Are we prioritizing changes that align with the project's overall objectives rather than personal preferences?

### Managing Workload

* Do we have clear guidelines in place for review turnaround times, and are they being consistently followed to?
* Are we actively working to prevent long pull requests that can overwhelm reviewers and cause delays in the development process?

### Feedback Sensitivity

* Are our developers equipped with the skills to provide constructive feedback during code reviews while maintaining a positive and supportive environment?
* How do we ensure that feedback is received openly and viewed as an opportunity for growth rather than criticism?

### Checklists

* Are we effectively utilizing checklists to conduct code reviews, and do they cover all relevant aspects of the evaluation process?
* How often do we revisit and update our checklists based on feedback and lessons learned from previous reviews?

## Exercises

### Guideline Creation Workshop

Organize a collaborative workshop where team members collectively establish clear guidelines for conducting code reviews.
Encourage open discussions to ensure that the guidelines are comprehensive and reflect the team's values and objectives.

### Pair Programming Sessions

Schedule regular pair programming sessions where developers work together on coding tasks.

### Assigning Reviewers in Advance

Prior to beginning development tasks, designate a reviewer for each task upfront during the planning phase.
This proactive approach allows the reviewer to familiarize themselves with the upcoming changes, gain context about the requirements.
After this analyze the quality of the resulting code review.

### Code Review Simulation

Simulate a code review scenario using a sample codebase.
Assign roles to team members and go through the process of reviewing the code, discussing feedback, and reaching consensus on changes.
This hands-on exercise can help identify areas for improvement in the code review process.

### Effective Feedback Skills Workshop

Host interactive workshops aimed at developing feedback skills within the team.
Create practical exercises and scenarios that encourage participants to offer helpful criticism while being respectful.
Highlight the importance of sharing observations, staying curious, and avoiding making judgments without understanding the author's intentions and thought process.
Empower participants to receive feedback openly, emphasizing the importance of not taking criticism personally and avoid assuming negative intentions from the reviewer.

### Continuous Feedback Loop

Create a shared document to collecting feedback from team members after each code review.
Use this feedback to identify areas for improvement and make iterative adjustments to the code review process over time.

## Related Practices

### [Two Wrongs Can Make a Right (and Are Difficult to Fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)

Allan Kelly's article sheds light on the challenges posed by code defects that compound into single visible faults, complicating the troubleshooting process.
This insight underscores the significance of meticulous code reviews.
By conducting thorough reviews and promoting open communication among team members, teams can detect and address defects early on, preventing the accumulation of complex issues that become harder to rectify over time.