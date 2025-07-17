# [Pervasive Security](https://dora.dev/capabilities/pervasive-security/)

Pervasive Security emphasizes integrating security practices into the daily workflow across all phases of software development. The goal is to shift security considerations to the early stages of the development lifecycle, also known as "shifting left," which helps prevent costly security defects and enhances software delivery performance. This approach leads to more secure systems and reduces the time spent remediating issues, benefiting both development speed and system stability.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Feature Delivery Pressure

Developers are often measured and rewarded for feature delivery speed, creating incentives that conflict with security considerations. When security reviews or additional testing slow down delivery, developers face pressure to meet deadlines and avoid looking like they're underperforming. This can lead to resistance against security processes, rushed implementations that bypass security checks, or treating security requirements as optional overhead rather than essential quality gates. The tension between delivery velocity and security thoroughness creates a culture where security becomes a burden rather than a shared responsibility.

### Adversarial Security Reviews

Security integration works best when development and InfoSec teams have mutual trust and understanding. Without this foundation, security reviews become adversarial checkpoints rather than collaborative partnerships. Simple steps like regular check-ins, sharing context about upcoming features, and treating security feedback as guidance rather than criticism can transform the relationship. When teams view each other as partners rather than gatekeepers, security insights flow more naturally and vulnerabilities are caught earlier.

### Tool Fragmentation

Disconnected security tools create friction and inconsistent coverage across development workflows. Teams often struggle with multiple point solutions that don't integrate well - static analysis tools, dependency scanners, container security tools, and runtime monitoring systems that operate in isolation. This fragmentation means security checks happen at different stages with different standards, creating gaps in coverage and requiring developers to context-switch between multiple tools. When security tooling becomes a burden rather than an enabler, teams may bypass or disable tools to maintain velocity, undermining the goal of pervasive security integration.

## Supporting Practices

### Automate Security Testing in CI/CD Pipelines

Add automated security checks to the continuous integration/continuous deployment (CI/CD) pipelines. This ensures that security is continuously assessed alongside functional and performance tests, catching issues early and at scale. Automated security testing reduces manual effort, helps detect vulnerabilities quickly, and keeps the codebase safer.

### Conduct Security Awareness Training for Developers

Regularly conduct security training that covers common vulnerabilities, secure coding practices, and awareness of new security threats. This equips developers with the knowledge to write secure code, recognize risks early, and reduce the likelihood of security incidents. Continuous education leads to a security-conscious culture and more resilient software.

### Implement Threat Modeling

Practice systematic threat modeling during design phases to identify and mitigate security risks early. Use structured approaches like STRIDE or PASTA methodologies to systematically analyze potential threats, vulnerabilities, and attack vectors. This proactive approach helps teams understand security implications before implementation begins, enabling better architectural decisions and reducing the likelihood of security flaws being introduced into the codebase.

### Establish Security Metrics

Define and track security metrics including vulnerability density, time to remediation, and security test coverage. Use data to drive continuous improvement by establishing baselines, setting targets, and monitoring trends over time. These metrics provide visibility into security effectiveness, help prioritize security investments, and enable teams to demonstrate security progress to stakeholders while identifying areas that need attention.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Pervasive Security)
- Upstream (they are a pre-requisite for Pervasive Security)
- Downstream (Pervasive Security is a pre-requisite for them)

### [Continuous Integration](/capabilities/continuous-integration.md) - Upstream

Continuous Integration (CI) ensures that changes are automatically tested and integrated into the codebase frequently, providing rapid feedback on code quality and functionality. This capability establishes the foundational automation and testing infrastructure that makes security integration possible at scale.

By providing automated build and test pipelines, CI creates the necessary infrastructure for embedding security checks into the development workflow. This upstream relationship enables Pervasive Security to leverage existing automation patterns, ensuring security testing becomes a natural part of the development process rather than an additional burden.

### [Test Automation](/capabilities/test-automation.md) - Related

Test Automation establishes the practice of automatically validating software quality through various testing approaches, including unit, integration, and end-to-end tests. This capability encompasses automated security testing as a fundamental component, covering vulnerability scanning, dependency analysis, and security regression testing.

By sharing the same automation principles and infrastructure, Test Automation and Pervasive Security work together to ensure security validation happens consistently and efficiently. This related relationship means that security testing leverages the same automation frameworks, CI/CD pipelines, and testing practices that teams already use for functional testing, making security a natural extension of the overall quality assurance process rather than a separate concern.

### [Monitoring and Observability](/capabilities/monitoring-and-observability.md) - Related

Monitoring and Observability provide real-time insights into system behavior, performance, and security events through comprehensive logging, metrics, and alerting systems. This capability enables teams to detect and respond to security incidents as they occur in production environments.

By implementing pervasive security practices during development, teams create systems that are more observable and secure by design. This downstream relationship means that security controls, logging, and monitoring points are built into applications from the start, making it easier to detect breaches, verify security controls, and facilitate rapid incident response.
