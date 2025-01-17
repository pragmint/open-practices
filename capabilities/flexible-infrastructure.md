# [Flexible Infrastructure](https://dora.dev/capabilities/flexible-infrastructure/)

Flexible Infrastructure refers to the ability of an organization to provision, configure, and manage computing resources quickly and efficiently in response to changing demands. It encompasses characteristics like on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service, as defined by [NIST's five essential characteristics of cloud computing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf). With Flexible Infrastructure, teams can adapt quickly, reduce service disruptions, and maintain clear cost accountability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### More Than Just Cloud Adoption

Simply migrating to a cloud provider doesn't automatically grant flexible infrastructure. Organizations must also adopt cloud-native processes and practices, such as automation and self-service provisioning, to fully realize the benefits. Without this shift, the cloud becomes just another data center with the same limitations as more traditional on-prem data centers.

### Cultural and Organizational Change Required

Implementing flexible infrastructure demands collaboration across multiple functions, including development, operations, security, procurement, and finance. Resistance to change or misalignment among these groups can hinder the adoption of cloud-native practices, limiting the organization's ability to achieve true flexibility.

### Adapting On-Prem for Flexibility

You can use tools like [OpenStack](https://opendev.org/openstack) and [Apache CloudStack](https://github.com/apache/cloudstack) to transform on-prem hardware into a cloud-like environment. These platforms enable organizations to manage compute, storage, and networking resources efficiently while providing self-service portals for teams to provision resources on demand. By automating provisioning, scaling, and resource management, these tools reduce delays and manual work, allowing teams to quickly adapt to changing needs. This alignment with the Flexible Infrastructure capability helps organizations improve delivery performance, maintain service reliability, and optimize resource utilization.

### Costs Can Still Balloon

While Flexible Infrastructure aims to improve cost visibility and control, organizations can still face ballooning expenses if proper monitoring and governance are not in place. For example, over-provisioning resources or failing to reclaim unused capacity can lead to significant waste, even in on-prem environments. Without clear policies for resource allocation and regular audits, the efficiencies gained from flexibility can be offset by rising operational expenses.

### Investment in Automation and Tools

Achieving flexible infrastructure often requires significant investment in automation tools like Infrastructure as Code (IaC) and configuration management systems. These tools enable rapid provisioning and scaling but require time and resources to implement effectively.

### Security and Compliance Challenges

Automating infrastructure changes can introduce security and compliance risks if not managed properly. Organizations must redesign policies and implement controls within their automation processes to ensure that regulatory requirements and security standards are consistently met.

## Supporting Practices

### [Automate Infrastructure Management](/practices/automate-infrastructure-management.md)

Define and manage your infrastructure using code and automated tools like [Terraform](https://github.com/hashicorp/terraform) or [Pulumi](https://github.com/pulumi/). This approach allows you to version control infrastructure configurations, promote consistency across environments, and automate provisioning. By treating infrastructure as code, you reduce manual errors and enable rapid, repeatable deployments. This practice enhances agility and reliability, making your infrastructure truly flexible.

### Enable On-Demand Self-Service Access

Create self-service portals or APIs that allow teams to provision and manage infrastructure resources independently. This empowers developers and other stakeholders to obtain the resources they need without delays caused by ticket systems or approvals. By enabling on-demand access, you foster a culture of innovation and speed up development cycles. The benefit is increased productivity and faster time-to-market for new features and services.

### Monitor and Optimize Resource Usage

Implement continuous monitoring of your infrastructure to track resource utilization, performance metrics, and costs. Use monitoring tools and dashboards to gain real-time insights and set up alerts for unusual patterns. By actively managing resource usage, you can optimize performance, prevent outages, and control costs. The benefit is a more efficient infrastructure that adapts to your organization's needs while minimizing waste.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Flexible Infrastructure)
- Upstream (they are a pre-requisite for Flexible Infrastructure)
- Downstream (Flexible Infrastructure is a pre-requisite for them)

### [Deployment Automation](/capabilities/deployment-automation.md) - Downstream

Flexible Infrastructure supports Deployment Automation by allowing environments to be provisioned and configured automatically. Using technologies like virtualization and container orchestration makes it easier to automate deployments across different environments. This flexibility enhances the effectiveness of Deployment Automation by enabling rapid scaling and consistent environment setups.

### [Loosely Coupled Teams](/capabilities/loosely-coupled-teams.md) - Downstream

Loosely Coupled Teams benefit from Flexible Infrastructure by having the autonomy to manage and deploy their own resources without dependencies on other teams. This independence is facilitated by a flexible, self-service infrastructure that supports rapid changes. The relationship enhances team agility and reduces coordination overhead.

### [Continuous Delivery](/capabilities/continuous-delivery.md) - Downstream

Continuous Delivery relies on the ability to deploy code changes swiftly and safely. Flexible Infrastructure provides the scalable and dynamic environments necessary to support continuous deployment practices. Together, they enable organizations to release updates more frequently and with greater confidence.
