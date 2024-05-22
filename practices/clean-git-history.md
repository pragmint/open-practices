# Clean Git History

The Clean Git History practice favors small, focused commits to aid navigation, search, and efficient code reviews. Each commit should be releasable, maintaining the codebase in a deployable state to minimize instability. In a shared environment, commits are treated as immutable to avoid conflicts, enhancing productivity. Adding context information, such as ticket or story references, to commits helps developers understand the requirements and business reasons behind changes. This practice also facilitates grouping related commits and aids in researching pull requests and technical discussions.

Small commits are particularly beneficial for debugging. They make it easier to pinpoint the exact commit causing an issue and, due to their limited scope, help identify the specific line of code responsible. Large commits, while identifying the problematic commit, complicate the process of locating the precise error due to their extensive content. Thus, maintaining small, well-documented commits ensures a transparent and manageable git history.

## Nuance

### Mindful Contextual Comments

While adding context information like ticket or story references is valuable, developers should avoid verbose or irrelevant comments within commit messages.
Clear and concise contextual information enhances understanding, but excessive or redundant comments can clutter the history and distract from the essential changes.

### Striking a Balance in Commit Frequency

While frequent commits are generally beneficial, excessively frequent commits can disrupt workflow and create unnecessary noise in the commit history.
Developers should aim for a balance, committing changes at logical breakpoints or when significant functionality is completed, rather than after every minor edit.

### Collaborative Commit Practices

In collaborative environments, it's crucial to establish clear guidelines for committing changes to avoid conflicts and maintain consistency.
This includes agreeing on commit message formats, branch naming conventions, and the use of rebasing or merging strategies.
Overlooking these practices can lead to confusion and inefficiencies in the development process.

### Educating Team Members

Adopting clean Git history practices requires buy-in from all team members and ongoing education to ensure adherence.
It's important to communicate the benefits of small, focused commits and provide training on effective commit strategies to maintain consistency across the development team.
This education should include familiarizing developers with tools like git log --grep="ticket-number" to group and find commits related to specific tickets, and git bisect to identify the commit that introduced a bug.
Training on these tools ensures developers can manage and navigate Git history efficiently, creating a culture of best practices and continual improvement.

## Introspective Questions

### Commit Message Clarity and Relevance:

* Are our commit messages providing clear and relevant context, or do they risk becoming verbose or tangential?
* How can we ensure that our commit messages strike the right balance between providing necessary context and avoiding unnecessary clutter?

### Collaborative Commit Practices:

* Do we have clear guidelines in place for committing changes in our collaborative environment?
* Are we consistently following agreed-upon commit message formats, branch naming conventions, and merging strategies?

### Educating Team Members:

* Have we effectively communicated the benefits of clean Git history practices to all team members?
* Are our team members equipped with the necessary training and tools to navigate Git history effectively?

## Exercises

### Commit Message Workshop

Organize a workshop where team members review and rewrite a series of commit messages from past projects.
Focus on adding relevant context, ticket references, and ensuring clarity.
Compare the original and improved messages to highlight the importance of clear commit messages, discussing common pitfalls and best practices.

### Commit Frequency Audit

Conduct an audit of recent commits to assess their frequency and relevance.
Identify instances of both too frequent and too sparse commits.
Based on this analysis, develop guidelines for when to commit changes, aiming for logical breakpoints or completion of significant functionality.
Discuss as a team and adjust practices accordingly.

### Collaborative Commit Exercise

Simulate a collaborative coding session where multiple developers work on different parts of the same project.
Implement clear guidelines for commit messages, branch naming conventions, and merging strategies. After the session, review the commit history together to identify any conflicts or inconsistencies and discuss how to improve collaborative practices.

### Git Bisect Debugging

Introduce the git bisect tool and demonstrate its usage in identifying problematic commits.
Set up a mock scenario where a bug is introduced in the codebase, and have team members use git bisect to pinpoint the exact commit causing the issue.

### Git Log Exploration

Teach team members how to use git log with various options (--grep etc.) to search for specific commits related to tickets or features.
This exercise will improve their ability to navigate and utilize Git history effectively.

## Resources

### [Keep a Clean Git History](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/)
Offers guidance on maintaining a clean Git commit history, emphasizing practices like squashing similar commits, crafting clear commit messages, and organizing changes logically to make the project's history navigable and understandable, crucial for effective code reviews and project oversight.

### [Staying Disciplined with Your Git History](https://8thlight.com/blog/makis-otman/2015/07/08/git-disciplined.html)
Advocates for the disciplined management of Git history through methods like feature branching, minimizing the size of commits, and keeping branches updated via regular rebasing. Highlights the benefits of these practices for enhancing collaboration, facilitating project tracking, and simplifying code reversions.

### [Two Wrongs Can Make a Right (And Are Difficult to Fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)
Details strategies for properly amending Git history issues, such as errant commits or merge mistakes, without exacerbating problems. Includes practical advice and Git command examples for correcting history efficiently and effectively, focusing on common Git missteps and the complexities of rectifying them.

<!-- ## Related Practices -->

<!-- TODO: insert a list of [linked practices](/practices) that relate to this practice. For each item, give a brief explanation of how the linked practice supports / relates to this practice. Also categorize each linked practices as one of the following: Enables, Requires, Improves -->

## Supporting Capabilities

### [Continuous Integration](https://dora.dev/devops-capabilities/technical/continuous-integration/)
A clean Git history enhances continuous integration by simplifying the integration of changes, facilitating smoother builds, and ensuring that automated tests are more effective and reliable.

### [Continuous Delivery](https://dora.dev/devops-capabilities/technical/continuous-delivery/)
Maintaining a logical and clear commit history improves continuous delivery practices by enabling faster and more reliable release cycles, with better traceability and easier rollback options.

### [Deployment Automation](https://dora.dev/devops-capabilities/technical/deployment-automation/)
Deployment automation relies on a consistent and well-documented change history to automate the deployment process efficiently, minimizing manual errors and intervention.

### [Version Control](/capabilities/tech/version-control.md)
A clean Git history is fundamental to effective version control, enabling precise tracking, easier code reviews, and better management of project codebases.

### [Team Experimentation](https://dora.dev/devops-capabilities/process/team-experimentation/)
Well-maintained Git history facilitates team experimentation by simplifying the process of branching, testing new ideas, and integrating experimental changes without conflict.

### [Documentation Quality](https://dora.dev/devops-capabilities/process/documentation-quality/)
Clear commit messages and organized history contribute to high-quality documentation of development processes, enhancing the overall documentation and understanding of project evolution.
