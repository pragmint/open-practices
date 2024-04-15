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

<!-- TODO: insert thought provoking questions to get reader to deeply consider if they could be better applying this practice to their organization -->

## Exercises

<!-- TODO: insert a list of exercises / experiments the reader can try to see if this practice will help their team / organization improve -->

## Resources

<!-- TODO: insert a list of resources that explore this practice. For each item, give a brief summary of the resource. -->

## Related Practices

<!-- TODO: insert a list of [linked practices](/practices) that relate to this practice. For each item, give a brief explanation of how the linked practice supports / relates to this practice. Also categorize each linked practices as one of the following: Enables, Requires, Improves -->

## Supporting Capabilities

<!-- TODO: insert a list of [linked capabilities](/capabilities) that this practice supports. For each item, give a brief explanation of how the linked capability is supported by / relates to this practice. Also categorize each linked capability as one of the following: Enables, Requires, Improves -->
