import { Rule } from "../Rule";

export class NewLineAfterHeadings extends Rule<string, 'new-line-after-headings'> {
    override run(subject: string) {
        const lines = subject.split('\n')
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]?.charAt(0) === '#' && i+1 < lines.length && lines[i+1] !== '') {
                this.report('new-line-after-headings', 'You must have a new line after headings.', {
                    row: i + 2, 
                    col: 1,
                })
            }
        }
    }
}
