# [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)

Test automation is essential for building quality into software by providing fast feedback throughout the software delivery lifecycle.
It addresses the inefficiencies of manual testing, such as time consumption, unreliability, and delayed feedback.
Automated testing should be integrated continuously, involving various types of tests, such as unit and acceptance tests, to ensure functionality and prevent regression errors.

Effective test automation requires collaboration between testers and developers, continuous improvement of test suites, and maintaining a balanced ratio of unit and acceptance tests.
This approach software quality and stability and also reduces team burnout and deployment challenges.

## Supporting Practices

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a Consistent Testing Strategy supports the Test Automation capability by providing a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software delivery.

* Automate Test Coverage Checks (Non blocking)
* Creating and Managing Ephemeral Environments
    * Independent of truck-based development
* Implement Continuous Integration Pipeline 
    * Running tests
* Implement TDD
    * Red, green and Refactor
    * Transformation priority premise
    * Test Doubles Nuances
    * F. R. I. S. T.
* Build a consistent testing strategy
    * How to choose the proper type of test depending of the situation
    * Follow the Tests Pyramid
    * Write Ephemeral model-based tests
    * Write Performance Tests
    * Do manual exploratory testing
    * Do usability testing
    * Write Acceptance Tests
    * Include Unit Tests for all new Code in the Definition of Done
    * Delete all expensive tests you can
* Incrementally Transformation
* Implement Functional Core and Imperative Shell
* Conduct Code Reviews

## Related Capabilities

### [Test Automation](/practices/implement-tdd.md)

Implementing Test-Driven Development (TDD) supports the Test Automation DORA Capability by integrating rigorous testing directly into the development process.
TDD mandates writing tests before coding, ensuring early bug detection and promoting better software design through continuous refactoring.
Following the red-green-refactor cycle and principles like Transformation Priority Premise and F. R. I. S. T., TDD ensures reliable and efficient tests that align with the Test Pyramid's principles.