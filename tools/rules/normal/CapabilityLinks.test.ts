import { describe, it, expect } from 'bun:test'
import { CapabilityLinks } from './CapabilityLinks'
import { ROOT } from '../../src/Repo'
import { mkInput } from './testing'

const page = (capabilities: string) => `# Do a Thing

Intro.

## When to Experiment

- You're a developer.

## Supporting Capabilities

${capabilities}
`

const problems = (capabilities: string, path?: string) => {
    const rule = new CapabilityLinks(ROOT)
    rule.run(mkInput(page(capabilities), path))
    return rule.getProblems()
}

describe(CapabilityLinks.name, () => {
    it('accepts links to existing capabilities', () => {
        expect(problems('### [Code Maintainability](/capabilities/code-maintainability.md)\n\nWhy.')).toBeEmpty()
    })
    it('rejects unknown capabilities', () => {
        expect(problems('### [Made Up](/capabilities/made-up.md)\n\nWhy.')).toHaveLength(1)
    })
    it('rejects plain headings and external links', () => {
        expect(problems('### Code Maintainability\n\nWhy.\n\n### [CI](https://dora.dev/ci)\n\nWhy.')).toHaveLength(2)
    })
    it('only runs on practices', () => {
        expect(problems('### Made Up', '/repo/resources/tech/x.md')).toBeEmpty()
    })
})
