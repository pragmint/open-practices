import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import remarkParse from 'remark-parse'
import { unified, type PluggableList } from 'unified'
import remarkLint from 'remark-lint'
import remarkStringify from 'remark-stringify'

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
            this.reportVfileMessage(m)
        })
    }
}
