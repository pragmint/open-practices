# Version Controlled Dependencies

The practice of Version Controlled Dependencies involves managing application dependencies by versioning and referencing them through specific versions. This approach ensures consistency, reliability, and traceability in software development projects by maintaining a clear record of all dependency versions used within an application.

## Nuance

### Regular Updates Required:
 Even with strict version control, dependencies must be regularly updated to address security vulnerabilities, bugs, and performance issues. This requires a balance between maintaining stability and incorporating necessary changes.
### Avoiding Dependency Hell:
Managing a complex web of dependencies can lead to "dependency hell," where updating one dependency necessitates cascading updates, potentially causing compatibility issues across the project.
### Risks of Over-strict Version Control:
Locking dependencies too rigidly can prevent the adoption of minor but important updates that improve security or performance, potentially halting innovation and progress.
### Semantic Versioning as a Solution:
Adopting semantic versioning can help manage the balance between stability and flexibility. It allows for minor and patch updates that do not introduce breaking changes, while major updates can be evaluated and implemented as needed.


## Introspective Questions

### How Effective Is Your Dependency Management?
How effectively is your team currently managing dependency versions, and could a more systematic approach to version control improve project consistency and reliability?

### Are You Balancing Updates with Stability Effectively?
Are you finding the right balance between the stability provided by version-controlled dependencies and the need to update dependencies for security, performance, and new features?

### How Are You Addressing Dependency Hell?
Have you encountered issues with "dependency hell," and what strategies could you implement to mitigate these challenges while maintaining strict version control?

### Is Semantic Versioning Right for Your Project?
How could adopting semantic versioning impact your project? Would it provide a practical path to embrace necessary updates without sacrificing the predictability and stability of your application?

### How Often Do You Review Your Update Policies?
Is your current policy for updating dependencies proactive or reactive? How often do you review dependency versions for potential updates, and could this process be optimized?

### Could Over-strict Version Control Be Hindering Your Progress?
Could an overly strict approach to version controlling dependencies be hindering your project’s ability to integrate beneficial technological advances or critical security patches?

## Exercises

### Experiment 1: Audit Your Current Dependency Management
- **Objective:** To assess the current state of dependency management within your team or organization.
- **Outcome:** A comprehensive report detailing which dependencies are managed effectively and which are not, identifying potential areas for improvement.

### Experiment 2: Implement Semantic Versioning on a Small Scale
- **Objective:** To experiment with semantic versioning by applying it to a small, manageable portion of your project.
- **Outcome:** Insights into how semantic versioning affects project stability and the process of updating dependencies, helping you decide if a broader implementation is beneficial.

### Experiment 3: Dependency Update Policy Review
- **Objective:** To review and potentially revise your current policies on updating dependencies.
- **Outcome:** A refined update policy that balances the need for updates with the desire for stability, possibly leading to more efficient and secure project development.

### Experiment 4: Simulate a Dependency Hell Scenario
- **Objective:** To simulate a "dependency hell" scenario to understand its impact and identify strategies for mitigation.
- **Outcome:** Practical experience in managing complex dependency chains, leading to improved strategies for avoiding or dealing with dependency hell in real projects.

### Experiment 5: Version Locking Experiment
- **Objective:** To lock versions of all major dependencies in a project to assess the impact on stability, security, and development speed.
- **Outcome:** An evaluation of the trade-offs involved in version locking, including insights into when it is beneficial and when it might hinder project progress.


## Resources

### [Dependencies Belong in Version Control](https://www.forrestthewoods.com/blog/dependencies-belong-in-version-control/)
This article explores the importance of including dependencies within version control systems to ensure consistency, reliability, and traceability in software development projects. It discusses the benefits and methodologies of version controlling dependencies, offering insights into best practices for managing software dependencies effectively.

## Related Practices

<!-- TODO: insert a list of [linked practices](/practices) that relate to this practice. For each item, give a brief explanation of how the linked practice supports / relates to this practice. Also categorize each linked practices as one of the following: Enables, Requires, Improves -->

## Supporting Capabilities

### [Continuous Integration](https://dora.dev/devops-capabilities/technical/continuous-integration/)
**Relationship:** Enables  
Version Controlled Dependencies ensure that all team members work with the same versions of dependencies, reducing integration conflicts and enabling more efficient continuous integration processes.

### [Database Change Management](https://dora.dev/devops-capabilities/technical/database-change-management/)
**Relationship:** Enables  
By versioning database schema changes alongside code dependencies, teams can apply version control practices to database changes as well, facilitating smoother migrations and deployments.

### [Deployment Automation](https://dora.dev/devops-capabilities/technical/deployment-automation/)
**Relationship:** Enables  
Having dependencies version-controlled allows for more predictable deployments, as the exact versions used in development are carried through to production environments, supporting automated deployment pipelines.

### [Test Automation](https://dora.dev/devops-capabilities/technical/test-automation/)
**Relationship:** Enables  
Automated tests can rely on specific versions of dependencies being available, ensuring that tests are consistent and reliable across different environments and stages of development.

### [Trunk-Based Development](https://dora.dev/devops-capabilities/technical/trunk-based-development/)
**Relationship:** Enables  
Version Controlled Dependencies complement trunk-based development by ensuring that changes to dependencies are centrally managed and integrated, supporting the rapid integration and testing of changes.

### [Version Control](/capabilities/tech/version-control.md)
**Relationship:** Requires  
The practice of Version Controlled Dependencies inherently requires a robust version control system to manage the dependencies' versions alongside the application's source code.

### [Code Maintainability](https://dora.dev/devops-capabilities/technical/code-maintainability/)
**Relationship:** Improves  
By locking down dependency versions, teams can reduce the variability that leads to technical debt and improve the maintainability of their codebase over time.

### [Documentation Quality](https://dora.dev/devops-capabilities/process/documentation-quality/)
**Relationship:** Improves  
Proper versioning of dependencies can improve documentation quality by providing clear references to the specific versions of external libraries or frameworks used, making the documentation more accurate and useful.

### [Working in Small Batches](https://dora.dev/devops-capabilities/process/working-in-small-batches/)
**Relationship:** Improves  
Version Controlled Dependencies support working in small batches by making it easier to manage and integrate small, incremental changes to dependencies, aligning with best practices for agile and DevOps methodologies.