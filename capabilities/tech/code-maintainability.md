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

## Related Capabilities

### [Continuous Integration](https://dora.dev/devops-capabilities/technical/continuous-integration/)
Continuous Integration ensures frequent automated testing and merging of code changes, which reduces conflicts and promotes a maintainable, easily updated codebase.

### [Continuous Delivery](https://dora.dev/devops-capabilities/technical/continuous-delivery/)
Effective Continuous Delivery relies on maintainable code to enable rapid, reliable updates and deployments, emphasizing the necessity of a well-structured codebase.

### [Deployment Automation](https://dora.dev/devops-capabilities/technical/deployment-automation/)
Deployment Automation benefits from maintainable code by minimizing deployment errors and facilitating smoother, faster release processes.

### [Version Control](https://dora.dev/devops-capabilities/technical/version-control/)
Version Control is fundamental for a maintainable codebase, allowing for efficient tracking, collaboration, and management of code changes over time.

### [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)
Test Automation supports maintainable code through consistent, automated validation of code changes, enhancing reliability and speed of development cycles.

### [Documentation Quality](https://dora.dev/devops-capabilities/process/documentation-quality/)
High-quality documentation is essential for maintaining a codebase as it ensures that the code is understandable and accessible, enabling developers to contribute more effectively and maintain the codebase with ease.

### [Loosely Coupled Architecture](https://dora.dev/devops-capabilities/process/loosely-coupled-architecture/)
Adopting a loosely coupled architecture facilitates code maintainability by allowing individual components or services to be updated, maintained, or replaced without significantly impacting other parts of the system.

### [Shifting Left on Security](https://dora.dev/devops-capabilities/process/shifting-left-on-security/)
Integrating security practices early in the development lifecycle requires maintainable code to efficiently address potential security issues, making the overall development process more secure and sustainable.

### [Streamlining Change Approval](https://dora.dev/devops-capabilities/process/streamlining-change-approval/)
Streamlining the change approval process improves code maintainability by reducing the bureaucratic overhead associated with making changes, thus allowing for quicker and more efficient updates to the codebase.

### [Generative Organizational Culture](https://dora.dev/devops-capabilities/cultural/generative-organizational-culture/)
A generative organizational culture encourages open communication, collaboration, and shared responsibility, which can lead to more effective code maintainability practices by fostering an environment where continuous improvement is valued.

### [Learning Culture](https://dora.dev/devops-capabilities/cultural/learning-culture/)
A strong learning culture empowers teams to stay current with best practices and technologies for code maintenance, enabling continuous improvement and adaptation in maintainability practices.

### [Transformational Leadership](https://dora.dev/devops-capabilities/cultural/transformational-leadership/)
Transformational leadership can inspire and motivate teams to prioritize and improve code maintainability, by leading through example and fostering an environment that values high-quality, sustainable code.

### [Well-being](https://dora.dev/devops-capabilities/cultural/well-being/)
Prioritizing the well-being of software development teams can lead to higher job satisfaction and lower turnover, which contributes to better code maintainability through consistent and focused efforts on code quality and documentation.