# Store Configuration in its Own Repository

It’s often useful to separate application code, which defines behavior, from configuration, which adapts that behavior to a specific environment. By storing configuration files—such as environment variables, feature flags, and infrastructure definitions in a dedicated version control repository, teams create a "single source of truth" for the state of their systems. This practice, often referred to as the backbone of GitOps, allows operations and development teams to manage environment changes with the same rigor used for software development.

Decoupling configuration from application source code significantly improves the safety and speed of deployments. When configuration is embedded in the application build artifact, changing a simple setting requires a full rebuild and redeploy of the binary. By isolating configuration in its own repository, teams can modify environment settings dynamically or trigger specific configuration-update pipelines. This separation also simplifies auditing, as the commit history of the configuration repository provides a clear timeline of who changed a setting, what was changed, and when it occurred.

Furthermore, this practice enhances security and stability across different environments (Dev, Stage, Prod). It prevents the "it works on my machine" syndrome by ensuring that the configuration applied to an environment is explicitly defined in code, rather than manually tweaked on a server. It also allows for granular access control; while many developers may contribute to the application source code, a smaller, more specialized group might hold write access to the production configuration repository, ensuring that critical operational changes are peer-reviewed before being applied.

## Supported Capabilities

### [Version Control](/capabilities/version-control.md)

This practice extends the benefits of version control beyond application source code to the infrastructure and operational settings of the system. By keeping configuration in Git, teams gain immediate access to branching strategies, pull request reviews for config changes, and the ability to instantly roll back to a previous known-good state if a configuration change causes an outage.

### [Deployment Automation](/capabilities/deployment-automation.md)

Storing configuration externally is a prerequisite for fully automated deployment pipelines. Automation tools can programmatically pull the specific configuration required for a target environment at runtime, ensuring that deployments are repeatable and removing the need for manual intervention or error-prone "hot fixes" on live servers.

### [Pervasive Security](/capabilities/pervasive-security.md)

Isolating configuration allows teams to implement stricter governance and security policies regarding who can modify the runtime behavior of production systems. It creates an immutable audit trail for compliance purposes and allows for the automated scanning of configuration files to detect secrets, keys, or insecure settings before they are ever applied to the infrastructure.
