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

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks supports the Test Automation capability by ensuring continuous and immediate feedback on code changes within the CI pipeline.
This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy.
By maintaining realistic coverage thresholds for different modules, it optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

### [Conduct Code Reviews](/practices/conduct-code-reviews.md)

The Conduct Code Reviews practice supports the Test Automation DORA capability by ensuring code changes adhere to quality standards, catching potential issues early, and enforcing consistent coding practices. This promotes a robust suite of automated tests, prevents regression errors, and maintains smooth continuous integration processes. By fostering collaboration and identifying gaps in test coverage, code reviews enhance software reliability and stability, directly contributing to effective test automation.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

The Create and Manage Ephemeral Environments practice enhances the Test Automation DORA capability by providing flexible, production-like testing setups that ensure automated tests are reliable and accurate.
These temporary environments reduce conflicts, simplify debugging, and improve reproducibility.
Integrated into CI/CD pipelines, they offer continuous, immediate feedback on code changes, promoting early bug detection and robust software quality.
Using Infrastructure as Code (IaC) for automation optimizes resources and allows for easy scaling of testing environments, supporting effective test automation.

### [Test Automation](/practices/follow-functional-core-imperative-shell.md)

The Follow Functional Core, Imperative Shell practice supports the Test Automation capability by facilitating the creation of highly testable and maintainable code.
The functional core, being side-effect-free, allows for straightforward unit testing, as its pure functions yield predictable results and don't rely on external states.
This ensures that the core business logic is thoroughly tested and reliable.
The imperative shell handles side effects and interactions with external systems, which can be tested through integration tests.
This clear separation simplifies the testing process, improves test coverage, and provides faster, more reliable feedback during development, which is crucial for robust and efficient test automation.

## Related Capabilities

### [Test Automation](/practices/implement-tdd.md)

Implementing Test-Driven Development (TDD) supports the Test Automation DORA Capability by integrating rigorous testing directly into the development process.
TDD mandates writing tests before coding, ensuring early bug detection and promoting better software design through continuous refactoring.
Following the red-green-refactor cycle and principles like Transformation Priority Premise and F. R. I. S. T., TDD ensures reliable and efficient tests that align with the Test Pyramid's principles.