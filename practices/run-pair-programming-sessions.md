# Run Pair Programming Sessions

In pair programming sessions, two developers collaborate either at one workstation or remotely, with one typing out code (the driver) and the other reviewing (the navigator).
This practice enhances code quality by facilitating consistent review, knowledge sharing, discussion, and problem-solving.
It also serves as a mentoring tool.
When developers *don't* engage in pair programming, bugs increase, knowledge silos form, problem-solving becomes slower, and teams miss opportunities to develop skills.
Effective pair programming requires clear communication, mutual respect, regular role rotation, and a supportive team culture that values collaboration and continuous improvement.

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this practice.

<ed> Consider swapping Nuances and How to Improve sections. This way, we introduce the Practice and then lead with actionable ways to implement it, rather than the pitfalls/challenges of implementation. Now, if I’ve misinterpreted the Nuance section, please let me know. In the Capability, the Nuances were described as pitfalls/limitations/challenges. But, during our initial call in Sept., you mentioned the Nuances as when to use/not use a given practice. After reading the drafts, I understand the Nuances to be the former — pitfalls/limitations/challenges. </ed>

### Balancing Individual and Collaborative Work

While pair programming sessions emphasize collaboration, it's essential to balance them with individual work.
Over-reliance on pair programming for all tasks may limit developers' autonomy and creativity. Some tasks may benefit from individual exploration and problem-solving before collaboration.

### Managing Pair Dynamics

Rotating pairs fosters diverse perspectives and mitigates dependency, while alternating roles between driver and reviewer promotes skill development and engagement. <ed> Is it "reviewer" or "navigator" that is paired with the driver? </ed> 
Relying too heavily on a single pair can create bottlenecks and knowledge silos.
It's important to encourage pairing across the team and ensure that knowledge is shared widely to mitigate risks associated with individual dependencies.

Continuous pair programming sessions without breaks can also lead to burnout and fatigue, diminishing the effectiveness of collaboration. Teams should take regular breaks, rotate pairs frequently, and encourage developers to take time for individual reflection.

### Recognizing Contextual Suitability

Pair programming may not be suitable for all tasks or project phases. Complex problem-solving, code reviews, and knowledge transfer are ideal scenarios for pair programming sessions.
However, routine tasks or individual research may not require constant collaboration and may be handled more efficiently when done independently.

### Adapting to Remote Collaboration Challenges

While pair programming can be done remotely, this approach presents some challenges such as communication barriers, technical issues, and time zone differences.
Teams must use suitable collaboration tools (for example, Visual Studio Live Share) and establish clear communication protocols.

<ed> Edit OK? This appears to be the way MS refers to the tool. Also, I notice this is the first specific tool that is referenced. Practice files discussed automation tools and visual analytics tools, generally, but did not name any names. I realize this is tricky, as you don't want to appear to be endorsing any one specific product, but specific recommendations might be helpful for some readers. This is something to consider adding in your revisions. </ed> 

## How to Improve

<ed> Suggest editing the above section header to something more specific, like "How to Implement This Practice" or "Tips on Implementing This Practice" </ed> 

Help your team implement this practice by hosting a viewing party of specially curated talks, starting a book club to discuss impactful titles on this topic, facilitating a roundtable discussion about relevant topics, leading a workshop, or running a retrospective.

<ed> Suggested text to introduce this section and preview what it will cover. Such text would appear in all Practices. With all Practice files, I would suggest consistently presenting the topics in this order: 
- Host viewing party
- Start book club
- Facilitate roundtable
[other tips... I notice that, beyond these top three, they begin to vary] My edits below reflect this suggestion. </ed> 


### [Host a Viewing Party](/practices/host-a-viewing-party.md)

#### [Async Code Reviews Are Chocking Your Company’s Throughput](https://www.youtube.com/watch?v=ZlLZEQQBcFg)

In this video, principal engineer at HelloFresh Dragan Stepanovic delves into the common practice of pull/merge requests (PRs) in software development teams and their potential impact on throughput. <ed> Added detail about who Dragan is. OK? </ed> 
Drawing from his study analyzing tens of thousands of PRs across various repositories, he reveals that teams using small PRs with asynchronous code reviews often experience lower throughput compared to those using larger PRs. Dragan introduces a solution to this dilemma: co-creation patterns such as pair and mob programming, where multiple individuals collaborate simultaneously on a task.
By exploring data that challenges the assumption that these collaborative patterns diminish team throughput, Dragan suggests a path toward achieving both high throughput and high quality in software development.


### [Start a Book Club](/practices/start-a-book-club.md)

#### [The power of feedback loops](https://lucamezzalira.medium.com/the-power-of-feedback-loops-f8e27e8ac25f)

This article by AWS solutions architect Luca Mezzalira emphasizes the importance of feedback loops in software development, citing expert insights to advocate for their adoption. It explores various types of feedback loops, including TDD, static analysis, pair programming, code review, Agile modeling, daily stand-ups, and retrospectives, stressing their role in enhancing project quality and team collaboration.
Luca also advocates multiple feedback loops, emphasizing their pivotal role in ensuring project success and customer satisfaction, urging teams to experiment with new techniques for continuous improvement.

#### [Clever code considered harmful](https://medium.com/@joshuawcomeau/clever-code-considered-harmful-a1fb1054e8a1)

The article by developer Joshua Comeau explores the balance between solving complex problems elegantly and writing accessible code.
It discusses Project Euler's mathematical challenges and the importance of simplicity in collaborative coding environments.
Emphasizing readability over complexity, Joshua advocates for clear, accessible code that encourages contributions and facilitates debugging.
Ultimately, Joshua's article champions simplicity in coding solutions.

#### [Strengthening the Case for Pair Programming](https://collaboration.csc.ncsu.edu/laurie/Papers/ieeeSoftware.PDF)

This article co-authored by faculty from North Carolina State University and the University of Utah focuses on the benefits of pair programming. Based on both anecdotal evidence and structured experiments, the authors argue that pair programming leads to higher-quality code, faster development, and increased programmer satisfaction. The article presents data from professional programmers and students, showing that pair programming is more efficient despite initial skepticism. It also highlights pair programming's role in the Extreme Programming (XP) methodology, emphasizing its effectiveness across all levels of programming skill.


### [Facilitate a Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

Below are suggestions for topics and prompts you could explore with your team during a roundtable discussion. 

<ed> Line above OK? Tweak as you like, but I recommend adding a quick sentence here to give context to the subsections and questions that follow. </ed> 
	
#### Maximizing the Effectiveness of Pair Programming

* How frequently do we engage in pair programming sessions, and are they integrated into our regular workflow?
* How do we measure the effectiveness of pair programming in terms of code quality, knowledge sharing, and team collaboration? What adjustments can we make to improve outcomes?
* Are pair programming sessions adapted to suit different project phases and tasks, ensuring that they're used where they add the most value?

#### Reflecting on Pair Dynamics and Team Culture

* How do we manage pair dynamics to foster diverse perspectives and mitigate dependency on individual team members?
* What steps can we take to encourage pairing across the team and prevent reliance on a single pair, which could lead to bottlenecks?
* Are team members encouraged to take on both the role of driver and reviewer during pair programming sessions, to promote skill development and engagement? <ed> Again is it "reviewer" or "navigator"? </ed> 

#### Evaluating Contextual Suitability and Adaptability

* Are there specific tasks or project phases where pair programming is particularly effective? How do we identify these opportunities?
* What tools and protocols do we have in place to address challenges associated with remote pair programming, such as communication barriers and time zone differences?
* How do we ensure that team members are equipped with the necessary skills and resources to effectively engage in pair programming?


### [Lead Workshops](/practices/lead-workshops.md)

#### Trial Period

To experiment with pair programming and evaluate its effects, start by pairing team members for a designated trial period, such as one or two weeks. Aim to pair individuals with mixed experience levels, if possible. Assign tasks to the pairs and rotate pairs frequently to encourage diverse collaboration. During each trial period, have one person in the driver role, actively writing code, while the other acts as the navigator, providing real-time feedback and suggestions. <ed> Reviewer or navigator? </ed> Encourage pairs to switch roles regularly. Monitor the outcomes by gathering feedback on code quality, productivity, and team satisfaction. Additionally, observe any improvements in knowledge sharing, problem-solving efficiency, and team cohesion.


### [Run a Retrospective](/practices/host-a-retrospective.md)

#### Feedback Sessions

Regular feedback sessions provide an opportunity for team members to share their experiences, challenges, and suggestions regarding pair programming. By collecting feedback from participants, you can identify areas for improvement, address concerns, and iterate on the pair programming process. This continuous feedback loop enables you to refine your approach to pair programming and ensure that it aligns with your team's evolving needs and goals.



## Supporting Capability

This practice supports enhanced performance in the following capability. 

<ed> Suggest adding a one-liner here, for all Practices, to introduce this section. </ed>

### [Code Maintainability](/capabilities/code-maintainability.md)

Pair programming directly supports the Code Maintainability capability by facilitating collaboration, real-time code review, and knowledge sharing among developers. By working in pairs, developers catch issues early, ensure code comprehensibility, and spread knowledge across the team, which leads to a more maintainable codebase. Additionally, pair programming promotes adherence to coding standards, enhancing code consistency and readability.
