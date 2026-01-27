# Use Data-generation Tools

Generating complex data types or adding complex data to databases can typically be done with SQL scripts or API requests. As a system grows, however, developers will feel the need to reach for more powerful strategies to manage that data. This is where data-generation tools step in and simplify the process.

Data-generation tools shine brightest when used with end-to-end or integration tests. They _can_ be used with more isolated tests or unit tests but this is often a symptom of a larger issue and should be used with discretion.

*Integrated Tests:* Integration and end-to-end tests are difficult to set up because of their multi-process nature. In these evironments, your code isn't running in issolation. It needs to communicate across the network or between different processes on the same server. You can achieve a satisfactory solution without using third-party data-generation tools, but for projects serving tens of thousands or millions of users, developers will quite often need data-generation tools like the following:
- [RedGate](https://www.red-gate.com/)
- [dbForge](https://www.devart.com/)
- [SSDT](https://learn.microsoft.com/en-us/sql/ssdt/sql-server-data-tools?view=sql-server-ver17)

*Isolated Tests:* As setup complexity of unit and isolated tests grows, developers will want to reach for simple solutions like [factory method](https://refactoring.guru/design-patterns/factory-method) before introducing third-party tools. If efforts to reduce code duplication with factory methods and simple design patterns continues to fail, then libraries like [Fishery](https://github.com/thoughtbot/fishery) may improve maintainability and readability.

## When to Experiment

- You are a developer who needs to set up, tear down, or reset large amounts of data before and after integration or end-to-end tests.
- You are a developer writing unit or isolated tests that have significant duplication of data setup that cannot be solved with simple design pattern changes and refactors.

## How to Gain Traction

### Start With Collaboration

Start by bring the team together and explaining your rationale for needing to use data-generation tools. Make sure your problem is clearly articulated and simple to understand. Sometimes your problem will be solvable in a simpler manner without over investing in an external framework. Listen to feedback and be open to others solutions and perspectives.

### Pilot

Once you've agreed on a few potential solutions, set a time-box and run a pilot with the options. During the pilot try to strike the balance of investing as little as possible to see if a tool is a viable solution and giving the product a genuine chance to show productivity gains. Keep your team and other stakeholders in the loop as you iterate and take intentional notes about its pros and cons of each tool.

### Present and Options Paper

Once your pilot is over, create a document with each choice listed out. Add a small description and the pros and cons you found as your investigated different options. Find a time to re-convene and present your findings seeking to keep personal bias at bay.

### Iterate and Improve

Once that choice has been made, always be prepared to be flexible and iterate on the solution.

## Lessons From The Field

- _Don't Use Data-generation Tools Until (and Unless) There is a Need_ - While data-generation tools can be helpful in reducing complexity in test data management, if you don't *see* that complexity yet, consider waiting to adopt new tools until that complexity arises. There are use cases where test data management can be done without extraneous tools.

- _Be Careful About Tests That Depend on Each Other_ - Most test that will require data generation tools end up being across significant application boundaries. When dealing with setup for such tests, like data inside your database or global variables (`window` & `document` in a web context), make sure that each test you write is independent of the setup or result of another test. This will likely require some thought when setting up your data generation tools. You can easily check this by running each of your tests in isolation. If a test only passes when other tests are also run, then some modification needs to be made to decouple the tests from each other.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Tests should be more maintainable**. You should be less likely to fiddle with tests for lengthy periods of time, setting up large sets of data. If the tool has not improved the time or energy it takes to set up test data, then consider removing the tool and using factories for in-memory data structures and raw sql scripts for sql data.

## Supported Capabilities

### [Test Data Management](/capabilities/test-data-management.md)

To implement an effective Test Data Management strategy, teams should leverage tools that automate test data creation based on predefined schemas and rules. Such data-generation tools help teams create relevant and varied datasets, enabling them to cover a wider range of test scenarios. By automating the process of test data creation, teams reduce the time and effort spent on data management and improve test coverage.

### [Database Change Management](/capabilities/database-change-management.md)

Depending on your strategy, data-generation tooling might be an essential part of how you continue or start doing Database Change Management.

### [Continuous Delivery](/capabilities/continuous-delivery.md) 

Any tests that end up in your CI/CD pipelines will need test data to be managed. This might be done by data-generation tools, depending on your needs.

