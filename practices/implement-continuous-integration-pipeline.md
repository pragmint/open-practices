# Implement Continuous Integration Pipeline

* Do some research to define clearly de difference between CI and CD
* Read CD and CI Dora capabilities

* Define what is CI
    * Explain difference between CI and CD
        * CI
            * Is a process, constantly integration in small changes
            * Build
            * Run Unit Tests
            * Run Linters and Static Code Analysis
            * Security Checks
        * CD
            * Deployment
            * Migration
            * Higher level Tests
* Benefits
    * Faster feedback/detection and resolution of bugs
    * Improves code quality and reliability
    * Reduced merge problems
* Commit must be small and frequent
* Maintain a clean and stable main branch
* Automate as much as possible (builds, tests, linter)
* Managing dependencies in a CI pipeline
    * Repository level dependencies
        * Libraries
    * External dependencies are CD
* Handling large code bases and long build times
* Include security checks in CI pipeline
* Include Coding Standards checks and Static Code Analysis
