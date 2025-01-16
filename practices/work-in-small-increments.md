# Working in Small Increments

The practice of working in small increments involves making frequent, manageable changes to the codebase. This facilitates easier tracking, quicker issue detection, and straightforward integration. Working incrementally also promotes continuous improvement, minimizes risks from large updates, and enhances collaboration. By breaking tasks into smaller pieces, development teams can ensure higher quality, consistent progress, and efficient adaptability when pivots are needed.

## Nuances

### Misconception: More Commits Equals More Productivity
A higher frequency of commits does not directly correlate to higher productivity. While working in small increments encourages regular updates, the focus should be on meaningful, self-contained changes that contribute to the project's progression.
Simply pushing a high volume of minor changes without clear intent can lead to clutter in the version history and complicate project tracking, which harm productivity.

### Overemphasis on Size Over Substance
Prioritizing the size of increments over the quality and relevance of the contributions can detract from the project's overall goals.
It's crucial to ensure that each increment adds value and aligns with the project's objectives.
Small, trivial changes that don't drive the project forward or improve its quality can waste valuable time and resources.

### Integration Challenges
While small increments facilitate easier integration and testing, they also require a robust continuous integration (CI) system to manage the frequent updates. Without efficient CI practices and tools in place, the benefits of working in small increments can be negated by integration delays and bottlenecks.

### Risk of Fragmentation
Working in excessively small increments can lead to fragmentation, where the codebase is peppered with incomplete features or changes that don't function well independently. This can make it difficult to maintain a clear direction for the project and may hinder the team's ability to deliver cohesive updates.

### Neglecting Long-Term Planning
A narrow focus on small, immediate tasks can distract from the bigger picture and long-term objectives of the project. It's important to balance the benefits of incremental work with broader strategic planning to ensure that all updates represent meaningful contributions to the project's overarching goals.

## Gaining Traction

### [Start a Book Club](/practices/start-a-book-club.md)

#### [Know Your Next Commit](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_47#know-your-next-commit)
A guide for clarity and foresight in planning commits. This essay emphasizes the practice of keeping changes small and manageable for incremental development and easier troubleshooting.

#### [Boy Scout Rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08)
This essay advocates an approach in which developers continually improve and clean up the codebase, making small and incremental enhancements with each commit. It urges developers to adhere to the adage of leaving the code better than you found it.

### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [An Argument Against PRs](https://www.youtube.com/watch?v=ZlLZEQQBcFg)
In this video, "Async Code Reviews Are Chocking Your Company’s Throughput," engineer Dragan Stepanovic critiques the standard use of pull requests, arguing for a workflow that favors smaller, frequent updates to foster better collaboration and efficiency in software development.

### [Host a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)
Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion.

* How often do you commit changes to your codebase? Do you believe your current frequency supports your project's goals and workflow?
* Are the increments you work on truly meaningful and contributing to the project? Or are they simply small for the sake of being manageable?
* How effectively does your current continuous integration (CI) system handle the frequency of updates from working in small increments? Where can improvements be made?
* Have you experienced any fragmentation in your project due to working in very small increments? How do you ensure that each piece contributes to a coherent whole?
* How do you maintain a balance between focusing on small, immediate tasks and ensuring that every effort aligns with and contributes to the project's long-term objectives?

## Adjacent Capabilities
This practice supports enhanced performance in the following capabilities.

### [Code Maintainability](/capabilities/code-maintainability.md)

Working in small increments enables teams to maintain code without getting overwhelmed.
By breaking down tasks into manageable, frequent updates, teams can make clear and continuous improvements to the codebase.
This approach reduces complexity, facilitating easier tracking, review, and integration.

### [Version Control](/capabilities/version-control.md)

Working in small increments enables version control -- frequent, manageable updates make changes easier to trace, review, and reverse. Each commit is meant to contribute to the project's progression, while supporting better collaboration and quicker issue detection.

