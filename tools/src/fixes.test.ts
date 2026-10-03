import { describe, it, expect } from 'bun:test'
import { applyAllFixes, blankLineAfterHeadings, dashListMarkers, finalNewline } from './fixes'

describe('fixes', () => {
    it('converts list markers but not bold text or fenced code', () => {
        expect(dashListMarkers('* one\n  + two\n**bold**\n```\n* code\n```')).toBe('- one\n  - two\n**bold**\n```\n* code\n```')
    })
    it('adds a blank line after headings outside code fences', () => {
        expect(blankLineAfterHeadings('# Title\nText\n```\n# comment\nx\n```')).toBe('# Title\n\nText\n```\n# comment\nx\n```')
    })
    it('ends the file with exactly one newline', () => {
        expect(finalNewline('text\n\n\n')).toBe('text\n')
        expect(finalNewline('text')).toBe('text\n')
    })
    it('is idempotent', () => {
        const once = applyAllFixes('# T\n* “a”  \nb')
        expect(applyAllFixes(once)).toBe(once)
        expect(once).toBe('# T\n\n- "a"\nb\n')
    })
})
