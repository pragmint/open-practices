# [AI-accessible Internal Data](https://dora.dev/capabilities/ai-accessible-internal-data/)

AI-accessible Internal Data, as a capability, means making an organization's proprietary information—-such as documentation, codebases, wikis, and process manuals—-structured and available for consumption by AI models. By using technologies like Retrieval-Augmented Generation (RAG) and vector databases, organizations enable team members to query internal knowledge using natural language. The primary benefit is reducing "discovery time," allowing engineers and stakeholders to find accurate information quickly without sifting through fragmented silos.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### The "Garbage In, Garbage Out" Problem

AI is only as good as the data it can access. If your internal documentation is outdated, contradictory, or poorly written, the AI will provide confident but incorrect answers. Simply connecting an LLM to a messy SharePoint or a neglected wiki will often result in "hallucinations" where the AI invents internal policies. High-quality AI accessibility requires a foundational commitment to data hygiene and documentation maintenance.

### Privacy and Security Scoping

Not all internal data should be accessible to everyone. Financial records, HR files, or sensitive project data must remain restricted. A common pitfall is creating an AI tool that inadvertently bypasses existing folder-level permissions, giving a junior developer access to executive-level salary data. Implementing "Identity-Aware Retrieval" is complex but necessary to ensure the AI respects existing access control lists (ACLs).

### Context Window and Freshness

Internal data changes rapidly. If your AI system relies on model fine-tuning or infrequent data indexing, it will quickly become obsolete. Teams often struggle with "stale context," where the AI suggests a deprecated API because the latest documentation hasn't been re-indexed yet. Building a pipeline that updates the AI’s knowledge base in near real-time is a significant engineering hurdle.

### Over-reliance and Loss of Tribal Knowledge

While AI makes information easier to find, there is a risk that teams stop talking to one another or stop documenting *why* decisions were made, relying instead on the AI to summarize the *what*. If the AI tool goes down or provides a wrong answer that becomes "canon," it can lead to systemic errors. It is vital to treat AI as a co-pilot for discovery, not the ultimate source of truth.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team on this capability. Generally, score a 1 if your internal data is locked in silos and unsearchable, a 2 if you have basic search but no AI integration, a 3 if you have an AI tool that works but has limitations, and a 4 if AI is the primary, reliable interface for organizational knowledge.

1. **Fragmented & Manual:** Data is scattered across various tools (e.g., Slack, Jira, Google Docs, email). Finding information requires manual searching or asking individuals. There is no AI interface for internal data.
2. **Centralized but Static:** Most data is in a central wiki or repo and is accessible with a basic keyword search. Some experiments with AI exist, but they are prone to hallucinations and lack access to real-time updates.
3. **Integrated & Useful:** An AI-powered search or chatbot exists that can access most technical documentation and code. It provides citations for its answers. Accuracy is high, though it occasionally misses very recent changes or restricted data.
4. **Ubiquitous & Trusted:** AI has secure, real-time access to all relevant internal data sources. It respects granular permissions and is the first place employees go for answers. Feedback loops are in place to correct the AI and update the underlying documentation simultaneously.

The number you selected represents your overall score for this capability. If you feel like the general AI-accessible Internal Data of your team fits somewhere in between two scores, it's okay to use a decimal. For example, if you think employees are somewhere between managing their loads and finding a good balance, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of AI-accessible Internal Data; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's AI-accessible Internal Data capability.

### Implement Retrieval-Augmented Generation (RAG)
Instead of training a model on your data, use RAG to retrieve relevant documents from a database and pass them to the AI as context for each specific query. This reduces hallucinations and allows the AI to cite its sources, enabling users to verify the information.

### Automate Data-indexing Pipelines
Create automated workflows that trigger every time a document is updated or a pull request is merged. This ensures that the vector database used by the AI stays synchronized with the actual state of your projects, providing "fresh" answers.


### Establish Data Governance and Cleaning
Treat internal documentation as code. Implement "Docs-as-Code" practices where documentation is reviewed and pruned regularly. Removing obsolete information is just as important as adding new information to prevent the AI from retrieving "zombie" instructions.

### Schedule Regular Documentation Audits

Regular audits can help keep documentation owners accountable for the maintenance of their documentation which helps keep AI from returning bad or misleading data. 

### Use Identity-aware Vector Search
Ensure your AI backend integrates with your Single Sign-On (SSO) provider. When a user asks a question, the system should only retrieve data fragments that the user's specific credentials allow them to see, maintaining the "principle of least privilege."

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to AI-accessible Internal Data)
- Upstream (they are a pre-requisite for AI-accessible Internal Data)
- Downstream (AI-accessible Internal Data is a pre-requisite for them)

### [Clear and Communicated AI Stance](/capabilities/clear-and-communicated-ai-stance.md) - Related
As internal AI-accessible data gets rolled out at your company, it will pair perfectly with having a balanced and effectively communicated stance on AI.

### [Documentation Quality](/capabilities/documentation-quality.md) - Upstream
High-quality, modular, updated, and clear documentation is a pre-requisite for AI-accessible Internal Data. If humans can't understand the source text, an AI's summary of that text will be equally confusing.

### [Pervasive Security](/capabilities/pervasive-security.md) - Upstream
Robust security protocols must be in place before making data AI-accessible to prevent internal data leaks or unauthorized privilege escalation via the AI interface.

