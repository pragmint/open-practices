import { Rule } from "../../src/Rule";

export class NoTrailingWhitespace extends Rule<LintableFile, 'no-trailing-white-space'> {
    override run({ filename, content }: LintableFile) {
        const lines = content.split('\n')
        for (const [index, line] of lines.entries()) {
            if (line !== line.trim()) {
                this.report(filename, 'no-trailing-white-space', 'Trailing whitespace is not allowed', {
                    row: index + 1, 
                    col: line.trim().length+1,
                })
            }
        }
    }
}
