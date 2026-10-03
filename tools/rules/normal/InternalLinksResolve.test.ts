import { describe, it, expect } from 'bun:test'
import { join } from 'node:path'
import { InternalLinksResolve } from './InternalLinksResolve'
import { ROOT } from '../../src/Repo'
import { mkInput } from './testing'

const problems = (content: string) => {
    const rule = new InternalLinksResolve(ROOT)
    rule.run(mkInput(content, join(ROOT, 'practices', 'mock.md')))
    return rule.getProblems()
}

describe(InternalLinksResolve.name, () => {
    it('accepts root-relative links to existing files, with anchors', () => {
        expect(problems('See [CM](/capabilities/code-maintainability.md#nuances).\n')).toBeEmpty()
    })
    it('accepts file-relative links', () => {
        expect(problems('See [TDD](implement-tdd.md) and [README](../README.md).\n')).toBeEmpty()
    })
    it('reports missing targets', () => {
        expect(problems('See [nope](/practices/does-not-exist.md).\n')).toHaveLength(1)
    })
    it('ignores external links, anchors, and mailto', () => {
        expect(problems('[a](https://x.dev) [b](#top) [c](mailto:a@b.c)\n')).toBeEmpty()
    })
})
