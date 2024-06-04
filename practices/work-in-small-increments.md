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

## Introspective Questions

### How Often Do You Commit?
How often do you commit changes to your codebase, and do you believe your current frequency optimally supports your project's goals and workflow?

### Are Your Increments Meaningful?
Are the increments you work on truly meaningful and contributing to the project, or are they simply small for the sake of being manageable?

### How Effective Is Your CI System?
How effectively does your current continuous integration (CI) system handle the frequency of updates from working in small increments, and where can improvements be made?

### Do You Maintain Project Cohesion?
Have you experienced any fragmentation in your project due to working in very small increments, and how do you ensure that each piece contributes to a coherent whole?

### Is Your Work Aligned With Long-Term Goals?
How do you maintain a balance between focusing on small, immediate tasks and ensuring that every effort aligns with and contributes to the long-term objectives of your project?

## Exercises

### Implement a Daily Commit Challenge
* **Objective:** Encourage developers to commit at least once a day with meaningful changes to foster the habit of working in small increments.
* **Outcome:** Increased familiarity with the practice, leading to a more consistent and manageable development process.

### Track and Analyze Commit Sizes
* **Objective:** Review the size and scope of commits over a period to assess whether the team is effectively balancing between too small and too large increments.
* **Outcome:** Insights into the optimal size for commits that balance manageability with meaningful contribution to the project.

### Continuous Integration (CI) Workflow Optimization
* **Objective:** Evaluate and improve the CI process to handle frequent updates more efficiently, including automating tests and deployment where possible.
* **Outcome:** A smoother, faster CI process that supports the practice without becoming a bottleneck.

### Fragmentation Review
* **Objective:** Conduct a review of recent features or changes to identify instances of fragmentation due to excessively small increments.
* **Outcome:** Recommendations for combining or restructuring work to maintain project cohesion without sacrificing the benefits of small increments.

### Strategic Increment Planning Session
* **Objective:** Organize a planning session to align small increment work with long-term project goals, ensuring that each small task contributes to the bigger picture.
* **Outcome:** A clearer understanding of how daily work fits into long-term objectives, potentially leading to more strategic task allocation and prioritization.

## Resources

### [Know Your Next Commit](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_47#know-your-next-commit)
A guideline advocating for clarity and foresight in planning commits, emphasizing the practice of keeping changes small and manageable for incremental development and easier troubleshooting.

### [An Argument Against PRs](https://www.youtube.com/watch?v=ZlLZEQQBcFg)
A video discussion that critiques the standard use of pull requests, arguing for a workflow that favors smaller, frequent updates to foster better collaboration and efficiency in software development.

### [Boy Scout Rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08)
An approach to coding that urges developers to continually improve and clean up the codebase, making small, incremental enhancements with each commit, in line with the adage of leaving the code better than you found it.

<!-- ## Related Practices -->

<!-- TODO: insert a list of [linked practices](/practices) that relate to this practice. For each item, give a brief explanation of how the linked practice supports / relates to this practice. Also categorize each linked practices as one of the following: Enables, Requires, Improves -->

## Supporting Capabilities

### [Code Maintainability](/capabilities/tech/code-maintainability.md)

Working in small increments enables teams to improve Code Maintainability without getting overwhelmed.
By breaking down tasks into manageable, frequent updates, teams can make clear, incremental improvements to the codebase.
This approach reduces complexity, facilitating easier tracking, review, and integration.