import { describe, it, expect } from 'bun:test'
import { NoTrailingWhitespace } from './NoTrailingWhitespace'
import type { VFile } from 'vfile'

const mkRule = () => new NoTrailingWhitespace({'no-trailing-white-space': 'silent'})

const mkInput = (content: string) => {
    return { path: "mock-thing.md", value: Buffer.from(content) } as unknown as VFile
}

describe(NoTrailingWhitespace.name, () => {
    it('should fail when lines have trailing whitespace', () => {
        const rule = mkRule()
        const content = mkInput(`
# Some Heading    
This is not correct.
`)
        rule.run(content)
        const problems = rule.getProblems()
        expect(problems).not.toBeEmpty()
        expect(problems[0]?.getFileLocation().line).toEqual(2)
        expect(problems[0]?.getFileLocation().column).toEqual(15)
    })
    it('should not fail when no lines have trailing white space', () => {
        const rule = mkRule()
        const content = mkInput(`# Some Heading
This is not correct.
- cool
  - beans
`)
        rule.run(content)
        const problems = rule.getProblems()
        expect(problems).toBeEmpty()
    })
})
