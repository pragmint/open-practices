import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";

const CURLY = /[‘’‚‛“”„‟′″]/g

export class StraightQuotes extends Rule<VFile, 'straight-quotes'> {
    override run(file: VFile) {
        const lines = file.value.toString().split('\n')
        for (const [index, line] of lines.entries()) {
            for (const match of line.matchAll(CURLY)) {
                this.report(file.path, 'straight-quotes', `Use straight quotes instead of "${match[0]}" (fixable with --fix)`, {
                    line: index + 1,
                    column: match.index! + 1,
                })
            }
        }
    }
}
