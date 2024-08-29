# Perform Static Code Analysis

Performing static code analysis involves using automated tools to review and scan the codebase for potential issues, ensuring adherence to quality standards and best practices.
These tools help detect issues early in development, integrating with version control systems, IDEs, and CI/CD pipelines to enhance productivity.
Static code analysis is valuable for spotting code smells, basic security vulnerabilities, performance bottlenecks, and analyzing dependencies for better modularity.

## Nuance

### Common Misconceptions about Static Code Analysis

A common misconception is that static code analysis can catch all possible issues in a codebase.
While these tools are powerful for identifying code smells, basic security vulnerabilities, and performance bottlenecks, they are not foolproof.
They may miss more nuanced or context-specific problems, and sometimes flag good code as problematic.
Developers should not solely rely on these tools but use them as part of a broader quality assurance strategy.

### Importance of Developer Judgment

While static code analysis tools are helpful, they should not replace developer judgment.
These tools can highlight potential issues, but it is up to the developers to make the final call on whether a flagged issue is truly problematic.
Blindly following the tool's recommendations can lead to unnecessary code changes and reduce overall productivity.
The ability to override automated checks ensures that the development process remains flexible and pragmatic.

### Impact on Code Reviews

Relying too heavily on static code analysis might lead to a reduction in code reviews.
Automated tools should complement, not replace, human reviews, which are essential for catching context-specific issues and providing valuable feedback on code design and architecture.
Ensuring that manual code reviews remain a part of the development process is vital for maintaining high code quality.

## How to Improve

### [Do A Spike](/practices/do-a-spike.md)

#### Tool Selection and Initial Setup

Identify and set up a static code analysis tool that fits your team's needs.
Research various static code analysis tools, such as SonarQube or CodeClimate, and compare their features.
Select one or two tools that seem promising and run them on a small project or segment of your codebase.
Integrate the chosen tool with your version control system and IDE.
Review the initial set of issues identified to understand the tool's strengths and weaknesses, and determine which tool aligns best with your workflow.

### [Lead Workshops](/practices/lead-workshops.md)

#### Dependency and Modularity Analysis

Use static code analysis tools to evaluate and improve module dependencies.
Run a dependency analysis on your current codebase and document areas with high coupling and poor cohesion.
Based on the analysis, refactor parts of the codebase to improve modularity.
Run the dependency analysis again to measure improvements.

### [Start A Book Club](/practices/start-a-book-club.md)

#### [Automate Your Coding Standard](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_04)

This resource provides insights into the importance of automating coding standards to maintain code quality and consistency.
It highlights how automated tools can help enforce coding conventions, making the codebase more manageable and the development process more efficient.

#### [Design structure matrix](https://en.wikipedia.org/wiki/Design_structure_matrix)

The Design Structure Matrix (DSM) is a visual tool used in systems engineering and project management to represent the interactions and dependencies within complex systems or processes in a compact, square matrix format.
Originating in the 1960s, DSMs gained popularity in the 1990s across various industries and government agencies.
They can model both static systems, where elements coexist simultaneously, and time-based systems, which reflect processes over time.
DSMs are advantageous for highlighting patterns, managing changes, and optimizing system structures.
They utilize algorithms for reordering elements to minimize feedback loops and can be extended to multiple domain matrices to visualize interactions across different domains, enhancing information flow and office work optimization.

#### [Two Wrongs Can Make a Right (and Are Difficult to Fix)](https://github.com/97-things/97-things-every-programmer-should-know/tree/master/en/thing_86)

The article "Two Wrongs Can Make a Right (and Are Difficult to Fix)" by Allan Kelly highlights the complex nature of software bugs, particularly when two defects interact to create a single visible fault. This interplay can lead developers to repeatedly attempt fixes that fail because they only address part of the problem. Such scenarios demonstrate the importance of comprehensive error detection and resolution strategies. This concept supports the Perform Static Code Analysis Practice by underscoring the limitations of relying solely on automated tools to catch all issues. While static code analysis can identify many potential problems, it may miss nuanced or context-specific defects, especially those involving multiple interacting errors.

#### [The power of feedback loops](https://lucamezzalira.medium.com/the-power-of-feedback-loops-f8e27e8ac25f)

Luca Mezzalira's article 'The Power of Feedback Loops' underscores how iterative feedback enhances processes, resonating with the practice of Perform Static Code Analysis.
Like feedback loops in development cycles, static code analysis tools automate early detection of issues such as code smells and security vulnerabilities, aligning with Mezzalira's advocacy for leveraging feedback to maintain high standards while emphasizing the need for developer judgment and human oversight in software quality assurance.

### [Host A Viewing Party](/practices/host-a-viewing-party.md)

#### [System architecture as network data](https://vimeo.com/241241654)

The speaker emphasizes the importance of loose coupling and high cohesion in software architecture to reduce dependencies between modules, thereby minimizing meetings and coordination overhead.
They demonstrate how to use tools like Line Topology, Cytoscape, and Jupyter Notebooks to analyze and visualize code dependencies, enabling automated detection of modularity and cohesion in the system.
By using network science and computational techniques, the speaker argues for the value of objective metrics in assessing and improving code modularity, drawing parallels to social networks and using examples like Game of Thrones character interactions to illustrate their points.

### [Host A Roundtable Discussion](/practices/host-a-roundtable-discussion.md)

#### Understanding and Usage

* How well do we understand the capabilities and limitations of our static code analysis tools?
* Are we using static code analysis tools to their full potential within our development process?

#### Integration and Workflow

* How are our static code analysis tools integrated with our version control systems, IDEs, and CI/CD pipelines?
* Are there any bottlenecks or disruptions caused by static code analysis tools in our current workflow?

#### Developer Judgment

* Do our developers feel empowered to override automated checks when necessary?
* How often do we find that flagged issues are false positives, and how do we handle them?

#### Issue Detection and Resolution

* Are we addressing the issues identified by static code analysis tools promptly and effectively?
* How frequently do we encounter issues that static code analysis tools miss, and how can we improve our detection methods?

#### Dependency Analysis

* How effectively are we using static code analysis tools to assess and improve module cohesion and dependency management?
* Are there areas in our codebase with poor modularity that these tools have helped us identify and improve?

## Supporting Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

The Perform Static Code Analysis practice robustly supports the Code Maintainability Dora Capability by providing automated tools that enhance code quality, consistency, and readability.
These tools meticulously scan the codebase to identify potential issues such as code smells, security vulnerabilities, and performance bottlenecks early in the development process.
By integrating static code analysis into version control systems, IDEs, and CI/CD pipelines, teams can receive immediate feedback on code changes, ensuring adherence to coding standards and best practices. This proactive approach reduces the cognitive load on developers, allowing them to focus on more complex tasks while maintaining a clean, modular, and easily comprehensible codebase.