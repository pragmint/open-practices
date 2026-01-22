import { Rule } from "../../src/Rule";

export class NewLineAfterHeadings extends Rule<LintableFile, 'new-line-after-headings'> {
    override run({ filename, content }: LintableFile) {
        const lines = content.split('\n')
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]?.charAt(0) === '#' && i+1 < lines.length && lines[i+1] !== '') {
                this.report(filename, 'new-line-after-headings', 'You must have a new line after headings.', {
                    row: i + 2, 
                    col: 1,
                })
            }
        }
    }
}
