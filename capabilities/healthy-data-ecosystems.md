# [Healthy Data Ecosystems](https://dora.dev/capabilities/healthy-data-ecosystems)

A Healthy Data Ecosystem means that the data your organization relies on—whether for operational decision-making, automated testing, or product features—is accurate, accessible, and handled with care. It’s about moving away from "data silos" and "data swamps" toward a state where data is treated as a first-class citizen. In a healthy ecosystem, teams can trust the data they use, understand where it came from, and access it without jumping through bureaucratic hoops.

## Nuances

Building a healthy data ecosystem isn't just a technical challenge; it’s a cultural and process-oriented one. Here are the common hurdles teams face when trying to improve their data health.

### The "Garbage In, Garbage Out" Trap
Automated systems and AI are only as good as the data feeding them. If your upstream data is poorly formatted, incomplete, or inaccurate, any "downstream" capability (like Continuous Delivery or Predictive Analytics) will suffer. Teams often focus on the shiny tools at the end of the pipeline while neglecting the cleanliness of the data at the source.

### Lack of Data Source Tracking
When a report looks "wrong", how long does it take your team to figure out why? Without data source tracking (knowing the path data took from source to destination), debugging data issues becomes a "detective work" nightmare. A healthy ecosystem provides clear visibility into how data is transformed at every step.

## Assessment

To assess the health of your data ecosystem, consider how your team interacts with data daily and score yourself using the guide below.

1. **Fragmented & Untrusted:** Data is trapped in silos. Access requires manual approvals and long waits. No one is sure if the data is accurate, and "data cleaning" is a massive, manual chore for every project.
2. **Coordinated but Manual:** Data is documented, but often outdated. You have some central repositories (like a data warehouse), but getting new data types integrated is slow. Testing often uses stale or "hand-rolled" data that doesn't reflect reality.
3. **Accessible & Reliable:** Most data is discoverable via a catalog or API. Automated pipelines handle basic cleaning and transformation. There is high confidence in data quality, and privacy masking is largely automated.
4. **Fluid & Self-Service:** Data is treated as a product. Teams can self-serve the data they need through well-defined interfaces. Data tracking is fully transparent, and data quality issues are caught by automated "data tests" before they affect downstream systems.

The number you selected represents your overall score for this capability. If you feel like your organization fits somewhere in between two scores, it's okay to use a decimal.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means your organization is largely proficient, or well on its way to becoming proficient, in the area of Generative Organizational Culture; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

### Use Data and Documentation Linting
Have automated processes in place to ensure documentation quality and timelyness.

### Define Data Contracts
Have a unified structure for data/documentation providers and consumers. This simplifies the process of tools having access to your data and documentation.

### Establish Clear Data Ownership
Every set of data and documentation should have a clear "owner" responsible for its quality and maintainence. This moves the organization away from a "tragedy of the commons" where everyone uses the data but no one feels empowered to fix it when it breaks.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Healthy Data Ecosystems)
- Upstream (they are a pre-requisite for Healthy Data Ecosystems)
- Downstream (Healthy Data Ecosystems is a pre-requisite for them)

### [AI-accessible internal data](/capabilities/ai-accessable-internal-data.md) - Downstream
Having your data clean and organized allows for the productivity amplification effects of AI-accessible data. Without healthy data AI-accessable internal data will likely cause more harm than good.

### [Pervasive Security](/capabilities/pervasive-security.md) - Related
A healthy data ecosystem simplifies security. When data is classified and tracked automatically, applying security policies becomes much more consistent and less prone to human error.

### [Visibility into Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related
To see how work flows through your organization, you need healthy, integrated data. A healthy data ecosystem makes this high-level visibility possible.

