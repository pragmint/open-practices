# Clean Git History

The Clean Git History practice favors small, focused commits to aid navigation, search, and efficient code reviews. Each commit should be releasable, maintaining the codebase in a deployable state to minimize instability. On shared branches, commits are treated as immutable to avoid nasty conflicts. Adding context information, such as ticket or story references, to commits helps developers understand the requirements and business reasons behind changes.

Small commits are particularly beneficial for debugging. They make it easier to pinpoint the exact commit causing an issue and, due to their limited scope, help identify the specific line of code responsible. Large commits complicate the process of locating the precise error due to their size. Thus, maintaining small, well-documented commits ensures a transparent and manageable git history.

## Nuance

### Mindful Contextual Comments

While adding context information like ticket or story references is valuable, developers should avoid verbose or irrelevant comments within commit messages.
Clear and concise contextual information enhances understanding, but excessive or redundant comments can clutter the history and distract from the essential changes.

### Striking a Balance in Commit Frequency

Developers should aim for a balance, ensuring commits are neither too sparse (to capture meaningful progress) nor too frequent (to avoid cluttering the commit history).
If developers wait to commit until their entire feature is complete (assuming it's not a minor change), then they're likely not committing frequently enough.
When following the red/green/refactor flow from the [test-driven design](/practices/implement-test-driven-design.md) practice, then it's prudent to aim to commit every couple of red/green/refactor cycles.

### Collaborative Commit Practices

In collaborative environments, it's crucial to establish clear guidelines for committing changes to avoid conflicts and maintain consistency.
This includes agreeing on commit message formats, branch naming conventions, and the use of rebasing or merging strategies.
Overlooking these practices can lead to confusion and inefficiencies in the development process.

### Educating Team Members

Adopting clean Git history practices requires buy-in from all team members and ongoing education to ensure adherence.
It's important to communicate the benefits of small, focused commits and provide training on effective commit strategies to maintain consistency across the development team.
This education should include familiarizing developers with tools like `git log --grep="ticket-number"` to group and find commits related to specific tickets, and `git bisect` to identify the commit that introduced a bug.
Training on these tools ensures developers can manage and navigate Git history efficiently, creating a culture of best practices and continual improvement.

### Use Automation

While finding the right commit size should always be a judgement call, it may make sense to introduce some automation to ensure commit messages comply with agreed upon standards. [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy#_an_example_git_enforced_policy) are one way to automate that enforcement.

## Introspective Questions

### Commit Message Clarity and Relevance

* Are our commit messages providing clear and relevant context, or do they risk becoming verbose or tangential?
* How can we ensure that our commit messages strike the right balance between providing necessary context and avoiding unnecessary clutter?

### Collaborative Commit Practices

* Do we have clear guidelines in place for committing changes in our collaborative environment?
* Are we consistently following agreed-upon commit message formats, branch naming conventions, and merging strategies?

### Educating Team Members

* Have we effectively communicated the benefits of clean Git history practices to all team members?
* Are our team members equipped with the necessary training and tools to navigate Git history effectively?

## Exercises

### Commit Frequency Audit

Conduct an audit of recent commits to assess their frequency and relevance.
Identify instances of both too frequent and too sparse commits.
Based on this analysis, develop guidelines for when to commit changes, aiming for logical breakpoints or completion of significant functionality.
Discuss as a team and adjust practices accordingly.

### Git Bisect Debugging

Introduce the git bisect tool and demonstrate its usage in identifying problematic commits.
Set up a mock scenario where a bug is introduced in the codebase, and have team members use git bisect to pinpoint the exact commit causing the issue.

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

### [Version Control](/capabilities/tech/version-control.md)

A clean Git history is fundamental to effective version control, enabling precise tracking, easier code reviews, and better management of project codebases.
