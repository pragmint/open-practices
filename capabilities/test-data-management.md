# [Test Data Management](https://dora.dev/capabilities/test-data-management/)

High-performing teams implement a Test Data Management (TDM) strategy to ensure tests can reliably confirm expected system behaviors. They achieve this by making relevant and realistic test data readily available to the teams that need it. When test data is reliable, teams can confidently release high-quality software at a faster pace.

There are many different types of tests — unit, integration, end-to-end, performance, exploratory, security, regression, and so on. An effective TDM strategy considers the type of test, the specific context of each test environment, and the data requirements unique to the software being tested.

Some examples of various types of tests and their data needs:

- **Unit tests** typically require small, simple, and deterministic bits of data or state. These tests are often ad-hoc and work best when combined with common stub or dummy data helpers like factories.
- **Integration tests** may need an in-memory or lightweight database. These tests benefit from a controlled data seeding script that reflects expected relationships between entities.
- **End-to-end tests** often require a more complete environment. Using Docker volumes for test databases or tagging some data as test-specific (e.g., with a prefix) can make setup and teardown of tests easier.
- **Performance tests** usually need environments that very closely resemble production, including database sizes, infrastructure, and traffic patterns. Using anonymized production data is often a practical option, but teams should weigh the security risks before going that route.
- **Exploratory tests** depend on flexible, manually curated data or scenarios. Having the ability to quickly generate or manipulate data on demand is helpful.
- **Security tests** often need both typical and atypical input data to probe for vulnerabilities and weaknesses in data handling or access control.

When teams understand what their specific test type needs, they can begin to shape a TDM strategy that enables faster, safer, and more reliable software delivery.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement Test Data Management with your teams.

### Risks of Copying Production Data

Copying production data or replaying production traffic in test environments can make tests more realistic, but can increase security risks. Even if you scrub sensitive information, mistakes still happen. You might miss a schema change or run into a bug in the scrubbing tool. Sometimes that's okay, but in other cases it's a serious problem. To stay safe, use clear data standards, double-check your scrubbing process, and use fake or synthetic data when the cost of a miss is high.

### Outdated or Irrelevant Test Data

Test data becomes stale for many reasons: leftover data from test runs, time-sensitive use cases, schema or business rule changes, and updates to external dependencies like APIs or third-party services. When mocks or test fixtures fall out of sync with real systems, tests may pass while production fails. Regular data validation and cleanup help keep tests meaningful and trustworthy.

### Test Data Not Isolated

Sharing test data across tests or environments often leads to inconsistent results, especially during parallel runs. For example, if multiple tests rely on the same user account, simultaneous access can introduce conflicts that real users wouldn’t encounter. Debugging becomes harder and test flakiness increases when test data isn't properly isolated. To ensure your test data is most reliable, each test should generate and manage its own isolated data as part of its setup.

## Assessment

To assess how mature your team or organization is in this capability, complete this two-part exercise.

Consider the descriptions in the two areas of focus below: Manual Test Data Management, and Automated Test Data Management. Score yourself on each area. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team's automated tests use a mix of scattered, static data and data seeding scripts, then you would score a 2.5 for that area.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

### Manual Test Data Management

1. **No Data Management:** Teams manually set up and tear down data required for test scenarios, sometimes with great difficulty.
2. **Shared Test Environments with Limited Control:** Teams share test environments with varied data, but face occasional challenges with environment contamination and access restrictions.
3. **Scripted Data Seeding:** Teams can run automated data seeding scripts locally or in ephemeral environments, but they may not cover all possible scenarios.
4. **Scrubbed Prod Data:** Ephemeral environments are easily created and torn down, seeded with production data that has sensitive information scrubbed from it, representing all existing states.

### Automated Test Data Management

1. **Mocked Data:** Automated tests rely on stubs and mocks for data setup; they don’t support complex integration-style testing.
2. **Fragmented Static Data:** Automated integration-style tests are supported, but they rely on static test data that is often scattered across multiple sources. As a result, automated tests are difficult to maintain and update, and prone to failures when data is altered.
3. **Scripted Data Seeding:** Automated tests use manual data seeding scripts to set up and tear down their data; they may not cover all production scenarios.
4. **All Categories of Automated Tests Are Supported:** In addition to supporting scripted data seeding, ephemeral environments are easily created and torn down. They can be seeded with realistic synthetic data or production data that has sensitive information scrubbed from it. This enables advanced testing categories like performance, load, and anomaly detection.

Now, average your scores for both areas of focus. You'll then have your overall score for this capability. So, if your score for Manual Test Data Management was 2, and your score for Automated Test Data Management was 1, then your overall score for this capability would be 1.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Test Data Management; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Test Data Management capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Create In-Memory Databases For Local Testing

When teams run tests against an in-memory database, execution quickens, they don't need to rely on external systems, and full test isolation is ensured. In this way, developers gain complete control over their data. Test conditions are consistent and reproducible, and they don't affect teammates. This approach of using in-memory databases for local testing improves both reliability and performance.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Ephemeral environments are isolated, production-like spaces that can be spun up on demand. Each environment starts with a clean state. Teams can generate, load, and reset data without affecting others. This reduces test flakiness, ensures consistent results, and supports more accurate debugging. When integrated into CI/CD pipelines, ephemeral environments give teams fast, reliable feedback across app, data, and infrastructure changes.

### Use Data-generation Tools

To implement an effective TDM strategy, teams should leverage tools that automate test data creation based on predefined schemas and rules. Such data-generation tools help teams create relevant and varied datasets, enabling them to cover a wider range of test scenarios. By automating the process of test data creation, teams reduce the time and effort spent on data management and improve test coverage.

### Shadow Production with Traffic Replay

This technique helps teams validate changes using real-world data patterns, and uncover edge cases and regressions that synthetic data often misses. Traffic replay also improves test data realism without compromising user privacy. When a team encounters testing config changes, infrastructure updates, and complex interactions that rely on authentic request flows, this technique becomes especially useful. Combined with observability tools, traffic replay provides a powerful feedback loop for detecting easy-to-miss behavioral and performance anomalies in code changes.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Test Data Management)
- Upstream (they are a pre-requisite for Test Data Management)
- Downstream (Test Data Management is a pre-requisite for them)

### [Test Automation](/capabilities/test-automation.md) - Downstream

Test automation works best when it has the right data. If test data is missing, wrong, or hard to set up, automated tests can fail or miss important bugs. When test data is properly managed, teams can be assured tests have what they need, without requiring manual setup. This helps teams run more tests, faster, and with more confidence.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Like test automation, continuous integration works best when tests have access to the right data. Since code changes are merged often, tests need to run constantly. And they can’t do that if the test data is missing or unreliable. When test data is properly managed, every test run starts with the data it needs. This helps teams catch bugs early, avoid integration issues, and move faster with confidence.
