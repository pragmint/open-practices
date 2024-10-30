# Follow Functional Core, Imperative Shell

Functional Core, Imperative Shell is a software design pattern that advocates for dividing code into two layers: a functional core and an imperative shell.
The functional core houses the critical logic of the application, written in a pure, side-effect-free manner following functional programming principles.
This core is highly testable, maintainable, and predictable.
The imperative shell handles interactions with the external world, using imperative programming for tasks like I/O operations and user interfaces.
This separation of concerns enhances modularity, clarity, and flexibility in software development, enabling easier maintenance and evolution of complex systems.

In dynamic languages, the Functional Core, Imperative Shell pattern is often favored because it can address testing challenges inherent in these languages.
By communicating between the functional core and imperative shell via passing values, instead of relying on interfaces, developers can mitigate the risk of false positives when using mocks and avoid encountering errors with the real implementation.


## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your teams.


### Overemphasis on Functional Purity

Ensuring the functional core remains pure and without side effects is important.
However, excessively fixating on absolute purity may inadvertently introduce impractical code.
For instance, rigidly avoiding variable mutation can sometimes lead to the use of recursion.
While recursion aligns with functional purity, its efficiency may diminish, particularly in languages where stack management for large inputs poses challenges.
Functional programming constructs, while elegant, may not always be the most efficient choice, especially in performance-critical scenarios.

### Remembering Values are the Boundary

Values serve as the boundary between the layers.
The imperative shell should communicate with the functional core by passing value objects exclusively, avoiding objects or functions that could potentially induce side effects.
This ensures that the functional core remains isolated from external state changes, promoting clarity, predictability, and maintainability in the codebase while facilitating easier testing, debugging, and refactoring.

### Potentially Steep Learning Curve

Transitioning to the Functional Core, Imperative Shell pattern may present a steep learning curve for teams.
To facilitate this transition smoothly, it's recommended that developers with more knowledge mentor other developers through pair programming sessions.
Additionally, fostering an environment of knowledge sharing, providing resources, and allocating time for developers to study the pattern can greatly aid in its adoption and understanding across the team.

### Can Be Compatible with Object-Oriented Programming

The purpose of an object is to bundle behavior and state into a single, cohesive unit. In contrast, the Functional Core, Imperative Shell pattern aims to _separate_ pure logic from state management. When using the Functional Core, Imperative Shell pattern in an object-oriented application, the idea is to extract functional-style components that are then used by objects managing state and interacting with external systems. 

This approach works best when there are clear boundaries between pure computations and operations that cause side effects. However, avoid applying this pattern to objects where state and behavior are tightly intertwined, as it can add unnecessary complexity. The goal is to separate concerns while preserving the natural behavior of objects and maintaining the integrity of stateful components.

So, developers can implement the functional core while adhering to OOP principles, taking advantage of both paradigms.


### Some Behavior and Logic Needs to Live on the Imperative Shell

In simple cases, the imperative shell merely passes inputs to the functional core, receives the response, and renders it back to the user.
However, there are scenarios where the functional core may produce outputs that require inspection or processing by the imperative shell.
While the imperative shell should ideally remain simple and devoid of complex logic, it may need to analyze, interpret, or transform the response from the functional core to ensure proper interaction and presentation to the user.

### Unit Testing of Functional Core, Integration Testing of Imperative Shell

Unit tests should concentrate on validating the business logic enclosed within the functional core, testing its expected behavior in isolation.
This approach is especially advantageous due to the functional core's composition of pure functions, facilitating straightforward unit testing devoid of external dependencies or side effects.
Integration tests should cover the behavior of the imperative shell as it interacts with external systems, including database calls, API requests, or user interfaces.
Imperative shell integration tests ideally require fewer scenarios to validate, given that control statements such as `if`, `while`, or `for` loops should mostly reside within the functional core layer.


## Getting Your Teams Started

Help your team implement this practice by hosting a viewing party of specially curated talks, starting a book club to discuss impactful titles on this topic, or facilitating a roundtable discussion about relevant topics.


### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [Boundaries by Gary Bernhardt](https://www.destroyallsoftware.com/talks/boundaries)

This talk is about using simple values (as opposed to complex objects) as the boundaries between components and subsystems. It moves through many topics: functional programming, mutability's relationship to OOP, isolated unit testing with and without test doubles, concurrency, and more.

#### [Moving I/O to the edges of your app: Functional Core, Imperative Shell](https://www.youtube.com/watch?v=P1vES9AgfC4)

Modern software design patterns, like Onion, Clean, and Hexagonal architecture, suggest that your app's logic should run the same way every time, with I/O handled in separate abstractions at the edges. This talk introduces a simple way to keep I/O and core logic apart, simplifying code.


#### [Are We There Yet](https://www.youtube.com/watch?v=ScEPu1cs4l0)

This talk covers some first-principles thinking about how software could, and should, be designed. It highlights the challenges of managing state and avoiding complexity, and advocates for designs that allow for smoother evolution over time.

### [Start a Book Club](/practices/start-a-book-club.md)

#### [How functional programming patterns can simplify code](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_02)

This article promotes the mastery of functional programming principles, stating they improve code quality beyond multi-core challenges. It emphasizes referential transparency, where functions yield consistent results regardless of mutable state. It criticizes mutable variables in imperative code and suggests smaller, immutable functions for fewer defects. It acknowledges functional programming's limitations but advocates for its application in various domains, asserting it complements OOP.


### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion. 


#### Assessing the Benefits

* What advantages could the adoption of the Functional Core, Imperative Shell pattern bring to our projects?
* How might separating business logic from I/O enhance code readability, maintainability, and scalability?
* In what ways could the Functional Core, Imperative Shell pattern mitigate the impact of changes in infrastructure technology, allowing for smoother transitions and future-proofing our codebase?
* What benefits might arise from writing unit tests that ensure the functional core code being tested has no side effects?
* How could the reduced presence of control statements in the imperative shell simplify integration tests?

#### Evaluating Team Readiness

* How prepared are our development teams to embrace a paradigm shift toward functional programming principles?
* Do team members possess the necessary skills and knowledge to implement and maintain code following this practice?
* What resources, training, or support mechanisms can we provide to facilitate the transition and ensure successful adoption?

#### Incremental Transition to Functional Core, Imperative Shell 

* How can we identify and prioritize modules or components within our existing codebase that are suitable candidates for transitioning to the Functional Core, Imperative Shell pattern? 
* What strategies can we employ to refactor existing imperative code into pure functions within the functional core, while maintaining backward compatibility and minimizing disruptions to ongoing development?
* Are there opportunities to introduce the Functional Core, Imperative Shell pattern gradually, perhaps starting with new features or modules before expanding its adoption to legacy code?
* How can we ensure effective communication and collaboration among team members during the transition process, including knowledge sharing, pair programming, and code reviews?
* What metrics or milestones can we establish to measure progress and evaluate the success of incrementally transitioning to the Functional Core, Imperative Shell pattern?


## Supporting Capabilities

This practice supports enhanced performance in the following capabilities. 


### [Code Maintainability](/capabilities/code-maintainability.md)

Follow the Functional Core, Imperative Shell pattern significantly supports the Code Maintainability capability.
By separating business logic into a functional core and side effects into an imperative shell, code becomes more readable, more comprehensible, and less complex. 
With a clear distinction between pure functions and imperative code, developers can more easily understand and modify code, leading to improved maintainability and stability of the software system.

### [Test Automation](/capabilities/test-automation.md)

Follow the Functional Core, Imperative Shell pattern supports the Test Automation capability because it facilitates the creation of highly testable and maintainable code. The functional core, being side-effect-free, allows for straightforward unit testing - its pure functions yield predictable results and don't rely on external states. This ensures that the core business logic is thoroughly tested and reliable. The imperative shell handles side effects and interactions with external systems, which can be tested through integration tests. This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development, which is crucial for robust and efficient test automation.

