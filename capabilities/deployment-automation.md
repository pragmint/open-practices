# [Deployment Automation](https://dora.dev/capabilities/deployment-automation/)

Deployment automation means teams can deploy software to testing and production environments with the push of a button. By automating the deployment process, teams reduce the risks associated with production deployments and enjoy fast feedback through comprehensive testing that is done immediately after changes are made. Teams that possess this capability experience more reliable, efficient, and frequent deployments, which enhances overall software delivery performance.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Deployment Determinism

Achieving deployment determinism involves building the application code artifact once and promoting it through environments without changes. Each environment should use unique, versioned, and pre-packaged infrastructure and configuration artifacts. By consistently using pre-built components, this approach simplifies deployment, and reduces variability and errors.

### Complex System Interactions

Dependencies between services can complicate deployment automation, as orchestration and strict deployment orders are required. Such tight coupling increases deployment risks and hinders flexibility. Designing services to be independently deployable and maintaining backward compatibility can enable smoother, safer deployments.

### Shaping Ops Involvement for Maximum Impact

Without strong collaboration between development and operations teams, deployment methods may be inconsistent and configration errors may arise. These issues lead to more manual intervention and deployment risks. By jointly creating and maintaining deployment automation processes, teams can achieve alignment and continuously improve practices.

### Custom Versus Off-The-Shelf

Custom solutions for deployment automation can be costly to build and maintain, while potentially lacking key features. On the other hand, vendor tools may introduce lock-in or reinforce suboptimal practices, and interoperability between tools isn’t guaranteed. Carefully assess trade-offs between custom and off-the-shelf automation solutions to balance flexibility, functionality, and long-term viability.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Deployment Automation capability. Generally, score a 1 if deployment automation is completely lacking from your team or organization, a 2 if you feel there is a lot of room for improvement, a 3 if you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Deployment Automation.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Manual:** Deployments are manual, time-consuming, and error-prone.
2. **Partially Automated:** Some aspects of deployment are automated, but manual steps are still required.
3. **Mostly Automated:** Deployments are mostly automated, with minimal manual intervention.
4. **Fully Automated:** Deployments are fully automated, including rollback mechanisms and verification steps.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think your team or organization has somewhere between partially automated and mostly automated deployments, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Deployment Automation; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Deployment Automation capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Automate Deployment Scripts

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions and reduce the risk of human error. This leads to a repeatable and reliable deployment process that can be triggered with minimal effort, enhancing deployment speed and consistency.

### Implement Infrastructure as Code

Use Infrastructure as Code (IaC) tools to define and manage your infrastructure through code rather than manual processes. Tools like [Terraform](https://github.com/hashicorp/terraform) or [Pulumi](https://github.com/pulumi/) allow you to version control your infrastructure configurations and provision environments automatically. Embracing IaC ensures environments are consistent and can be re-created reliably, which enhances deployment automation and reduces configuration drift.

### Store Configuration in Its Own Repository

Keep all deployment scripts and configuration files in version control systems like Git. This practice allows teams to collaborate more efficiently, to audit changes, and to roll back to previous configurations if needed. Storing configurations in version control increases transparency and control over the deployment process, making it more manageable and secure.

### Run Canary Deployments

Only send a small amount of production traffic to newly deployed versions of your service. Verify there are no issues handling that traffic before incrementally increasing it. If an issue is detected, automatically roll back the new version and mark the deployment as failed. Incorporate automated smoke tests into your deployment process to verify that the application is functioning correctly after deployment. These tests check critical functionalities and connectivity to external services. By automating post-deployment validation, you catch issues early and ensure the system is ready for use, improving reliability and user confidence.

### [Create and Manage Ephemeral Environments](/practices/create-and-manage-ephemeral-environments.md)

Creating and managing ephemeral environments provides flexible, production-like testing environments that can be spun up on-demand. These temporary environments reduce conflicts, promote early bug detection, and improve reproducibility. Integrated into CI/CD pipelines, they offer continuous and immediate feedback on code changes, whether those changes are made to the application, database, infrastructure, or some combination of the three. 

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Deployment Automation)
- Upstream (they are a pre-requisite for Deployment Automation)
- Downstream (Deployment Automation is a pre-requisite for them)

### [Version Control](/capabilities/version-control.md) - Upstream

Version Control is fundamental to Deployment Automation, as storing deployment pipeline changes in version control enables teams to effectively track, review, and coordinate changes. Having a solid Version Control capability in place ensures that deployment pipeline modifications are applied consistently and reliably.

### [Flexible Infrastructure](/capabilities/flexible-infrastructure.md) - Upstream

Flexible Infrastructure, such as that using cloud services and containerization, supports Deployment Automation by allowing environments to be provisioned and configured automatically. Using technologies like virtualization and container orchestration makes it easier to automate deployments across different environments. Having a flexible infrastructure enhances deployment automation by enabling rapid scaling and consistent environment setups.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery involves automating the release process to enable frequent and reliable deployments. Effective deployment automation supports continuous delivery because it ensures that changes to the deployment pipeline are applied consistently and automatically, reducing bottlenecks.

### [Continuous Integration](/capabilities/continuous-integration.md) - Related

Continuous Integration involves frequently integrating code changes and automatically building and testing them. A robust CI process provides the packages and artifacts that automated deployments use. Together, continuous integration and deployment automation enable faster, more reliable software delivery.

### [Database Change Management](/capabilities/database-change-management.md) - Related

Automating database migrations is a key aspect of Deployment Automation. By automating database changes, teams ensure consistent and repeatable deployments across environments.
