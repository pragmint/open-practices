import { describe, it, expect } from 'bun:test'
import { joinSections, splitSections, validateEdits } from './sections'

const PAGE = `# Title

Intro.

## First

Body one.

\`\`\`md
## not a section
\`\`\`

## Second

Body two.
`

describe('splitSections', () => {
    it('splits at H2s, keeping the title and intro as the first section', () => {
        const sections = splitSections(PAGE)
        expect(sections.map(s => s.title)).toEqual(['Introduction', 'First', 'Second'])
        expect(sections[0]!.text).toBe('# Title\n\nIntro.\n')
    })
    it('ignores headings inside code fences', () => {
        expect(splitSections(PAGE)[1]!.text).toContain('## not a section')
    })
    it('assigns lint findings to sections with relative line numbers', () => {
        const lint = [{ line: 7, column: 1, ruleId: 'no-em-dash', level: 'warning', message: 'x' }]
        const [, first] = splitSections(PAGE, lint)
        expect(first!.lint).toEqual([{ ...lint[0]!, line: 3 }])
    })
})

describe('joinSections', () => {
    it('round-trips an unedited page', () => {
        expect(joinSections(splitSections(PAGE))).toBe(PAGE)
    })
    it('replaces edited sections only', () => {
        const sections = splitSections(PAGE)
        sections[2]!.edited = '## Second\n\nBody two, edited.\n\n'
        expect(joinSections(sections)).toBe(PAGE.replace('Body two.', 'Body two, edited.'))
    })
})

describe('validateEdits', () => {
    it('rejects an edit that changes the heading', () => {
        const sections = splitSections(PAGE)
        sections[1]!.edited = '## Renamed\n\nBody one.'
        expect(validateEdits(sections)).toHaveLength(1)
    })
    it('rejects an introduction that lost its H1', () => {
        const sections = splitSections(PAGE)
        sections[0]!.edited = 'Intro.'
        expect(validateEdits(sections)).toHaveLength(1)
    })
})
