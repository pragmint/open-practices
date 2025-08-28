# [Version Control](https://dora.dev/capabilities/version-control/)

Comprehensive version control ensures reproducibility and traceability across the system, enabling teams to provision production-like environments, track changes, and respond quickly to evolving needs. This capability enhances disaster recovery, auditability, and quality by allowing teams to restore services efficiently, demonstrate process integrity, and receive rapid feedback on changes. When teams can scale their environments and roll back to verified working states, when necessary, they can support capacity management and defect response.

Without a robust version control strategy, teams are left vulnerable to disruptions in productivity and system reliability. They may struggle to reproduce environments, leading to prolonged downtime and inefficiency. Auditability is also compromised, making regulatory compliance difficult to demonstrate. Defect response suffers, as teams lack the ability to swiftly restore a known working state.

By prioritizing effective version control practices, organizations can mitigate these risks and ensure seamless, reliable, and compliant software delivery.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Deterministic Builds vs. Up-to-Date Dependencies

Version control systems often face a trade-off between deterministic builds and up-to-date dependencies. Some developers prefer specifying dependencies to use the latest versions at build time for enhanced security. However, this compromises build determinism, making it challenging to reproduce identical builds. Tools like [Renovate](https://docs.renovatebot.com/) or [Dependabot](https://github.com/dependabot) can mitigate this issue by automatically creating pull requests to update dependencies, separating dependency updates from the build process.

### Versioning Non-Code

Version control extends beyond code to configuration, data, infrastructure, dependencies, and documentation. Establishing a version control strategy for these categories ensures a deterministic build process. This comprehensive approach enhances reproducibility, traceability, and disaster recovery. Working in a system with a deterministic build process simplifies troubleshooting, deployment, and maintenance.

### Working With Large Assets

Version control systems like Git struggle with large file sizes. Storing large files in these systems can lead to inefficiencies, as entire file copies are stored between versions instead of diffs. This limitation necessitates specialized systems or strategies for managing large assets, ensuring efficient storage and versioning.

### Security, Compliance, and Access Control

Strict version control helps teams identify security vulnerabilities and exploits that have been incorporated into the system. For example, certain versions of software can be flagged as vulnerable by the Common Vulnerabilities and Exposures (CVE) database. Having good version control makes it easy to work with this data and to make upgrades to the version with vulnerable dependencies.

However, systems that are managed by version control software must comply with regulatory requirements like GDPR, HIPAA, or PCI-DSS, which adds complexity. Storing sensitive data in broadly accessible repositories poses risks. Effective access control, encryption, and auditing mechanisms are crucial to mitigate these challenges.

### Learning Curve

Distributed version control systems like Git or SVN have steep learning curves due to their robust conflict resolution capabilities. Mastering these systems requires significant time and effort, potentially hindering adoption and effective use. Providing comprehensive training and resources can help teams overcome this barrier.

### Human Error and Process Adherence

Version control relies heavily on human adherence to established processes and best practices. Despite this, mistakes can occur, such as incorrect merges, forgotten commits, or inadequate testing. These errors can lead to downstream problems like deployment failures or production issues. Implementing automated checks, code reviews, and continuous testing can help mitigate the impact of human error.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Version Control capability. Generally, score a 1 if Version Control is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is standard and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Version Control.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Limited or No Adoption:** Version control is not used, or its use is limited to select teams, with no organization-wide adoption or standardization.
2. **Basic Code and Data Storage:** Version control is used primarily for code and data backups, with limited or no version control for infrastructure and other assets.
3. **Standard Version Control:** Version control is used consistently across teams for code, configuration, data, infrastructure, and documentation. Disaster recovery is fully supported.
4. **Advanced Version Control:** Version control is optimized for small, comprehensible changes, with a focus on making it easy to traverse and understand the history of changes across code, configurations, documentation, data, and infrastructure.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and standard Version Control, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Version Control; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Version Control capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Automate Database Migrations](/practices/automate-database-migrations.md)

Implementing automatic database migrations ensures database schema changes are consistently versioned and managed alongside application code. This practice fosters an environment where code and database changes are integrated, tested, and deployed in a unified manner. The result is more reliable development workflows and an added layer of automation and traceability to database evolution.

### [Separate Config from Code](/practices/separate-config-from-code.md)

This practice separates application code from operational configurations, which enhances security and deployment processes. It minimizes risks associated with data exposure, focusing version control efforts on code changes.

### [Enforce a Clean Git History](/practices/enforce-a-clean-git-history.md)

Maintaining a clean Git history ensures a clear and comprehensible project history. By making the revision history easier to follow, this practice facilitates better understanding, collaboration, troubleshooting, and rollbacks.

### [Schedule Regular Documentation Audits](/practices/schedule-regular-documentation-audits.md)

As systems and processes evolve, it's important to spend some time auditing your existing documentation to ensure it's accurate. Scheduling regular documentation audits ensures that documentation remains up-to-date and consistent with the codebase it describes. This practice better aligns documentation and software development, enhancing the overall quality and reliability of both the codebase and the supporting documents.

### [Version Dependencies](/practices/version-dependencies.md)

Version dependencies ensure dependencies are managed with the same diligence as source code. This practice enhances reproducibility, traceability, and consistency in software builds.

### [Implement Infrastructure as Code](/practices/automate-infrastructure-management.md)

Use Infrastructure as Code (IaC) tools to define and manage your infrastructure through code rather than manual processes. Tools like [Terraform](https://github.com/hashicorp/terraform) or [Pulumi](https://github.com/pulumi/) allow you to version control your infrastructure configurations and provision environments automatically. Embracing IaC ensures environments are consistent and can be re-created reliably, which enhances version control and reduces configuration drift.

### [Migrate to a Monorepo](/practices/migrate-to-monorepo.md)

Migrating to a monorepo allows teams to version control multiple services, libraries, and shared assets in a single repository. This simplifies dependency management, ensures consistent tooling and configuration, and enables atomic commits that span multiple projects. With everything in one place, teams can more easily trace changes, roll back known working states, and coordinate system-wide updates. Unlike multi-repo setups that fragment history and versioning, a monorepo centralizes history for greater auditability, reproducibility, and visibility (all of those being core benefits of a strong version control strategy).

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Version Control)
- Upstream (they are a pre-requisite for Version Control)
- Downstream (Version Control is a pre-requisite for them)

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Version Control is fundamental to Continuous Integration, as it provides the shared codebase where developers frequently integrate their changes. Effective use of version control allows teams to detect integration issues early and maintain a stable mainline, improving software quality and delivery speed.

### [Trunk-Based Development](/capabilities/trunk-based-development.md) - Downstream

Trunk-Based Development relies on strong version control to manage code changes in a single shared branch. By using version control effectively, teams can avoid complex merges and conflicts, facilitating rapid development and collaboration.

### [Deployment Automation](/capabilities/deployment-automation.md) - Downstream

Deployment Automation depends on storing deployment scripts and configurations in version control. By versioning these assets, teams can automate deployments consistently across environments, reducing errors and speeding up the release process.

### [Code Maintainability](/capabilities/code-maintainability.md) - Downstream

If you want your codebase to be maintainable, then Version Control is critical because it allows for efficient tracking, collaboration, and management of code changes over time. By tracking changes made to the codebase using version control, developers can ensure consistency across contributors, re-use code components, conduct code audits, track bugs and errors, meet compliance requirements, manage security patches, and integrate updates quickly and easily.
