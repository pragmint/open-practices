# [Continuous Delivery](https://dora.dev/capabilities/continuous-delivery/)

Continuous delivery as a capability is the ability to deliver changes to a system continuously and safely. Breaking that down a bit further, that means:

1. Systems are kept in a deployable state even as changes are in an incomplete state.
2. It's clear if/when/how a specific set of changes broke the system.
3. User-facing changes are released frequently.

Teams proficient in continuous delivery can deploy code to production in a low-risk manner during normal business hours without impacting users. By possessing this capability, organizations can respond swiftly to market demands, improve product quality, and gain a competitive advantage.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Risk and Continuous Delivery

A common first take of continuous delivery is to call it risky. That's because people think about the costs and risks involved in continuously deploying their existing systems. In order to get the value from continuous delivery while de-risking the deployment process, ALL of the other DORA Capabilities have to be in place to a somewhat mature extent. For example, if a team attempts to deploy more frequently without first automating their test suite, they're likely going to need to spend an inordinate amount of time manually verifying correctness. A similar example could be created for any missing DORA Capability.

### Distinction from Continuous Deployment

Continuous delivery is often mistaken for continuous deployment, but continuous delivery has one extra facet to it: user-facing changes. A system could get deployed every week, but if all of the user facing changes sit behind feature flags or remain disconnected from live user flows, there isn't any business value behind deploying the changes. The [Working in small batches](/capabilities/working-in-small-batches.md) capability dives into strategies to ensure teams are avoiding "big bang" style releases, even if they're deploying frequently.

### Applicable to All Software Contexts

Continuous Delivery is not limited to web services; it applies to all kinds of software, including mobile apps, firmware, and mainframe systems. This universality means that practices must be adapted to different software contexts, taking into account the specific constraints and requirements of various environments.

## Supporting Practices

### [Clean Git History](/practices/clean-git-history.md)

Maintaining a clean Git history ensures a clear and comprehensible project history. Each commit should be concise and deployable. By making the revision history simple to understand and easy to traverse, the system becomes easier to deploy and less expensive to maintain.

### Automate Deployment Scripts

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions and reduce the risk of human error. This leads to a repeatable and reliable deployment process that can be triggered with minimal effort, enhancing deployment speed and consistency.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a consistent testing strategy means providing a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software.

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks ensures continuous and immediate feedback on code changes within the CI pipeline. This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy. By maintaining realistic coverage thresholds for different modules, automating test coverage checks optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Continuous Delivery)
- Upstream (they are a pre-requisite for Continuous Delivery)
- Downstream (Continuous Delivery is a pre-requisite for them)

### [All of the DORA Capabilities](/capabilities/) - Upstream

As mentioned earlier, ALL of the DORA Capabilities need to be implemented to a mature extent in order for continuous delivery to be cost-effective and a de-risking activity.
