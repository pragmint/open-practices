# Follow Functional Core, Imperative Shell

When a codebase has tight coupling between state and behavior, changes become difficult, testing impractical, and new developer onboarding difficult. The Functional Core, Imperative Shell pattern introduces a clear separation: pure, side-effect-free logic is isolated in a “functional core,” while I/O and system interactions are handled in an “imperative shell.” This structure improves modularity, simplifies testing, and makes it safer and easier to evolve complex parts of the system over time.

## When to Experiment

"I am a [persona] and I need to ... so I can gradually modernize the most brittle parts of our platform."

"I am a [persona] and I need to ... so I can reduce cognitive load."

"I am a [persona] and I need to ... so I can build a foundation for more robust and maintainable systems."

## How to Gain Traction

### Host a Roundtable Discussion

#### Assess the Benefits

* What advantages could the adoption of the Functional Core, Imperative Shell pattern bring to our projects?
* How might separating business logic from side effects enhance code readability, maintainability, and scalability?
* In what ways could the Functional Core, Imperative Shell pattern mitigate the impact of changes in infrastructure technology, allowing for smoother transitions and future-proofing our codebase?
* What benefits might arise from writing unit tests that ensure the functional core code being tested has no side effects?
* How could the reduced presence of control statements in the imperative shell simplify integration tests?

#### Evaluate Team Readiness

* How prepared are our development teams to embrace a paradigm shift toward functional programming principles?
* Do team members possess the necessary skills and knowledge to implement and maintain code following this practice?
* What resources, training, or support mechanisms can we provide to facilitate the transition and ensure successful adoption?

#### Begin a Gradual Transition to Functional Core, Imperative Shell

* How can we identify and prioritize modules or components within our existing codebase that are suitable candidates for transitioning to the Functional Core, Imperative Shell pattern?
* What strategies can we employ to refactor existing imperative code into pure functions within the functional core, while maintaining backward compatibility and minimizing disruptions to ongoing development?
* Are there opportunities to introduce the Functional Core, Imperative Shell pattern gradually, perhaps starting with new features or modules before expanding its adoption to legacy code?
* How can we ensure effective communication and collaboration among team members during the transition process, including knowledge sharing, pair programming, and code reviews?
* What metrics or milestones can we establish to measure progress and evaluate the success of incrementally transitioning to the Functional Core, Imperative Shell pattern?

### Build a Regression Testing Suite 
[fit this detail in this section? It was listed as a "prerequisite experiment" in the GS report. The below was part of Nuances, but it seems more like essential "setup" of this experiment. Should it go here?]
**Unit tests** should concentrate on validating the business logic enclosed within the functional core, testing its expected behavior in isolation. This approach is especially advantageous due to the functional core's composition of pure functions, facilitating straightforward unit testing devoid of external dependencies or side effects. **Integration tests** should cover the behavior of the imperative shell as it interacts with external systems, including database calls, API requests, or user interfaces. Imperative shell integration tests ideally require fewer scenarios to validate, given that control statements such as `if`, `while`, or `for` loops should mostly reside within the functional core layer.

### Encourage Mentoring
Transitioning to the Functional Core, Imperative Shell pattern may present a steep learning curve for teams.
To facilitate this transition smoothly, have developers with more knowledge mentor other developers through pair programming sessions.
Fostering an environment of knowledge sharing, providing resources, and allocating time for developers to study the pattern can greatly aid in its adoption and understanding across the team.

### Host Team Viewings 

- [Boundaries by Gary Bernhardt](https://github.com/pragmint/open-practices/blob/main/resources/tech/boundaries.md): This talk is about using simple values (as opposed to complex objects) as the boundaries between components and subsystems. It moves through many topics: functional programming, mutability's relationship to OOP, isolated unit testing with and without test doubles, concurrency, and more.

- [Moving I/O to the edges of your app: Functional Core, Imperative Shell](https://www.youtube.com/watch?v=P1vES9AgfC4): Modern software design patterns, like Onion, Clean, and Hexagonal architecture, suggest that your app's logic should run the same way every time, with I/O handled in separate abstractions at the edges. This talk introduces a simple way to keep I/O and core logic apart, simplifying code.

- [Are We There Yet](https://www.youtube.com/watch?v=ScEPu1cs4l0): This talk covers some first-principles thinking about how software could, and should, be designed. It highlights the challenges of managing state and avoiding complexity, and advocates for designs that allow for smoother evolution over time.

### Read as a Team

- [How functional programming patterns can simplify code](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_02): This article promotes the mastery of functional programming principles, stating they improve code quality beyond multi-core challenges. It emphasizes referential transparency, where functions yield consistent results regardless of mutable state. It criticizes mutable variables in imperative code and suggests smaller, immutable functions for fewer defects. It acknowledges functional programming's limitations but advocates for its application in various domains, asserting it complements OOP.

## Lessons From the Field

- _Don't overemphasize functional purity_ -- Ensuring the functional core remains pure and without side effects is important, but excessively fixating on absolute purity may inadvertently introduce impractical code. For instance, rigidly avoiding variable mutation can sometimes lead to the use of recursion. Functional programming constructs, while elegant, may not always be the most efficient choice, especially in performance-critical scenarios.

- _Remember, values are the boundary_ -- Values serve as the boundary between the layers. The imperative shell should communicate with the functional core by passing value objects exclusively, avoiding objects or functions that could potentially induce side effects. This ensures that the functional core remains isolated from external state changes, promoting clarity, predictability, and maintainability in the codebase while facilitating easier testing, debugging, and refactoring.

- _Some behavior and logic needs to live on the imperative shell_ -- In simple cases, the imperative shell merely passes inputs to the functional core, receives the response, and renders it back to the user. However, there are scenarios where the functional core may produce outputs that require inspection or processing by the imperative shell. 

## Deciding to Pitch or Polish

After experimenting with this practice for [insert appropriate quantity of time in bold], bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

Increased unit test coverage of business logic without needing mocks or stubs (as tracked by...)

Faster lead time of tickets (as tracked by...)

### Slow & Intangible

Improved code clarity and consistency, as reported by developers via ...

## Supported Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

By separating business logic into a functional core and side effects into an imperative shell, code becomes more readable, more comprehensible, and less complex.
With a clear distinction between pure functions and imperative code, developers can more easily understand and modify code, leading to improved maintainability and stability of the software system.

### [Test Automation](/capabilities/test-automation.md)

The functional core allows for straightforward unit testing - its pure functions yield predictable results and don't rely on external states -- while the imperative shell handles side effects and interactions with external systems, which can be tested through integration tests. This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development, which is crucial for robust and efficient test automation.
