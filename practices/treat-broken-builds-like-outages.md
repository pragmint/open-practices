# Treat Broken Builds Like Outages

Treating broken builds like outages is a cultural and technical discipline where a failure in the Continuous Integration (CI) pipeline is regarded as a high-severity incident. In this model, when the build fails, the team stops all new feature development and focuses immediately on restoring the build to a green state. This mindset shifts the build failure from being a background annoyance to a "stop-the-line" event, similar to the "Andon Cord" concept in lean manufacturing, ensuring that defects are not passed downstream or compounded by subsequent merges.

The goal of this practice is to maintain trust in the deployment pipeline. When a build stays broken for an extended period, developers may begin to ignore test results, assuming that failures are "normal" or unrelated to their own changes. This erosion of trust leads to the accumulation of technical debt and makes isolating the root cause of errors significantly more difficult. By treating the build as the heartbeat of the delivery system, teams ensure that the feedback loop remains tight and accurate.

Ultimately, this practice prioritizes long-term velocity over short-term output. While stopping work to fix a build may seem like an interruption, it actually prevents the much larger slowdowns caused by debugging complex, multi-layered failures later in the process. It ensures that the main branch remains in a consistently deployable state, allowing the team to release software on demand without fear of hidden regressions.

## When to Experiment

- You're a developer who needs a clean and up-to-date branch to merge changes into.
- You're an engineering manager who needs to reduce debugging time and integration friction so you can maintain steady delivery flow.

## How to Gain Traction

### Establish a Clear "Stop-the-Line" Policy

Define an explicit team agreement: When the build breaks, restoring it is the top priority. No new feature work proceeds until the build is green again. Be precise about what qualifies as a broken build (e.g., failing required checks on main) and what "fixed" means. Ambiguity will weaken the practice.

### Define Ownership and Response Expectations

Make responsibility unambiguous. The person who introduced the change fixes it, or a clearly defined owner (e.g., build sheriff or on-call) coordinates the fix. Set expectations that response time is immediate and measured in minutes, not hours.

### Reinforce Through Retrospectives

When a build stays broken longer than expected, treat it as a process failure.

Review:
- Why wasn't it fixed immediately?
- Was ownership unclear?
- Was the signal noisy or slow?

Continuously tighten the loop so the behavior becomes automatic.

## Lessons From The Field

- *Flaky Tests Undermine the Practice.* – If builds fail for non-deterministic reasons, teams quickly lose trust and stop treating failures as urgent. Stabilizing the test suite is a prerequisite for success.
- *Lack of Ownership Leads to Stalled Builds.* – When it's unclear who should fix a failure, builds can remain broken for extended periods. High-performing teams establish clear ownership and escalation paths.
- *Speed of Feedback Matters.* – If builds take too long to run, developers are less likely to respond quickly to failures. Faster pipelines lead to faster recovery and stronger adherence to the practice.
- *Cultural Alignment is Critical.* – Treating builds like outages requires shared agreement that system health is more important than individual progress. Without this alignment, the practice becomes inconsistent.

## Deciding to Pitch or Polish

After experimenting with this practice for **4–5 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Mean time to restore build (MTTR for CI failures)**. A decrease in the time it takes to return the build to a green state indicates that the team is responding quickly and effectively. This can be tracked through CI timestamps and incident logs.

**Frequency of broken builds**. A reduction in how often the build breaks suggests improved discipline and better integration practices. This can be measured through CI history or pipeline analytics.

### Fast & Intangible

**Trust in the CI system**. Developers feel confident that a green build means the system is stable and that failures are meaningful. This can be assessed through retrospectives or team feedback.

**Deployment readiness**. The main branch remains consistently deployable, enabling more frequent and reliable releases.

## Supported Capabilities

### [Continuous Integration](/capabilities/continuous-integration.md)

This practice is the cornerstone of successful Continuous Integration. CI relies on the assumption that the main branch is always healthy; if the build is ignored when it breaks, the integration process effectively ceases. Prioritizing build fixes ensures that the integration feedback loop remains active and valuable for the entire team.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

Continuous Delivery requires that software can be released to production at any time. A broken build signifies that the software is currently unreleasable, breaking the core promise of CD. Treating these breaks as outages ensures the "deployability" of the software is maintained as a top priority.

### [Trunk-based Development](/capabilities/trunk-based-development.md)

In Trunk-based Development, developers merge code into the main branch frequently, often multiple times a day. If the main branch is broken, every developer on the team is blocked from merging or pulling clean updates, halting the entire team's workflow. Rapid remediation of build failures is essential to prevent bottlenecks in this high-frequency workflow.

### [Team Experimentation](/capabilities/team-experimentation.md)

Teams can only experiment safely when they have a stable foundation to fall back on. If the build is constantly broken, it becomes impossible to determine if a failure is due to a new experiment or pre-existing issues. A green build provides the safety net required for teams to innovate and test new ideas without fear of destabilizing the system.
