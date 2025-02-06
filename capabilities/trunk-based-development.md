# [Trunk-Based Development](https://dora.dev/devops-capabilities/technical/trunk-based-development/)

Trunk-based development is a version control strategy where developers work on short-lived branches, integrating small code changes into the main branch (trunk) frequently—often multiple times a day. This approach contrasts with the use of long-lived feature branches, which can lead to complex merges and integration challenges. By committing small, manageable batches of code regularly, teams minimize merge conflicts and maintain a more stable codebase.

Implementing trunk-based development is required for effective continuous integration (CI). CI involves combining trunk-based development with a suite of automated tests that run after each commit to ensure the system remains functional. This practice eliminates lengthy integration and stabilization phases, as frequent integration of small code batches promotes clear communication among developers and prevents the accumulation of large, complex merges. Developers are responsible for keeping the build process "green", they must promptly address any issues that arise during integration.

## Nuance

### Automated Testing Must Be Fast and Reliable

<!-- Include pre commit unit test run -->
Trunk-based development relies on robust automated tests to keep the main branch stable. But tests must also be fast—slow suites create bottlenecks, delaying feedback and hurting productivity. Teams should prioritize efficient, accurate tests to ensure smooth continuous integration without unnecessary firefighting.


Strict Code Reviews Can Counteract the Benefits
Overly rigid code review processes that require multiple approvals can slow down development, negating the speed advantages of trunk-based development. If every small change requires lengthy review cycles, developers might batch up changes, leading to larger, riskier merges. Striking a balance between speed and quality through lightweight, synchronous, or just-in-time reviews can help maintain flow.

Feature Flags Are Essential for Incomplete Work
Since trunk-based development discourages long-lived branches, teams need a way to deploy incomplete features safely. Feature flags allow developers to merge code early while keeping unfinished functionality hidden from users. However, mismanaging feature flags—such as forgetting to clean up old ones—can lead to technical debt and unnecessary complexity.

<!-- Pair programming -->

<!-- Next: Read Dave's document -->


## Experiment doc

* Pain with snapshot testing
* Lack of solid integration tests
* Complexity with cross team collaboration
* Alternative workflow for solo programmers

## Key Points

* Developer push code directly into trunk
* Release branches are usually merged back to trunk as soon as possible.

* Is a required practice for continuous integration
* Fast test suite.

* Related to Break work in smaller batches

* DORA shows that teams achieve higher levels of software delivery and operational performance if they follow:
  * < 3 active branches in repo
  * Merge branches to trunk at least once a day
  * Don't have code freezes and don't have integration phases

* Nuance: For some business code freezes can make sense strategically

* Common Pitfalls
  * An overly heavy code-review process
  * Performing code reviews asynchronously
  * Not running automated tests before committing code

* Ways to IMprove
  * Develop in small batches
  * Perform synchronous code review
  * Implement comprehensive automated testing
  * Have a fast build
  * Create a core group of advocates and mentors

* Ways to measure trunk-based development
  * Active branches on the application's code repository
  * Code freeze periods
  * Frequency of merging branches and forks to trunk
  * Check time taken to approve code changes

* More research
  * Short-lived Branches or Direct Commits
  * Feature Flags
  * Automated Testing & CI/CD
  * Code Review & Pair Programming
  * Fast & Reliable Releases


  <!-- Next: Read Ways to improve trunk-based development in capability DORA page -->