# Decrease the Cost of Failure

Through [observability automation](https://github.com/pragmint/best-practices/blob/main/inexpensive-correctness-verification/observability.md) and a [fast flow of work](https://github.com/pragmint/best-practices/blob/main/fun/flow.md#Flow-of-Work) organizations are able to fix issues that are detected quickly. That goes a long way towards decreasing the cost of a failure. This section attempts to dive a little bit deeper into the technologies and patterns that help to decrease the cost of failure, but don't fit into either of those two buckets neatly.

## Resources

### Follow Patterns That Are Resilient to Failure

- [Release It! book](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395)
- [Reactive Manifesto](https://www.reactivemanifesto.org/)
- [Understand the CAP Theorem](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf)
- [Actor / Model Pattern](https://mattferderer.com/what-is-the-actor-model-and-when-should-you-use-it)
- [Bulkhead Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead)
- [Avoid timeouts by choosing the right data structure](https://medium.com/omarelgabrys-blog/data-structures-a-quick-comparison-6689d725b3b0)

### Track Changes in Version Control

Version control tools allow developers to create checkpoints that serve many important functions. Chief among them are that it makes it easier to retract broken changes and creates a history of changes.

- [Intro](https://cloud.google.com/architecture/devops/devops-tech-version-control)
- [Don't make new versions of code for production](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_61)
- [Keep a clean git history](https://simplabs.com/blog/2021/05/26/keeping-a-clean-git-history/)
- [Staying disciplined with your git history](https://8thlight.com/blog/makis-otman/2015/07/08/git-disciplined.html)
- [Codify your infrastructure so it can also be version controlled](https://dzone.com/articles/secure-terraform-delivery-pipeline-best-practices)
- [Don't store sensitive information in widely accessible version control](https://12factor.net/config)
