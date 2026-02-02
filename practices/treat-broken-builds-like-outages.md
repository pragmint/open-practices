# Treat Broken Builds Like Outages

Treating broken builds like outages is a cultural and technical discipline where a failure in the Continuous Integration (CI) pipeline is regarded as a high-severity incident. In this model, when the build fails, the team stops all new feature development and focuses immediately on restoring the build to a green state. This mindset shifts the build failure from being a background annoyance to a "stop-the-line" event, similar to the "Andon Cord" concept in lean manufacturing, ensuring that defects are not passed downstream or compounded by subsequent merges.

The primary motivation for this practice is to maintain trust in the deployment pipeline. When a build stays broken for an extended period, developers may begin to ignore test results, assuming that failures are "normal" or unrelated to their own changes. This erosion of trust leads to the accumulation of technical debt and makes isolating the root cause of errors significantly more difficult. By treating the build as the heartbeat of the delivery system, teams ensure that the feedback loop remains tight and accurate.

Ultimately, this practice prioritizes long-term velocity over short-term output. While stopping work to fix a build may seem like an interruption, it actually prevents the much larger slowdowns caused by debugging complex, multi-layered failures later in the process. It ensures that the main branch remains in a consistently deployable state, allowing the team to release software on demand without fear of hidden regressions.

## Supported Capabilities

### [Continuous Integration](/capabilities/continuous-integration.md)

This practice is the cornerstone of successful Continuous Integration. CI relies on the assumption that the main branch is always healthy; if the build is ignored when it breaks, the integration process effectively ceases. Prioritizing build fixes ensures that the integration feedback loop remains active and valuable for the entire team.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

Continuous Delivery requires that software can be released to production at any time. A broken build signifies that the software is currently unreleasable, breaking the core promise of CD. Treating these breaks as outages ensures the "deployability" of the software is maintained as a top priority.

### [Trunk-Based Development](/capabilities/trunk-based-development.md)

In Trunk-Based Development, developers merge code into the main branch frequently, often multiple times a day. If the main branch is broken, every developer on the team is blocked from merging or pulling clean updates, halting the entire team's workflow. Rapid remediation of build failures is essential to prevent bottlenecks in this high-frequency workflow.

### [Team Experimentation](/capabilities/team-experimentation.md)

Teams can only experiment safely when they have a stable foundation to fall back on. If the build is constantly broken, it becomes impossible to determine if a failure is due to a new experiment or pre-existing issues. A "green" build provides the safety net required for teams to innovate and test new ideas without fear of destabilizing the system.
