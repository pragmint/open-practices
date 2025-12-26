# Build a Monorepo for Local Development

Developing with dozens of local micro-repos that need to work together (and may also have database access or cloud permissions needs) is both daunting and time-consuming -- it can feel like your choices are either flying blind or waiting to get off the ground. Teams may encounter duplicated scripts and configuration across these many micro-repos. They may not trust interactions between services will behave as expected. And database changes may be out of their control, leading to more uncertainty. But when scattered projects are consolidated into a single monorepo, teams can see the system at work locally and start coding anywhere (even on a plane), without needing access approvals or an unused cloud environment. Many popular build tools support this functionality:

#### build tools that support this functionality

- [pnpm](https://pnpm.io/workspaces)
- [Nx](https://nx.dev/concepts/decisions/why-monorepos)
- [Bazel](https://bazel.build/concepts/build-ref#workspace)
- [Turborepo](https://turborepo.com/docs#what-is-turborepo)
- [Pants](https://www.pantsbuild.org/stable/docs/using-pants/environments#in-workspace-execution-experimental_workspace_environment)
- Etc. (this isn't by any means a definitive list)

## When to Experiment

- You are a developer working on features that involve multiple interdependent repos and you need fast feedback on changes (without needing access to managed cloud environments) so you can start coding right away (instead of waiting for resources to be made available or accessible to you).

## How to Gain Traction

### Start by Bringing Together the Interdependent Repos

Choose as few services as you can get away with (2-3 ideally) that already depend on each other and form a complete system. Clone them under a single directory called something like `\services`.

### Create a Monorepo to Wrap the Services

In the parent directory, create a repo that uses a build tool that supports workspaces or monorepos ([see the list above](#build-tools-that-support-this-functionality)). Develop shell scripts that clone the interdependent repos into `/services` from the monorepo root, then extend the shell scripts to set up each of the services for local development as you would in isolation(install, build, run, etc.)

### Add an Integration Testing Layer

Use this monorepo to test the seams of interaction between the services, ensuring that contracts and connections still function. This can be a harness to gain more confidence that each service previously built in isolation will still work well with the rest of the system. Snapshot testing via a framework like jest, while not ideal in the long term, can get the job done initially. Do not add unit tests here; instead, develop a script that can run through the tests on each service the monorepo houses.

### Make a Local Docker Container With a Dummy Database

Use this pilot to work through defining the interfaces to the "outside world." Use docker-compose to orchestrate fake versions of the various databases your services depend on. It's likely you'll need a local copy of data that exists in running cloud-based systems. Create a copied data file from a database dump of a working staging environment (if none is available, scrub a production dump of PII and use that). Start by populating the local database with the copied file, then add migration scripts to keep the schema current. Finally, create data generators to quickly set the database to specific or random conditions the code will work against.

### Fill in Vendor Dependecies With Echo Servers

Echo servers are named because they simply "echo back" what you send them. The echo servers we need will only be slightly more complex. They'll accept requests shaped as your vendor expects and return responses shaped the same as how your vendor replies. There should be next to no business logic in them.

Your services may depend on calls to third-party vendors, such as accounting software, a CRM, or even a Zip Code finder. Calling out to the vendors directly, whenther using their live APIs or development sandboxes can have technical limitations or throttle feedback loops. To isolate your development environment and speed up feedback loops, you can instead create these basic servers ("echo servers") that take requests in an identical shape and return fake production-like repsonses. This can also create an opportunity to build in robustness into the system if vendor latency fluxuates -- when there is additional time, simulate this as well. Do the same for services that don't directly talk to the services, but modify the database on cron schedules.

### Create a Migration Path

Before you have a tested and independently running local setup, get your team involved and demonstrate how it works for you. Treat this as an experiment, not a mandate. Allow individual developers to adopt the monorepo locally and become advocates and champions for it. Pair program using the tooling and help orther developers mirror your setup. You know the team has adopted the practice when developers reference the monorepo amongst each other when when discussing daily work that's independent of yours.

### Continue Improving DevEx

Schedule time with developers working in the new repo to understand how they use it and where they still encounter friction. This can be done during the course of regular work if you pair program. Listen to any gripes and complaints, and note what still causes you confusion or wait times. Brainstorm potential solutions as a group and set aside time to improve problematic parts of the system. Focus on improving the items listed in the Polish or Pitch section of this page to ensure efforts are making a difference. You know it's simple to set up and use when you observe developers using it who haven't come to you with questions first.


## Lessons From The Field

- *Use Idle-time to develop tooling* - Your organization may be structured in a way that you must wait for a separate team to build/configure/grant you access to required resurces - such as cloud databases, vendor sandboxes, or development environments. Instead of just waiting, use that time to start building this local repo. Once you've got an experimental version up and running, share it with the team. You may discover that you don't need to rely on others as much and can deliver value faster, saving cross-team-collaboration time for when it really matters.
- *Don't be discouraged by silence* - Remote teams might not make thier local developer setups visible. Just because no one mentions the monorepo or praises it doesn't mean it's not being used. If it saves your developers time and easily shows them what they need to see, then they'll use it.

## Deciding to Polish or Pitch

After experimenting with this practice for **one month**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Lead Time for Changes Decreases.** Changes spanning multiple services and applications should happen faster. By consolidating services into a monorepo, cross-cutting changes can be made without waiting for access approvals, access re-approvals, test deploying, or an available cloud staging enviornment. This reduces coordination overhead and speeds up delivery. Tools like [DX](https://getdx.com/platform/data-lake/) and [Jellyfish](https://jellyfish.co/platform/engineering-metrics/) can measure lead time changes. Custom solutions can also be built using data from project-planning tools like [JIRA](https://community.atlassian.com/forums/App-Central-articles/Cycle-Time-and-Lead-Time-in-Jira-Productivity-Measurement-with/ba-p/1905845) and [Monday](https://monday.com/blog/project-management/what-is-lead-time/).

### Slow & Intangible

**Cleaner Service Boundaries.** Refactoring service boundaries should become easier. When everything lives in one repo, poor service boundaries can be removed with less friction. On the flipside, teams can more quickly extract new services with the shared tooling, configuration, and build setup.

**Better cross-team collaboration.** The monorepo can be spun up fairly simply for team collaboration and to demonstrate system behavior. In terms of database changes, comparing what's set up locally to the new schema change can be a point of conversation between teams that manage the data and teams than manage the code. The same thing applies to cloud environment connections between services, and third-party API vendor interactions. When change involves less uncertainty, then confidence to experiment increases.

## Supported Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

A local monorepo can help expose duplicated scripts and configuration across micro-repos, making the codebase easier to maintain and evolve.

### [Test Automation](/capabilities/test-automation.md)

When the team can test interactions between services, there is greater confidence that the whole system will perform as expected. Knowing those interactions still work *while developing*, instead of at deploy time, shortens feedback loops and speeds up delivery.

### [Test Data Management](/capabilities/test-data-management.md)

Having control of the data locally means we also gain knowledge of the data's schema. Having and maintaining this information within the monorepo means we can have confidence our code works against a given database schema. Comparing that schema to ones in cloud environments allows developers to stay in step with any updates a DBA or Data Team may add, which means there are less surprises, unsceduled meetings, and debugging at deploy-time.

The same can be said for outside service vendors that supply information or data transformations the system depends on. By designing echo servers, developers can get faster feedback. Additionally, teams can build more robust code when a vendor's system slows or goes down. Major cloud vendors have been in the news for bringing enterprise systems down with them when the vendor experiences an outage. Since echo servers can also be built to simulate an outage, developers can develop graceful failure states that keep our systems running.
