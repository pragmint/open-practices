# Decouple from Third Parties

Minimize reliance on third-party software like platforms, frameworks, libraries, and external APIs by using patterns such as interfaces or shims. This shields the core system from changes in third-party tools, allowing seamless switching between implementations or versions.

This practice also enables mock or stub implementations for testing without external dependencies. Decoupling code improves portability across platforms and provides flexibility to migrate to alternative solutions when needed.

## Nuance

### Balancing Decoupling with Pragmatism

While decoupling is beneficial, overdoing it can lead to unnecessary complexity and abstraction. Be on the lookout for 3rd party software that has a high surface area with your codebase. For example, if you are using an ORM to fetch data, you likely don't want to pass those ORM objects all around your codebase. Doing so would make upgrading to future versions or moving to a new ORM extremely painful. If instead you're using a JSON serializer in a couple of places, it's probably overkill to "hide" that dependency as upgrading or replacing it would be fairly straightforward. Find the right balance between decoupling and practicality based on the specific requirements of your project.

Some organizations make long-term agreements with 3rd party systems that significantly reduce the cost of operating their system. For example, Google Cloud signed some very client favorable deals when they were trying to take market share away from AWS. For those organizations that signed long-term and favorable deals, it likely wasn't as important to build their systems in ways that avoided vendor lock-in.

### Testing Strategies

Decoupling facilitates easier testing by using test doubles, such as mocks and stubs. However, it's crucial to keep these test doubles straightforward to prevent divergence from the real system's behavior. Overly complex test doubles can lead to false confidence in test results, as they may not accurately represent actual system interactions.

Rather than creating complex scenarios with test doubles, consider enhancing test reliability by testing actual interactions. Move towards higher levels of the testing pyramid where integration and end-to-end tests validate real system behaviors, providing more confidence in the robustness of your software.

Every situation is unique, so there's no one size fits all guidance for this situation. Be aware of the trade-offs you're making and use your head.

## Introspective Questions

### Assessing Dependency on Third-Party Tools

* What are the key third-party dependencies we rely on in our projects?
* Have we identified any single points of failure or critical dependencies on specific third-party tools?

### Challenges of Tight Coupling with Third-Party Tools

* Have there been instances where changes or updates to third-party tools have caused unexpected issues or disruptions in our projects?
* Have we encountered other challenges in the past due to tightly coupling our code with third-party tools?

### Long-Term Implications of Dependency Management

* What are the potential risks and drawbacks of maintaining high levels of dependency on third-party tools in the long term?
* What steps can we take to future-proof our projects and mitigate risks associated with changes or discontinuation of third-party tools?


## Exercises

### Identify Dependencies

Start by identifying the dependencies your project currently has on third-party software, frameworks, or libraries. Make a list of these dependencies and assess how tightly coupled they are to your codebase.

### Introduce Abstractions

Choose a key dependency and refactor your code to introduce abstractions such as interfaces or abstract classes to encapsulate interactions with that dependency.
Rewrite the implementations to depend on these abstractions rather than the concrete third-party tools.

### Implement Swappable Components

Select a part of your application where you foresee potential changes in third-party tools or where flexibility is important.
Implement multiple versions of this component, each interacting with a different third-party tool through the same interface or with a fake implementation.
Implement a mechanism to select the proper implementation based on a config file.
Test the swapping of these components to verify that the system remains functional and adaptable.

## Resources

### [Clean Architecture Article](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

The article delves into various architectural methodologies such as Hexagonal Architecture, Onion Architecture, Screaming Architecture, DCI, and BCE, with a focus on principles like framework independence, testability, and concern separation.
It introduces "The Clean Architecture," centered on the Dependency Rule, depicted by concentric circles signifying different software domains and their corresponding responsibilities.
Adhering to the Dependency Rule promotes high cohesion and low coupling. When managing dependencies with third parties, Clean Architecture provides a structured approach by encapsulating external dependencies within outer layers, effectively isolating them from core business logic.

### [Boundaries](https://www.destroyallsoftware.com/talks/boundaries)

This presentation delves into the concept of using simple values rather than complex objects as the boundaries between components and subsystems in software development. It covers various topics such as functional programming, the relationship between mutability and object-oriented programming (OO), isolated unit testing with and without test doubles, and concurrency. Understanding and implementing these concepts can be immensely beneficial in managing dependencies with third parties.

### [DIP in the Wild](https://chat.openai.com/c/af4d0747-78f9-47b5-97f4-1f81f63dcd0a)

This article discusses the Dependency Inversion Principle (DIP) in software design and its application in managing dependencies with third parties. It illustrates various scenarios where the DIP can be useful, such as simplifying complex APIs, aligning library abstractions with domain concepts, rejecting external constraints, and controlling time-related dependencies.

### [That's Not Yours](https://8thlight.com/insights/thats-not-yours)

The article explores the pitfalls and benefits of using mock objects in test-driven development (TDD), emphasizing the principle of "Don't Mock What You Don't Own."
The author discusses how improper use of mocks can lead to unreliable tests and proposes alternatives, such as wrapping third-party libraries in domain-specific objects.

## Supporting Capabilities

### [Code Maintainability](capabilities/tech/code-maintainability.md)

The Decouple from Third Parties practice significantly supports the Code Maintainability capability by advocating for the minimization of dependencies on third-party software, thereby ensuring that code remains adaptable and easy to maintain over time. By abstracting dependencies behind interfaces and relying on abstractions like interfaces instead of specific third-party tools, teams can enhance the portability of their code, facilitate comprehensive testing through the creation of mock or stub implementations, and enable flexibility in migration to alternative solutions if necessary.

### [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)

Decouple from Third Parties supports the Test Automation capability by advocating minimal dependency on third-party software,
enabling teams to create and maintain fast, deterministic automated tests.
By abstracting dependencies behind interfaces and relying on abstractions like interfaces, teams can enhance the portability of their code and facilitate testing.

### [Loosely Coupled Architecture](https://dora.dev/devops-capabilities/process/loosely-coupled-architecture/)

This practice is linked to the Loosely Coupled DORA Capability by emphasizing the reduction of dependencies on external systems or services within the architectural design.
By decoupling from third-party dependencies, teams can achieve greater autonomy and flexibility in their software development processes.
This practice enables teams to make large-scale changes to their systems without external permissions or coordination, complete work without extensive communication with external entities, and deploy their products or services independently of external dependencies.
