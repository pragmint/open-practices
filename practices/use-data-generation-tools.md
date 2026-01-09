# Use Data-generation Tools

[When you/your team/developers do XYZ (run different types of tests?), they need to generate complex data types or data rows, to provide the system with a wide range of scenarios. But generating this complex data is...error-prone/time-consuming/burdensome/etc.]

Data-generation tools reduce the complexity of generating complex data types or data rows. [These tools are helpful when running isolated or integrated tests.]

*Isolated Tests:* When a need arises use a simple [factory method](https://refactoring.guru/design-patterns/factory-method) or factory library like [Fishery](https://github.com/thoughtbot/fishery) to improve the maintainability and readability.

*Integrated Tests:* Integrated tests will usually need more data management. There are many good tools for test data management, including but not limited to:
- [RedGate](https://www.red-gate.com/)
- [dbForge](https://www.devart.com/)
- [SSDT](https://learn.microsoft.com/en-us/sql/ssdt/sql-server-data-tools?view=sql-server-ver17)

## When to Experiment

- You are a developer and need to ensure that test data is easily managed so that you can maintain a high-quality developer and user experience.

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

