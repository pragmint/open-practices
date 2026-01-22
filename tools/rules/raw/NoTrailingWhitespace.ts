import { Rule } from "../../src/Rule";

export class NoTrailingWhitespace extends Rule<LintableFile, 'no-trailing-white-space'> {
    override run({ filename, content }: LintableFile) {
        const lines = content.split('\n')
        for (const [index, line] of lines.entries()) {
            if (line !== line.trimEnd()) {
                this.report(filename, 'no-trailing-white-space', 'Trailing whitespace is not allowed', {
                    row: index + 1, 
                    col: line.trimEnd().length+1,
                })
            }
        }
    }
}
