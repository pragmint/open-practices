# Best Practices

A best practice (for the purpose of this repository) is a skill, technique, or behavior that supports the creation of high quality software. High performing teams have strong cultures that reinforce the creation of high quality software.

## Contributing

This repository was also open sourced with the [Creative Commons License](/LICENSE.txt) such that anyone can suggest improvements and broaden Pragmint's horizons. If you have new ideas or want to challenge our thinking, we would appreciate you creating a new [issue](https://github.com/pragmint/best-practices/issues) or [pull request](https://github.com/pragmint/best-practices/pulls).

## What does it take to create a culture that fosters fast and reliable software delivery?

This repository attempts to break down and answer that question with a curated collection of best practice concepts and resources. [Pragmint](https://pragmint.com) put this resource together for tech-minded individuals and organizations who are seeking to learn new ways to improve their software delivery capabilities.

## Required Steps

What makes a strong culture? How do you manage an organization's culture to promote the fast delivery of reliable software? Is it even possible to manage culture at all? Pragmint defines culture as a collection of behaviors that an organized group of individuals exude. To that end, one can manage an organization's culture to promote the fast delivery of reliable software by following the steps outlined below:

### 1. Clearly define desired attributes of software systems and teams

Every organization will have a unique set of attributes and outcomes that they require of their software systems. It's important to describe and socialize these requirements to the entire organization. That way teams know what is expected of them and have a resource to refer back to.

As an example, Pragmint requires all of the software they produce to be inexpensive to verify, resilient to failure, and adaptable. In order to build systems that possess those attributes, Pragmint's teams must show a commitment to continually improve, work as a team, and have fun. You can learn more about each of those attributes in the [Knowledge Base Section](#knowledge-base) of this document.

### 2. Build a knowledge base that supports the adoption of your desired attributes

When you define your expectations (step 1), you shine a light on the gaps between the current and expected realities. Now you need to give your teams the tools to close those gaps. That's where creating a repository of foundational knowledge can help (aka knowledge base).

Many organizations already have some collection of useful things to know, oftentimes in Confluence or a related tool. However it is rarely organized in a way that clearly shows the path from skill/technique/behavior to a specific attribute that enables organizational benefit. This lack of organization impedes the discovery / perceived applicability and therefore hinders adoption.

### 3. Support teams based on their level of maturity

Teams that are both skilled and willing to experiment will have no problem getting value from your knowledge base. Oftentimes they have the experience to further refine and improve what you've already put together. However many teams are either less experienced or less willing to work towards applying the skills/techniques/behaviors to their process.

Putting a knowledge base together is great for sharing explicit knowledge, but isn't well suited to share tacit knowledge. Less mature teams likely don't have deep tacit knowledge in the areas outlined and require more direct support to close those knowledge/behavior gaps.

Large-scale change is achieved iteratively and incrementally. So the support given to teams shouldn't be bundled with short-term expectations of radical improvement. Patience is key.

## Knowledge Base

Below is Pragmint's Knowledge Base. Feel free to learn from, repurpose, and/or suggest additions to this collection of resources.

### Inexpensive correctness verification

While it will likely be a while until computers can understand human intention, they are already really good at automating the verification of very specific items. Leveraging this automated verification of known and specific outcomes can free up developer time to do other high value activities.

The act of automating a task has the additional benefit of bringing complexity to the forefront. If you pay attention to those cues, it will make spotting software design flaws much easier. Some of the areas that computers can be leveraged to great effect are listed below:

- [Automated testing](/inexpensive-correctness-verification/automated-testing.md)
- [Observability](/inexpensive-correctness-verification/observability.md)
- [Linting](/inexpensive-correctness-verification/linting.md)

### Resilience to failure

No matter how much you attempt to avoid failure of your software systems, if it's being used by a meaningful amount of people, your system will fail. No amount of preparation will avoid this. The key is instead focusing on designing your system to be resilient to various sorts of failures.

There are tools and approaches that can help you do the following:

- [Decrease the cost of failure](/resilience-to-failure/decrease-cost.md)
- [Catch failure early in the process](/resilience-to-failure/catch-early.md)

### Adaptability

The needs of an organization changes over time as it learns more about how to reach its stated goals. As such, the software that an organization leverages needs to be designed to be easily changed and reflect its new set of discoveries. Unfortunately, complexity increases as functionality increases. An organization's goal should be to make that a linear relationship instead of an exponential one.

Many small details need to be done correctly in concert in order to have the resulting software be adaptable. Below are some principles that can guide you towards creating adaptable software:

- [Optimize for reuse](/adaptability/reuse.md)
- [Favor simple over easy](/adaptability/simplicity.md)
- [Create fast feedback loops](/adaptability/fast-feedback-loops.md)

### Continuous Improvement

There is no "perfect" way to build a system. Building quality software is all about making judgment calls without a full understanding of the consequences. As software systems evolve, so too does the team's understanding of the trade-offs they made along the way. In order for teams of developers to deliver high quality software, those teams must commit to continuous improvement. Doing the following is what is required to continuously improve:

- [Meaningfully introspect](/continuous-improvement/introspect.md)
- [Take action](/continuous-improvement/take-action.md)

### Teamwork

Teams enable individuals to use their different abilities, values, and beliefs to accomplish things they likely aren't able to do by themselves. Given the broad set of differences between individuals, there is a LOT that goes into working effectively as a team. However, making improvements to teamwork can have a profound impact on an organization's ability to deliver quality software quickly. Below are some aspects of teamwork that can be intentionally improved to yield better results:

- [Clarity](/teamwork/clarity.md)
- [Respectful disagreement](/teamwork/respectful-disagreement.md)
- [Support](/teamwork/support.md)

### Fun

Often overlooked, fun is a reliable indicator of the health of an organization. While all activities of building software can't be fun all the time, having fun can strengthen relationships (promoting better teamwork), reduce stress (promoting clearer decision-making), and increase motivation/focus (speeding up the process).

Fun is a state of mind that individuals consciously or unconsciously enter based on a unique set of factors. However, there are some underlying shared principles that can be applied to increase the chance of an individual having fun:

- [Be curious](/fun/curiosity.md)
- [Optimize for flow](/fun/flow.md)
- [Invest in your tools](/fun/tools.md)
- [Invest in your relationships](/fun/relationships.md)
- [Focus on meaningful work](/fun/meaning.md)
