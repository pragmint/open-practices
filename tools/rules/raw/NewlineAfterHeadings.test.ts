import { describe, it, expect } from 'bun:test'
import { NewLineAfterHeadings } from './NewLineAfterHeadings'

const mkRule = () => new NewLineAfterHeadings({'new-line-after-headings': 'silent'})

describe(NewLineAfterHeadings.name, () => {
    it('should fail if there is no newline after a heading', () => {
        const rule = mkRule()
        rule.run({filename:"mock-thing.md", content: `
# Some Heading
This is not correct.
`})
        const problems = rule.getProblems()
        expect(problems).not.toBeEmpty()
    })
    it('should succeed if there is a newline after a heading', () => {
        const rule = mkRule()
        rule.run({filename:"mock-thing.md", content: `# Some Heading

This is not correct.
`})
        expect(rule.getProblems()).toBeEmpty()
    })
    it('should not report when heading is last line (This is a different lint error)', () => {
        const rule = mkRule()
        rule.run({ filename:"mock-thing.md", content: `# Some Heading` })
        expect(rule.getProblems()).toBeEmpty()
    })
})
