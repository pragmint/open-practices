# Use Data Generation Tools

Data generation tools are namely about properly managing testing data. No
matter what type of test you are running there is an appropriate way to handle
your data so your tests are fast and reliable. 

For unit tests and other isolated tests data management might be as simple
defining variables or objects. This should almost always be your first choice.
When a need arises a simple [factory
method](https://refactoring.guru/design-patterns/factory-method) or factory
library like [Fishery](https://github.com/thoughtbot/fishery) will improve the
maintainability and readability. If your solution doesn't feel like it's making
things simpler, redirect to one that does.

For integrated tests like E2E tests or integration tests, data generation might
be as simple as sql scripts to initialize and tear down test data before and
after your tests. Once data has grown in complexity or if you are dealing with
a complex legacy solution, introducing specialized tools like RedGate, dbForge,
SSDT or one of the many other SQL tool sets that fits your companies needs will
greatly improve. 

The core idea here whether in an isolated environment or in an integrated
environment is to ensure you keep your tests clear and to follow the "Arrange,
Act, Assert" pattern and that each test cleans up after its self so they are
reliable and easy to understand. Introduce tools as needs arise waiting to feel
the need for that tool before pulling the trigger and increasing the complexity
dependency structure.

## When to Experiment

You are a Developer and need to ensure that test data is easily managed so that
you can maintain a high quality developer experience and retain the users
positive experience.

## How to Gain Traction

First, bring up the need you have for data generation tools with your team so
you can gain consensus and ensure you are thinking of everyone's needs. 

Suggest a few tools and discuss different options with your team while being
understanding of the needs of your DevOps and DBA teams.

Implement the agreed upon solution. 

## Lessons From The Field

### Be careful about tests that depend on each other

When dealing with data that can cross test boundaries like data inside your
database or global variables (`window` & `document` in a web context) make sure
that each test you write does not end up dependent on the setup or result of
another test. You can easily check this by running each of your tests in
isolation. If a test only passes when other tests are also run, some
modification needs to be made to decouple the tests from each other.

## Deciding to Polish or Pitch

After experimenting with this practice for 2-3 weeks, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Feedback Cycles

Are your tests providing faster feedback?

### Maintainability

Are your tests easier to write and work with?

### Improved Test Reliability

Are your tests less flaky and more reliable?

## Supported Capabilities

### Test Data Management

[Test Data Management](/capabilities/test-data-management.md)

### Database Change Management

[Database Change Management](/capabilities/database-change-management.md)

### Continuous Delivery

[Continuous Delivery](/capabilities/continuous-delivery.md)

### Continuous Integration

[Continuous Integration](/capabilities/continuous-integration.md)

