# Make Systems Resilient to Failure

It's common for individual parts of a system to fail. The goal of any software system should be to follow the [Bulkhead Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead) such that no one failure can bring down the entire system.

## Resources

- [Release It! book](https://www.amazon.com/Release-Design-Deploy-Production-Ready-Software/dp/1680502395)
- [Reactive Manifesto](https://www.reactivemanifesto.org/)
- [Understand the CAP Theorem](https://groups.csail.mit.edu/tds/papers/Gilbert/Brewer2.pdf)
- [Finding hard to track down concurrency issues](https://www.youtube.com/watch?v=eSaFVX4izsQ)
- [Actor / Model Pattern](https://mattferderer.com/what-is-the-actor-model-and-when-should-you-use-it)
- [Two wrongs can make a right (and are difficult to fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)
- [Avoid timeouts by choosing the right data structure](https://medium.com/omarelgabrys-blog/data-structures-a-quick-comparison-6689d725b3b0)

### Security

Failures can create hard to detect security vulnerabilities. It's important to understand what sort of vulnerabilities exist and how to protect against them.

- Understand the [OWASP Top 10](https://owasp.org/www-project-top-ten/) and get some [hands-on experience with those exploits](https://github.com/digininja/DVWA) in a safe environment
- [Defense in depth](https://medium.datadriveninvestor.com/defense-in-depth-d6c070eac12d)
- [Shift left on security](https://cloud.google.com/architecture/devops/devops-tech-shifting-left-on-security)
