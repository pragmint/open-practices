import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import remarkParse from 'remark-parse'
import { unified, type PluggableList } from 'unified'
import remarkLint from 'remark-lint'
import remarkStringify from 'remark-stringify'
import remarkLintNoHtml from "remark-lint-no-html";
import remarkLintFinalNewline from "remark-lint-final-newline";

export class RemarkRules extends Rule<VFile, string> {
    private list: PluggableList
    constructor(list: PluggableList) {
        super()
        this.list = list
    }
    override async run(file: VFile) {
        await unified()
            .use(remarkParse)
            .use(remarkLint)
            .use(this.list)
            .use(remarkStringify)
            .process(file)

        file.messages.forEach(m => {
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
