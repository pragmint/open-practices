# [Flexible Infrastructure](https://dora.dev/capabilities/flexible-infrastructure/)

Flexible Infrastructure refers to the ability of an organization to provision, configure, and manage computing resources quickly and efficiently in response to changing demands. This capability encompasses characteristics like on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service, as defined by [NIST's five essential characteristics of cloud computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf). When infrastructure is flexible, teams can adapt quickly, reduce service disruptions, and maintain clear accountability for resource costs.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### More Than Just Cloud Adoption

Simply migrating to a cloud provider doesn't automatically grant flexible infrastructure. Organizations must also adopt cloud-native processes and practices, such as automation and self-service provisioning, to fully realize the benefits of a dynamic system. Without this broader shift, the cloud becomes just another data center with the same limitations as more traditional on-prem data centers.

### Requires Cultural and Organizational Change 

Implementing flexible infrastructure requires collaboration across multiple functions, including development, operations, security, procurement, and finance. Resistance to change or misalignment among these groups can hinder the adoption of cloud-native practices, limiting the organization's ability to achieve true infrastructure flexibility.

### Adapt On-Prem for Flexibility

Tools like [OpenStack](https://opendev.org/openstack) and [Apache CloudStack](https://github.com/apache/cloudstack) can transform an on-prem environment into a cloud-like one. With these platforms, organizations can manage compute, storage, and networking resources efficiently while providing self-service portals for teams to provision resources on demand. By automating provisioning, scaling, and resource management, teams can improve delivery performance, quickly adapt to changing needs, maintain service reliability, and optimize resource usage.

### Operational Costs Can Balloon

While one of the benefits of flexible infrastructure is to improve cost visibility and control, organizations can still face ballooning expenses if proper monitoring and governance are not in place. For example, over-provisioning resources or failing to reclaim unused capacity can lead to significant waste, even in on-prem environments. Without clear policies for resource allocation and regular audits, the efficiencies gained from having a flexibile infrastructure can be offset by rising operational expenses.

### Requires Investment in Automation and Tools

Achieving flexible infrastructure often requires significant investment in automation tools like Infrastructure as Code (IaC) and configuration management systems. These tools enable rapid provisioning and scaling but require time and money to implement effectively.

### Security and Compliance Challenges

Automating parts of your infrastructure can introduce security and compliance risks if not managed properly. Organizations must redesign policies and implement controls within their automation processes to ensure that regulatory requirements and security standards are consistently met.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score yourself on the Flexible Infrastructure capability. Generally, score a 1 if this capability is minimal or completely lacking from your team or organization, a 2 if you feel there is a lot of room for improvement, a 3 if you feel there is some room for improvement, and a 4 if your team or organization is exemplary in the area of Flexible Infrastructure.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Rigid and Manual:** Infrastructure tasks are slow and labor-intensive, requiring manual intervention and taking weeks or months to complete.
2. **Limited Automation:** Some routine infrastructure tasks are automated, but provisioning, scaling, and resource allocation still require manual effort and human interaction. There is limited visibility into resource usage and costs.
3. **Advanced Automation:** Infrastructure tasks are largely automated, with self-service capabilities and rapid scalability. Different teams and functions may still work in silos, with some manual handoffs and coordination required.
4. **On-Demand and Elastic:** Infrastructure is fully automated, with seamless collaboration and alignment between teams and functions. Rapid scaling and flexibility is enabled, providing a unified and on-demand experience for users.

The number you selected represents your overall score for this capability. If you feel like your team or organization fits somewhere in between two scores, it's okay to use a decimal. For example, if you think automation of infrastructure tasks is somewhere between limited and advanced, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Flexible Infrastructure; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Flexible Infrastructure capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### [Automate Infrastructure Management](/practices/automate-infrastructure-management.md)

Define and manage your infrastructure using code and automated tools like [Terraform](https://github.com/hashicorp/terraform) or [Pulumi](https://github.com/pulumi/). This approach ensures that infrastructure provisioning and configuration are reproducible and transparent as application code changes. Automating infrastructure management reduces manual errors and enables rapid, repeatable deployments. 

### Enable On-Demand Self-Service Access

Create self-service portals or APIs that allow your team(s) to provision and manage infrastructure resources independently. This empowers developers and other stakeholders to obtain the resources they need without experiencing delays caused by ticket systems or approvals. By enabling on-demand access to resources, you foster a culture of innovation and speed up development cycles. The benefit is increased productivity and faster time-to-market for new features and services.

### Monitor and Optimize Resource Usage

Implement continuous monitoring of your infrastructure to track resource usage, performance metrics, and costs. Use monitoring tools and dashboards to gain real-time insights and set up alerts for unusual patterns. By actively managing resource usage, you can optimize performance, prevent outages, and control costs. The benefit is a more efficient infrastructure that adapts to your organization's needs while minimizing waste.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Flexible Infrastructure)
- Upstream (they are a pre-requisite for Flexible Infrastructure)
- Downstream (Flexible Infrastructure is a pre-requisite for them)

### [Deployment Automation](/capabilities/deployment-automation.md) - Downstream

Flexible infrastructure allows environments to be provisioned and configured automatically, using technologies like virtualization and container orchestration. Having flexible infrastructure in place makes it easier to automate deployments across different environments. A flexible infrastructure also enables rapid scaling and consistent environment setups, which support automated deployments.

### [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md) - Downstream

Loosely coupled teams have the autonomy to manage and deploy their own resources, without dependencies on other teams. This independence is facilitated by a flexible, self-service infrastructure that supports rapid changes, enhances team agility, and reduces coordination overhead.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous delivery means deploying code changes swiftly and safely. Flexible infrastructure provides the scalable and dynamic environments necessary to support continuous delivery practices. Together, the capabilities of Continuous Delivery and Flexible Infrastructure enable organizations to release updates more frequently and with greater confidence.
