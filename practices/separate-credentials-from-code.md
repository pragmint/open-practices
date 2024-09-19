# Separate Credentials from Code

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