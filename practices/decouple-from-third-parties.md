# Decouple from Third Parties

This practice helps teams minimize its reliance on third-party platforms, frameworks, libraries, and external APIs by using patterns such as interfaces or shims. This shields your core system from changes in third-party tools, allowing seamless switching between implementations or versions. Decoupling from third parties also enables mock or stub implementations for testing without external dependencies. Furthermore, decoupling your code from third-party systems improves portability across platforms and provides your team the flexibility to migrate to alternative solutions when needed.

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your teams.

### Balance Decoupling with Pragmatism

While decoupling is beneficial, overdoing it can lead to unnecessary complexity and abstraction. Be on the lookout for third-party software that has a high surface area with your codebase. For example, if you are using an ORM to fetch data, you likely don't want to pass those ORM objects all around your codebase. Doing so would make upgrading to future versions or moving to a new ORM extremely painful. If instead you're using a JSON serializer in a couple of places, it's probably overkill to "hide" that dependency since upgrading or replacing it would be fairly straightforward. Find the right balance between decoupling and practicality based on the specific requirements of your project.

### Beware Vendor Lock-in
Some organizations make long-term agreements with third-party systems that significantly reduce their operating costs. But, this comes at the expense of vendor lock-in. 

For example, Google Cloud signed some very client-favorable deals when they were trying to take market share away from AWS. Those organizations that signed long-term and favorable deals likely weren't concerned about vendor lock-in when building their systems.

### Ensure Testing Strategies Reflect Reality

Decoupling facilitates easier testing because it allows teams to use test doubles, such as mocks and stubs. However, it's crucial to keep these test doubles straightforward to prevent divergence from the real system's behavior. Overly complex test doubles can lead to false confidence in test results, as they may not accurately represent actual system interactions.

Rather than creating complex scenarios with test doubles, consider enhancing test reliability by testing actual system interactions. Move toward higher levels of the testing pyramid, where integration and end-to-end tests validate real system behaviors. This will give your team greater confidence in the integrity of the software.

All this said, remember that every situation is unique and there's no one-size-fits-all guidance for implementing testing strategies. Be aware of the trade-offs you're making and use your best judgment.

## Gaining Traction
The following actions will help your team implement this practice. 

### [Do a Spike](/practices/do-a-spike.md)

Choose an important dependency and refactor your code to introduce abstractions (such as interfaces or abstract classes) to encapsulate interactions with that dependency.
Rewrite the implementations to depend on these abstractions, rather than the concrete third-party tools.

### [Lead a Workshop](/practices/lead-workshops.md)

Start by identifying the dependencies your project currently has on third-party software, frameworks, or libraries. Make a list of these dependencies and then assess how tightly coupled they are to your codebase.

### [Start a Book Club](/practices/start-a-book-club.md)

#### [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

This article explores architectures that focus on framework independence, testability, and concern separation (such as Hexagonal Architecture, Onion Architecture, Screaming Architecture, DCI, and BCE).
It also introduces "Clean Architecture" (which defines different software domains and their corresponding responsibilities) and the Dependency Rule (which promotes high cohesion and low coupling). Clean Architecture helps teams manage dependencies with third parties by isolating external dependencies from core business logic.

#### [DIP in the Wild](https://martinfowler.com/articles/dipInTheWild.html)

This article discusses the Dependency Inversion Principle (DIP) in software design and its application in managing dependencies with third parties. It illustrates various scenarios where the DIP can be useful, such as simplifying complex APIs, aligning library abstractions with domain concepts, rejecting external constraints, and controlling time-related dependencies.

#### [That's Not Yours](https://8thlight.com/insights/thats-not-yours)

This article explores the pitfalls and benefits of using mock objects in test-driven development (TDD), emphasizing the principle of "Don't Mock What You Don't Own."
The author discusses how improper use of mocks can lead to unreliable tests and proposes alternatives, such as wrapping third-party libraries in domain-specific objects.

### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [Boundaries](https://www.destroyallsoftware.com/talks/boundaries)

This presentation focuses on the concept of using simple values rather than complex objects as the boundaries between components and subsystems. It covers a range of topics -- functional programming, the relationship between mutability and object-oriented programming (OOP), isolated unit testing with and without test doubles, and concurrency. Understanding and implementing these concepts can be immensely beneficial in managing dependencies with third parties.

### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)
Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion.

* What are the third-party dependencies we rely on in our projects?
* Have we identified any single points of failure or critical dependencies on specific third-party tools?
* Have there been instances where changes or updates to third-party tools have caused unexpected issues or disruptions in our projects?
* What are the potential risks and drawbacks of maintaining high levels of dependency on third-party tools?
* What steps can we take to future-proof our projects and mitigate risks associated with changes or discontinuation of third-party tools?

## Supported Capabilities
This practice supports enhanced performance in the following capabilities.

### [Code Maintainability](capabilities/tech/code-maintainability.md)

The Decouple from Third Parties practice significantly supports the Code Maintainability capability by advocating for minimized dependency on third-party software. Minimizing dependencies ensures that code remains adaptable and easy to maintain over time. By abstracting dependencies behind interfaces and relying on abstractions like interfaces instead of third-party tools, teams can enhance the portability of their code and enable flexibility in migration to alternative solutions if necessary.

### [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)

The Decouple from Third Parties practice supports the Test Automation capability by advocating minimal dependency on third-party software,
enabling teams to create and maintain fast, deterministic, automated tests. By relying on abstractions like interfaces, teams can facilitate comprehensive testing through mock or stub implementations.

### [Loosely Coupled Architecture](https://dora.dev/devops-capabilities/process/loosely-coupled-architecture/)

This practice is closely linked to the Loosely Coupled Architecture capability -- both emphasize architecture that is designed with reduced dependencies on external systems or services. By decoupling from third-party dependencies, teams can achieve greater autonomy and flexibility in their software development processes. Specifically, teams can make large-scale changes to their systems without requiring external permissions or coordination, complete work without extensive communication with external entities, and deploy their products or services independently of external dependencies.
