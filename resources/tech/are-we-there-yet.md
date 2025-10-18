# Are We There Yet

Resource type: video

https://www.youtube.com/watch?v=ScEPu1cs4l0

In "Are We There Yet?", Rich Hickey pushes us to rethink how we treat time, state, and identity in software. He argues that many traditional models (especially mutable objects) hide complexity by leaky abstractions, making it harder to reason about system behavior over time. The talk encourages modeling change explicitly, favoring immutable values, and designing for clarity around temporal transitions rather than accidentally embedding time everywhere.

## Opening Questions

1. What do we currently treat as "state" in our systems? How mutable is it, and how often does it change?
2. How comfortable are we with the idea of treating time as a first-class concept (instead of letting it implicitly permeate everything)?
3. What challenges do we face when reasoning about temporal behavior (e.g. concurrency, caching, event ordering, eventual consistency)?

## Core Themes & Concepts to Explore

- **Time vs State vs Behavior** — Hickey differentiates between the underlying identity of an entity, the sequence of its states over time, and the behaviors we observe.
- **Values vs Objects** — He argues for privileging values (immutable data) over mutable objects, which carry identity and hidden mutation.
- **Separation of Identity & State** — Identity is what persists; state is a snapshot at a time. Treating state as changeable undermines predictability.
- **Explicit Time & Change** — Rather than letting time leak everywhere, model changes explicitly (e.g. via snapshots, versions, streams).
- **Simplicity and Clarity as Design Goals** — Use models that make it easier to reason about flow over time, rather than hiding complexity behind mutable state.

## Team Exercises

1. **State Snapshot Exercise**
   - Pick an entity in your domain (e.g. User, Order, Session).
   - Sketch how you currently track its state over time.
   - Then reimagine it with immutable snapshots (or versioned states) and ask: how would your logic or APIs change?

2. **Temporal Behavior Modeling**
   - Take a feature where events or state transitions matter (e.g. order cancellation after timeout, state rollbacks, event replay).
   - Model it as a sequence of value transitions.
   - Identify where implicit time assumptions today might obscure correctness.

3. **Mutation Audit**
   - Audit a module or service to find mutable state—global variables, caches, in-place updates.
   - For each, propose how you might convert it to a value-based approach or isolate the mutation boundary.

4. **Language / Framework Mapping**
   - Take a language or framework you use and map constructs (objects, mutable data structures, reactive streams, versioning tools) to Hickey’s ideas.
   - Where are the gaps? Where does it already align?

## Reflection Prompts

- If we adopt more value-centric and time-aware design, where would we gain clarity or detect fewer bugs?
- What parts of our system are most hindered by hidden, implicit time assumptions (e.g. caching, synchronization, stale reads)?
- Which mutation boundaries or impure modules are good candidates for refactoring toward a more explicit, time-based model?
- What smaller experiment (e.g. one feature or module) could we try next week to test these ideas?

## Facilitator Tip

Encourage people to bring **real examples from the codebase**—especially ones involving race conditions, stale data, or temporal quirks. Use a whiteboard to draw the flow of changes over time. Ask: *"What is the identity here? What are its snapshots? What transitions do we care about?"*
Because Hickey uses fairly abstract philosophy, grounding the discussion in domains your team knows makes the leap more tangible.

### How This Resource Brings Value

- It offers a **deeper mental model** of time and state that challenges conventional OO or imperative thinking.
- The talk provides **vocabulary and perspectives** useful for discussing mutability, snapshots, versioning, and change semantics.
- It can catalyze **architecture improvements** by revealing where implicit time or mutability is causing fragility or bugs.
- As a shared conceptual anchor, it helps teams talk more precisely about where change occurs, what is historical vs current, and how to design modules that resist time-leak.
