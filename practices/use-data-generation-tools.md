# Use Data-generation Tools

Data-generation tools shine brightest when used with end-to-end or integration tests. They _can_ be used with more isolated tests or unit tests but this is often a symptom of a larger issues and should be used with discretion.

Data-generation tools simplify the process of generating complex data types or adding complex data to databases. These jobs can be done with SQL scripts or API Requests but as a system grows developers will feel the need to reach for more powerful strategies to manage that data which is where Data-generation tools come into play.

*Isolated Tests:* As setup complexity of your unit and isolated tests grows you will want to reach for simple solutions like [factory method](https://refactoring.guru/design-patterns/factory-method) before introducing third party tools. If efforts to reduce code duplication with factory methods and simple design patterns continues to fail, libraries like [Fishery](https://github.com/thoughtbot/fishery) may improve maintainability and readability.

*Integrated Tests:* Integration and end-to-end tests are difficult to setup because of their multi-process nature. You can still achieve a satisfactory solution without needing third party data-generation tools but for large projects you will quite often find your self needing data-generation tools like the following:

- [RedGate](https://www.red-gate.com/)
- [dbForge](https://www.devart.com/)
- [SSDT](https://learn.microsoft.com/en-us/sql/ssdt/sql-server-data-tools?view=sql-server-ver17)

## When to Experiment

- You are a developer that needs to setup, tear down or reset large amounts of data before and after integration or end-to-end tests.
- You are a developer writing unit or isolated tests that have significant duplication of data setup that cannot be solved with simple design pattern changes and refactors.

## How to Gain Traction

### Start With Collaboration
First, bring the team together and explain your rationale for needing to use data-generation tools. Listen to the feedback and ask the team to express their needs. Consider many perspectives before making any decisions. 

Suggest a few tools and discuss different options with your team while being understanding of the needs of your DevOps and DBA teams.

Implement the agreed upon solution. 

## Lessons From The Field

- _Don't Use Data-generation Tools Until (and Unless) There is a Need_ - While data-generation tools can be helpful in reducing complexity in test data management, if you don't *see* that complexity yet, consider waiting to adopt new tools until that complexity arises. There are use cases where test data management can be done without tools.

- _Be Careful About Tests That Depend on Each Other_ - When dealing with data that can cross test boundaries, like data inside your database or global variables (`window` & `document` in a web context), make sure that each test you write is independent of the setup or result of another test. You can easily check this by running each of your tests in isolation. If a test only passes when other tests are also run, then some modification needs to be made to decouple the tests from each other.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Tests should be more maintainable**. You should be less likely to fiddle with tests for lengthy periods of time, setting up large sets of data. If the tool has not improved the time or energy it takes to set up test data, then consider removing the tool and using factories for in-memory data structures and raw sql scripts for sql data.

## Supported Capabilities

### [Test Data Management](/capabilities/test-data-management.md)

To implement an effective Test Data Management strategy, teams should leverage tools that automate test data creation based on predefined schemas and rules. Such data-generation tools help teams create relevant and varied datasets, enabling them to cover a wider range of test scenarios. By automating the process of test data creation, teams reduce the time and effort spent on data management and improve test coverage.

### [Database Change Management](/capabilities/database-change-management.md)

Depending on your strategy, data-generation tooling might be an essential part of how you continue or start doing Database Change Management.

### [Continuous Delivery](/capabilities/continuous-delivery.md) & [Continuous Integration](/capabilities/continuous-integration.md)

Any tests that end up in your CI/CD pipelines will need test data to be managed. This might be done by data-generation tools, depending on your needs.

