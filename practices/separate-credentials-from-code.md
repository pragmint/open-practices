# Separate Credentials from Code

Separating credentials from code is an important security practice that involves storing sensitive information such as API keys, database passwords, and SSH keys outside of the source code. Embedding credentials directly in code can lead to accidental leaks, especially when code is shared or pushed to version control systems.
This separation reduces the risk of exposing sensitive data to unauthorized individuals and minimizes the attack surface.
If credentials accidentally make their way into version control history, it’s important to rotate the compromised keys immediately and remove the exposed data from the commit history.

There have been several real-world breaches caused by improperly stored credentials, emphasizing the importance of following secure practices.
Credentials should be managed through environment variables or specialized tools such as Docker secrets, AWS Secrets Manager, and Azure Key Vault.
These methods also support environment-specific configurations, making it easier to manage distinct credentials for development, staging, and production environments.

Best practices for handling credentials also involve automated detection tools like GitGuardian and TruffleHog, which scan repositories for exposed credentials.
Integrating these checks into CI pipelines can help prevent accidental exposure.
Version control systems should be configured with .gitignore to prevent committing sensitive files, and automated tests must handle credentials securely without exposing them.
Lastly, it’s essential to ensure that logs do not accidentally capture sensitive information, further safeguarding credentials.

## Nuance

### Misconception: "Environment Variables Are Always Secure"

Many developers assume that using environment variables automatically guarantees the security of credentials.
However, environment variables can be exposed in logs, dumped during crashes, or improperly accessed if the system's access control is weak.
It’s important to use secure deployment practices, configure access permissions correctly, and avoid exposing environment variables to unnecessary users or services.

### False Sense of Security in Version Control

Developers might believe that adding credentials to .gitignore is enough to secure sensitive information. While .gitignore prevents credentials from being committed going forward, it doesn't address cases where sensitive data has already been committed in previous versions.
Simply removing credentials from the codebase doesn’t erase them from the version control history, and using tools like git-filter-repo or BFG Repo-Cleaner is necessary to fully clean the history.

### Ignoring the Importance of Credential Rotation

Some teams set up a credential management system and assume it’s secure without ever revisiting it.
However, credentials should be rotated regularly to minimize the impact of potential leaks.
A forgotten, stagnant set of credentials could be compromised without anyone noticing, leading to long-term vulnerabilities.
Teams should have policies in place for automatic or scheduled credential rotation and update workflows to handle this gracefully.

### Misjudging the Risk in Different Environments

Some developers may treat all environments—development, staging, and production—with the same level of security when handling credentials.
However, the level of risk varies by environment.
For example, exposing credentials in a production environment is far riskier than in a local development environment.
Developers should prioritize security efforts based on risk and criticality, and while all environments deserve protection, production must always be handled with the highest level of care.

### Overlooking Role-Based Access Control (RBAC)

Separating credentials from code is not the only step in protecting sensitive data.
Without properly enforcing Role-Based Access Control (RBAC), teams might still expose credentials to more people or services than necessary.
Even with secrets management tools in place, improper RBAC implementation can result in credential misuse.
Teams should regularly audit who has access to specific credentials and adjust permissions based on roles and responsibilities.

### Excessive Dependence on Automated Tools

While tools like GitGuardian and TruffleHog are important for scanning repositories for exposed credentials, relying solely on these automated systems be a mistake.
Developers should still exercise vigilance in their day-to-day practices, as no tool is perfect.
Regular manual audits, alongside automated tools, ensure that issues are caught and resolved before they become a threat.

### Assuming One Solution Fits All

Different types of credentials and systems require different handling methods.
For example, API keys may require frequent rotation, while database passwords might need stronger encryption and storage policies.
Using a "one-size-fits-all" approach can lead to suboptimal security configurations.
It's important to assess the sensitivity of each credential and apply appropriate solutions tailored to the specific risk.

## Key Points

* Explanation of what it means to separate credentials from code.
* Discuss potential risks of storing credentials directly in source code, such as accidental credential leaks.
* What to do it credentials made it's way to the version control history.
* Types of Credentials: API Kys, database passwords, SSH keys.
* Examples of real-world breaches caused by improperly stored credentials  
* Methods for separating credentials
    * Environment Variables
    * Configuration Management Tools
        * Docker secrets
        * AWS Secrets Manager
        * Azure Key Vault
* Best practices
    * Environment specific configurations
        * dev
        * staging
        * production
    * Rotate credentials regularly and strong password policies
    * Role-based access control
* Automated Credential Detection
    * Tools for automatically scanning repositories for exposed credentials (GitGuardian, TruffleHog)
    * include check in CI pipelines
* Version Control and Secrets
    * Steps to take is credentials are accidentally committed
    * use .gitignore
* How to handle credentials for automated testing
* Avoid logging credentials