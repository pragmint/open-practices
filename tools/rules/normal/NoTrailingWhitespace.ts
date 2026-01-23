import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";

export class NoTrailingWhitespace extends Rule<VFile, 'no-trailing-white-space'> {
    override run(file: VFile) {
        const content = file.value.toString()
        const filename = file.path
        const lines = content.split('\n')
        for (const [index, line] of lines.entries()) {
            if (line !== line.trimEnd()) {
                this.report(filename, 'no-trailing-white-space', 'Trailing whitespace is not allowed', {
                    row: index + 1, 
                    col: line.trimEnd().length + 1,
                })
            }
        }
    }
}
