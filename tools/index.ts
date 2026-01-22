import { NewLineAfterHeadings } from "./rules/raw/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { OpenPracticesRepository } from './src/Repository';
import { NoTrailingWhitespace } from "./rules/raw/NoTrailingWhitespace";

const runner = new Runner<LintableFile>(await OpenPracticesRepository.getCapabilities(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace()
])

runner.run()

if (runner.issuesWereFound()) {
    runner.print()
    process.exit(1)
} else {
    console.log("No issues found")
    process.exit(0)
}

// run raw lint rules on the text
// parse practice into practice data structure
// run structrual lint rules on the data structure
// output result
