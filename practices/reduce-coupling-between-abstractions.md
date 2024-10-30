# Reduce Coupling Between Abstractions

Reducing coupling between abstractions means designing software in a way that its parts work independently and don't rely too much on each other.
This involves hiding the complex details inside each part, so changes in one part don't affect others. It encourages creating small, focused modules that talk to each other through simple and clear interfaces.
Reducing coupling ultimately makes the system easier to understand, fix, and expand, resulting in software that's reliable and flexible.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your teams.

### Over-Engineering

While reducing coupling is beneficial, overdoing it can lead to over-engineering.
Creating too many tiny, isolated components can make the system overly complex and difficult to manage.
Developers should strive to simplify designs and only apply abstraction where it adds clear value, avoiding unnecessary layers of indirection.

### Misinterpreting Interface Usage

Interfaces are a powerful tool for reducing coupling, but they can be misused.
A common misconception is that every class needs an interface, leading to interface proliferation without any real benefit.
Interfaces should be used judiciously, primarily where they provide flexibility for future changes or multiple implementations.

### Impact on Collaboration and Onboarding

Reducing coupling can make the system more modular and understandable, but if the abstractions are not well-documented, new team members might struggle to understand the design.
Effective communication and comprehensive documentation are essential.

### Radical Implementation vs. Incremental
Attempting to reduce coupling throughout an existing codebase *all at once* can be overwhelming and risky.
Instead, it's often more practical to implement these changes incrementally.
Start with the most problematic areas, gradually refactoring and decoupling components. This helps manage risk and maintain system stability.

### Recognizing Natural Coupling

Not all coupling is bad; some level of dependency is natural and necessary.
Recognizing and accepting necessary coupling helps avoid futile efforts to decouple what should inherently be connected.

### Design for Needed, Not Speculative, Features

Reducing coupling prepares the codebase for future changes, but it’s important to avoid premature optimization.
The YAGNI (You Aren't Gonna Need It) principle warns against adding complexity for features that might never be needed.
Focus on the current requirements and only introduce abstractions when there's a clear, present need. This will help you avoid speculative design.


## Getting Your Team Started

Help your team implement this practice by hosting a viewing party of specially curated talks, starting a book club to discuss impactful titles on this topic, facilitating a roundtable discussion about relevant topics, or doing a spike (or timeboxed experiment).

### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [Boundaries by Gary Bernhardt](https://www.destroyallsoftware.com/talks/boundaries) 
This talk explores the intricate dynamics between code boundaries and system architecture, illustrating how to create clean and maintainable code through effective separation of concerns. In particular, Gary introduces a way to use values as the boundaries between abstractions.


### [Start a Book Club](/practices/start-a-book-club.md)

#### [Clean Architecture by Robert C. Martin](https://www.goodreads.com/book/show/18043011-clean-architecture) 
This book delves into principles and practices that ensure code remains clean, emphasizing the importance of separation of concerns and the decoupling of systems for better manageability.

#### [Working Effectively with Legacy Code by Michael C. Feathers](https://www.goodreads.com/book/show/44919.Working_Effectively_with_Legacy_Code)
This book discusses how to find seams, add automated test coverage, and refactor the system to be more simple.

#### [Refactoring by Martin Fowler](https://www.goodreads.com/en/book/show/44936.Refactoring)
This is similar to Feathers's book above, but it covers the content from a first-principles standpoint.


### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion. 

#### Understanding Dependencies

* How tightly coupled are our current modules and components?
* What are the most common pain points we encounter due to high coupling in our codebase?
* How often do changes in one part of the system require changes in other parts?

#### Evaluating Interfaces

* Are we using interfaces effectively to reduce coupling, or are they adding unnecessary complexity?
* How many interfaces in our codebase have only one implementation?
* Do we have a clear understanding of when and why we should introduce new interfaces?

#### Knowledge Sharing

* How effectively do we share knowledge about our design decisions and abstractions within the team?
* Are there ways to improve collaboration and onboarding through better documentation and communication?

#### Gradual Refactoring

* Have we identified the most problematic areas of coupling in our codebase?
* What small, incremental changes can we make to start reducing coupling in these areas?
* How do we ensure system stability while refactoring to reduce coupling?


### [Do a Spike, or Timeboxed Experiment](/practices/do-a-spike.md)

- **Refactor**: Set some time aside to refactor a key component or set of components to reduce coupling. Present your findings to the team to see if committing those changes or making additional changes have a good potential return on investment.
- **Audit Your Dependencies**: Use a dependency analysis tool to visualize the relationships between modules and components, and to identify highly coupled areas. Discuss why these dependencies exist.


## Supporting Capability

### [Code Maintainability](/capabilities/code-maintainability.md)

Reducing coupling between abstractions enhances the Code Maintainability capability by creating a modular and flexible codebase.
Independent, well-defined components minimize unintended side effects, making the code easier to understand, modify, and test.
This modularity ensures that changes in one part of the system do not disrupt others, preserving stability and reducing cognitive load on developers.
Clear abstractions and minimal dependencies support better documentation and collaboration, which in turn facilitate efficient onboarding and continuous improvement.


