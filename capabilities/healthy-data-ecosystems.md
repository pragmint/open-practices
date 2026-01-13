# [Healthy Data Ecosystems](https://dora.dev/capabilities/healthy-data-ecosystems)

A healthy data ecosystem means that the data your organization relies on for operational decision making, automated testing, or product features is accurate, accessible, and handled with care. It’s about moving away from "data silos" and "data swamps" toward a state where data is treated as a first-class citizen. In a healthy data ecosystem, teams can trust the data they use, understand where it came from, and access it without jumping through bureaucratic hoops. But building a healthy data ecosystem isn't just a technical challenge; it’s a cultural and process-oriented one. 

## Nuances
This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Garbage In, Garbage Out" Trap
Automated systems and AI are only as good as the data feeding them. If your upstream data is poorly formatted, incomplete, or inaccurate, any "downstream" capability (like Continuous Delivery or Predictive Analytics) will suffer. Teams often focus on the shiny tools, used at the end of the pipeline, while neglecting the cleanliness of the source data those tools rely on.

### Lack of Data Source Tracking
When a report looks "wrong," how long does it take your team to figure out why? Without data source tracking (knowing the path data took from source to destination), debugging data issues becomes a "detective work" nightmare. A healthy data ecosystem provides clear visibility into how data is transformed at every step.

## Assessment
To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team or organization on this capability. Generally, score a 1 if data is untrusted and largely inaccessible, a 2 if data is documented but outdated, a 3 if data is trusted and discoverable, and a 4 if data is self-service and treated as a first-class citizen.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Fragmented & Untrusted:** Data is trapped in silos. Access requires manual approvals and long waits. No one is sure if the data is accurate and "data cleaning" is a massive, manual chore for every project.
2. **Coordinated but Manual:** Data is documented, but often outdated. You have some central repositories (like a data warehouse), but integrating new data types is slow. Testing often uses stale or "hand-rolled" data that doesn't reflect reality.
3. **Accessible & Reliable:** Most data is discoverable via a catalog or API. Automated pipelines handle basic cleaning and transformation. There is high confidence in data quality and privacy masking is largely automated.
4. **Fluid & Self-Service:** Data is treated as a product. Teams can self-serve the data they need through well-defined interfaces. Data source tracking is fully transparent, and data quality issues are caught by automated "data tests" before they affect downstream systems.

The number you selected represents your overall score for this capability. If you feel like your organization fits somewhere in between two scores, it's okay to use a decimal.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means your team or organization is largely proficient, or well on its way to becoming proficient, in the area of data health; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices
The following is a curated list of supporting practices to consider when looking to improve your team's Healthy Data Ecosystems capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Use Data and Documentation Linting
Have automated processes in place to ensure documentation meets quality standards and is regularly updated.

### Define Data Contracts
Have a contract that defines a unified structure for data/documentation providers and consumers. This simplifies the process when external tools have access to your internal data and documentation.

### Establish Clear Data Ownership
Every set of data and documentation should have a clear owner, who is responsible for its quality and maintainence. This moves the team away from a "tragedy of the commons," where everyone uses the data but no one feels empowered to keep it updated or fix it when it breaks.

## Adjacent Capabilities
The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Healthy Data Ecosystems)
- Upstream (they are a pre-requisite for Healthy Data Ecosystems)
- Downstream (Healthy Data Ecosystems is a pre-requisite for them)

### [Pervasive Security](/capabilities/pervasive-security.md) - Related
A healthy data ecosystem simplifies security. When data is classified and tracked automatically, applying security policies becomes much more consistent and less prone to human error.

### [Visibility into Work in the Value Stream](/capabilities/visibility-of-work-in-the-value-stream.md) - Related
To get an accurate view of how work flows through your organization, you need data that is healthy and integrated. A healthy data ecosystem makes this high-level visibility possible.

### [AI-accessible Internal Data](/capabilities/ai-accessable-internal-data.md) - Downstream
Data that is clean and organized is easier for AI to access. And when internal data is AI-accessible, teams typically experience greater productivity. Serving unhealthy data to an AI will likely cause more harm than good.

