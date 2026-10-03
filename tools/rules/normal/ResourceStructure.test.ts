import { describe, it, expect } from 'bun:test'
import { ResourceStructure } from './ResourceStructure'
import { mkInput } from './testing'

const run = (content: string) => {
    const rule = new ResourceStructure()
    rule.run(mkInput(content, '/repo/resources/tech/thing.md'))
    return rule.getProblems().map(p => ({ level: p.getLevel(), message: p.toJSON().message }))
}

const VALID = `# Boundaries by Gary Bernhardt

Resource type: Video

https://www.destroyallsoftware.com/talks/boundaries

A talk about values as boundaries.
`

describe(ResourceStructure.name, () => {
    it('accepts the standard header', () => {
        expect(run(VALID)).toEqual([])
    })
    it('accepts a markdown link as the source', () => {
        expect(run(VALID.replace(/^https.*$/m, '[Watch the talk](https://example.com/talk)'))).toEqual([])
    })
    it('requires a resource type line', () => {
        expect(run(VALID.replace('Resource type: Video\n\n', ''))[0]!.message).toStartWith('Missing "Resource type')
    })
    it('rejects unknown types and warns on casing', () => {
        expect(run(VALID.replace('Video', 'Hologram'))[0]!.level).toBe('error')
        expect(run(VALID.replace('Video', 'video'))).toEqual([{ level: 'warning', message: 'Write the resource type as "Video"' }])
    })
    it('requires a link to the resource', () => {
        expect(run(VALID.replace(/^https.*$/m, 'No link here.')).some(p => p.message.startsWith('Missing a link'))).toBeTrue()
    })
})
