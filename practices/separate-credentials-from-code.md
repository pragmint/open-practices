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