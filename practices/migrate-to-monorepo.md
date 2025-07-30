# Migrate to a Monorepo

Managing dozens of micro-repos can feel like death by a thousand Git pulls. This practice helps teams consolidate scattered projects into a single monorepo (also known as a workspace). Many popular build tools support this functionality:

- [pnpm](https://pnpm.io/workspaces)
- [Nx](https://nx.dev/concepts/decisions/why-monorepos)
- [Bazel](https://bazel.build/concepts/build-ref#workspace)
- [Turborepo](https://turborepo.com/docs#what-is-turborepo)
- [Pants](https://www.pantsbuild.org/stable/docs/using-pants/environments#in-workspace-execution-experimental_workspace_environment)
- etc (this isn't by any means a definitive list)

## Who It’s For & Why

- You are a Developer and you need to make coordinated changes across services without repo-hopping so you can move faster with less friction.
- You are a QA and you need consistent CI pipelines and shared testing utilities so you can reduce regressions and setup time.
- You are a Product Manager and you need tighter release coordination across teams so you can confidently ship cross-cutting features.

## Goals, Metrics & Signals

### Intended Outcomes

- Accelerated cross-service development due to reduced overhead (code review, context switching, versioning, etc).
- Improved DevEx by standardizing scripts, environments, and tooling.
- Delivering all of the changes all at once reduces the surface area for cross-service conflicts.

### Target Measurements

- Pull requests touching multiple services have a decreased lead time. This can be measured using tools like [DX](https://getdx.com/platform/data-lake/), [Jellyfish](https://jellyfish.co/platform/engineering-metrics/), or others. Custom solutions can also be built using data from project planning tools like [JIRA](https://community.atlassian.com/forums/App-Central-articles/Cycle-Time-and-Lead-Time-in-Jira-Productivity-Measurement-with/ba-p/1905845), [Monday](https://monday.com/blog/project-management/what-is-lead-time/), or others.
- Developer sentiment in retrospectives or surveys show decreased friction when working across services.

## Lessons From The Field

- *It's Important to Preserve Revision History* - The easiest way to migrate over to a workspace tool is to copy/paste the source code into the subdirectories of a new repository. This blows the history away, and all of the rich version history will get lost in the process. If you're using Git, you can merge an external codebase using the `--allow-unrelated-histories` flag. It's probably best to stay away from using submodules as that can create a very clunky developer experience.
- *Repo Size Increase Can Affect Performance* - While these issues can arise, they aren't common. Even if they do arise, there are tactics to solve for them (see [Optimizing Git Performance](/resources/tech/optimizing-git-performance.md)). You can also decide later to split repositories after those performance issues arise.
- *Makes Tight Coupling Easier* - When you make it easier to write code that changes multiple parts of the broader system, you make it easier to introduce code that doesn't separate concerns and increases module coupling. This can be mitigated with constant retrospectives focused on how these boundaries are formed. The good news about monorepos is when you identify a poorly constructed boundary, it's easier to fix when it's all in the same repo.
- *Have a plan for coordinating deploys* - When multiple modules need to be released together for a feature, it can be easier to coordinate activation through feature flags rather than trying to achieve atomic cross-package deployments.
- *Only build and test what has actually changed between commits* - Good build tools use dependency graphs to determine which packages need rebuilding. Without this, CI/CD times become prohibitive as the repo grows.

## How to Gain Traction

### Start with a Pilot Repo

Choose 2–3 services that already depend on each other and migrate them into a monorepo using a build tool that supports workspaces or monorepos. Treat it as an experiment, not a mandate. Use this pilot to work through structural decisions, harden DevEx, and gather feedback.

### Create a Migration Path

Give teams an easy way to migrate their repositories into the new workspace while preserving history and conforming to the CI / local dev tooling. Let teams volunteer to migrate into the monorepo after seeing early success. Provide a checklist, templates, and pairing support to make migration easier. Keep a visible tracker of what’s moved and what’s next.

### Continue Improving DevEx

Schedule time with the team members who work in the new repository to understand their pain points. Brainstorm potential solutions as a group. Keep an eye toward improving the items listed in the Goals, Metrics & Signals section of this page to ensure efforts are making a difference.

## Supporting Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

Monorepos reduce duplicated scripts and configuration across micro-repos, making the codebase easier to maintain and evolve.

### [Version Control](/capabilities/version-control.md)

A monorepo supports atomic changes across services and libraries, improving consistency and reducing integration friction.

### [Deployment Automation](/capabilities/deployment-automation.md)

With a shared pipeline and tooling, deployment logic can be standardized or split depending on team needs—flexibility becomes a feature, not a pain point.
