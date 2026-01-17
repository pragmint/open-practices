export const example_capability = `# [Well-Being](https://dora.dev/capabilities/well-being/)
The Well-Being capability focuses on the overall physical, mental, and emotional health of employees. In fact, DORA has found a compelling link between well-being and three workplace factors: deployment pain, rework, and burnout.

_Deployment pain_ refers to the amount of effort it takes to safely apply changes to live environments. The more "pain" developers experience during deployment, the lower their well-being tends to be.

_Rework_ is any unplanned work that arises as a result of low-quality software. Rework does NOT include refactoring; that's done as a routine part of the development process. The more rework developers are required to do, the lower their well-being tends to be.

According to [Dr. Christina Maslach](https://psychology.berkeley.edu/people/christina-maslach), _burnout_ is physical or mental exhaustion that results from one of the following: work overload, lack of control, insufficient rewards, a breakdown of community, the absence of fairness, or value conflicts between an individual and organization. The more an individual feels burnout, the lower their well-being tends to be.

When employees experience high levels of well-being, better organizational performance and increased retention tend to follow. Below, we'll discuss some ways to achieve high levels of well-being among your team(s).

## Nuances

This section outlines common pitfalls, challenges, or limitations teams commonly encounter when applying this capability. The goal here is not to discourage you. Rather, the goal is to arm you with the appropriate context so that you can make an informed decision about when and how to implement the capability with your teams.

### Repetitive Work Creates Burnout

There's a strong link between repetitive or toilsome work and burnout. Monotonous tasks, while not novel or interesting, are still important and need to get done. But it's worth trying to automate those tasks, or at least spread this workload across the team, where effective and practical. That way, mind-numbing work doesn't pile up on select team members.

### Rework Is Inevitable

No matter how hard a team tries, there is always going to be rework. The goal shouldn't be to completely eliminate rework through never-ending quality investments. Take a more pragmatic approach. Aim to _reduce_ unreasonable amounts of rework through incremental investments in quality -- this is more likely to yield a strong return in terms of team productivity.

## Assessment

To assess how mature your team or organization is in this capability, complete this short exercise.

Consider the descriptions below and score your team on the Well-Being capability. Generally, score a 1 if you feel employees are overwhelmed and undervalued, a 2 if you feel employees are managing the load and there is a lot of room for improvement, a 3 if you feel employees are finding work-life balance and there is some room for improvement, and a 4 if you feel your employees are thriving in terms of their well-being.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.

1. **Overwhelmed and Undervalued:** Employees are consistently overwhelmed by work demands, have little control over their work, and feel undervalued and unrewarded. There is a breakdown in community and a lack of fairness in decision-making processes.
2. **Managing the Load:** Teams are coping with work demands, but some employees are still struggling with a lack of control and autonomy, and rewards and recognition are inconsistent. While there are some efforts to build a sense of community, aligning organizational and individual values is still a work in progress.
3. **Finding Balance:** Employees are generally happy and engaged, with a good work-life balance. Teams are making progress in addressing work overload, increasing control and autonomy, and providing sufficient rewards and recognition. There is still room for improvement in building a sense of community and fairness.
4. **Thriving Culture:** Employees are highly engaged, motivated, and happy. There is a strong sense of well-being. Teams consistently deliver high-quality work in a supportive and fair work environment. There is a clear alignment between organizational and individual values, and opportunities for growth and development are present.

The number you selected represents your overall score for this capability. If you feel like the general well-being of your team fits somewhere in between two scores, it's okay to use a decimal. For example, if you think employees are somewhere between managing their loads and finding a good balance, you would score a 2.5.

Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient, in the area of Well-Being; you would likely benefit from evaluating your scores in other capabilities.

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's Well-Being capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

### Track Employee Engagement

Designing and routinely sending out an employee engagement survey that fits your organization's culture can uncover issues affecting employee well-being and organizational performance. These surveys can be great tools for listening, understanding, and fostering a culture of continuous improvement. If this data is widely shared and acted upon, it can show employees that their input can drive meaningful change. See some [helpful guidelines here.](https://hbr.org/2002/02/getting-the-truth-into-workplace-surveys)

### Host Skip-Level 1:1s

Skip-level 1:1s create a direct channel for information flow, regardless of one's status in the organization. They provide a safe space for employees to share concerns, ideas, and feedback with their manager's manager or another high-level leader. They also demonstrate to employees that their voices are valued, giving them a sense of empowerment and autonomy. The goal is to foster open communication and build trust across the organization. By listening to employees' concerns, leaders can identify and address potential issues before they escalate, reducing turnover and improving job satisfaction. Leaders can also offer guidance, mentorship, and opportunities for growth, aligning employees' goals with organizational objectives.

### Implement Employee-Recognition Programs

Establish structured programs to recognize employees for their contributions and achievements. This could include monthly awards, public acknowledgments during team meetings, a digital "kudos" board, or personalized appreciation notes. Share specific examples of outstanding work or helpful behaviors. By promoting a culture of appreciation and peer-to-peer acknowledgment, team morale and motivation improve significantly.

### Allocate Time To Have Fun and Build Strong Relationships

Allocating time for fun and relationship-building fosters trust, collaboration, and a sense of belonging among team members. When employees can share positive experiences, it strengthens psychological safety, boosts creativity, and encourages cross-team connections. These elements not only make the workplace more enjoyable but also encourage retention and productivity by signaling that the organization values its employees' well-being. An organization that balances productivity with meaningful relationships creates an environment where employees thrive.

### Automate Deployment Scripts

Develop scripts that automate the entire deployment process, including environment preparation, package deployment, configuration, and post-deployment testing. By scripting these steps, you eliminate manual interventions, reduce the risk of human error, and lessen deployment pain. A repeatable and reliable deployment process can then be triggered with minimal effort. This enhances not only deployment speed and consistency but also employee well-being.

### Incorporate Anomaly-Detection Tooling

To avoid having to manually verify systems are working in production after a deployment, incorporate tooling that flags anomalies in your system's various environments. Examples of such flags include: reporting spikes in compute or network resources, reporting new error-level log events, A/B testing two versions of a system with the same traffic, running automated user acceptance tests, and so on. Lower deployment pain equals higher well-being.

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to Well-Being)
- Upstream (they are a pre-requisite for Well-Being)
- Downstream (Well-Being is a pre-requisite for them)

### [Job Satisfaction](/capabilities/job-satisfaction.md) - Related

Job satisfaction is closely linked to well-being, as it reflects how content individuals are with their roles and work environment. When employees are satisfied with their jobs, they are more likely to experience higher levels of well-being. Focusing on factors that improve job satisfaction, such as meaningful work and recognition, can boost overall well-being.

### [Generative Organizational Culture](/capabilities/generative-organizational-culture.md) - Related

A generative organizational culture is characterized by high cooperation, shared risks, and a focus on performance. Employee well-being is supported in such an environment where individuals feel safe to take risks and collaborate. Improving organizational culture directly enhances employee well-being by reducing stressors associated with blame and fear.

### [Transformational Leadership](/capabilities/transformational-leadership.md) - Upstream

Transformational leaders motivate team members to exceed expectations by providing a clear vision, support, inspirational communication, intellectual stimulation, and personal recognition. Having such leadership in place can help address many organizational risk factors for burnout, such as lack of control and insufficient rewards. By promoting a positive work environment, transformational leaders enhance well-being within their teams.
`
