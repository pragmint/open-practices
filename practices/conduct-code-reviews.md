# Conduct Code Reviews

Code review is a crucial part of software development, where peers examine code changes to ensure quality and reliability. This practice helps catch bugs, enforce best practices, and promote collaboration. Having clear guidelines for code reviews, along with using checklists that can be continuously refined during retrospectives, helps to ensure consistency, improve the quality of reviews, and foster continuous improvement in the development process.
Many aspects of code review can also be automated, including checking for coding standards compliance, syntax errors, and test coverage. Static code analysis, dependency management, performance profiling, and documentation generation can also be automated.
Automating parts of code review can save time, allowing team members to focus on other important tasks, making the software development process better and faster.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your teams.

### Get Feedback Early In The Process

Ideally, the code reviewer engages in pair programming with the code author during some or all of the development process. From a speed standpoint, the earlier corrective feedback is provided, the less time is wasted going down the incorrect path. From a review quality standpoint, this collaboration provides an opportunity to gain context, understand the rationale behind design decisions, and grasp the intricacies of the code changes. The result is a more informed and insightful code review.

### Develop a Contextual Understanding

All code reviewers need to understand the broader context of the changes being made, including user requirements and architecture.
Without this context, misguided feedback or approval of suboptimal solutions may occur. The best way for reviewers to gain context for code changes is to work closely with the code author during pair programming sessions. 

### Account for Subjectivity

Different developers will likely have different opinions on code style, architecture, and implementation details.
During code review, recognize that some feedback may be subjective. Be sure to prioritize changes that align with the project's overall objectives rather than personal preferences. Any subjective concerns should be codified into linting rules so they don't cloud the code review process.

### Manage Workload

Code reviews can become a bottleneck if not managed effectively.
If code reviews are going to be done asynchronously, teams need to establish clear guidelines for review turnaround times and distribute individual review responsibilities.
It's important for the team to agree on strategies to avoid long pull requests, as these can overwhelm reviewers and lead to delays.

###  Deliver Constructive Feedback

Giving and receiving feedback during code reviews requires tact and diplomacy.
Developers need to be mindful of how their comments are phrased to avoid demoralizing colleagues or creating a hostile environment.
At the same time, developers need to be open to constructive criticism and view it as an opportunity for growth.

### Use Checklists

Using checklists to conduct code reviews helps ensure a consist and thorough evaluation process.
However, checklists should not remain static; rather, they should be continuously refined during retrospectives.
Solicit feedback from team members and incorporate lessons learned from previous reviews to improve the effectiveness of the checklist over time.

### Automate Where Possible

Automating build and verification processes can be helpful when a pull/merge request is opened. Some examples of tasks that can be automated to streamline code reviews include: running the linter, deploying to an ephemeral environment, and running integration tests. These tasks reduce the chances of accidentally merging broken code.

LLM-backed tools can also provide automated feedback on code changes. This can be useful, but be wary of useless or even misguided feedback. No LLM is going to remove the need to actually think through an issue. Advise your teams to be smart when employing AI in code reviews.


## Gaining Traction
The following actions will help your team implement this practice. 

### [Lead Workshops](/practices/lead-workshops.md)

#### Guideline-creation Workshop

Organize a collaborative workshop where team members establish clear guidelines for conducting code reviews.
Encourage open discussion to ensure that the guidelines are comprehensive and reflect the team's collective values and objectives.

#### Effective Feedback Skills Workshop

Host interactive workshops that aim to help your team develop skills in giving and receiving feedback.
Create practical exercises and scenarios that allow participants to practice offering helpful criticism while being respectful.
This type of workshop highlights the importance of sharing observations, staying curious, and avoiding making judgments without understanding the author's (or reviewer's) intentions and thought process.
Empower participants to receive feedback openly, avoid taking criticism personally, and avoid assuming negative intentions from the reviewer.

### [Start a Book Club](/practices/start-a-book-club.md)

#### [The power of feedback loops](https://lucamezzalira.medium.com/the-power-of-feedback-loops-f8e27e8ac25f)

In this post, Luca Mezzalira highlights the necessity and importance of feedback mechanisms in software development.
He advocates for implementing various feedback loops, such as test-driven development (TDD), static analysis, pair programming, and code review.
These feedback loops enable continuous improvement by offering timely insights into code quality, identifying potential issues early, and enhancing collaboration among team members.

#### [Two Wrongs Can Make a Right (and Are Difficult to Fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)

Allan Kelly's article sheds light on the challenges posed by code defects that compound into single visible faults, complicating the troubleshooting process.
Meticulous code reviews and open communication means that code defects can be detected and addressed early on, preventing the accumulation of complex issues that become harder to rectify over time.

### Host a Viewing Party

#### [Async Code Reviews Are Choking Your Company’s Throughput](https://www.youtube.com/watch?v=ZlLZEQQBcFg)

In this presentation, Dragan Stepanovic discusses the common practice of pull/merge requests (PRs) in software development teams and its potential impact on throughput.
Drawing from his study analyzing tens of thousands of PRs across various repositories, he reveals that teams using small PRs with asynchronous code reviews often experience lower throughput compared to those employing larger PRs.
Dragan introduces a solution to this dilemma through co-creation patterns such as pair and mob programming, where multiple individuals collaborate simultaneously on a task.

### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)
Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion.

* Do reviewers have a clear understanding of the broader context surrounding code changes, including user requirements and project goals?
* Are there opportunities for reviewers to engage in pair programming or collaborative discussions with developers to gain deeper insights into the code being reviewed?
* How do we handle differing opinions among developers regarding code style, architecture, and implementation details during code reviews?
* Do we have clear guidelines in place for review turnaround times, and are they being consistently followed?
* Are we actively working to prevent long pull/merge requests that can overwhelm reviewers and cause delays in the development process?
* How do we ensure that feedback is received openly and viewed as an opportunity for growth rather than criticism?
* Are we effectively using checklists to conduct code reviews, and do they cover all relevant aspects of the evaluation process?
* How often do we revisit and update our checklists based on feedback and lessons learned from previous reviews?
* Are we using reliable tooling to speed up the review process? Is there more we could be doing on this front?

## Supported Capabilities
This practice supports enhanced performance in the following capabilities.

### [Code Maintainability](/capabilities/code-maintainability.md)

The Conduct Code Reviews practice significantly strengthens the Code Maintainability capability within software teams. Through code reviews, team members can collectively ensure that proposed code changes are not only functional but also easy to maintain over time. By providing feedback on readability, modularity, and coding standards adherence, code reviews help improve the overall quality of the codebase.

### [Test Automation](/capabilities/test-automation.md)

The Conduct Code Reviews practice supports the Test Automation capability because it ensures code changes adhere to quality standards, catches potential issues early, identifies gaps in test coverage, and enforces consistent coding practices. Thorough code reviews promote a robust suite of automated tests, prevent regression errors, and maintain smooth continuous integration processes. 