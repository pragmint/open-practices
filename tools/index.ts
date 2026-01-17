import { example_capability } from "./src/example-capability";
import { Registry } from "./src/Registry";
import { NewLineAfterHeadings } from "./src/rules/raw/NewlineAfterHeadings";

type ExitCode = 0 | 1

function runRawLintRules(input: string): ExitCode {
    const registry = new Registry<string>()
    registry.register(new NewLineAfterHeadings({ 'new-line-after-headings': 'error' }))
    registry.run(input)
    registry.print()
    
    const problems = registry.getProblems()
    
    if (problems.length !== 0) {
        return 1
    }
    return 0
}

process.exit(runRawLintRules(example_capability))

// run raw lint rules on the text
// parse practice into practice data structure
// run structrual lint rules on the data structure
// output result
