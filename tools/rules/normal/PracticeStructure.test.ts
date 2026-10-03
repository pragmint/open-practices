import { describe, it, expect } from 'bun:test'
import { PracticeStructure } from './PracticeStructure'
import { setPageTypeOverride } from '../../src/pageType'
import { mkInput } from './testing'

const VALID = `# Do a Thing

What it is.

Why it matters.

## When to Experiment

- You're a developer who needs X so you can Y.
- You're a manager who needs X so you can Y.

## How to Gain Traction

### Start Small

One paragraph.

### Expand

One paragraph.

## Lessons From The Field

- *Lesson One.* Detail.
- *Lesson Two.* Detail.

## Deciding to Polish or Pitch

After experimenting with this practice for **2-3 weeks**, bring the team together to determine whether the following metrics and/or signals have changed in a positive direction:

### Fast & Measurable

**Fewer Broken Builds**. Details.

### Slow & Intangible

**More Trust**. Details.

## Supporting Capabilities

### [Code Maintainability](/capabilities/code-maintainability.md)

How it supports it.

### [Test Automation](/capabilities/test-automation.md)

How it supports it.
`

const run = (content: string, path?: string) => {
    const rule = new PracticeStructure()
    rule.run(mkInput(content, path))
    return rule.getProblems().map(p => ({ level: p.getLevel(), message: p.toJSON().message }))
}
const errors = (content: string) => run(content).filter(p => p.level === 'error')

describe(PracticeStructure.name, () => {
    it('accepts a page that follows the template', () => {
        expect(run(VALID)).toEqual([])
    })
    it('reports legacy pages once as a warning', () => {
        const found = run('# Old Practice\n\n## Nuances\n\nText.\n')
        expect(found).toHaveLength(1)
        expect(found[0]!.level).toBe('warning')
    })
    it('reports missing or reordered sections', () => {
        const swapped = VALID.replace('## Lessons From The Field', '## Lessons').replace('## How to Gain Traction', '## Getting Started')
        expect(errors(swapped).some(p => p.message.startsWith('H2 sections must be'))).toBeTrue()
    })
    it('warns, rather than fails, on known heading variants', () => {
        const found = run(VALID.replace('## Supporting Capabilities', '## Supported Capabilities'))
        expect(found).toEqual([{ level: 'warning', message: 'Use the template heading "## Supporting Capabilities" instead of "## Supported Capabilities"' }])
    })
    it('requires the polish-or-pitch boilerplate', () => {
        const changed = VALID.replace('bring the team together', 'get together')
        expect(errors(changed).some(p => p.message.includes('template sentence'))).toBeTrue()
    })
    it('rejects unknown quadrant headings', () => {
        expect(errors(VALID.replace('### Slow & Intangible', '### Medium & Fuzzy'))).toHaveLength(1)
    })
    it('requires a paragraph under each traction step', () => {
        expect(errors(VALID.replace('### Expand\n\nOne paragraph.', '### Expand\n\n- a bullet'))).toHaveLength(1)
    })
    it('warns on counts outside the template ranges', () => {
        const oneBullet = VALID.replace("- You're a manager who needs X so you can Y.\n", '')
        expect(run(oneBullet)).toEqual([{ level: 'warning', message: '"When to Experiment" has 1 bullets; the template asks for 2-6' }])
    })
    it('skips non-practice pages unless the type is overridden', () => {
        expect(run('# Anything\n', '/repo/resources/tech/x.md')).toEqual([])
        setPageTypeOverride('practice')
        expect(run('# Anything\n', '/repo/resources/tech/x.md')).toHaveLength(1)
        setPageTypeOverride(null)
    })
    it('treats skill drafts under .tmp/practice-*/ as practices', () => {
        expect(run('# Anything\n', '/repo/.tmp/practice-do-a-thing/draft-v1.md')).toHaveLength(1)
    })
})
