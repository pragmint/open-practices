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
Therefore, it's vital to strike a balance between functional purity and practicality, considering the performance implications in different contexts.

### Values are the Boundary

Values serve as the boundary between the layers.
The imperative shell should communicate with the functional core by passing value objects exclusively, avoiding objects or functions that could potentially induce side effects.
This ensures that the functional core remains isolated from external state changes, promoting clarity, predictability, and maintainability in the codebase while facilitating easier testing, debugging, and refactoring.