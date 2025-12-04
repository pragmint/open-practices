# Migrate to a Monorepo

Developing with dozens of local micro-repos that need to work together and may also have database access or cloud permissions needs can feel like you've only got the choice of flying blind or waiting to get off the ground. This practice helps teams consolidate scattered projects into a single monorepo so they can see the system at work locally and start coding anywhere (even on a plane) without a need for access approvals or an unused cloud environment. Many popular build tools support this functionality:

- [pnpm](https://pnpm.io/workspaces)
- [Nx](https://nx.dev/concepts/decisions/why-monorepos)
- [Bazel](https://bazel.build/concepts/build-ref#workspace)
- [Turborepo](https://turborepo.com/docs#what-is-turborepo)
- [Pants](https://www.pantsbuild.org/stable/docs/using-pants/environments#in-workspace-execution-experimental_workspace_environment)
- etc (this isn't by any means a definitive list)

## When to Experiment

- You are a Developer working on features that involve multiple interdependent repositories and need to get fast feedback on changes  without needing access to managed cloud environments so you can start coding right away instead of waiting for resources to be made available or accessible to you.

## How to Gain Traction

Treat it as an experiment, not a mandate.

### Start by bringing together the interdependent repos

Choose as few services as you can get away with (2-3 ideally) that already depend on each other and form a complete system. Clone them under a single directory called something like `\services`.

### Create a monorepo to wrap the services

In the parent directory, create a repo that uses a build tool that supports workspaces or monorepos. Develop shell scripts that clone the interdependent repos into `/services` from the monorepo root, build each service, run each service, etc.

### Add an integration testing layer

Use this monorepo to test the seams of interaction between the services, ensuring that contracts and connections still function. This can be a harness to gain more confidence that each service built in isolation previously will still work well with the rest of the system. Snapshot testing via a framework like jest, while not ideal in the longterm, can fill this role in a starting capacity. Do not add unit tests here, instead develop a script that can run through the tests on each service the monorepo houses.

### Make a local docker container with a dummy database

Use this pilot to work through defining the interfaces to the "outside world". Use docker-compose to orchestrate fake versions of the various databases your services depend on. Dump a working copy of the data from a lower environment (if none is available, scrub a production dump of PII and use that). Start by populating the local database via the dump, then add migration scripts to keep the schema current, finally create data generators to quickly set the database to specific or random conditions the code will work against.

### Fill in vendor dependecies with echo servers

For additional services that call vendors that return values, create echo servers that take requests in an identical shape and return fake production-like repsonses. This is an opportunity to build in robustness into the system if vendor latency fluxuates - when there is additional time, simulate this as well. Do the same for services that don't directly talk to the services, but modify the Database on cron schedules.

### Create a Migration Path

Even before all the pieces allow for a tested and independently running local setupo, demonstrate how it works for you to gain team awareness. Instead of mandating use, allow individual developers to adopt the monorepo locally themselves and become advocates and champions for it. Pair program using the tooling, and help orther developers mirror your setup. You know the team has adopted the practice when developers reference it amongst eachother in work that doesn't directly involve you.

### Continue Improving DevEx

Listen to gripes and complaints and set asside time to improve those parts of the system. Note what still causes you confusion or wait times. Schedule time with developers working in the new repository to understand how they use it and where they still get friction. This can be done in the course of regular work if you pair program. Brainstorm potential solutions as a group. Keep an eye toward improving the items listed in the Goals, Metrics & Signals section of this page to ensure efforts are making a difference. You know it's simple to setup and use when you observe developers using it who haven't come to you with questions first.


## Lessons From The Field

- If you find yourself in a company structured so that you must wait for resource allocations or a separate team to come in and build/grant you access, the wait time you are experiencing can be used to start building this local repo. It may be a matter of building it for you, then once its working, sharing it with the team.
- Remote teams might not make thier local developer setups visible.  Just because no one mentions the tool or praises it doesn't mean it's not being used. If it saves them time, and shows them what they need to see more easlily than what they've cobbled together for themselves, they will use it.

## Deciding to Polish or Pitch

After experimenting with this practice for **one month**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Lead Time** for changes spanning multiple repositories should decrease. By consolidating services into a monorepo, cross-cutting changes can be made without waiting for access approvals, access re-approvals, test-deploying, or waiting for a clean tests enviornment, reducing coordination overhead and speeding up delivery. Tools like [DX](https://getdx.com/platform/data-lake/), [Jellyfish](https://jellyfish.co/platform/engineering-metrics/), or others can measure these sort of lead time changes. Custom solutions can also be built using data from project planning tools like [JIRA](https://community.atlassian.com/forums/App-Central-articles/Cycle-Time-and-Lead-Time-in-Jira-Productivity-Measurement-with/ba-p/1905845), [Monday](https://monday.com/blog/project-management/what-is-lead-time/), or others.

### Slow & Intangible

**Cleaner Service Boundaries** should evolve over time, because refactoring those boundaries becomes easier. Poor service boundaries can be removed with less friction when everything lives in one repo. On the flipside, teams can more quickly extract new services with the shared tooling, configuration, and build setup.

**Better cross-team collaboration** The monorepo can be spun up fairly simply to collaborate and demonstrate system behavior. When database changes are considered, comparing what's set up locally to the new schema change can be a point of conversation between teams that manage the data and teams than manage the code. The same thing applies to cloud environment connections between services, and to thrid pary API vendor interactions. When change involves less uncertainty, confidence to experiment increases.

## Supported Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

A local monorepo can help expose duplicated scripts and configuration across micro-repos, making the codebase easier to maintain and evolve.

### [Test Automation](/capabilities/test-automation.md)

Being able to test the interactions between the services the team maintains means there is much greater confidence that the whole system will perform as expected. Knowing those interactions still work while developing instead of at deploy-time shortens feedback loops and speeds up delivery.

### [Test Data Management](/capabilities/test-data-management.md)

Having control of the data locally means we also gain knowledge of the data's schema. By knowing and maintaining this information within the monorepo, we can eliminate uncertainty caused by database changes that previously existed outside the team's control. The same can be said for outside service vendors that supply information or data transformations our system depends on. By designing echo servers, we can even start to build the codebase to be robust in the event these services don't perform flawlessly via principles of Chaos Engineering.
