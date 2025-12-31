# Use Data Generation Tools

Data generation tools reduce the complexity of generating complex data types or data rows. 

*Isolated Tests:* When a need arises use a simple [factory method](https://refactoring.guru/design-patterns/factory-method) or factory library like [Fishery](https://github.com/thoughtbot/fishery) to improve the maintainability and readability.

*Integrated Tests:* Integrated Tests will usually need more data management. There are many good tools for this. For example:

- RedGate 
- dbForge 
- SSDT 

## When to Experiment

You are a Developer and need to ensure that test data is easily managed so that you can maintain a high quality developer experience and retain the users positive experience.

## How to Gain Traction

First, bring up the need you have for data generation tools with your team so you can gain consensus and ensure you are thinking of everyone's needs. 

Suggest a few tools and discuss different options with your team while being understanding of the needs of your DevOps and DBA teams.

Implement the agreed upon solution. 

## Lessons From The Field

### Doint use them until you feel a need

While data generation tools can be helpful in reducing complexity, if you don't see that complexity yet, consider defering the decision to add new tools until that complexity arises.

### Be careful about tests that depend on each other

When dealing with data that can cross test boundaries like data inside your database or global variables (`window` & `document` in a web context) make sure that each test you write does not end up dependent on the setup or result of another test. You can easily check this by running each of your tests in isolation. If a test only passes when other tests are also run, some modification needs to be made to decouple the tests from each other.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

## Fast & Intangible

Your tests should be more *maintainable* after implementing this practice. Specifically, this means you should find yourself less likely to be fiddling with tests for lengthy periods to setup large sets of data. If you have not improved the time or energy to setup data, consider removing the tool and using factories for in memory data structures and raw sql scripts for sql data.

## Supported Capabilities

### [Test Data Management](/capabilities/test-data-management.md)

The reason we should use Data Generation Tools is pimerily for Test Data Management but Test Data Management can be done without Tools and that should be considered depending on the use case.

### [Database Change Management](/capabilities/database-change-management.md)

Based on your strategy for Database Change Management or a lack there of in the past, tooling might be an essential part of how you continue or start doing Database Change Management.

### [Continuous Delivery](/capabilities/continuous-delivery.md) & [Continuous Integration](/capabilities/continuous-integration.md)

Any tests that endup in your pipelines will need Test Data Management which might be done by tools depending on your needs.

