# [Code Maintainability](https://dora.dev/devops-capabilities/technical/code-maintainability/)

Each time we write, edit, or read a line of code it costs an organization time and money.
In the lifespan of a typical line of code, it will likely be written once, edited at least a handful of times, and read many times.
As such, it makes sense to write code in a way that reduces the time required to comprehend it.
Ideally, the software is built such that the reader can avoid needing to know how the whole system functions in order to make a local change.
Furthermore, bugs are easier to spot when the surrounding code is easy to comprehend.
The result of building code that's easy to maintain is more efficient delivery and better stability. But writing maintainable code requires an advanced set of skills — one that can be developed by following the practices described below.

Too often, we are working with code that is difficult to maintain.

There are many reasons developers write code that is ultimately hard to maintain.
One key reason is that developers generally focus on learning skills that help them execute the job in front of them, like learning a language or framework. They tend to under-invest in skills that have a long-term payoff, like writing cleanly abstracted, easy to maintain, and extensible code.

While writing difficult-to-maintain code may seem quicker in the short term, it can have a snowball effect. Making changes to codebases that are already a mess tends to be time-consuming, complex, and prone to errors. Often, developers follow the path of least resistance by adding to the mess to get their new functionality added.
There may be good reasons to follow such a path. However, doing so further degrades the maintainability of the system.

There is usually a delay between introducing difficult-to-maintain code and the team experiencing a performance degradation.
This delay makes it harder for non-technical team members to understand the consequences of implementing too many short-term solutions, instead of following best practices.

## Nuance

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Gold Plating

The cost of creating and maintaining software systems can add up quickly. While it's important to write code that is easy to maintain, this shouldn't be done at the expense of building a perfect system. When building re-usable software, teams have to make certain assumptions about how the code may be re-used in the future. Making these assumptions is a bit of an art. If your team avoids making any assumptions at all, they risk building software that's difficult to alter down the line. But if your team makes a bunch of faulty assumptions about the future use of their software — assumptions that are unlikely to come to fruition — they risk wasted time and effort. This is known as Gold Plating.

Every decision made during development — and every assumption about the software — has the potential to impact the long-term maintenance of the system.
Therefore, it's important to weigh cost-benefit tradeoffs when making decisions and assumptions about the design and functionality of the software.

## Assessment

To assess how mature your team or organization is in this capability, complete this short, two-part exercise.

First, score yourself on the Code Maintainability capability. Generally, score yourself a 1 if Code Maintainability is completely missing from your team or organization, a 2 if there is a lot of room for improvement, a 3 if there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Code Maintainability.

Next, consider the descriptions in the two areas of focus below: New Code and Previously Written Code. Score yourself on each description. Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

### New Code

1. **Growing Tech Debt:** Code is rarely refactored, leading to routine growth of tech debt.
2. **Occasional Maintenance:** Teams sometimes prioritize feature delivery over maintainability.
3. **Reactive Maintenance:** Code is regularly maintained as problems become bottlenecks or pain points.
4. **Proactive Maintenance:** Teams have a sharpened design sense and proactively refactor the codebase to minimize the impact of future changes.

### Previously Written Code

1. **Brittle Codebase:** Changing any code is time-consuming, complex, and prone to error.
2. **Fairly Complex Codebase:** Most changes require significant refactoring, and it's difficult to predict the impact of changes on the overall system.
3. **Partially Modular Codebase:** Most parts of the system are modular and easy to update, but some are complex and difficult to work with.
4. **Well-organized Codebase:** When changes are made to the existing codebase, they don’t tend to require much rework.

Now, average your scores for New Code and average your scores for Previously Written Code. Then, average those two numbers and you'll have your overall score for this capability. So, if your average score for New Code was 3 and your average score for Previously Written Code was 2, then your overall score for Code Maintainability would be 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Code Maintainability; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Code Maintainability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Automate Coding Standards](/practices/automate-coding-standards.md)

Automating coding standards involves using tools and processes to automatically enforce coding standards, style guides, and other best practices during the coding phase.
By automating these standards, teams can significantly reduce the number of errors and inconsistencies in the codebase, making it easier to understand, modify, and extend.
This leads to improved maintainability as the code is cleaner, less prone to bugs, and aligned with agreed-upon coding practices.
Automating coding standards removes the burden of manual reviews for stylistic and some functional issues, allowing developers to focus on more complex problems and innovative solutions.

### [Decouple from Third Parties](/practices/decouple-from-third-parties.md)

Decoupling from third parties means minimizing dependencies on third-party software, thereby ensuring that code remains adaptable and easy to maintain over time. By abstracting dependencies behind interfaces and relying on those interfaces instead of specific third-party tools, teams can enhance the portability of their code, facilitate comprehensive testing through the creation of mock or stub implementations, and flexibly migrate to alternative solutions if necessary.

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

Code reviews allow team members to ensure that proposed code is functional and easy to maintain over time. This practice also promotes test automation, prevents regression errors, and maintains smooth CI processes. By providing feedback on readability, test coverage, and coding standards adherence, conducting code reviews improves the quality of the codebase and the stability of the software. 

### [Follow Functional Core, Imperative Shell](/practices/follow-functional-core-imperative-shell.md)

The Functional Core, Imperative Shell pattern involves separating business logic into a functional core and side effects into an imperative shell. With a clear distinction between pure functions and imperative code, developers can more easily write testable and maintainable code. This enhances the stability and maintainability of the system. It also simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development. 

### [Run Pair Programming Sessions](/practices/run-pair-programming-sessions.md)

Pair programming sessions facilitate collaboration, real-time code review, and knowledge sharing among developers. By working in pairs, developers can catch issues early, ensure code is comprehensible, and spread knowledge across the team. This collaborative practice also accelerates the onboarding process for new team members while helping experienced developers refine their skills. Additionally, pair programming promotes adherence to coding standards, enhancing code consistency and readability.
 
### [Reduce Coupling Between Abstractions](/practices/reduce-coupling-between-abstractions.md)

Reducing coupling between abstractions creates a modular and flexible codebase.
Independent, well-defined components minimize unintended side effects, making the code easier to understand, modify, and test.
This modularity ensures that changes in one part of the system do not disrupt others, preserving stability and reducing cognitive load on developers. Clear abstractions and minimal dependencies support better documentation and collaboration, facilitating efficient onboarding and continuous improvement.

### [Refactor](/practices/refactor.md)

Refactoring, as a practice, systematically improves code structure, readability, and quality. Through incremental changes and adherence to coding standards, refactoring addresses complexity and technical debt, ensuring the code remains clean, modular, and comprehensible. By integrating refactoring into regular development cycles, teams establish a foundation of maintainable code, enabling efficient delivery, stability, and ongoing innovation.

### [Work in Small Increments](/practices/work-in-small-increments.md)

Working in small increments helps teams trace and reverse changes, making it easier for them to identify and address issues. By breaking down tasks into manageable, frequent updates, teams can make clear, incremental improvements to the codebase. This practice increases productivity and collaboration, reducing the frequency of large merge conflicts. 

### [Perform Static Code Analysis](/practices/perform-static-code-analysis.md)

Performing static code analysis involves using automated tools to enhance code quality, consistency, and readability.
These tools meticulously scan the codebase to identify potential issues such as code smells, security vulnerabilities, and performance bottlenecks early in the development process.
By integrating static code analysis into version control systems, IDEs, and CI/CD pipelines, teams can receive immediate feedback on code changes, ensuring adherence to coding standards and best practices. This proactive approach reduces the cognitive load on developers, allowing them to focus on more complex tasks while maintaining a clean, modular, and easily comprehensible codebase.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Code Maintainability)
- Upstream (they are a pre-requisite for Code Maintainability)
- Downstream (Code Maintainability is a pre-requisite for them)

### [Version Control](/capabilities/version-control.md) - Upstream

Version Control is fundamental for a maintainable codebase. It allows for efficient tracking, collaboration, and management of code changes over time.
By tracking changes made to the codebase using version control, developers can ensure consistency across contributors, re-use code components, conduct code audits, track bugs and errors, meet compliance requirements, manage security patches, and integrate updates quickly and easily.

### [Documentation Quality](/capabilities/documentation-quality.md) - Related

High-quality documentation is essential for code maintainability. It provides context for design decisions while also cataloging best practices and compatibility information.
By investing in documentation, developers create a single source of truth for the codebase, reducing confusion and bugs down the line.
A well-documented codebase is more maintainable, and vice versa.

### [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md) - Upstream

When teams are able to "own" their changes without requiring buy-in or high levels of coordination with other teams, the codebases they operate in tend to reflect that loose coupling.
As a result, the overall maintainability of the codebase improves, with faster bug fixing and better code quality.
