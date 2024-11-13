# [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)

Test automation is essential for building quality into software.
Manual testing is inefficient, time-consuming, and unreliable, leading to delayed feedback. Automated testing, on the other hand, provides fast feedback throughout the software delivery lifecycle. In order to ensure quality functionality and to prevent regression errors, test automation should be integrated continuously and should involve various types of tests such as unit and acceptance.

Effective test automation requires collaboration between testers and developers, continuous improvement of test suites, and maintaining a balanced ratio of unit and acceptance tests.
This approach to software quality and stability and also reduces team burnout and deployment challenges.


## Nuance(s)
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.


## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Test Automation capability. Generally, score a 1 if Test Automation is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is mature and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Test Automation.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

* Limited: Test automation is minimal, slow, and/or unreliable. There is heavy reliance on manual testing.
* Basic: Test automation is somewhat reliable, but is either slow or has gaps in coverage and/or value. Manual testing is required to achieve high levels of confidence.
* Mature: Test automation is reliable, fast, and valuable, with good risk coverage. Occasional gaps are still discovered.
* Optimized: Test automation provides a high degree of assurance that the code changes are correct, stable, and won't introduce significant issues if deployed to production. It provides a high level of assurance quickly and reliably.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and mature Test Automation, then you would score a 2.5.

An overall score of 2.5 or below means you'll probably gain a lot of value from experimenting with some of the supporting practices listed below. An overall score of 3 or higher means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Test Automation; you would likely benefit from evaluating your scores in other capabilities.


## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Test Automation capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a consistent testing strategy provides a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software.

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks ensures continuous and immediate feedback on code changes within the CI pipeline.
This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy.
By maintaining realistic coverage thresholds for different modules, it optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

Conducting code reviews ensures code changes adhere to quality standards, catching potential issues early and enforcing consistent coding practices. This promotes a robust suite of automated tests, prevents regression errors, and maintains smooth CI processes. By fostering collaboration and identifying gaps in test coverage, code reviews enhance software reliability and stability, directly contributing to effective test automation.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing setups that ensure automated tests are reliable and accurate.
These temporary environments reduce conflicts, simplify debugging, and improve reproducibility.
Integrated into CI/CD pipelines, they offer continuous, immediate feedback on code changes, promoting early bug detection and robust software quality.
Using Infrastructure as Code (IaC) for automation optimizes resources and allows for easy scaling of testing environments.

### [Follow Functional Core Imperative Shell](/practices/follow-functional-core-imperative-shell.md)

Following the Functional Core, Imperative Shell pattern facilitates the creation of highly testable and maintainable code.
The functional core, being side-effect-free, allows for straightforward unit testing -- its pure functions yield predictable results and don't rely on external states.
This ensures that the core business logic is thoroughly tested and reliable.
The imperative shell handles side effects and interactions with external systems, which can be checked with integration tests.
This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development. These outcomes are crucial for robust and efficient test automation.

### [Implement Test-Driven Development](/practices/implement-tdd.md)

Implementing Test-Driven Development (TDD) integrates rigorous testing directly into the development process.
TDD mandates writing tests _before_ coding, ensuring early bug detection and promoting better software design through continuous refactoring.
Following the red-green-refactor cycle and principles like Transformation Priority Premise and F. R. I. S. T., TDD ensures reliable and efficient tests that align with the Test Pyramid's principles.


## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Test Automation)
- Upstream (they are a pre-requisite for Test Automation)
- Downstream (Test Automation is a pre-requisite for them)