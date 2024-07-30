# Conduct Code Reviews

Code review is a crucial part of software development, where peers examine code changes to ensure quality and reliability; it helps catch bugs, enforce best practices, and promote collaboration. Having clear guidelines for code reviews, along with using checklists that can be continuously refined during retrospectives, is important for ensuring consistency, improving the quality of reviews, and fostering continuous improvement in the development process.
Automating parts of code review helps ensure consistency, save time, and allows people to focus on more important tasks, making the software development process better and faster.
Many aspects of code review can be automated, including checking for coding standards compliance, syntax errors, test coverage, static code analysis, dependency management, performance profiling, and documentation generation.

## Nuance

### Get Feedback Early In The Process

Ideally, the reviewer should engage in pair programming with the author during some or all of the development process. From a speed standpoint, the earlier corrective feedback is provided, the less time is wasted going down the incorrect path. From a review quality standpoint, this collaboration provides an opportunity to gain context, understand the rationale behind design decisions, and grasp the intricacies of the code changes, thus resulting in a more informed and insightful code review.

### Contextual Understanding

All reviewers need to understand the broader context of the changes being made, including user requirements and architecture.
Lacking this context can result in misguided feedback or approval of suboptimal solutions.

### Accounting for Subjectivity

Different developers may have varying opinions on code style, architecture, and implementation details.
It's important to recognize that some feedback may be subjective and prioritize changes that align with the project's overall objectives rather than personal preferences. Any subjective concerns should be codified into linting rules so they don't cloud the code review process.

### Managing Workload

Code reviews can become a bottleneck if not managed effectively.
If code reviews are going to be done asynchronously, teams should establish clear guidelines for review turnaround times and distribute review responsibilities accordingly.
It's important for the team to agree on strategies to avoid long pull requests, as these can overwhelm reviewers and lead to delays.

### Feedback Sensitivity

Giving and receiving feedback during code reviews requires tact and diplomacy.
Developers should be mindful of how their comments are phrased to avoid demoralizing colleagues or creating a hostile environment.
At the same time developers should be open to constructive criticism and view it as an opportunity for growth.

### Checklists

Using checklists to conduct code reviews helps ensure consistency and thoroughness in the evaluation process.
However, it's important to note that checklists should not remain static; rather, they should be continuously refined during retrospectives.
This involves soliciting feedback from team members and incorporating lessons learned from previous reviews to improve the effectiveness of the checklist over time.

### Automation

It can be helpful to have automated build / verification processes take place when a pull/merge request is opened. Some examples include: run the linter, deploy to an ephemeral environment, run integration tests, etc. These steps reduce the chances of accidentally merging in broken code.

Furthermore, LLMs backed tools are able to provide automated feedback on code changes. These can be useful, but be wary of useless or even misguided feedback. No LLM is going to remove the need to think. Advise your teams to be smart.

## Introspective Questions

### Contextual Understanding

* Do our reviewers have a clear understanding of the broader context surrounding code changes, including user requirements and project goals?
* Are there opportunities for reviewers to engage in pair programming or collaborative discussions with developers to gain deeper insights into the code being reviewed?

### Accounting for Subjectivity

* How do we handle differing opinions among developers regarding code style, architecture, and implementation details during code reviews?
* Are we prioritizing changes that align with the project's overall objectives rather than personal preferences?

### Managing Workload

* Do we have clear guidelines in place for review turnaround times, and are they being consistently followed?
* Are we actively working to prevent long pull/merge requests that can overwhelm reviewers and cause delays in the development process?

### Feedback Sensitivity

* Are our developers equipped with the skills to provide constructive feedback during code reviews while maintaining a positive and supportive environment?
* How do we ensure that feedback is received openly and viewed as an opportunity for growth rather than criticism?

### Checklists

* Are we effectively utilizing checklists to conduct code reviews, and do they cover all relevant aspects of the evaluation process?
* How often do we revisit and update our checklists based on feedback and lessons learned from previous reviews?

### Automation

* Are we using reliable tooling to speed up the review process? Is there more we could be doing on this front?

## How to Improve

### [Lead Workshops](/practices/lead-workshops.md)

#### Guideline Creation Workshop

Organize a collaborative workshop where team members collectively establish clear guidelines for conducting code reviews.
Encourage open discussions to ensure that the guidelines are comprehensive and reflect the team's values and objectives.

#### Effective Feedback Skills Workshop

Host interactive workshops aimed at developing feedback skills within the team.
Create practical exercises and scenarios that encourage participants to offer helpful criticism while being respectful.
Highlight the importance of sharing observations, staying curious, and avoiding making judgments without understanding the author's intentions and thought process.
Empower participants to receive feedback openly, emphasizing the importance of not taking criticism personally and avoid assuming negative intentions from the reviewer.

### [Start A Book Club](/practices/start-a-book-club.md)

#### [The power of feedback loops](https://lucamezzalira.medium.com/the-power-of-feedback-loops-f8e27e8ac25f)

Luca Mezzalira highlights the necessity and importance of feedback mechanisms in software development.
He advocates for implementing various feedback loops, such as test-driven development (TDD), static analysis, pair programming, and code review.
These feedback loops enable continuous improvement by offering timely insights into code quality, identifying potential issues, and enhancing collaboration among team members.

#### [Two Wrongs Can Make a Right (and Are Difficult to Fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)

Allan Kelly's article sheds light on the challenges posed by code defects that compound into single visible faults, complicating the troubleshooting process.
This insight underscores the significance of meticulous code reviews.
By conducting thorough reviews and promoting open communication among team members, teams can detect and address defects early on, preventing the accumulation of complex issues that become harder to rectify over time.

#### [Async Code Reviews Are Chocking Your Company’s Throughput](https://www.youtube.com/watch?v=ZlLZEQQBcFg)

In his presentation, Dragan delves into the common practice of pull/merge requests (PRs) in software development teams and its potential impact on throughput.
Drawing from his study analyzing tens of thousands of PRs across various repositories, he reveals that teams utilizing small PRs with asynchronous code reviews often experience lower throughput compared to those employing larger PRs.
However, Dragan introduces a solution to this dilemma through co-creation patterns such as pair and mob programming, where multiple individuals collaborate simultaneously on a task.
By exploring data that challenges the assumption that this collaborative approach diminishes team throughput, Dragan suggests a path toward achieving both high throughput and quality in software development.

## Supporting Capabilities

### [Code Maintainability](/capabilities/tech/code-maintainability.md)

The Conduct Code Reviews practice significantly strengthens the Code Maintainability capability within software teams. Through these reviews, team members can collectively ensure that proposed code changes are not only functional but also easy to maintain over time. By providing feedback on readability, modularity, and coding standards adherence, code reviews help improve the overall quality of the codebase.

### [Test Automation](/capabilities/tech/test-automation.md)

The Conduct Code Reviews practice supports the Test Automation DORA capability by ensuring code changes adhere to quality standards, catching potential issues early, and enforcing consistent coding practices. This promotes a robust suite of automated tests, prevents regression errors, and maintains smooth continuous integration processes. By fostering collaboration and identifying gaps in test coverage, code reviews enhance software reliability and stability, directly contributing to effective test automation.
