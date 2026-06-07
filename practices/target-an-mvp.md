# Target an MVP

A Minimum Viable Product is the smallest version of a product, feature, or workflow that can create useful learning. It should be small enough to build quickly, but complete enough to test a real assumption with real users, stakeholders, or production signals.

Targeting an MVP helps teams avoid treating every idea like a full-scale delivery commitment. Instead of asking, “What is the complete version of this?” the team asks, “What is the smallest useful thing we can release, observe, and learn from?” This keeps work grounded in evidence instead of speculation.

This practice supports working in small batches by reducing the amount of work the team must complete before receiving feedback. It also improves alignment between product, engineering, and leadership because everyone is forced to name the assumption being tested, the users being served, and the signal that will determine whether the team should continue investing.

An MVP is not an excuse to ship low-quality work. The slice should still be usable, observable, supportable, and safe. The goal is to reduce scope, not discipline.

## When to Experiment

* You are a Product Manager and you need to validate whether a feature is worth deeper investment before asking the team to build the full version.
* You are a Developer and you need to break a large feature into smaller, shippable slices so the team can get feedback sooner.
* You are an Engineering Manager and you need to reduce long-running work, unclear progress, and late discovery of misunderstood requirements.
* You are a Tech Lead and you need to protect the team from speculative architecture by proving the simplest useful path first.
* You are a Designer or UX Researcher and you need to learn from real user behavior before polishing every flow and edge case.
* You are an Executive and you need teams to show evidence of progress without waiting months for a fully built solution.

## How to Gain Traction

### Name the Assumption

Start by naming the assumption the team needs to test. Good MVPs are built around uncertainty, not just reduced scope. The assumption might be that users need a workflow, that a manual process can be replaced, that a technical integration will work, or that a change will improve a business metric. If the team cannot name the assumption, the work is probably not ready to be shaped as an MVP.

### Define the Smallest Useful Slice

Once the assumption is clear, define the smallest end-to-end slice that can produce learning. Favor vertical slices over horizontal layers. A useful MVP might support one user type, one workflow, one data source, one integration partner, one happy path, or one operational scenario. Avoid splitting the work into disconnected tasks like “build the API,” “build the UI,” and “write the migration” unless each piece can be independently verified.

### Decide What Signal Will Matter

Before implementation begins, agree on what evidence will determine whether the MVP worked. The signal might be user adoption, completion rate, support ticket reduction, manual effort saved, production error rate, stakeholder approval, or qualitative feedback from a small pilot group. Without a signal, the MVP can easily become the first phase of a predetermined larger build instead of a learning experiment.

### Timebox the Investment

Set a short timebox for the first version. For a team new to this practice, one to three weeks is usually enough to expose whether the slice is too large. If the MVP cannot be built, integrated, and evaluated within that window, reduce the scope further. The timebox should create pressure to simplify, not pressure to cut corners.

## Lessons From The Field

* *Use MVPs to de-risk the roadmap, not argue against it*. In waterfall-shaped organizations, an MVP can sound like asking leadership to accept less than they requested. Instead, preserve the larger roadmap item, then propose a smaller first release that proves the riskiest assumption before the team commits to the full build. This gives executives a concrete checkpoint, gives product earlier feedback, and gives engineers a legitimate way to surface complexity before the timeline is locked.

* *Make the MVP powerful enough to change the plan*. Teams often call something an MVP after they have already committed to the full roadmap, timeline, and design. That turns the MVP into phase one, not an experiment. Before starting, name what the team might do differently if the MVP succeeds, fails, or produces mixed results.

* *Use deadlines to force tradeoffs, not quiet heroics*. In many organizations, timeline pressure causes teams to absorb uncertainty by working harder, cutting quality, or hiding risk until late in the project. Targeting an MVP gives the team a healthier move: reduce scope intentionally while preserving the most important learning or business outcome. If the date is fixed, the scope should become negotiable.

* *Make deferred work visible so people can let go of it*. Teams often agree with the idea of an MVP but struggle to remove edge cases, advanced permissions, alternate workflows, reporting, admin tools, and polish. Capture deferred work explicitly and decide what signal would justify bringing it back. People are more willing to cut scope when they trust that important concerns are being parked, not ignored.

* *Use manual work to avoid premature automation*. A concierge process, spreadsheet, manual approval, or internal support step can be the right MVP if it helps the team learn before automating everything. Manual work is not a failure when it is temporary, visible, and tied to a learning goal. Automate after the team has evidence that the workflow is valuable and stable enough to keep.

## Deciding to Polish or Pitch

After experimenting with this practice for **2-3 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction.

### Fast & Measurable

**Shorter Cycle Time**. Work should move from idea to usable feedback faster because the team is building a smaller slice. Track the time from work starting to the first user, stakeholder, or production signal.

**Smaller Work Items**. Stories, pull requests, and release scopes should become smaller and easier to review. Track average story age, pull request size, pull request review time, or the number of stories carried across multiple iterations.

### Slow & Measurable

**Less Rework From Misunderstood Requirements**. Over time, fewer large features should require major rework after stakeholder review or production release. Track reopened work, rejected demos, post-release change requests, or large follow-up tickets caused by missed expectations.

### Fast & Intangible

**Clearer Product and Engineering Alignment**. Conversations should shift from debating the full solution to naming the assumption, the smallest useful slice, and the signal that matters. Team members should be able to explain why the MVP is shaped the way it is.

### Slow & Intangible

**Greater Confidence in Incremental Delivery**. Stakeholders should become more comfortable with smaller releases because they see evidence that each slice is intentional, observable, and connected to a larger direction. The team should feel less pressure to make every release perfect before learning anything.

## Supported Capabilities

### [Working in Small Batches](/capabilities/working-in-small-batches.md)

Targeting an MVP reduces the amount of work required before the team receives feedback. It helps teams shape product and technical work into smaller slices that can be built, integrated, reviewed, released, and evaluated quickly.

### [Customer Feedback](/capabilities/customer-feedback.md)

An MVP creates a clear path to learning from real users or stakeholders. By defining the feedback signal before implementation begins, the team can avoid mistaking internal opinions for evidence.

### [User-Centric Focus](/capabilities/user-centric-focus.md)

Targeting an MVP forces the team to identify who the first slice is for and what useful outcome it should support. This keeps the work centered on user behavior and user value instead of internal assumptions about what the complete feature should include.

### [Team Experimentation](/capabilities/team-experimentation.md)

An MVP is a structured experiment. It gives teams a lightweight way to test assumptions, inspect results, and decide whether to continue, change direction, or stop investing.

### [Continuous Delivery](/capabilities/continuous-delivery.md)

MVPs are more effective when teams can release small changes safely and frequently. Continuous Delivery provides the technical foundation for putting small slices in front of users without turning every release into a high-risk event.
