# [Test Data Management](https://dora.dev/capabilities/test-data-management/)

High-performing teams implement a Test Data Management (TDM) strategy to ensure tests reliably confirm expected system behaviors. They achieve this by making relevant and realistic data readily available. Effective TDM enables teams to confidently release high-quality software faster by ensuring test data reliability.

There are many different types of tests: unit, integration, end-to-end,  regression, performance, exploratory, etc. Effective TDM strategies consider the kind of test, the specific context of each test environment, and the data requirements unique to the software being tested.

Some examples of various types of tests and their data needs:

- **Unit tests** typically require small, simple, and deterministic bits of data or state. These are often ad-hoc and work best when combined with common stub or dummy data helpers like factories.
- **Integration tests** may need an in-memory or lightweight database. These tests benefit from a controlled data seeding script that reflects expected relationships between entities.
- **End-to-end tests** often require a more complete environment. Using Docker volumes for test databases or allowing some data to be marked as test-specific data (e.g., with a special tag or prefix) can make setup and teardown of tests easier.
- **Performance tests** usually need environments that very closely resemble production, including database sizes, infrastructure, and traffic patterns. Using anonymized production data is often a practical option, but teams should weigh the security risks before going that route.
- **Exploratory tests** depend on flexible, manually curated data or scenarios. Having the ability to quickly generate or manipulate data on demand is helpful.
- **Security tests** often need both typical and atypical input data to probe for vulnerabilities and weaknesses in data handling or access control.

Understanding the needs of each test type helps shape a TDM strategy that enables faster, safer, and more reliable software delivery.

## Nuances

This section highlights common pitfalls teams face with Test Data Management. Awareness of these challenges empowers your team to implement this capability effectively and avoid costly missteps.

### Risks of Copying Production Data

Copying production data or replaying production traffic in test environments can make tests feel realistic, but it often introduces security risks. Even if you scrub sensitive info, mistakes still happen. You might miss a schema change or run into a bug in the scrubbing tool. Sometimes that's okay, but in other cases, it's a serious problem. To stay safe, use clear data policies, double-check your scrubbing process, and use fake or synthetic data when the cost of a leak is high.

### Outdated or Irrelevant Test Data

Test data becomes stale for many reasons: leftover data from test runs, time-sensitive use cases, schema or business rule changes, and updates to external dependencies like APIs or third-party services. When mocks or test fixtures fall out of sync with real systems, tests may pass while production fails. Regular validation and cleanup help keep tests meaningful and trustworthy.

### Inadequate Test Data Isolation

Sharing test data across tests or environments often leads to inconsistent results, especially during parallel runs. For example, if multiple tests rely on the same user account, simultaneous access can introduce conflicts that real users wouldn’t encounter. This lack of isolation makes debugging harder and increases test flakiness. To ensure reliability, each test should generate and manage its own isolated data as part of its setup.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Code Maintainability capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Create In-Memory Databases For Local Testing

Running tests against an in-memory database speeds up execution, avoids reliance on external systems, and ensures full test isolation. Developers gain complete control over their data, enabling consistent, reproducible test conditions without affecting teammates. This approach improves both reliability and performance. Ultimately, that makes local testing faster and more predictable.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Ephemeral environments make it easier to manage test data by providing isolated, production-like spaces that can be spun up on demand. Each environment starts with a clean state, enabling teams to generate, load, and reset data without affecting others. This reduces test flakiness, ensures consistent results, and supports more accurate debugging. When integrated into CI/CD, ephemeral environments give fast, reliable feedback across app, data, and infrastructure changes.

### Use Data Generation Tools

Leverage tools that automate test data creation based on predefined schemas and rules. Data generation tools help teams create relevant and varied datasets, enabling them to cover a wider range of test scenarios. By automating this process, teams reduce the time and effort spent on data management and improve test coverage.

### Shadow Production with Traffic Replay

Replay scrubbed production traffic in test environments to validate changes using real-world data patterns. This technique improves test data realism without compromising user privacy, helping teams uncover edge cases and regressions that synthetic data often misses. It’s especially useful for testing config changes, infrastructure updates, and complex interactions that rely on authentic request flows. Combined with observability tools, traffic replay provides a powerful feedback loop for detecting easy to miss behavioral and performance anomalies in code changes.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Test Data Management)
- Upstream (they are a pre-requisite for Test Data Management)
- Downstream (Test Data Management is a pre-requisite for them)

### [Test Automation](/capabilities/test-automation.md) - Downstream

Test automation works best when it has the right data. If test data is missing, wrong, or hard to set up, automated tests can fail or miss important bugs. Good test data management makes sure tests have what they need, without requiring manual setup. This helps teams run more tests, faster, and with more confidence.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Continuous Integration works best when tests have access to the right data. Since code changes are merged often, tests need to run constantly, and they can’t do that if the test data is missing or unreliable. Good test data management keeps the process smooth by making sure every test run starts with the data it needs. This helps teams catch bugs early, avoid integration issues, and move faster with confidence.
