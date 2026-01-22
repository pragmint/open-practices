import { NewLineAfterHeadings } from "./rules/raw/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { OpenPracticesRepository } from './src/Repository';
import { NoTrailingWhitespace } from "./rules/raw/NoTrailingWhitespace";

const lintableFileRunner = new Runner<LintableFile>(await OpenPracticesRepository.getCapabilities(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace()
])

lintableFileRunner.run()

if (lintableFileRunner.issuesWereFound()) {
    lintableFileRunner.print()
    process.exit(1)
} else {
    console.log("No issues found")
    process.exit(0)
}
