# [Version Control](https://dora.dev/devops-capabilities/technical/version-control/)

Version control allows teams to revert changes back to a working state. When this is fast and optimized for small, comprehensible changes, teams can move forward with the confidence that the system is up-to-date and stable. 

Technologies like Git and SVN have made version control for code popular. However, Version Control as a capability also applies to configuration, data, infrastructure, and documentation. Furthermore, version control is foundational for enabling automation, ensuring disaster recovery, and facilitating continuous integration.


## Nuance(s)
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.


## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Version Control capability. Generally, score a 1 if Version Control is limited or completely lacking from your team or organization, a 2 if it is basic and you feel there is a LOT of room for improvement, a 3 if it is standard and you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Version Control.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

* Limited or No Adoption: Version control is not used, or its use is limited to select teams, with no organization-wide adoption or standardization.
* Basic Code and Data Storage: Version control is used primarily for code and data backups, with limited or no version control for infrastructure and other assets.
* Standard Version Control: Version control is used consistently across teams for code, configuration, data, infrastructure, and documentation. Disaster recovery is fully supported.
* Advanced Version Control: Version control is optimized for small, comprehensible changes, with a focus on making it easy to traverse and understand the history of changes across code, configurations, documentation, data, and infrastructure.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between basic and standard Version Control, then you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Version Control; you would likely benefit from evaluating your scores in other capabilities.


## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Version Control capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Automate Database Migrations](/practices/automate-database-migrations.md)
Implementing automatic database migrations ensures database schema changes are consistently versioned and managed alongside application code. This practice fosters an environment where code and database changes are integrated, tested, and deployed in a unified manner. This leads to more reliable development workflows. It also adds a layer of automation and traceability to database evolution.

### [Separate Config from Code](/practices/separate-config-from-code.md)
This practice separates application code from operational configurations, which enhances security and deployment processes. It minimizes risks associated with data exposure, focusing version control efforts on code changes. 

### [Clean Git History](/practices/clean-git-history.md)
Maintaining a clean Git history ensures a clear and comprehensible project history. By making the revision history easier to follow, this practice facilitates better understanding, collaboration, troubleshooting, and rollbacks.

### [Schedule Regular Documentation Audits](/practices/schedule-regular-documentation-audits.md)
As systems and processes evolve, it's important to spend some time auditing your existing documentation to ensure it's accurate. Scheduling regular documentation audits ensures that documentation remains up-to-date and consistent with the codebase it describes. This practice better aligns documentation and software development, enhancing the overall quality and reliability of both the codebase and the supporting documents.

### [Automate Infrastructure Management](/practices/automate-infrastructure-management.md)
Automating infrastructure management ensures that infrastructure provisioning and configuration are reproducible and transparent as application code changes. This fosters better collaboration and consistency across development and operations teams.

### [Version Dependencies](/practices/version-dependencies.md)
Version dependencies ensure dependencies are managed with the same diligence as source code. This practice enhances reproducibility, traceability, and consistency in software builds.

### [Work in Small Increments](/practices/work-in-small-increments.md)
Working in small increments facilitates more manageable, frequent, and understandable commits.
This practice enhances the traceability and reversibility of changes, making it easier to identify and address issues quickly. The result is a more efficient and reliable development process.
This practice also increases productivity and collaboration, reducing the frequency of large merge conflicts.


## Adjacent Capabilities
The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Version Control)
- Upstream (they are a pre-requisite for Version Control)
- Downstream (Version Control is a pre-requisite for them)