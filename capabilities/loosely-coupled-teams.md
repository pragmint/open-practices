# [Loosely Coupled Teams](https://dora.dev/capabilities/loosely-coupled-teams/)

## Key Points

### Teams can make large-scale changes to the design of their systems without the permission of somebody outside the team or depending on other teams.

#### Practices

* Teams are able to complete work without needing fine-grained communication and coordination with people outside the team.
    * The specific approach will be different for different organizations. (Nuance point)
* Teams deploy and release their product or service on demand, independently of the services it depends on or of other services that depend on it.
    * P: Preserve backwards compatibility
    * P: Maintain a Service Level Agreement
    * 
* Teams do most of their testing on demand, without requiring an integrated test environment.
* Teams can deploy during normal business hours with negligible downtime.

* Use the proper architectural archetypes according to evolutionary organization needs. Monolithic -> Microservices
    * Monolith v1
    * Monolith v2
    * Microservices
* Testing with mocking eliminating external dependencies

* Blue Green deployment model
* Rolling deployment model
* Backward compatible migrations

* Avoid
    * Releasing many services at once
    * Integrate changes from too many developers
    * Bottle necks
        * Teams that many others rely on to deliver changes

* strangler fig application

* service-discovery mechanism

* API versioning for backwards compatibility while deploying services one by one

* Improvements in job satisfaction and team experimentation (related capabilities)


## Supporting Practices

* evolutionary architecture
* Decouple From Third Parties
* Create and Manage Ephemeral Environments
* Run Pair Programming sessions (with members from another team)
* [Check Documentation Consistency](/practices/check-documentation-consistency.md)
* Write Contract Tests
* Write decision making log
* Implement Microservice Architecture
* Implement Distributed Tracing
* Implement Continuous Integration Pipeline
* Implement Composable Design
* Implement Bulkheads
* Implement Event Driven Architecture
* Implement Graceful Degradation and Fallbacks
* Implement Message Driven Systems
* Implement Plugin Architecture
* Implement Circuit Breaker Pattern
* Implement Anti-Entropy Patterns
* Implement Stability Patterns
* Implement Timeouts and Retries


## Resources

[Conway’s Law: How to dissolve communication barriers in your API development organization](https://medium.com/better-practices/how-to-dissolve-communication-barriers-in-your-api-development-organization-3347179b4ecc)

[Technical Decision Making](https://copyconstruct.medium.com/technical-decision-making-9b2817c18da4)

[Blue Green & Rolling deployments](https://www.split.io/blog/difference-between-rolling-and-blue-green-deployments/)

[Contact Test](https://martinfowler.com/bliki/ContractTest.html)

[The Twelve Factor App](https://12factor.net/)