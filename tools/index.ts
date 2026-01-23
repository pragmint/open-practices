import { NewLineAfterHeadings } from "./rules/normal/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { Repo } from './src/Repo';
import { NoTrailingWhitespace } from "./rules/normal/NoTrailingWhitespace";
import { RemarkRules } from "./rules/normal/RemarkRules";
import remarkLintFinalNewline from "remark-lint-final-newline";
import remarkLintNoHtml from "remark-lint-no-html";
import type { VFile } from "vfile";

import { parseArgs } from "util";
import remarkLintNoTabs from "remark-lint-no-tabs";
import remarkLintUnorderedListMarkerStyle from "remark-lint-unordered-list-marker-style";
import remarkLintListItemContentIndent from "remark-lint-list-item-content-indent";
import remarkLintListItemIndent from "remark-lint-list-item-indent";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    quickFix: {
      type: "boolean",
      short: "q",
    },
  },
  allowPositionals: true,
  strict: true,
});

console.log();

const runner = new Runner<VFile>(await Repo.capabilities().vfiles(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace(),
    new RemarkRules([
        remarkLintFinalNewline,
        remarkLintNoTabs,
        remarkLintListItemContentIndent,
        [remarkLintListItemIndent, "one"],
        [remarkLintUnorderedListMarkerStyle, '-'],
        [remarkLintNoHtml, { allowComments: false }],
    ]),
])

await runner.run()

if (runner.issuesWereFound()) {
    if (values.quickFix) {
        runner.printQuickFix()
    } else {
        runner.print()
    }
    process.exit(1)
} else {
    console.log("No issues found")
    process.exit(0)
}
