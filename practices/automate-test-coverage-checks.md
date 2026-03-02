# Automate Test Coverage Checks

This practice improves software quality and stability by identifying untested code early, which helps prevent bugs and regrsssions. Automating test coverage checks is a low-cost way to spot gaps in the test coverage of your codebase and to ensure there is a baseline of test coverage for your software. Simply automating test checks won't guarantee the quality or reliability of your tests, so it's not a sufficient check by itself. Integrating test coverage checks into CI pipelines ensures continuous validation without slowing down development.

## When to Experiment
- You're a ...
- You're a ...

## How to Gain Traction

### Start a Book Club

#### [Test Coverage](https://martinfowler.com/bliki/TestCoverage.html)
In his blog post on test coverage, Martin Fowler explores the concept of test coverage as a tool for identifying untested code rather than as a definitive measure of test quality. He argues that while high test coverage percentages can highlight which parts of the code are exercised by tests, they do not necessarily indicate the *effectiveness* of those tests. Fowler emphasizes that test coverage should be used alongside other techniques and metrics to assess the robustness of tests, and that focusing solely on coverage numbers can lead to superficial or inadequate testing. He advocates for a balanced approach that combines test coverage with thoughtful test design and evaluation to achieve meaningful software quality.

### Host a Roundtable Discussion
You can use the following conversation prompts:

#### Tailoring and Adjusting Test Coverage
* Are our current coverage thresholds realistic and tailored to the specific needs of different modules within our application?
* How often do we review and adjust our coverage metrics to align with evolving project requirements?

#### Effectiveness of Test Coverage
* Do our tests catch bugs and edge cases, or are they merely boosting our coverage numbers?
* Is our automated test coverage adequately addressing non-functional testing, such as performance, security, and usability?

#### Challenges and Lessons in Test Coverage Implementation
* Are there any cultural or organizational barriers that prevent us from fully implementing this practice?
* What lessons can we learn from past experiences to enhance our future approach to automated test coverage?

## Lessons From The Field

- *Think Quality, Not Quantity*. It's important to prioritize the quality of tests over coverage percentages. Teams may focus solely on increasing coverage numbers without ensuring that tests are effective in catching bugs and edge cases.

- *Balance Speed and Coverage*. While automating test coverage checks speeds up validation processes, overemphasizing coverage goals can lead to diminishing returns. Setting overly ambitious coverage targets may slow down development or lead to superficial tests that don't add substantial value. It's important to strike a balance between achieving sufficient coverage and maintaining a productive development pace.

- *Consider Non-Functional Tests*. Automated test coverage often focuses on functional aspects of software, such as correctness and behavior. However, neglecting non-functional tests—-like performance, security, and usability-—can leave out important aspects of automated test quality. Integrating non-functional tests into automated pipelines ensures comprehensive software validation. For instance, performance tests can identify bottlenecks, security tests can detect vulnerabilities, and usability tests can improve user experience. None of those types of tests fit neatly into a traditional "coverage" check.

- *Continuously Improve*. Automating test coverage checks should not be a one-time setup but an ongoing process of refinement and improvement. Teams should regularly review and adjust coverage thresholds based on evolving project requirements, feedback from testing outcomes, and changes in software functionality.

## Deciding to Pitch or Polish
After experimenting with this practice for [**timeframe**], bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Intangible

**Title of benefit**. 2-4 sentences about the benefit.

### Slow & Measurable

**Title of benefit**. 2-4 sentences about the benefit.

## Supported Capabilities

### [Test Automation](/capabilities/test-automation.md)

Automating test coverage checks supports the Test Automation capability by ensuring continuous and immediate feedback on code changes within the CI pipeline. This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy.
By maintaining realistic coverage thresholds for different modules, it optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

### [Continuous Delivery](capabilities/continuous-delivery.md)

This practice supports the Continuous Delivery capability because it helps teams avoid the time-consuming task of manually verifying system correctness. If a team is attempting to deploy more frequently, it must first automate its test suite. 

