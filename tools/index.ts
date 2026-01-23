import { NewLineAfterHeadings } from "./rules/raw/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { OpenPracticesRepository } from './src/Repository';
import { NoTrailingWhitespace } from "./rules/raw/NoTrailingWhitespace";
import { join } from 'node:path'
import { read } from 'to-vfile'
import { RemarkRules } from "./rules/remark/RemarkRules";
import type { VFile } from "vfile";

const lintableFileRunner = new Runner<LintableFile>(await OpenPracticesRepository.getCapabilities(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace(),
])

const filepath = join(import.meta.dir, '..', 'capabilities', 'test-automation.md')
const file = await read(filepath)

const remarkRunner = new Runner<VFile>([file], [
    new RemarkRules()
])

await remarkRunner.run()
await lintableFileRunner.run()

if (lintableFileRunner.issuesWereFound() || remarkRunner.issuesWereFound()) {
    lintableFileRunner.print()
    remarkRunner.print()
    process.exit(1)
} else {
    console.log("No issues found")
    process.exit(0)
}
