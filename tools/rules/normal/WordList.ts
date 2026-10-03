import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import { headings, parse, pointAt, proseText } from "../../src/markdown";
import type { WordEntry } from "../../src/wordList";

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

type Matcher = { pattern: RegExp, entry: WordEntry }

export class WordList extends Rule<VFile, 'word-list'> {
    private matchers: Matcher[]

    constructor(entries: WordEntry[], config?: ConstructorParameters<typeof Rule>[0]) {
        super(config)
        this.matchers = entries.flatMap(entry => entry.avoid.map(avoid => ({
            // Word boundaries that also skip domains and paths, so "io" in "opentelemetry.io" isn't a match.
            pattern: new RegExp(`(?<![\\w./-])${escape(avoid)}(?![\\w/-]|\\.\\w)`, 'gi'),
            entry,
        })))
    }

    override run(file: VFile) {
        const tree = parse(file.value.toString())
        const headingLines = new Set(headings(tree).map(h => h.start.line))
        proseText(tree, node => {
            const inHeading = headingLines.has(node.position!.start.line)
            for (const { pattern, entry } of this.matchers) {
                for (const match of node.value.matchAll(pattern)) {
                    const found = match[0]
                    // Headings are title case, so a case-only difference there is expected.
                    const accepted = inHeading
                        ? entry.use.some(u => u.toLowerCase() === found.toLowerCase())
                        : entry.use.includes(found)
                    if (accepted) continue
                    const suggestion = entry.use.length > 0 ? `use "${entry.use.join('" or "')}"` : 'avoid this term'
                    const notes = entry.notes ? ` (${entry.notes})` : ''
                    this.report(file.path, 'word-list', `"${found}": ${suggestion}${notes} [words.md]`, pointAt(node, match.index!), 'warning')
                }
            }
        })
    }
}
