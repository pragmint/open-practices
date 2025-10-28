# Follow Functional Core, Imperative Shell

When a codebase has tight coupling between state and behavior, changes become difficult, testing impractical, and new developer onboarding tricky. The Functional Core, Imperative Shell pattern introduces a clear separation between state and behavior: Pure, side-effect-free logic is isolated in abstractions called “functional cores,” while I/O and system interactions are handled in abstractions called “imperative shells.” This structure improves modularity, simplifies testing, and makes it safer and easier to evolve complex parts of the system over time.

Lots of other patterns build on this same idea. Hexagonal, Onion, and Clean Architectures all formalize it at the system level by placing a pure, dependency-free domain at the center and pushing frameworks, databases, and APIs to the outer shell. In each case, the essence is the same: Keep decision-making pure and deterministic, and confine the messy realities of the outside world to the edges where they can be swapped, mocked, or evolved independently.

## When to Experiment

- You are a developer and you are struggling to write isolated unit tests because the underlying system is very coupled.
- You are a frontend developer and you need to keep UI rendering predictable while isolating browser events and API calls so the interface stays intuitive.
- You are an architect and you need to organize systems so that they remain reliable, scalable, and easy to evolve as the business grows *without* constant rewrites or coordination bottlenecks.
- You are a data engineer and you need to build testable, reusable, and replayable transformation pipelines.
- You are an engineering leader and you need to accelerate delivery while improving stability so new developers can ramp up quickly, teams can ship safely, and the platform can scale without breaking.

## How to Gain Traction

### Host a Roundtable Discussion

You can use the following conversation prompts:

#### Assess the Benefits

- How could the reduced presence of control statements in the imperative shell simplify integration tests?
- How could the reduced presence of dependencies in the functional cores simplify unit tests?
- How might separating business logic from side effects enhance code readability, maintainability, and scalability?

#### Evaluate Team Readiness

- How prepared are our development teams to embrace a paradigm shift toward functional programming principles?
- Do team members possess the necessary skills and knowledge to implement and maintain code following this practice?
- What resources, training, or support mechanisms can we provide to facilitate the transition and ensure successful adoption?

#### Begin a Gradual Transition to Functional Core, Imperative Shell

- How can we identify and prioritize modules or components within our existing codebase that are suitable candidates for transitioning to the Functional Core, Imperative Shell pattern?
- How can we ensure effective communication and collaboration among team members during the transition process, including knowledge sharing, pair programming, and code reviews?
- What metrics or milestones can we establish to measure progress and evaluate the success of incrementally transitioning to the Functional Core, Imperative Shell pattern?

### Encourage Mentoring

Transitioning to the Functional Core, Imperative Shell pattern may present a steep learning curve for teams. To facilitate this transition smoothly, have developers with more experience in this pattern mentor other developers through pair programming sessions. Fostering an environment of knowledge sharing, providing resources, and allocating time for developers to study the pattern can greatly aid in its adoption and understanding across the team.

### Host Team Watch Parties

- [Boundaries by Gary Bernhardt](/resources/tech/boundaries.md): This talk is about using simple values (as opposed to complex objects) as the boundaries between components and subsystems. It moves through many topics: functional programming, mutability's relationship to OOP, isolated unit testing with and without test doubles, concurrency, and more.

- [Moving I/O to the edges of your app: Functional Core, Imperative Shell](/resources/tech/moving_io_to_the_edges.md): Modern software design patterns, like Onion, Clean, and Hexagonal architecture, suggest that your app's logic should run the same way every time, with I/O handled in separate abstractions at the edges. This talk introduces a simple way to keep I/O and core logic apart, simplifying code.

- [Are We There Yet](/resources/tech/are-we-there-yet.md): This talk covers some first-principles thinking about how software could, and should, be designed. It highlights the challenges of managing state and avoiding complexity, and advocates for designs that allow for smoother evolution over time.

## Lessons From the Field

- *Framework Gravity* – Framework conventions naturally pull logic toward controllers, services, and models, blurring the line between pure and side-effecting code. Teams often think they’ve built a functional core when it still depends on framework helpers. Breaking free usually starts by isolating one rule or workflow outside the framework to prove the value of true independence.

- *Fear of Architectural Overreach* – Teams that have been burned by past "architecture experiments" often equate the Functional Core, Imperative Shell pattern with another dogmatism crusade. When the pattern is explained in abstract terms, skepticism has room to breathe; when it’s shown through concrete before-and-after examples of simpler testing or safer changes, the conversation shifts from ideology to practicality.

## Deciding to Pitch or Polish

After experimenting with this practice for **one month**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Higher Ratio of Unit to Integration Tests.** As logic becomes framework-independent, teams naturally write more unit tests and fewer brittle integrations. Test coverage tools or tagging schemes (e.g., @unit, @integration) reveal this shift toward isolated, fast-running verification.

### Slow & Measurable

**Reduced Test Runtime.** Pure functions execute without bootstrapping frameworks or external systems, cutting test times and feedback cycles. This improvement shows up over time in CI dashboards or local test runner metrics as test suites complete faster and more reliably.

**Shorter Onboarding Time.** A clearer separation between core logic and I/O layers reduces cognitive load for new hires. Developer experience (DX) surveys should provide measurable evidence of ramp-up speed improving over multiple cohorts.

### Slow & Intangible

**Faster, Safer Refactors.** Once side effects are isolated at the edges, developers can modify or replace integrations with less coordination and lower regression risk.

## Supported Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

By separating business logic into a functional core and side effects into an imperative shell, code becomes more readable, more comprehensive, and less complex. With a clear distinction between pure functions and imperative code, developers can more easily understand and modify code, leading to improved maintainability and stability of the software system.

### [Test Automation](/capabilities/test-automation.md)

The functional core allows for straightforward unit testing - its pure functions yield predictable results and don't rely on external states. The imperative shell handles side effects and interactions with external systems, which can be tested through integration tests. This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development, which is crucial for robust and efficient test automation.
