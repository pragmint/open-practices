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

* Am I consistently writing descriptive, yet concise commit messages that provide context and the rationale behind changes?
* Do my commits represent logical, self-contained changes that can be easily understood and reviewed by others?
* Am I squashing commits judiciously to maintain clarity in the project’s history, without losing important details about the development process?
* How do I balance the need for a clean history with the potential disruption caused by rewriting history or force pushing, especially in a collaborative environment?
* How comfortable am I with Git's more advanced features, like interactive rebase, and am I using them appropriately to manage the project history?
* Do I regularly review the project’s commit history to learn from it, identify patterns, or spot potential issues early?
* Am I effectively communicating with my team about changes to the Git history, especially when actions might affect their work?
* What steps can I take to improve my Git practices and contribute more effectively to maintaining a clean and useful project history?


## Exercises

### Commit Message Workshop
- *Exercise*: Gather a few recent commit messages from your project. Rewrite them to be more descriptive, yet concise, focusing on the "why" behind the changes.

### Logical Commit Grouping
- *Exercise*: Take a complex feature or bug fix you recently worked on, and break down the work into logical, self-contained commits. Try to organize your work retrospectively into a series of commits that each make sense on their own.

### Squash and Rebase Challenge
- *Exercise*: Find a branch with multiple small commits. Use interactive rebase (`git rebase -i`) to squash related commits and reorder them if necessary to tell a coherent story of your changes.

### Force Push Simulation
- *Exercise*: On a personal or test repository, practice using `git push --force-with-lease` after rebasing or altering history. Note the safeguards `--force-with-lease` provides compared to a straight `git push --force`.

### History Review Session
- *Exercise*: Regularly (e.g., once a month), review the commit history of your main branch. Identify any patterns, good practices, or areas for improvement. Share your findings with your team.

### Advanced Git Features Exploration
- *Exercise*: Pick an advanced Git feature you're not familiar with, such as interactive rebase, cherry-picking, or bisect. Use a test repository to explore this feature, focusing on how it might help you maintain a cleaner history.

### Team Git Practices Review
- *Exercise*: Organize a meeting with your team to discuss your current Git practices. Identify what's working well and what could be improved. Make a plan to address any identified issues.

### Communicating History Changes
- *Exercise*: Next time you need to rewrite history in a way that affects others (e.g., before a force push), draft a communication to your team explaining what you're doing, why, and how it impacts them. Review the clarity and completeness of your communication.

### Git Tools and Extensions Trial
- *Exercise*: Research and try out a new Git tool or extension designed to help maintain a clean history, such as a commit linter or a graphical history viewer. Evaluate its effectiveness for your workflow.

### Reflective Git Practice Diary
- *Exercise*: Keep a diary for one month where you note down your Git practices, particularly focusing on how you maintain your project's history. Reflect weekly on what you've learned and how you can improve.


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
