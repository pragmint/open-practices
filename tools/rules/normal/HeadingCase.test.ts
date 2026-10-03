import { describe, it, expect } from 'bun:test'
import { HeadingCase, toTitleCase } from './HeadingCase'
import { mkInput } from './testing'

describe(HeadingCase.name, () => {
    it('applies AP-style title case', () => {
        expect(toTitleCase('talk directly with users')).toBe('Talk Directly With Users')
        expect(toTitleCase('Run a Pilot On a Single Repo')).toBe('Run a Pilot on a Single Repo')
        expect(toTitleCase('Version Control is Crucial')).toBe('Version Control Is Crucial')
        expect(toTitleCase('What to look for')).toBe('What to Look For')
    })
    it('leaves acronyms, brands, and numbers alone', () => {
        expect(toTitleCase('Adopt OTel on iOS and GitHub v2')).toBe('Adopt OTel on iOS and GitHub v2')
    })
    it('checks only the first part of a hyphenated compound', () => {
        expect(toTitleCase('Trunk-based Development')).toBe('Trunk-based Development')
        expect(toTitleCase('long-Term Velocity')).toBe('Long-Term Velocity')
    })
    it('skips fixed template headings and H4+', () => {
        const rule = new HeadingCase()
        rule.run(mkInput('## Lessons From The Field\n\n#### not checked here\n'))
        expect(rule.getProblems()).toBeEmpty()
    })
    it('warns with the expected heading', () => {
        const rule = new HeadingCase()
        rule.run(mkInput('### decouple from third parties\n'))
        const [p] = rule.getProblems()
        expect(p!.getLevel()).toBe('warning')
        expect(p!.toJSON().message).toContain('"Decouple From Third Parties"')
    })
})
