import { NewLineAfterHeadings } from "./rules/raw/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { Repo } from './src/Repo';
import { NoTrailingWhitespace } from "./rules/raw/NoTrailingWhitespace";
import { RemarkRules } from "./rules/remark/RemarkRules";
import type { VFile } from "vfile";

const runner = new Runner<VFile>(await Repo.capabilities().vfiles(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace(),
    new RemarkRules(),
])

await runner.run()

if (runner.issuesWereFound()) {
    runner.print()
    process.exit(1)
} else {
    console.log("No issues found")
    process.exit(0)
}
