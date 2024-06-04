# [Code Maintainability](https://dora.dev/devops-capabilities/technical/code-maintainability/)

Each time we write, edit, or read a line of code it costs an organization time and money.
In the lifespan of a line of code, it will be written once, edited at least a handful of times, and read many times.
As such, it makes sense to write code in a way that reduces the time required to comprehend it.
Ideally, the software is built such that the reader can avoid needing to know how the whole system functions in order to make a local change.
Furthermore, bugs are easier to spot when the surrounding code is easy to comprehend.
The result of building code that's easy to maintain is more efficient delivery and better stability.

When difficult to maintain code is written, it can have a snowball effect.
It requires an advanced set of skills to write maintainable code in a sea of hard to maintain code.
Often, developers follow the path of least resistance by adding to the mess to get their new functionality added.
There may be good reasons to follow such a path, however doing so further degrades the maintainability of the system.
There is a delay between difficult to maintain code being introduced and the team experiencing a performance degradation.
This delay makes it harder for non-technical team members to understand the consequences of implementing too many short-term solutions.

## Supporting Practices

<!-- More practices will be added incrementally -->

### [Automate Coding Standards](/practices/automate-coding-standards.md)

This practice involves the use of tools and processes to automatically enforce coding standards, style guides, and other best practices during the coding phase.
By automating these standards, teams can significantly reduce the number of errors and inconsistencies in the codebase, making it easier to understand, modify, and extend.
This leads to improved maintainability as the code is cleaner, less prone to bugs, and more aligned with agreed-upon coding practices.
Automating coding standards removes the burden of manual reviews for stylistic and some functional issues, allowing developers to focus on more complex problems and innovative solutions.

### [Decouple from Third Parties](/practices/decouple-from-third-parties.md)

The Decouple from Third Parties practice significantly supports the Code Maintainability capability by advocating for the minimization of dependencies on third-party software, thereby ensuring that code remains adaptable and easy to maintain over time. By abstracting dependencies behind interfaces and relying on abstractions like interfaces instead of specific third-party tools, teams can enhance the portability of their code, facilitate comprehensive testing through the creation of mock or stub implementations, and enable flexibility in migration to alternative solutions if necessary.

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

The Conduct Code Reviews practice significantly strengthens the Code Maintainability capability within software teams. Through these reviews, team members can collectively ensure that proposed code changes are not only functional but also easy to maintain over time. By providing feedback on readability, modularity, and coding standards adherence, code reviews help improve the overall quality of the codebase.

### [Follow Functional Core, Imperative Shell](/practices/follow-functional-core-imperative-shell.md)

The Follow Functional Core, Imperative Shell practice significantly supports the Code Maintainability capability.
By separating business logic into a functional core and side effects into an imperative shell, this approach enhances code readability, simplifies comprehension, and reduces complexity.
With a clear distinction between pure functions and imperative code, developers can more easily understand and modify code, leading to improved maintainability and stability of the software system.

### [Run Pair Programming Sessions](/practices/run-pair-programming-sessions.md)

Pair Programming directly supports Code Maintainability by facilitating collaboration, real-time code review, and knowledge sharing among developers. By working in pairs, developers catch issues early, ensure code comprehensibility, and spread knowledge across the team, leading to a more maintainable codebase. Additionally, Pair Programming promotes adherence to coding standards, enhancing code consistency and readability.

### [Reduce Coupling Between Abstractions](/practices/reduce-coupling-between-abstractions.md)

Reducing Coupling Between Abstractions enhances Code Maintainability by creating a modular and flexible codebase.
Independent, well-defined components minimize unintended side effects, making the code easier to understand, modify, and test.
This modularity ensures that changes in one part of the system do not disrupt others, preserving stability and reducing cognitive load.s
Clear abstractions and minimal dependencies support better documentation and collaboration, facilitating efficient onboarding and continuous improvement.

### [Refactor](/practices/refactor.md)

Refactoring, as a practice, significantly supports the Code Maintainability Capability by systematically improving code structure, readability, and quality. Through incremental changes and adherence to coding standards, it addresses complexity and technical debt, ensuring the code remains clean, modular, and comprehensible. By integrating refactoring into regular development cycles, teams establish a foundation of maintainable code, enabling efficient delivery, stability, and ongoing innovation.

### [Work in Small Increments](/practices/work-in-small-increments.md)

Working in small increments enables teams to improve Code Maintainability without getting overwhelmed.
By breaking down tasks into manageable, frequent updates, teams can make clear, incremental improvements to the codebase.
This approach reduces complexity, facilitating easier tracking, review, and integration.

## Related Capabilities

### [Version Control](/capabilities/tech/version-control.md)

Version Control is fundamental for a maintainable codebase, allowing for efficient tracking, collaboration, and management of code changes over time.