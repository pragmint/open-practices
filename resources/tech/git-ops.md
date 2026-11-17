# GitOps

Resource type: eBook / reference site

https://www.gitops.tech/

GitOps.tech is a short, practical introduction to GitOps: the idea that Git should describe what your environments are supposed to look like, and automation should keep the real environments in sync.

The beginner-friendly version is this:

```text
Git says what should be running.
Automation checks what is actually running.
When those two things drift apart, automation helps bring them back together.
```

That automation is often called an operator. It is not a person. It is software that watches Git, watches the environment, and helps reconcile the difference.

This resource is worth sharing because GitOps connects several ideas teams often discuss separately: infrastructure as code, deployment automation, production access, audit trails, rollback, and environment drift. It gives teams a cleaner way to answer an important question:

```text
Is production actually running what we said it should be running?
```

## Why It Matters

Without GitOps, environment changes can easily become scattered across deployment scripts, manual console changes, tribal knowledge, and one-off fixes.

With GitOps, the desired state of the system lives in Git. Changes can go through the same workflow teams already use for code: pull request, review, approval, merge, and automated application.

That does not make operations disappear. Someone still needs to design the platform, manage secrets, monitor the automation, and respond when things break. But it can make environment changes more visible, reviewable, reversible, and easier to reason about.

## Good Team Discussion Questions

* Where do we still change environments manually?
* Could we recreate an environment from what is currently stored in Git?
* How would we know if production drifted from what we intended?
* Would a GitOps model make our deployments safer, or are there prerequisites we need to fix first?

## Key Takeaway

GitOps is not just "putting YAML in Git."

It is a deployment and operations model where Git defines the desired state, automation compares that desired state to reality, and the system continuously works to keep the two aligned.
