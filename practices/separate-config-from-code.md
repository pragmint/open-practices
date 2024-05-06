# Separate Config from Code

Separating configuration from code is crucial for maintaining secure and flexible systems. Extracting configurable values makes systems adaptable, enabling easy adjustments without modifying the codebase. Sensitive information like passwords or API keys should be isolated to limit access to highly trusted team members.

## Nuance

### Configuration Storage
Store sensitive configurations in secure, encrypted repositories or vaults, enforce strict access controls and conduct regular security audits. When considering storing options, favor ones that support versioning configuration changes so you retain the ability to restore to previous "known to work" configuration values.

### Deployment Complexity
Adopting external configuration management introduces complexity in selecting and implementing the right tools and processes. Teams must navigate through options, considering factors such as integration, security, and scalability, to find a balance between the benefits of externalized configurations and the added complexity of managing them effectively.

### Environment Parity
Use the same environment variables, configuration files, and services to ensure uniformity from development through production, thereby reducing deployment errors and operational discrepancies. Obviously the configured values will differ from environment to environment. The key consideration here is to maintain an identical "configuration schema" so to speak.

### Allow Local Overrides
Allow local overrides of configuration values and provide developers with a blueprint to create their own local configuration files. For instance, an .env.example file might include placeholders for environment variables that need to be set but without providing any real keys or passwords. This keeps sensitive data out of application version control, without constraining developer productivity.

# Introspective Questions

### Are We Protecting Sensitive Configuration Effectively?
Have we implemented robust security measures for our configuration data? Are encryption and access controls in place to prevent unauthorized access and ensure compliance with security regulations?

### How Do We Manage Configuration Across Environments?
Do we have a consistent approach for managing configurations across different environments? How do we ensure that our deployment processes are seamless and that configurations do not lead to errors or discrepancies in various environments?

### How Do We Handle Configuration Changes and Versioning?
What processes do we have in place for managing changes to configuration? How do we track and version configuration changes to ensure that our application remains stable with each update?

### Are We Balancing Flexibility with Complexity?
In our efforts to externalize configuration, have we introduced unnecessary complexity into our deployment and operational processes? How do we strike a balance between the flexibility of externalized configurations and the simplicity of our overall system architecture?

## Exercises

### Review and Identify Configuration in Version Control
Audit your current repositories to identify instances of configuration or sensitive data stored within version control. Document the types of data found and evaluate the potential risks associated with their exposure.

### Implement Environment-Specific Configuration Files
Create separate configuration files for different environments (development, staging, production). Ensure the schema of each file should be the same. Experiment with mechanisms to securely inject these configurations during deployment or runtime.

### Secure Configuration Storage Evaluation
Explore and integrate a secure configuration management solution, such as HashiCorp Vault or AWS Secrets Manager. Evaluate the effectiveness of this solution in improving security and flexibility compared to storing sensitive data in version control.

### Configuration Change Management Simulation
Simulate a process for managing changes to configuration data that involves multiple environments. Include steps for reviewing, approving, and applying configuration changes. Assess the impact on deployment times, security, and team collaboration.

## Resources

### [The Twelve-Factor App - Config](https://12factor.net/config)
This section of the Twelve-Factor App methodology emphasizes the importance of separating configuration from code. It advocates for storing config in the environment to improve security and adaptability across various deployment environments, offering foundational insights for efficient configuration management.

### [97 Things Every Programmer Should Know - Store Configurations in the Environment](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_61)
A concise guide that underscores the significance of externalizing configuration, highlighting how this practice enhances application security, simplifies deployment, and supports scalability. It provides actionable advice for developers to implement this best practice effectively.

<!-- ## Related Practices -->

<!-- TODO: insert a list of [linked practices](/practices) that relate to this practice. For each item, give a brief explanation of how the linked practice supports / relates to this practice. Also categorize each linked practices as one of the following: Enables, Requires, Improves -->

## Supporting Capabilities

## [Version Control](/capabilities/tech/version-control.md)
By advocating for the exclusion of configuration and sensitive data from version control, this practice improves the Version Control Capability, by defining the exceptions where storing information in application code source control is not desirable.

## [Continuous Integration](https://dora.dev/devops-capabilities/technical/continuous-integration)
Separate Config from Code facilitates more efficient and secure continuous integration (CI) processes. It allows for seamless integration of code changes by ensuring that environment-specific configurations do not interfere with the build process, thereby enhancing the reliability and speed of CI cycles.

## [Deployment Automation](https://dora.dev/devops-capabilities/technical/deployment-automation)
This practice necessitates sophisticated deployment automation that can manage and inject external configurations at deployment time. By separating configuration from the codebase, deployment automation becomes a critical capability for applying different configurations across environments automatically, thus supporting scalable and repeatable deployments.

## [Monitoring and Observability](https://dora.dev/devops-capabilities/technical/monitoring-and-observability)
While not directly related to monitoring and observability, this practice indirectly supports these capabilities by promoting cleaner and more manageable codebases. By keeping configuration data separate, it simplifies the application's operational landscape, making it easier to monitor and observe its behavior across different environments.
