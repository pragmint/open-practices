import { NewLineAfterHeadings } from "./rules/normal/NewLineAfterHeadings";
import { Runner } from './src/Runner';
import { Repo, ROOT } from './src/Repo';
import { NoTrailingWhitespace } from "./rules/normal/NoTrailingWhitespace";
import { RemarkRules } from "./rules/normal/RemarkRules";
import { StraightQuotes } from "./rules/normal/StraightQuotes";
import { NoEmDash } from "./rules/normal/NoEmDash";
import { HeadingCase } from "./rules/normal/HeadingCase";
import { WordList } from "./rules/normal/WordList";
import { InternalLinksResolve } from "./rules/normal/InternalLinksResolve";
import { CapabilityLinks } from "./rules/normal/CapabilityLinks";
import { PracticeStructure } from "./rules/normal/PracticeStructure";
import { ResourceStructure } from "./rules/normal/ResourceStructure";
import { parseWordList } from "./src/wordList";
import { applyAllFixes } from "./src/fixes";
import { setPageTypeOverride, type PageType } from "./src/pageType";
import remarkLintFinalNewline from "remark-lint-final-newline";
import remarkLintNoHtml from "remark-lint-no-html";
import type { VFile } from "vfile";
import { parseArgs } from "util";
import { join, resolve } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import remarkLintNoTabs from "remark-lint-no-tabs";
import remarkLintUnorderedListMarkerStyle from "remark-lint-unordered-list-marker-style";
import remarkLintListItemContentIndent from "remark-lint-list-item-content-indent";
import remarkLintListItemIndent from "remark-lint-list-item-indent";

const { values, positionals } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    quickFix: {
      type: "boolean",
      short: "q",
    },
    fix: {
      type: "boolean",
    },
    json: {
      type: "boolean",
    },
    type: {
      type: "string",
    },
  },
  allowPositionals: true,
  strict: true,
});

if (values.type !== undefined) {
    if (!['practice', 'resource', 'capability'].includes(values.type)) {
        console.error(`--type must be practice, resource, or capability (got "${values.type}")`)
        process.exit(2)
    }
    setPageTypeOverride(values.type as PageType)
}

// Run from any directory: file arguments are resolved against where the command was invoked.
const paths = positionals.map(p => resolve(process.env.INIT_CWD ?? process.cwd(), p))

if (values.fix) {
    if (paths.length === 0) {
        console.error('--fix only runs on files you name, e.g. bun index.ts --fix ../practices/refactor.md')
        process.exit(2)
    }
    for (const path of paths) {
        const before = readFileSync(path, 'utf8')
        const after = applyAllFixes(before)
        if (after !== before) writeFileSync(path, after)
    }
}

const words = parseWordList(readFileSync(join(ROOT, 'copy-guidelines', 'words.md'), 'utf8'))

const runner = new Runner<VFile>(paths.length > 0 ? await Repo.files(paths) : await Repo.all(), [
    new NewLineAfterHeadings(),
    new NoTrailingWhitespace(),
    new StraightQuotes(),
    new NoEmDash(),
    new HeadingCase(),
    new WordList(words),
    new InternalLinksResolve(ROOT),
    new CapabilityLinks(ROOT),
    new PracticeStructure(),
    new ResourceStructure(),
    new RemarkRules([ // See additional rules here: https://github.com/remarkjs/remark-lint/tree/main?tab=readme-ov-file#rules
        remarkLintFinalNewline,
        remarkLintNoTabs,
        remarkLintListItemContentIndent,
        [remarkLintListItemIndent, "one"],
        [remarkLintUnorderedListMarkerStyle, '-'],
        [remarkLintNoHtml, { allowComments: false }],
    ]),
])

await runner.run()

if (values.json) {
    await runner.printJson()
} else if (!runner.issuesWereFound()) {
    console.log("No issues found")
} else if (values.quickFix) {
    runner.printQuickFix()
} else {
    runner.print()
}

// Warnings are advisory; only errors fail the run.
process.exitCode = runner.errorsWereFound() ? 1 : 0
