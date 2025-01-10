# [Continuous Delivery](https://dora.dev/capabilities/continuous-delivery/)

Continuous Delivery, as a capability, is about delivering changes to a system continuously and safely. Breaking that down a bit further, Continuous Delivery means:

1. Systems are kept in a deployable state, even as changes are in an incomplete state.
2. It's clear if, when, and how a specific set of changes broke the system.
3. User-facing changes are released frequently.

Teams proficient in Continuous Delivery can deploy code to production in a low-risk manner during normal business hours without impacting users. By possessing this capability, organizations can respond swiftly to market demands, improve product quality, and gain a competitive advantage.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Risk and Continuous Delivery

A common first take of continuous delivery is to call it "risky." That's because there are real costs and risks involved when continuously deploying your existing systems. In order to get the value from continuous delivery while _de-risking_ the deployment process, ALL of the other DORA Capabilities have to be in place to some degree. For example, if a team attempts to deploy more frequently without first automating their test suite, they're likely going to need to spend an inordinate amount of time manually verifying system correctness. A similar example could be created for any missing DORA Capability.

### Distinction From Continuous Deployment

Continuous delivery is often conflated with continuous deployment. While similar, continuous delivery has one extra facet to it: user-facing changes. A system could be deployed every week but if all of the user-facing changes sit behind feature flags or remain disconnected from live user flows, there isn't any business value to deploying the changes. The [Working in Small Batches](/capabilities/working-in-small-batches.md) capability dives into strategies to ensure teams are avoiding "big bang" style releases, even if they're deploying frequently.

### Applicable to All Software Contexts

Continuous delivery is not limited to web services; it applies to all kinds of software, including mobile apps, firmware, and mainframe systems. This universality means that practices must be adapted to different software contexts, taking into account the specific constraints and requirements of various environments.

## Assessment
To assess how mature your team or organization is in this capability, complete this four-part exercise.

Consider the descriptions in the four areas of focus below: Value Delivery Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Services. Score yourself on each area. The number you select represents your overall score for the area of focus. For example, score a 1 if user-facing updates are delivered infrequently, a 2 if they're delivered occasionally, a 3 if they're delivered regularly, and a 4 if these updates are continuous. 

If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team's lead time for changes is somewhere between weeks and days, then you would score a 2.5 for that area.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score. 

### Value Delivery Frequency

1. Infrequent Updates: User-facing updates are delivered less than once per quarter, with long periods of time between releases. Deployments that are void of business value or are sitting behind feature flags are not considered user-facing.
2. Occasional Updates: User-facing updates are delivered quarterly or monthly.
3. Regular Updates: User-facing updates are delivered bi-weekly or weekly.
4. Continuous Updates: User-facing updates are delivered multiple times per week (sometimes even multiple times a day), with a fully automated process and minimal manual intervention.

### Lead Time for Changes

1. Months: Changes typically take multiple months to go from code commit to production.
2. Weeks: Changes typically take multiple weeks to go from code commit to production.
3. Days: Changes typically take multiple days to go from code commit to production.
4. Hours: Changes typically take hours or one day to go from code commit to production.

### Change Failure Rate

1. High Failure Rate: More than 15% of changes to production results in a degraded service and requires immediate remediation.
2. Moderate Failure Rate: Between 3-15% of changes to production results in a degraded service and requires immediate remediation.
3. Low Failure Rate: Less than 3% of changes to production results in a degraded service and requires immediate remediation.
4. Very Low Failure Rate: Less than 1% of changes to production results in a degraded service and requires immediate remediation.

### Time to Restore Service

1. Days: It typically takes multiple days to restore service after a change failure.
2. Hours: It typically takes multiple hours to restore service after a change failure.
3. Under An Hour: It typically takes somewhere between 10 and 60 minutes to restore service after a change failure.
4. A Couple Of Minutes: It typically takes under 10 minutes to restore service after a change failure.

Now, average your scores for all four areas of focus. You'll then have your overall score for this capability. So, if your score for Value Delivery Frequency was 2, your score for Lead Time Changes was 3, your score for Change Failure Rate was 1, and your score for Time to Restore Service was 1, then your overall score for Continuous Delivery would be 1.75.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Continuous Delivery; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Continuous Delivery capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Clean Git History](/practices/clean-git-history.md)

Maintaining a clean Git history ensures a clear and comprehensible project history. Each commit should be concise and deployable. By making the revision history simple to understand and easy to traverse, the system becomes easier to deploy and less expensive to maintain. This practice facilitates better understanding, collaboration, troubleshooting, and rollbacks.

### Automate Deployment Scripts

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions, reduce the risk of human error, and lessen deployment pain. A repeatable and reliable deployment process can then be triggered with minimal effort. This enhances not only deployment speed and consistency but also employee well-being.

### [Build a Consistent Testing Strategy](/practices/build-consistent-testing-strategy.md)

Building a consistent testing strategy means providing a structured approach to testing that aligns with project needs.
It emphasizes balanced test coverage, integrates tests into CI pipelines for fast feedback, and combines automated and manual testing to ensure comprehensive quality and stability of software.

### [Automate Test Coverage Checks](/practices/automate-test-coverage-checks.md)

Automating test coverage checks ensures continuous and immediate feedback on code changes within the CI pipeline. This practice identifies untested code early, helping prevent bugs and regressions, and aligns with a consistent testing strategy. By maintaining realistic coverage thresholds for different modules, automating test coverage checks optimizes testing efforts, enhances collaboration between testers and developers, and ultimately improves software quality and stability throughout the delivery lifecycle.

## Adjacent Capabilities

As mentioned earlier, [all of the DORA capabilities](/capabilities/) need to be implemented to a somewhat mature extent in order for continuous delivery to be a cost-effective and de-risking activity. Because of this, all DORA capabilities can be considered upstream pre-requisites for the Continuous Delivery capability. 
