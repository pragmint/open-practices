# [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)

Test automation is essential for building high-quality software. It provides early feedback in the software delivery lifecycle, reduces team burnout, and reduces deployment challenges. While manual testing is an essential part of every testing plan, it can be inefficient and unreliable, leading to missed bugs and delayed feedback.

There are many types of automated tests, each with their own benefits and limitations. The most valuable test suites are made up of multiple layers, following a pyramid-like structure (see [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)). This way, the systems under test get a thorough an reliable check every time the test suite is run.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Potential Cultural Resistance

In some organizations, test automation is sometimes undervalued due to gaps in awareness or experience with effective test design. Code that is structured for testability is often easier to maintain and higher quality, but developing the skill to write such code takes time and practice. According to DORA's findings, teams that value automated, developer-led testing experience less friction in the testing process and benefit from higher overall performance.

### Automation Isn't Meant To Replace Manual Testing

Test automation is _not_ a substitute for manual testing. Rather, automated testing _complements_ manual testing. It helps reduce the repetitive and time-consuming aspects of manually verifying system correctness. Each test carries its own cost-benefit ratio, and attempting to cover 100% of a system with automation can lead to high maintenance costs and, at times, a false sense of security. Instead, the team's focus should be on automating routine checks and creating automated tests that catch critical bugs early, reserving manual testing for more exploratory and edge-case scenarios.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Test Automation capability. Generally, score a 1 if Test Automation is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is mature and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Test Automation.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

* Limited: Test automation is minimal, slow, and/or unreliable. There is heavy reliance on manual testing.
* Basic: Test automation is somewhat reliable, but is either slow or has gaps in coverage and/or value. Manual testing is required to achieve high levels of confidence.
* Mature: Test automation is reliable, fast, and valuable, with good risk coverage. Occasional gaps are still discovered.
* Optimized: Test automation provides a high degree of assurance that code changes are correct, stable, and won't introduce significant issues if deployed to production. It provides this assurance quickly and reliably.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and mature Test Automation, then you would score a 2.5.

Generally, an overall score below 3.5 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3.5 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Test Automation; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Test Automation capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a consistent testing strategy means providing a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software.

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks ensures continuous and immediate feedback on code changes within the CI pipeline.
This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy.
By maintaining realistic coverage thresholds for different modules, automating test coverage checks optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

Conducting code reviews ensures code changes adhere to quality standards. Potential issues can be caught early and consistent coding practices can be enforced. This promotes a robust suite of automated tests, prevents regression errors, and maintains smooth CI processes. By fostering collaboration and identifying gaps in test coverage, code reviews enhance software reliability and stability, directly contributing to effective test automation.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing setups that ensure automated tests are reliable and accurate.
These temporary environments reduce conflicts, simplify debugging, and improve reproducibility.
Integrated into CI/CD pipelines, they offer continuous, immediate feedback on code changes, promoting early bug detection and robust software quality.
Using Infrastructure as Code (IaC) for automation optimizes resources and allows for easy scaling of testing environments.

### [Follow Functional Core Imperative Shell](/practices/follow-functional-core-imperative-shell.md)

The Functional Core, Imperative Shell pattern uses both unit and integration tests, facilitating the creation of highly testable and maintainable code. 
The functional core, being side-effect-free, allows for straightforward unit testing -- its pure functions yield predictable results and don't rely on external states.
This ensures that the core business logic is thoroughly tested and reliable.
The imperative shell handles side effects and interactions with external systems, which can be checked with integration tests.
This clear separation simplifies the testing process, improves test coverage, and provides faster and more reliable feedback during development. These outcomes are crucial for robust and efficient test automation.

### [Implement Test-Driven Development](/practices/implement-tdd.md)

Implementing Test-Driven Development (TDD) means integrating rigorous testing directly into the development process.
TDD mandates writing tests _before_ coding, which ensures early bug detection and promotes better software design through continuous refactoring.
By following the red-green-refactor cycle, and principles like Transformation Priority Premise and [F. I. R. S. T.](https://dzone.com/articles/first-principles-solid-rules-for-tests), teams can build simple and reliable systems.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

* Related (they cover similar territory to Test Automation)
* Upstream (they are a pre-requisite for Test Automation)
* Downstream (Test Automation is a pre-requisite for them)

### [Test Data Management](/capabilities/test-data-management.md) - Upstream

Some types of test automation -- such as e2e, performance, and load -- rely on data to run their assertions. That's why it's important for teams to have a mature test data management capability _before_ setting up data-reliant automated tests.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

In order for a CI pipeline to know what changes to accept and what changes to reject, it must rely on automated tests. A robust, fast-running, and automated test suite ensures changes can be verified continuously. The less reliable a test suite is, the more manual interventions are required and the less continuous changes can be integrated.

### [Streamline Change Approval](/capabilities/streamline-change-approval.md) - Downstream

With robust test automation in place, teams can approve changes with confidence, knowing they have a reliable safeguard to catch errors and ensure system stability. Reviewers can focus on strategic and functional aspects of the change, rather than worrying about technical integrity, since certain categories of potential errors have already been identified and addressed via automated tests.

### [Code Maintainability](/capabilities/code-maintainability.md) - Related

Test automation can offer valuable insights into code maintainability. Code that is easy to test is often better organized, more maintainable, and resilient. When developers struggle to write automated tests, it can serve as a signal that the code may need restructuring or refinement. This feedback loop from test automation helps teams improve code quality over time, enhancing both testability and long-term maintainability.
