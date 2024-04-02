# [Version Control](https://dora.dev/devops-capabilities/technical/version-control/)

Version control allows teams to revert changes back to a working state. When this is fast an easy to accomplish, teams can move forward with less fear of breaking the system. Technologies like Git and SVN have made version control for code popular. However, this DORA Capability applies all the same to configuration, data, infrastructure, and documentation. Furthermore, version control is foundational for enabling automation, ensuring disaster recovery, and facilitating continuous integration.

## Supporting Practices

### [Automate Database Migrations](/practices/automate-database-migrations.md)
Implementing Automatic Database Migrations enhances the effectiveness of the Version Control capability by ensuring database schema changes are consistently versioned and managed alongside application code. This practice fosters an environment where code and database changes are integrated, tested, and deployed in a unified manner, leading to more reliable development workflows. It adds a layer of automation and traceability to database evolution.

### [Separate Config from Code](/practices/separate-config-from-code.md)
This practice improves Version Control by segregating application code from operational configurations. It minimizes risks associated with data exposure, focusing version control efforts on code changes. This method enhances security and deployment processes.

### [Clean Git History](/practices/clean-git-history.md)
Maintaining a Clean Git History enhances the Version Control capability by ensuring a clear comprehensible project history. This practice facilitates better understanding, collaboration, troubleshooting and rollbacks by making the revision history easier to follow.

### [Check Documentation Consistency](/practices/check-documentation-consistency.md)
Check Documentation Consistency improves the Version Control capability by ensuring that all documentation is kept up-to-date and consistent with the codebase it describes. This practice facilitates better alignment between documentation and software development, ensuring that changes in code are accurately reflected in the documentation, thereby enhancing the overall quality and reliability of both the codebase and the supporting documents.

### [Automate Infrastructure Management](/practices/automate-infrastructure-management.md)
Infrastructure as Code enhances the Version Control capability by applying its principles to infrastructure management. This practice ensures that infrastructure provisioning and configuration are as reproducible and transparent as application code changes, fostering better collaboration and consistency across development and operations teams.

### [Version Dependencies](/practices/version-dependencies.md)
Version Dependencies complement the Version Control capability by ensuring dependencies are managed with the same diligence as source code. This practice enhances reproducibility, traceability, and consistency in software builds.

### [Working in Small Increments](/practices/work-in-small-increments.md)
Working in Small Increments improves the Version Control capability by facilitating more manageable, frequent, and understandable commits.
This practice enhances the traceability and reversibility of changes, making it easier to identify and address issues quickly, thereby improving the overall efficiency and reliability of the development process.
It also increases productivity and collaboration reducing the frequency of large merge conflicts.