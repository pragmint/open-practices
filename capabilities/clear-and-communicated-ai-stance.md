# [Clear and Communicated AI Stance](https://dora.dev/capabilities/clear-and-communicated-ai-stance/)

A **Clear and Communicated AI Stance** means that an organization has established and shared a formal position on the use of Artificial Intelligence. This isn't just a legal "thou shalt not" document; it is a framework that provides developers and teams with guidance on how, where, and why AI tools—such as Large Language Models (LLMs) and coding assistants—should be used. The goal is to provide a "safe paved road" for innovation while managing risks related to security, legal compliance, and ethics.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal is to arm you with the context needed to make informed decisions about implementing an AI stance.

### The "Policy in a Vacuum" Problem 

A policy is only effective if people know it exists. Often, organizations create an AI policy that lives in a legal or HR portal that developers never visit. Without active communication, teams default to "Shadow AI," using tools without oversight because they don't know the rules or find the official process too slow.

### Balancing Restriction with Enablement

An AI stance that is purely restrictive (e.g., "AI is banned") often results in a loss of competitive advantage and can drive usage underground. Conversely, an "anything goes" approach introduces massive legal and security risks. The most effective stances are nuanced—defining which tools are safe for public data versus which can be used with proprietary code.

### The Speed of Change 

The AI landscape evolves faster than traditional corporate policy cycles. A stance written six months ago may not cover new capabilities like autonomous AI agents or local model execution. To remain relevant, an AI stance must be a "living document" that is reviewed and updated at a higher frequency than other organizational policies.

### Ambiguity in "Reasonable Use" 

Terms like "use AI responsibly" are too vague to be actionable for a developer. For an AI stance to be effective, it needs to address specific, everyday concerns: Can I use it for refactoring? Can I use it to summarize meeting notes containing customer data? Can I use AI-generated code in our production repository? Clarity is the antidote to hesitation and risk.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team on this capability. Generally, score a **1** if the stance is non-existent or hidden, a **2** if it is reactive and vague, a **3** if it is clear and well-communicated, and a **4** if it is integrated and iteratively updated.

1. **Absent or Hidden:** No formal stance exists, or it is buried in legal documentation that is not shared with technical teams. Developers are unsure what is allowed, leading to either total avoidance or "underground" usage.
2. **Reactive & Vague:** A stance exists but is mostly reactive (e.g., "don't put passwords in ChatGPT"). Guidelines are unclear, and there is no centralized place to find updates or ask questions about new tools.
3. **Clear & Communicated:** There is a well-documented AI policy that is easily accessible. Most team members understand the boundaries of AI use, and there is a clear process for requesting or vetting new AI tools.
4. **Integrated & Iterative:** The AI stance is part of the daily engineering culture. It is regularly updated based on team feedback and technological shifts. There is high confidence in using AI because the legal and security guardrails are clear and supportive.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's AI Stance capability.

### Create an "Approved AI Services" Catalog 

Maintain a central, internal list of AI tools and models that have been vetted for security and legal compliance. This reduces the cognitive load on developers, as they don't have to wonder if a specific tool is "safe" to use.

### Establish "Security Tiers" for AI Interaction 

Clearly define what level of data can be sent to external AI providers. For example:
- **Tier 1 (Public):** Can be used with any tool.
- **Tier 2 (Proprietary Code):** Requires enterprise-grade tools with data-exclusion opt-outs.
- **Tier 3 (Sensitive/PII):** Strictly prohibited from external LLMs.

### Provide "Prompt Engineering" Guidance

Instead of just giving permission to use AI, provide guidance on how to use it effectively and safely. Sharing "Golden Prompts" for tasks like unit test generation or documentation helps standardize the quality of AI-assisted work.

### Automate Policy Enforcement 

Where possible, use tooling—like secret scanners or egress filters—to ensure that sensitive data isn't being sent to unapproved AI endpoints. This moves the AI stance from a "policy you have to remember" to a system that supports you.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Clear and Communicated AI Stance)
- Upstream (they are a pre-requisite for Clear and Communicated AI Stance)
- Downstream (Clear and Communicated AI Stance is a pre-requisite for them)

### [Pervasive Security](/capabilities/pervasive-security.md) - Upstream

A strong security culture is a prerequisite for a good AI stance. If you don't already understand your data classification, it will be difficult to write a clear policy on how AI should interact with it.

### [Empowering Teams](/capabilities/empowering-teams.md) - Downstream

Providing a clear AI stance empowers teams to innovate. When developers know exactly where the guardrails are, they feel safer experimenting with new ways to improve their workflow.

