import { describe, it, expect } from 'bun:test'
import { StraightQuotes } from './StraightQuotes'
import { straightenQuotes } from '../../src/fixes'
import { mkInput } from './testing'

describe(StraightQuotes.name, () => {
    it('reports curly double and single quotes', () => {
        const rule = new StraightQuotes()
        rule.run(mkInput('He said “hi” and it’s fine.\n'))
        expect(rule.getProblems()).toHaveLength(3)
    })
    it('accepts straight quotes', () => {
        const rule = new StraightQuotes()
        rule.run(mkInput(`He said "hi" and it's fine.\n`))
        expect(rule.getProblems()).toBeEmpty()
    })
    it('is fixable outside code fences only', () => {
        const input = '“prose”\n```\n“code”\n```\n'
        expect(straightenQuotes(input)).toBe('"prose"\n```\n“code”\n```\n')
    })
})
