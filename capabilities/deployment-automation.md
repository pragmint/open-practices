# [Deployment Automation](https://dora.dev/capabilities/deployment-automation/)

Deployment Automation enables teams to deploy software to testing and production environments with the push of a button. By automating the deployment process, it reduces the risk associated with production deployments and allows for fast feedback through comprehensive testing immediately after changes. Possessing this capability leads to more reliable, efficient, and frequent deployments, enhancing overall software delivery performance.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Deployment Determinism

Achieving deployment determinism involves building the application code artifact once and promoting it through environments without changes. Each environment should utilize unique, versioned, and pre-packaged infrastructure and configuration artifacts. This approach simplifies deployment by enabling consistent mixing of pre-built components, reducing variability and errors.

### Complex System Interactions

Dependencies between services can complicate deployment automation by requiring orchestration and strict deployment orders. Tight coupling increases deployment risks and hinders flexibility. Designing services to be independently deployable and maintaining backward compatibility can enable smoother, safer deployments.

### Shaping Ops Involvement for Maximum Impact

Ineffective collaboration between development and operations teams can result in inconsistent deployment methods and configuration errors. These issues increase manual intervention and deployment risks. By jointly creating and maintaining deployment automation processes, teams can achieve alignment and continuously improve practices.

### Custom vs Off The Shelf

Custom solutions can be costly to build and maintain while potentially lacking key features. Vendor tools may introduce lock-in or reinforce suboptimal practices, and interoperability between tools isn’t guaranteed. Carefully assess trade-offs to balance flexibility, functionality, and long-term viability.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Learning Culture capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Automate Deployment Scripts

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions and reduce the risk of human error. This leads to a repeatable and reliable deployment process that can be triggered with minimal effort, enhancing deployment speed and consistency.

### Implement Infrastructure as Code

Use Infrastructure as Code (IaC) tools to define and manage your infrastructure through code rather than manual processes. Tools like [Terraform](https://github.com/hashicorp/terraform) or [Pulumi](https://github.com/pulumi/) allow you to version control your infrastructure configurations and provision environments automatically. Embracing IaC ensures environments are consistent and can be recreated reliably, which enhances deployment automation and reduces configuration drift.

### Store Configuration in Its Own Repository

Keep all deployment scripts and configuration files in version control systems like Git. This practice allows for better collaboration between teams, auditability of changes, and the ability to roll back to previous configurations if needed. Storing configurations in version control increases transparency and control over the deployment process, making it more manageable and secure.

### Run Canary Deployments

Only send a small amount of production traffic to newly deployed versions of your service. Then verify there are no issues handling that traffic before incrementally increasing the amount of traffic being sent to the newly deployed version of your service. If an issue is detected, automatically rollback the new version and mark the deployment as failed. Incorporate automated smoke tests into your deployment process to verify that the application is functioning correctly after deployment. These tests check critical functionalities and connectivity to external services. By automating post-deployment validation, you catch issues early and ensure the system is ready for use, improving reliability and user confidence.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing environments that can be spun up on-demand. These temporary environments create a safe place to deploy and test changes in an integrated environment. The changes that need testing can be to either the application, database, infrastructure, or some combination of the three. Integrated into CI/CD pipelines, they offer continuous, immediate feedback on code changes, allowing developers to find bugs early in the process.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Deployment Automation)
- Upstream (they are a pre-requisite for Deployment Automation)
- Downstream (Deployment Automation is a pre-requisite for them)

### [Version Control](/capabilities/version-control.md) - Upstream

Version Control is fundamental to Deployment Automation, as storing deployment pipeline changes in version control enables teams to track, review, and coordinate changes effectively. It ensures that deployment pipeline modifications are applied consistently and reliably.

### [Flexible Infrastructure](/capabilities/flexible-infrastructure.md) - Upstream

Flexible Infrastructure, such as cloud services and containerization, supports Deployment Automation by allowing environments to be provisioned and configured automatically. Using technologies like virtualization and container orchestration makes it easier to automate deployments across different environments. This flexibility enhances the effectiveness of Deployment Automation by enabling rapid scaling and consistent environment setups.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery involves automating the release process to enable frequent and reliable deployments. Effective deployment automation supports continuous delivery by ensuring that deployment pipeline changes are applied consistently and automatically, reducing bottlenecks in the delivery pipeline.

### [Continuous Integration](/capabilities/continuous-integration.md) - Downstream

Continuous Integration is closely related to Deployment Automation, as it involves frequently integrating code changes and automatically building and testing them. A robust CI process provides the packages and artifacts that Deployment Automation uses to deploy to environments. Together, Continuous Integration and Deployment Automation enable faster, more reliable software delivery by ensuring that code changes are continuously tested and ready for deployment.

### [Database Change Management](/capabilities/database-change-management.md) - Related

Automating database migrations is a key aspect of Deployment Automation. By automating database changes, teams ensure consistent and repeatable deployments across environments.
