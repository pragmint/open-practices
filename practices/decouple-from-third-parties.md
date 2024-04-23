# Decouple from Third Parties

This practice aims to minimize dependencies on third-party software such as frameworks, libraries, and external APIs.
It advocates relying on abstractions like interfaces, enabling the creation of code implementations that are not tightly coupled to specific third-party tools.
Developers can easily switch between different implementations or versions of third-party components without affecting the core logic of their application.

By utilizing interfaces, developers can create mock or stub implementations for testing purposes, facilitating comprehensive unit testing without relying on external resources.
Decoupling code from specific third-party tools enhances its portability across different platforms and environments, it provides the flexibility to migrate to alternative solutions if necessary.

## Nuance

### Balancing Decoupling with Pragmatism

While decoupling is beneficial, overdoing it can lead to unnecessary complexity and abstraction.
It's essential to find the right balance between decoupling and practicality based on the specific requirements of your project.

### Identifying Core Dependencies

Not all third-party dependencies are equal. It's crucial to distinguish between core dependencies that significantly impact the functionality of your application and peripheral dependencies that can be easily swapped out or abstracted.

### Vendor Lock-in vs. Flexibility

While decoupling reduces vendor lock-in, it's essential to balance this with the potential benefits of tightly integrating with certain third-party tools or services.
Evaluate the trade-offs between vendor lock-in and the flexibility to switch providers.

### Documentation and Communication

Clear documentation and communication are crucial when working with abstracted interfaces, especially in collaborative projects.
Ensure that team members understand the purpose and usage of interface contracts to maintain consistency and avoid misunderstandings.

### Testing Strategies

Decoupling enables easier testing through test doubles, but is important to devise effective testing strategies.
Ensure that tests cover the interactions between components effectively and that changes to interfaces and implementations are reflected in test cases.

## Introspective Questions

### Assessing Dependency on Third-Party Tools

* How dependent are we on specific third-party frameworks, libraries, or APIs in our software projects?
* What are the key third-party dependencies we rely on in our projects? 
* Have we identified any single points of failure or critical dependencies on specific third-party tools?
* Are there alternative solutions or fallback options available in case a third-party dependency becomes unavailable or incompatible?

### Challenges of Tight Coupling with Third-Party Tools

* Have we encountered challenges in the past due to tightly coupling our code with third-party tools?
* What specific challenges or difficulties have arisen from tightly coupling our code with third-party frameworks or APIs?
* Have there been instances where changes or updates to third-party tools have caused unexpected issues or disruptions in our projects?

### Long-Term Implications of Dependency Management

* Do we have a clear understanding of the long-term implications and costs associated with our current level of dependency on third-party software?
* What are the potential risks and drawbacks of maintaining high levels of dependency on third-party tools in the long term?
* How do we evaluate the trade-offs between the benefits of using third-party solutions and the risks of dependency and lock-in?
* Are there measures in place to monitor and manage the total cost of ownership (TCO) associated with third-party dependencies, including licensing, maintenance, and support costs?
* What steps can we take to future-proof our projects and mitigate risks associated with changes or discontinuation of third-party tools?

### Exploring Decoupling Strategies

* Are there opportunities to abstract away dependencies through the use of interfaces or other abstraction mechanisms in our codebase?
* In which areas of our codebase do we see the greatest potential for decoupling from third-party tools through abstraction?
* How well-defined and documented are the interfaces or abstraction layers that mediate interactions with third-party dependencies?
* What criteria do we use to determine whether a particular dependency warrants abstraction or decoupling from our codebase?

### Promoting a Culture of Decoupling

* How can we foster a culture of decoupling and abstraction within our development team?
* What educational resources or training opportunities are available to help team members understand the importance of decoupling and abstraction?
* Do we actively encourage exploration and experimentation with alternative solutions and dependencies that could reduce our reliance on third-party tools?
* Are there forums or channels for sharing knowledge and best practices related to decoupling and dependency management within our development team?
* How do we recognize and reward team members who contribute to decoupling efforts and advocate for best practices in dependency management?

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

### Unit Testing with Mocks

Take a critical piece of functionality in your project and create unit tests for it using mock objects.
Write wrappers (adapters) to interact with third party dependencies and use mocks to simulate interactions with them without calling the real third party.
Ensure that these tests are comprehensive and cover various scenarios.

### Solicit Feedback

Throughout these exercises, gather feedback from team members on their experiences with the practice.
Discuss any challenges encountered, benefits observed, and areas for improvement.
Use this feedback to refine your approach and tailor it to the specific needs and dynamics of your team or organization.

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