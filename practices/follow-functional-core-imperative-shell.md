# Follow Functional Core, Imperative Shell

Functional Core, Imperative Shell is a software design principle that advocates for dividing code into two layers: a functional core and an imperative shell.
The functional core houses the critical logic of the application, written in a pure, side-effect-free manner following functional programming principles.
This core is highly testable, maintainable, and predictable.
The imperative shell handles interactions with the external world, employing imperative programming for tasks like I/O operations and user interfaces.
This separation of concerns enhances modularity, clarity, and flexibility in software development, enabling easier maintenance and evolution of complex systems.

## Nuances

### Overemphasis on Functional Purity

Ensuring the functional core remains pure and without side effects is important.
However, fixating excessively on absolute purity may inadvertently introduce impractical code.
For instance, rigidly avoiding variable mutation can sometimes lead to the use of recursion.
While recursion aligns with functional purity, its efficiency may diminish, particularly in languages where stack management for large inputs poses challenges.
Functional programming constructs, while elegant, may not always be the most efficient choice, especially in performance-critical scenarios.

### Values are the Boundary

Values serve as the boundary between the layers.
The imperative shell should communicate with the functional core by passing value objects exclusively, avoiding objects or functions that could potentially induce side effects.
This ensures that the functional core remains isolated from external state changes, promoting clarity, predictability, and maintainability in the codebase while facilitating easier testing, debugging, and refactoring.

### Learning Curve

Transitioning to the Functional Core, Imperative Shell practice may present a learning curve, especially for developers accustomed to diverse paradigms or architectural styles.
To facilitate this transition smoothly, it's recommended that developers with more knowledge mentor other developers through pair programming sessions.
Additionally, fostering an environment of knowledge sharing, providing resources, and allocating time for developers to study the practice can greatly aid in its adoption and understanding across the team.

### Is Not Incompatible with Object-Oriented Programming

The Functional Core, Imperative Shell practice is not mutually exclusive with Object-Oriented Programming (OOP) principles.
As long as the functional core remains free of side effects, it can coexist within an object-oriented architecture.
The Functional Core's logic could be encapsulated within methods of a class, ensuring that these methods return new objects instead of mutating their fields.
The Functional Core can take advantage of polymorphism by receiving or returning objects of a class hierarchy with multiple subclasses to represent various inputs or outputs.
Developers can implement the functional core while adhering to OOP principles and have the advantages of both paradigms.

### There can not be any logic in the Imperative Shell

In simple cases, the imperative shell merely passes inputs to the functional core, receives the response, and renders it back to the user.
However, there are scenarios where the functional core may produce outputs that require inspection or processing by the imperative shell.
While the imperative shell should ideally remain minimal and devoid of complex logic, it may need to analyze, interpret, or transform the response from the functional core to ensure proper interaction and presentation to the user.

### Side Effects should only happen before and after the execution of the Functional Core

Ideally, the imperative shell should organize the IO (Input/Output) parts of the code at the beginning and end of its execution, sandwiching the invocation of the Functional Core in the middle, following the pattern IO => FC => IO.
However, in certain scenarios, there may be a need to interleave IO operations with calls to the Functional Core, resulting in a pattern such as IO => FC => IO => FC => IO.
While this deviation from the ideal pattern may occur out of necessity, it should be minimized whenever possible.

<!-- 


### Can be combined with Dependency Injection

-->