import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import remarkLint from 'remark-lint'
import remarkStringify from 'remark-stringify'
import remarkLintFinalNewline from "remark-lint-final-newline";
import remarkLintNoHtml from "remark-lint-no-html";

export class RemarkRules extends Rule<VFile, string> {
    override async run(file: VFile) {
        await unified()
            .use(remarkParse)
            .use(remarkLint)
            .use(remarkLintFinalNewline)
            .use(remarkLintNoHtml)
            .use(remarkStringify)
            .process(file)

        file.messages.map(m => {
            if (m.file === undefined) return
            this.report(
                m.file, 
                m.ruleId || 'unknown-rule', 
                m.message, 
                { col: m.column || -1, row: m.line || -1 }
            )
        })
    }
}
