import { describe, it, expect } from 'bun:test'
import { NoTrailingWhitespace } from './NoTrailingWhitespace'

const mkRule = () => new NoTrailingWhitespace({'no-trailing-white-space': 'silent'})

describe(NoTrailingWhitespace.name, () => {
    it('should fail when lines have trailing whitespace', () => {
        const rule = mkRule()
        const content = `
# Some Heading    
This is not correct.
`
        rule.run({ filename: "mock-file.md", content })
        const problems = rule.getProblems()
        expect(problems).not.toBeEmpty()
        expect(problems[0]?.getFileLocation().row).toEqual(2)
        expect(problems[0]?.getFileLocation().col).toEqual(15)
    })
    it('should not fail when no lines have trailing white space', () => {
        const rule = mkRule()
        const content = `# Some Heading
This is not correct.
`
        rule.run({ filename: "mock-file.md", content })
        const problems = rule.getProblems()
        expect(problems).toBeEmpty()
    })
})
