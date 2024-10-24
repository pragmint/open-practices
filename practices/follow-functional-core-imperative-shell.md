# Follow Functional Core, Imperative Shell

Functional Core, Imperative Shell is a software design principle that advocates for dividing code into two layers: a functional core and an imperative shell.
The functional core houses the critical logic of the application, written in a pure, side-effect-free manner following functional programming principles.
This core is highly testable, maintainable, and predictable.
The imperative shell handles interactions with the external world, using imperative programming for tasks like I/O operations and user interfaces.
This separation of concerns enhances modularity, clarity, and flexibility in software development, enabling easier maintenance and evolution of complex systems.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice.


### Overemphasis on Functional Purity

Ensuring the functional core remains pure and without side effects is important.
However, excessively fixating on absolute purity may inadvertently introduce impractical code.
For instance, rigidly avoiding variable mutation can sometimes lead to the use of recursion.
While recursion aligns with functional purity, its efficiency may diminish, particularly in languages where stack management for large inputs poses challenges.
Functional programming constructs, while elegant, may not always be the most efficient choice, especially in performance-critical scenarios.

### Remembering Values are the Boundary

<ed> My goal with the above edit, and some of the below subhead edits, is to ensure the subhead is written in a way that implies it's a pitfall/challenge/limitation. Ok? </ed> 

Values serve as the boundary between the layers.
The imperative shell should communicate with the functional core by passing value objects exclusively, avoiding objects or functions that could potentially induce side effects.
This ensures that the functional core remains isolated from external state changes, promoting clarity, predictability, and maintainability in the codebase while facilitating easier testing, debugging, and refactoring.

### Potentially Steep Learning Curve

Transitioning to the Functional Core, Imperative Shell practice may present a steep learning curve for teams.
To facilitate this transition smoothly, it's recommended that developers with more knowledge mentor other developers through pair programming sessions.
Additionally, fostering an environment of knowledge sharing, providing resources, and allocating time for developers to study the practice can greatly aid in its adoption and understanding across the team.

### Is Incompatible with Object-Oriented Programming

<ed> I'm having trouble understanding the pitfall/challenge/limitation with this one. The text below implies developers can take advantage of both paradigms. Should we rephrase this subhead? Seems like "Can Be Compatible with OOP" is more in line with the text below. </ed> 

The Functional Core, Imperative Shell practice and object-oriented programming (OOP) principles are not mutually exclusive.
As long as the functional core remains free of side effects, it can co-exist within an object-oriented architecture.
The functional core's logic could be encapsulated within methods of a class, ensuring that these methods return new objects instead of mutating their fields.
The functional core can take advantage of polymorphism by receiving or returning objects of a class hierarchy with multiple subclasses to represent various inputs or outputs. <ed> I'm assuming your target reader will follow along with this explanation just fine. But this is one example of where this practice reads (to me) much more technical than others. What might help is relating this nuance back to code maintainability. </ed> 
Developers can implement the functional core while adhering to OOP principles, taking advantage of both paradigms.

### Imperative Shell Will Perform Various Tasks

<ed> I'm not sure I've accurately captured the nuance/pitfall in the subhead title above. WDYT? </ed> 

In simple cases, the imperative shell merely passes inputs to the functional core, receives the response, and renders it back to the user.
However, there are scenarios where the functional core may produce outputs that require inspection or processing by the imperative shell.
While the imperative shell should ideally remain simple and devoid of complex logic, it may need to analyze, interpret, or transform the response from the functional core to ensure proper interaction and presentation to the user.

### Side Effects should only happen before and after the execution of the Functional Core

<ed> For consistency with other subheads under Nuances, I'd love to simplify and shorten this title. We don't mention the term "side effects" below, though. Are "side effects" synonymous with "I/O operations"? Perhaps "I/O Operations Sometimes Call Functional Core"? </ed> 

Ideally, the imperative shell should organize the code I/O (input/output) at the beginning and end of its execution, sandwiching the invocation of the functional core in the middle, following the pattern I/O => FC => I/O.
However, in certain scenarios, there may be a need to interleave I/O operations with calls to the functional core, resulting in a pattern such as I/O => FC => I/O => FC => I/O. <ed> Do we mean "interweave"? </ed>
While this deviation from the ideal pattern may be necessary at times, it should be minimized whenever possible.

<ed> Edited IO to I/O above, as that's how I often see it written. Is that the style you'd like to use throughout? Or would you prefer IO? Either way is fine. </ed>

### Unit Testing of Functional Core, Integration Testing of Imperative Shell

Unit tests should concentrate on validating the business logic enclosed within the functional core, testing its expected behavior in isolation.
This approach is especially advantageous due to the functional core's composition of pure functions, facilitating straightforward unit testing devoid of external dependencies or side effects.
Integration tests should cover the behavior of the imperative shell as it interacts with external systems, including database calls, API requests, or user interfaces.
Imperative shell integration tests ideally require fewer scenarios to validate, given that control statements such as `if`, `while`, or `for` loops should mostly reside within the functional core layer.

### Epecially beneficial when using dynamic languages

<ed> This sounds like a benefit, not a challenge/pitfall/limitation. Consider moving this note above to the paragraph introducing the Practice. </ed>

In dynamic languages, the Functional Core, Imperative Shell approach is often favored because it can address testing challenges inherent in these languages.
By communicating between the functional core and imperative shell via passing values instead of relying on interfaces, developers can mitigate the risk of false positives when using mocks and avoid encountering errors with the real implementation.


## How to Improve

<ed> Ditto comment in other Practices about renaming this section to be a bit more specific (e.g., "How to Implement This Practice" or "Tips for Implementing This Practice"). </ed> 

Help your team implement this practice by hosting a viewing party of specially curated talks, starting a book club to discuss impactful titles on this topic, or facilitating a roundtable discussion about relevant topics.


### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [Boundaries by Gary Bernhardt](https://www.destroyallsoftware.com/talks/boundaries)

This talk is about using simple values (as opposed to complex objects) not just for holding data but also as the boundaries between components and subsystems. It moves through many topics: functional programming, mutability's relationship to OOP, isolated unit testing with and without test doubles, concurrency, and more.

#### [Moving I/O to the edges of your app: Functional Core, Imperative Shell](https://www.youtube.com/watch?v=P1vES9AgfC4)

Modern architectures (such as Onion, Clean and Hexagonal) recommend that interfacing with the outside world be done at the boundaries of your app, not in the middle. Similarly, in functional programming, the core code should be deterministic, and all I/O should be at the edges. But how can you actually do this in practice? How can you separate I/O from business logic in an elegant way? In this talk, we'll look at some concrete examples of how to refactor code in this way. We'll also talk about how doing this improves code comprehension, testing, and refactoring.

<ed> To avoid copyright issues (this is NDC Conference's unique description of the talk), please rephrase this in your own words. </ed>

#### [Are We There Yet](https://www.youtube.com/watch?v=ScEPu1cs4l0)

In his keynote at JVM Languages Summit 2009, Rich Hickey advocated for the reexamination of basic principles like state, identity, value, time, types, genericity, complexity, as they are used by OOP today, to be able to create the new constructs and languages to deal with the massive parallelism and concurrency of the future.

<ed> Ditto above. This is InfoQ's summary of the talk. To avoid copyright issues, best to rewrite in your own words. </ed>


### [Start a Book Club](/practices/start-a-book-club.md)

#### [How functional programming patterns can simplify code](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_02)

This article promotes the mastery of functional programming principles, stating they improve code quality beyond multi-core challenges. It emphasizes referential transparency, where functions yield consistent results regardless of mutable state. It criticizes mutable variables in imperative code and suggests smaller, immutable functions for fewer defects. It acknowledges functional programming's limitations but advocates for its application in various domains, asserting it complements OOP.


### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion. 

<ed> Line above OK? Tweak as you like, but I recommend adding a quick sentence here to give context to the subsections and questions that follow. </ed>

#### Assessing the Benefits

* What advantages could the adoption of the Functional Core, Imperative Shell practice bring to our projects?
* How might separating business logic from I/O enhance code readability, maintainability, and scalability? <ed> Edited "side effects" to "I/O". OK? </ed> 
* In what ways could the Functional Core, Imperative Shell practice mitigate the impact of changes in infrastructure technology, allowing for smoother transitions and future-proofing our codebase?
* What benefits might arise from writing unit tests that ensure the functional core code being tested has no side effects?
* How could the reduced presence of control statements in the imperative shell simplify integration tests?

#### Evaluating Team Readiness

* How prepared are our development teams to embrace a paradigm shift toward functional programming principles?
* Do team members possess the necessary skills and knowledge to implement and maintain code following this practice?
* What resources, training, or support mechanisms can we provide to facilitate the transition and ensure successful adoption?

#### Incremental Transition to Functional Core, Imperative Shell 

* How can we identify and prioritize modules or components within our existing codebase that are suitable candidates for transitioning to the Functional Core, Imperative Shell pattern? <ed?> I realize we refer to Functional Core, Imperative Shell in many ways in this practice: a practice, an approach, a pattern. Which term is most appropriate to use consistently? Or is it the case that the practice is called Follow Functional Core, Imperative Shell and the pattern is called Functional Core, Imperative Shell? If so, I'll stop nitpicking. ;) </ed> 
* What strategies can we employ to refactor existing imperative code into pure functions within the functional core, while maintaining backward compatibility and minimizing disruptions to ongoing development?
* Are there opportunities to introduce the Functional Core, Imperative Shell pattern gradually, perhaps starting with new features or modules before expanding its adoption to legacy code?
* How can we ensure effective communication and collaboration among team members during the transition process, including knowledge sharing, pair programming, and code reviews?
* What metrics or milestones can we establish to measure progress and evaluate the success of incrementally transitioning to the Functional Core, Imperative Shell pattern?


## Supporting Capabilities

This practice supports enhanced performance in the following capabilities. 


### [Code Maintainability](/capabilities/code-maintainability.md)

The Follow Functional Core, Imperative Shell practice significantly supports the Code Maintainability capability.
By separating business logic into a functional core and side effects into an imperative shell, code becomes more readable, more comprehensible, and less complex. <ed> Are I/O and side effects the same thing? </ed>
With a clear distinction between pure functions and imperative code, developers can more easily understand and modify code, leading to improved maintainability and stability of the software system.

### [Test Automation](/capabilities/test-automation.md)

The Follow Functional Core, Imperative Shell practice supports the Test Automation capability because it facilitates the creation of highly testable and maintainable code. The functional core, being side-effect-free, allows for straightforward unit testing - its pure functions yield predictable results and don't rely on external states. This ensures that the core business logic is thoroughly tested and reliable. The imperative shell handles side effects and interactions with external systems, which can be tested through integration tests. This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development, which is crucial for robust and efficient test automation.

