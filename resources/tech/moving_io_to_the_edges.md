# Moving IO to the edges of your app: Functional Core, Imperative Shell

Resource Type: video

https://www.youtube.com/watch?v=P1vES9AgfC4

This talk (by Scott Wlaschin) makes a compelling case for design discipline: by shunting all side effects (such as database calls, HTTP, logging, file I/O) into an "outer shell," your domain logic becomes purely functional, easier to test, and more resilient to change. Wlaschin presents clear techniques for structuring code with this separation and warns of common pitfalls. It’s especially helpful for teams working with mixed paradigms (OO, functional, procedural) who want to reduce complexity and improve maintainability.

## Core Concepts to Explore

- **Functional Core**: Pure, deterministic, side-effect-free code that models business logic.
- **Imperative Shell**: Orchestrates the system, performing I/O and passing data into/out of the core.
- **Dependency Direction**: Core should not depend on the shell; dependencies point outward.
- **Testing Implications**: Core logic can be tested without mocks; shell behavior can be validated through integration tests.

## Team Exercises

1. **Identify Boundaries** — Pick a representative feature or service and map which parts belong to the functional core vs the imperative shell.
2. **Refactor Thought Experiment** — Imagine rewriting that feature using this pattern. What would stay the same? What would need to move?
3. **Failure Mode Review** — Discuss where failures or inconsistencies arise today because side effects aren’t isolated.
4. **Vocabulary Alignment** — Agree on a shared language for describing "core" vs "shell" code so future design discussions are more precise.

## Reflection Prompts

- What would adopting this pattern improve the most for us—testability, onboarding, reasoning, or change safety?
- How could this approach fit within our current architecture (OO, layered, service-based, etc.)?
- What small step could we take this month to start moving side effects outward?

## Facilitator Tip

Encourage participants to anchor discussion in real examples from your codebase. Whiteboard or sketch the data flow of one subsystem, and ask: *"Which parts must be impure, and which could be purely functional?"* The clarity that emerges often reveals unnecessary coupling and opens the door to incremental architectural improvement.

## How This Resource Brings Value

- It provides **mental models** and **terminology** (functional core, imperative shell) that teams can adopt to reason clearly about side-effect boundaries.
- The talk includes **practical implementation ideas** (wrappers, commands, effects-as-data) that can be adapted to many languages and architectures.
- Viewing the talk as a team can spark **dialogue around existing architecture cruft**, helping refactor toward clearer separation.
- It serves as a **shared reference point**, so that when team members talk about "shell code" or "core logic," everyone has a common frame of reference.
