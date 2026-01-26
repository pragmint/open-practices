import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";

export class NewLineAfterHeadings extends Rule<VFile, 'new-line-after-headings'> {
    override run(file: VFile) {
        const content = file.value.toString()
        const filename = file.path
        const lines = content.split('\n')
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]?.charAt(0) === '#' && i+1 < lines.length && lines[i + 1] !== '') {
                this.report(filename, 'new-line-after-headings', 'You must have a new line after headings.', {
                    line: i + 2, 
                    column: 1,
                })
            }
        }
    }
}
