# Working in Small Increments

The practice of working in small increments involves making frequent, manageable changes to the codebase, facilitating easier tracking, quicker issue detection, and straightforward integration.
It promotes continuous improvement, minimizes risks from large updates, and enhances collaboration.
By breaking tasks into smaller pieces, development teams can ensure higher quality, consistent progress, and efficient adaptability.

## Nuance

### Misconception: More Commits Equals More Productivity
The belief that a higher frequency of commits directly correlates with increased productivity can be misleading.
While working in small increments encourages regular updates, the focus should be on meaningful, self-contained changes that contribute to the project's progression.
Simply pushing a high volume of minor changes without clear intent can lead to clutter in the version history and complicate project tracking.

### Overemphasis on Size Over Substance
Prioritizing the size of increments over the quality and relevance of the contribution can detract from the project's overall goals.
It's crucial to ensure that each increment adds value and aligns with the project's objectives.
Small, trivial changes that don't drive the project forward or improve its quality can waste valuable time and resources.

### Integration Challenges
While small increments facilitate easier integration and testing, they also require a robust continuous integration (CI) system to manage the frequent updates.
Without efficient CI practices and tools in place, the benefits of working in small increments can be negated by integration delays and bottlenecks.

### Risk of Fragmentation
Working in excessively small increments can lead to fragmentation, where the codebase is peppered with incomplete features or changes that don't function well independently.
This can make it difficult to maintain a clear direction for the project and may hinder the team's ability to deliver cohesive updates.

### Neglecting Long-Term Planning
Focusing too narrowly on small, immediate tasks can sometimes distract from the bigger picture and long-term objectives of the project.
It's important to balance the benefits of incremental work with strategic planning to ensure that all efforts contribute meaningfully towards the project's overarching goals.

## How to Improve

### [Start A Book Club](/practices/start-a-book-club.md)

#### [Know Your Next Commit](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_47#know-your-next-commit)
A guideline advocating for clarity and foresight in planning commits, emphasizing the practice of keeping changes small and manageable for incremental development and easier troubleshooting.

#### [Boy Scout Rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08)
An approach to coding that urges developers to continually improve and clean up the codebase, making small, incremental enhancements with each commit, in line with the adage of leaving the code better than you found it.

### [Host A Viewing Party](/practices/host-a-viewing-party.md)

#### [An Argument Against PRs](https://www.youtube.com/watch?v=ZlLZEQQBcFg)
A video discussion that critiques the standard use of pull requests, arguing for a workflow that favors smaller, frequent updates to foster better collaboration and efficiency in software development.

## Supporting Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

Working in small increments enables teams to improve Code Maintainability without getting overwhelmed.
By breaking down tasks into manageable, frequent updates, teams can make clear, incremental improvements to the codebase.
This approach reduces complexity, facilitating easier tracking, review, and integration.

### [Version Control](/capabilities/version-control.md)

The practice of working in small increments aligns with the DORA capability of Version Control by encouraging frequent, manageable updates.
This approach enhances the traceability, reviewability, and reversibility of changes, ensuring that each commit contributes to the project's progression while supporting better collaboration and quicker issue detection.

### [Host A Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

* How often do you commit changes to your codebase, and do you believe your current frequency optimally supports your project's goals and workflow?
* Are the increments you work on truly meaningful and contributing to the project, or are they simply small for the sake of being manageable?
* How effectively does your current continuous integration (CI) system handle the frequency of updates from working in small increments, and where can improvements be made?
* Have you experienced any fragmentation in your project due to working in very small increments, and how do you ensure that each piece contributes to a coherent whole?
* How do you maintain a balance between focusing on small, immediate tasks and ensuring that every effort aligns with and contributes to the long-term objectives of your project?