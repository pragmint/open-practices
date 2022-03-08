# Make Frequent and Small Improvements

As you make changes to any software system, it is valuable to have a lot of checks to ensure your changes work. This can come in the form of automated tests, compilers, user feedback, etc. The longer you go without running a check of some sort, the more likely your changes aren't correct.

## Resources

- [Limit Work In Process (WIP)](https://cloud.google.com/architecture/devops/devops-measurement-wip-limits)
- [Work in small batches](https://cloud.google.com/architecture/devops/devops-process-working-in-small-batches)

### Refactoring

As it relates to refactoring, it is important to challenge yourself to make changes in small increments. If you break something without realizing it, then continue to pile on changes, it becomes difficult to figure out what exact change broke the system.

- [Incremental refactoring](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_06)
- [Boy Scout Rule](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_08)
- Refactoring Legacy Code Step with Dave Farley by Step Part [1](https://www.youtube.com/watch?v=p-oWHEfXEVs), [2](https://www.youtube.com/watch?v=NCjwUptCaLU), and [3](https://www.youtube.com/watch?v=3iirETgRaRc)
- [Refactoring book](https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599)
- [List of common refactoring opportunities](https://refactoring.guru/refactoring/smells)

### Fast Feedback Loops

When you break a problem into small steps, you create a lot of seams for feedback to enter the process. If your tools and processes are set up to inject that feedback, there's a higher likelihood that progress will get made faster. Additionally, it's easier to think about solutions to a series of small problems than it is to solve a big one. That's why it's often a good idea to iterate to the big solution via solving a lot of small and concrete problems.

- [Introduction to the concept of fast feedback loops and its benefits](https://medium.com/@lucamezzalira/the-power-of-feedback-loops-f8e27e8ac25f)
- [Break down the problem into steps](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_47)
- [An argument against PRs](https://www.youtube.com/watch?v=ZlLZEQQBcFg)
- [Steamline change approval](https://cloud.google.com/architecture/devops/devops-process-streamlining-change-approval)
- [Keep build noise down](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_42)
