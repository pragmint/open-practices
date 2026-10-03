import { describe, it, expect } from 'bun:test'
import { WordList } from './WordList'
import { parseWordList } from '../../src/wordList'
import { mkInput } from './testing'

const WORDS = `
## P

| Use | Don't use | Notes |
|---|---|---|
| \`postmortem\` | \`post-mortem\`, \`post mortem\` | One word |
| pull request (PR) | | Guidance only |

## K

| Use | Don't use | Notes |
|---|---|---|
| \`kanban board\` | \`Kanban board\` | Lowercase |
| \`I/O\` | \`IO\` | |
| \`Functional Core, Imperative Shell\` | \`functional core, imperative shell\` | |
`

const problems = (content: string) => {
    const rule = new WordList(parseWordList(WORDS))
    rule.run(mkInput(content))
    return rule.getProblems().map(p => p.toJSON().message)
}

describe('parseWordList', () => {
    it('reads enforceable rows and skips guidance-only rows', () => {
        const entries = parseWordList(WORDS)
        expect(entries).toHaveLength(4)
        expect(entries[0]).toEqual({ use: ['postmortem'], avoid: ['post-mortem', 'post mortem'], notes: 'One word' })
    })
    it('keeps commas inside backticked terms', () => {
        expect(parseWordList(WORDS)[3]!.use).toEqual(['Functional Core, Imperative Shell'])
    })
})

describe(WordList.name, () => {
    it('flags avoided terms regardless of case', () => {
        expect(problems('Write a Post-Mortem after the incident.\n')).toHaveLength(1)
    })
    it('enforces capitalization when use and avoid differ only by case', () => {
        expect(problems('Update the Kanban board.\n')).toHaveLength(1)
        expect(problems('Update the kanban board.\n')).toBeEmpty()
    })
    it('allows title case in headings', () => {
        expect(problems('## Update the Kanban Board\n')).toBeEmpty()
    })
    it('ignores code, URLs, and domains', () => {
        expect(problems('Run `post-mortem` and visit [docs](https://x.io/post-mortem) or opentelemetry.io today.\n')).toBeEmpty()
    })
    it('matches whole words only', () => {
        expect(problems('Kubernetes IOPS are fine.\n')).toBeEmpty()
    })
})
