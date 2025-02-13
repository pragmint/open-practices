# Making A Contribution

Thanks for considering making a contribution to our repository! We welcome new ideas and appreciate your willingness to share your experience with us. While this is a general purpose repository, it is associated with Pragmint's brand. Therefore, we reserve the right to reject contributions if our experiences don't support the suggestions.

When making a contribution, keep the following definitions in mind:

1. **Capability** - An area of proficiency that by teams possessing contributes to the success of software delivery and operational performance. These capabilities are defined by the [DORA research team](https://dora.dev/). We summarize their findings and add context as deemed appropriate.
2. **Practice** - An actionable pattern, technique, or process employed by software professionals. For the purposes of this repository, each practice supports one or more capabilities. These practices are not necessarily based on DORA research; rather, they are supported by expert opinion.

We are looking for contributions in the following areas:

1. New practices.
2. Links to additional resources that will help our readers better understand a practice or capability.
3. Additional content to illustrate to our readers how a practice or capability can be beneficial.
4. Additional content describing common pitfalls, challenges, or limitations teams commonly encounter when applying certain practices or capabilities.
5. Typos or grammatical fixes.

If you chose to contribute a new practice, please try to follow our pre-established structure:

```markdown
# Title of Practice

1.  Describe the practice in 2-3 sentences. 
2.  Describe the main benefits of of adopting the practice in 1-2 sentences.

Try to keep the text brief, relatable, and motivational. Our audience wants a quick read. The writing style should be conversational, not academic; the details should be higher level (think overview or summary), not too technical.

## Nuance

This next section outlines some common pitfalls, challenges, or limitations that teams commonly encounter when adopting this practice (roughly 3-5). Each nuance should have a title (styled as a subhead) and a brief description (3-5 sentences).

*Begin this section with the following text:* "This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the practice with your team(s)."

## Gaining Traction

*Begin this section with the following text:* "The following actions will help your team implement this practice."

Then, list the relevant general practices - from [Learning Culture](/capabilities/learning-culture.md) - and how to put those general practices to use by adding specifics such as talking points, demonstration instructions, roundtable discussion prompts, and links to external resources.

For example, a general practice is to Facilitate a Roundtable Discussion. In the Run Pair Programming Sessions practice, we elaborate on how to facilitate a roundtable discussion by listing specific discussion prompts related to pair programming such as, "How frequently do we engage in pair programming sessions, and are they integrated into our regular workflow?"

Another example of a general practice is to Start a Book Club. In the Reduce Coupling Between Abstractions practice, we list specific books that can help put this practice to use such as "Refactoring" by Martin Fowler and "Clean Architecture" by Robert C. Martin.

See the Gaining Traction section in [other practice pages](/practices/) for more examples.

## Supported Capabilities

The final section lists a handful of other DORA Capabilities (roughly 1-4) that are related to the Practice, either because they're similar or because you need one to accomplish the other. Each Capability should have a title (styled as a subhead) and brief description (2-4 sentences). The title should be an  existing, linked DORA Capability from the repository.

*Begin this section with the following text:* "This practice supports enhanced performance in the following capabilities."

## Template: Plan for Workshopping a Practice

Below is a template that you can use to organize a plan for gaining adoption around a practice. 

A sample plan for workshopping a practice is as follows: 

### Identify the need and the solution

#### The need
Together with the team, do assessment(s). Determine which capability(ies) the team needs to improve. Prioritize the most important capability and focus on it. 

Take note: What is the team's chief concern? What is your chief concern? What does the current state of affairs look like? What is comfortable and standard? 

An example of notes at this stage might look like this: 
- team is not habitiual in TDD
- Their chief concern was "How to write tests easier" this was the in for IS/FC
- My chief concern is having them write well-abstracted and maintainable software
- The larger concern is setting up a community of practice so that devs can talk about and share coding ideas

#### The solution
Together with the team, identify the practice to workshop. Describe how it will support the team and allow them to gain proficiency in the capability.

Illustrate the solution by showing the team something like this: 
- Their reality: run the team's own legacy tests (shows an error message because these tests were abandoned, never properly maintained or run, and eventually were deleted)
- Their ideal: run an example of low-dependency tests - 69 tests running in 0.08 seconds

### Gather resources  
Review the Gaining Traction section for the practice on the repo. Generate ideas for resources to show the team. Whittle down resources to those that best serve the team's needs. 

### Do short-term experiments 
Together with the team, do short-term experiments to get hands-on with specific resources. This way, you can introduce the practice and demonstrate its value. 

An example of a short-term experiment might look like this: 

#### 1. Find a code example to examine

#### 2. Watch Gary Bernhardt video 
Compare concepts in video with code example. Comment on the video, anticipating points of concern/interest:

- 4:04    
        - do we do this?
        - Benefits / Downside?
        - Do we want those benefits?
        - how valuable are they?

- 8:54    
        - No Dependencies; Defined by Inputs & Output
        - "Natural Isolation"
        - Is this cheating? Is this just a mock by another name?
        - "Good" Abstraction?

- 9:09    
        - Email is separated (hidden abstraction?)
        - Does the code need to know it's working with a DB or with Active record?
            - with a BE or with State?
            - Does it need to know it's in a hook? or a component?
            - Does it need to know there is a terrible palce called AMD?
        - Can we find the dependencies in this code that it's behavior doesn't really need to care about?

- 9:20    
        - Value is the Boundary (value = data; even OO Code is separate from it)
        - Where are potential value-boundaries in this file?

- 10:20   
        - Interesting but not essential
        - besides I don't really agree. Skip for time

- 13:58   
        - Core & Shell
        - Shell has State
        - Shell knows about the ugly outside world
        - Where is the shell in our file?
        - Where can we extract cores from the shell?

        - Core makes Descisions; Shell knows Dependencies

 - 20:00   
        - How does this apply to micorservices?
        - Kafka?
        - Grpc & protobuf?
        - How should we abstract our microservices?

#### 3. Do a demonstration / code walk-through
Revisit the code example. Walk through it, applying learned concepts. Discuss the differences of low-dependency tests and high-dependency tests, as well as dependencies.

### Assign longer-term experiment(s) 
Develop a longer-term experiment(s) for the team to pilot on their own. 

An example might look like this:

#### Do a Spike and Show & Tell
- Try writing/refactoring your code to the _Imperative Shell / Functional Core Pattern_
  - Rename the pattern if you like
  - Help each other
- Show & Tell at the end of each sprint
  - Is writing tests easier?
  - Other benefits?
- Reevaluate in 3 sprints
 
```
