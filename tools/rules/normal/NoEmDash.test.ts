import { describe, it, expect } from 'bun:test'
import { NoEmDash } from './NoEmDash'
import { mkInput } from './testing'

const problems = (content: string) => {
    const rule = new NoEmDash()
    rule.run(mkInput(content))
    return rule.getProblems()
}

describe(NoEmDash.name, () => {
    it('warns on em dashes, spaced en dashes, and double hyphens', () => {
        const found = problems('One—two. Three – four. Five -- six.\n')
        expect(found).toHaveLength(3)
        expect(found.every(p => p.getLevel() === 'warning')).toBeTrue()
    })
    it('allows hyphens in ranges and compounds', () => {
        expect(problems('Run it for 2-3 weeks with a high-severity label.\n')).toBeEmpty()
    })
    it('ignores code and horizontal rules', () => {
        expect(problems('Run `a -- b`.\n\n---\n\n```\nx -- y\n```\n')).toBeEmpty()
    })
    it('reports the right line', () => {
        const [p] = problems('First line.\n\nSecond — line.\n')
        expect(p!.toJSON().line).toBe(3)
    })
})
