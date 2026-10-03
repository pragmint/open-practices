import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import { headings, parse } from "../../src/markdown";
import { FIXED_HEADINGS } from "../../src/templates";

// AP-style: articles, conjunctions, and prepositions of three letters or fewer stay lowercase unless first or last.
// Longer words are capitalized ("Talk Directly With Users", "Lessons From The Field"). See styleguide.md, Headings.
const MINOR = new Set([
    'a', 'an', 'the',
    'and', 'but', 'or', 'nor', 'for', 'so', 'yet',
    'as', 'at', 'by', 'in', 'of', 'off', 'on', 'per', 'to', 'up', 'via', 'vs', 'vs.',
])

// Words that are deliberately lowercase even in a title.
const ALWAYS_LOWER = new Set(['npm', 'e.g.', 'i.e.'])

const isSkippable = (word: string) => isSkippablePart(word.split('-')[0]!)

const isSkippablePart = (word: string) =>
    !/^[A-Za-z]/.test(word)         // numbers, symbols, punctuation-led words
    || /\d/.test(word)              // v2, HTTP3
    || /.[A-Z]/.test(word)          // iOS, GitHub, CI/CD, OTel
    || ALWAYS_LOWER.has(word.toLowerCase())

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

export const toTitleCase = (heading: string) => {
    const words = heading.split(/\s+/)
    return words.map((word, i) => {
        if (isSkippable(word)) return word
        // Only the first part of a hyphenated compound is checked; later parts follow words.md ("Trunk-based").
        const bare = word.toLowerCase().replace(/[:,;]$/, '')
        const edge = i === 0 || i === words.length - 1 || /:$/.test(words[i - 1] ?? '')
        if (MINOR.has(bare) && !edge) return word.toLowerCase()
        const [head, ...tail] = word.split('-')
        return [capitalize(head!), ...tail].join('-')
    }).join(' ')
}

export class HeadingCase extends Rule<VFile, 'heading-case'> {
    override run(file: VFile) {
        for (const heading of headings(parse(file.value.toString()))) {
            if (heading.depth > 3 || FIXED_HEADINGS.has(heading.text)) continue
            const expected = toTitleCase(heading.text)
            if (expected !== heading.text) {
                this.report(file.path, 'heading-case', `Heading should be title case: "${expected}"`, heading.start, 'warning')
            }
        }
    }
}
