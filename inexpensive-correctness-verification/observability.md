# Observability

While it is good to attempt to minimize the frequency of issues ([Change Failure Rate](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance)), it is more important to minimize the duration of issues (for non safety critical projects). This measurement is called [Mean Time To Restore](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance) (MTTR for short).

Any meaningfully complex system will eventually suffer from defects. In order to solve defects effectively, development teams need to know when their systems are not functioning properly. Not only that, but it's important to be able to understand how to reproduce and fix any issues that arise quickly.

## Resources

- Put an automated [Continuous Integration (CI) pipeline](https://cloud.google.com/architecture/devops/devops-tech-continuous-integration) in place and have it [automatically deploy](https://cloud.google.com/architecture/devops/devops-tech-deployment-automation)
- [Make it easy to deploy and rollback so you can do it often](https://cloud.google.com/architecture/devops/devops-tech-continuous-delivery)
- [Basic explanation of distributed tracing](https://medium.com/geekculture/explained-an-introduction-to-distributed-tracing-bb1ef52fbac2)
- [Basic logging best practices](https://dev.to/raysaltrelli/logging-best-practices-obo)
- [Overview of how to build observable distributed systems](https://www.youtube.com/watch?v=ACL_YVPD3gw)
- [Make it easy to spin up ephemeral environments](https://webapp.io/blog/what-is-an-ephemeral-environment/)
- [Test data should be readily available](https://cloud.google.com/architecture/devops/devops-tech-test-data-management)
- [Measure](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability) and [proactively alert](https://cloud.google.com/architecture/devops/devops-measurement-proactive-failure-notification) on failures
