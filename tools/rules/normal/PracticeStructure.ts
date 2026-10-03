import type { VFile } from "vfile";
import type { List, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import type { Point } from "unist/index.d.ts";
import { Rule } from "../../src/Rule";
import { isTemplateEraPractice, parse, sectionsAt, type Section } from "../../src/markdown";
import { pageTypeOf } from "../../src/pageType";
import {
    POLISH_OR_PITCH_BOILERPLATE,
    POLISH_OR_PITCH_QUADRANTS,
    PRACTICE_SECTION_VARIANTS,
    PRACTICE_SECTIONS,
} from "../../src/templates";

const listItems = (nodes: RootContent[]) => (nodes.find(n => n.type === 'list') as List | undefined)?.children.length ?? 0
const count = (nodes: RootContent[], type: RootContent['type']) => nodes.filter(n => n.type === type).length

// Checks a practice page against templates/new-practice.md.
export class PracticeStructure extends Rule<VFile, 'practice-structure'> {
    override run(file: VFile) {
        if (pageTypeOf(file.path) !== 'practice') return
        const tree = parse(file.value.toString())
        const err = (message: string, place: Point) => this.report(file.path, 'practice-structure', message, place)
        const warn = (message: string, place: Point) => this.report(file.path, 'practice-structure', message, place, 'warning')
        const top: Point = { line: 1, column: 1 }

        if (!isTemplateEraPractice(tree)) {
            warn('Legacy practice format (no "## When to Experiment"); structure not checked', top)
            return
        }

        const first = tree.children[0]
        if (first?.type !== 'heading' || first.depth !== 1) err('A practice must start with a single H1 title', top)
        if (tree.children.filter(n => n.type === 'heading' && n.depth === 1).length > 1) err('Only one H1 is allowed', top)

        const firstH2 = tree.children.findIndex(n => n.type === 'heading' && n.depth === 2)
        const intro = tree.children.slice(1, firstH2 === -1 ? undefined : firstH2)
        const introParagraphs = count(intro, 'paragraph')
        if (introParagraphs === 0) err('Missing introduction paragraphs before the first H2', top)
        else if (introParagraphs > 4) warn(`Introduction has ${introParagraphs} paragraphs; the template asks for 2-4`, top)

        const sections = sectionsAt(tree.children, 2)
        const named = sections.map(section => {
            const canonical = PRACTICE_SECTION_VARIANTS[section.title.toLowerCase()]
            if (canonical !== undefined && section.title !== canonical) {
                warn(`Use the template heading "## ${canonical}" instead of "## ${section.title}"`, section.start)
                return { ...section, title: canonical }
            }
            return section
        })

        const actual = named.map(s => s.title)
        if (actual.join('|') !== PRACTICE_SECTIONS.join('|')) {
            err(`H2 sections must be, in order: ${PRACTICE_SECTIONS.join(', ')}. Found: ${actual.join(', ') || 'none'}`, sections[0]?.start ?? top)
        }

        const get = (title: string) => named.find(s => s.title === title)
        this.checkBullets(get('When to Experiment'), 'When to Experiment', err, warn)
        this.checkTraction(get('How to Gain Traction'), err, warn)
        this.checkBullets(get('Lessons From The Field'), 'Lessons From The Field', err, warn)
        this.checkPolishOrPitch(get('Deciding to Polish or Pitch'), err, warn)

        const capabilities = get('Supporting Capabilities')
        if (capabilities) {
            const n = count(capabilities.nodes, 'heading')
            if (n < 2 || n > 6) warn(`Supporting Capabilities lists ${n} capabilities; the template asks for 2-6`, capabilities.start)
        }
    }

    private checkBullets(section: Section | undefined, title: string, err: Report, warn: Report) {
        if (!section) return
        const n = listItems(section.nodes)
        if (n === 0 && count(section.nodes, 'paragraph') > 0) warn(`"${title}" should be a dash bullet list, not paragraphs`, section.start)
        else if (n === 0) err(`"${title}" needs a dash bullet list`, section.start)
        else if (n < 2 || n > 6) warn(`"${title}" has ${n} bullets; the template asks for 2-6`, section.start)
    }

    private checkTraction(section: Section | undefined, err: Report, warn: Report) {
        if (!section) return
        const steps = sectionsAt(section.nodes, 3)
        if (steps.length === 0) err('"How to Gain Traction" needs steps as H3 sub-headings', section.start)
        else if (steps.length < 2 || steps.length > 4) warn(`"How to Gain Traction" has ${steps.length} steps; the template asks for 2-4`, section.start)
        steps.filter(step => count(step.nodes, 'paragraph') === 0).forEach(step => err(`Step "${step.title}" has no paragraph`, step.start))
    }

    private checkPolishOrPitch(section: Section | undefined, err: Report, warn: Report) {
        if (!section) return
        const lead = section.nodes[0]
        if (lead?.type !== 'paragraph' || !POLISH_OR_PITCH_BOILERPLATE.test(toString(lead).trim())) {
            err('"Deciding to Polish or Pitch" must open with the template sentence, changing only the bracketed duration', section.start)
        }
        const quadrants = sectionsAt(section.nodes, 3)
        if (quadrants.length === 0) err('"Deciding to Polish or Pitch" needs at least one quadrant sub-heading', section.start)
        for (const quadrant of quadrants) {
            if (!(POLISH_OR_PITCH_QUADRANTS as readonly string[]).includes(quadrant.title)) {
                err(`Quadrant heading must be one of: ${POLISH_OR_PITCH_QUADRANTS.join(', ')}`, quadrant.start)
            }
            for (const paragraph of quadrant.nodes.filter(n => n.type === 'paragraph')) {
                if (paragraph.children[0]?.type !== 'strong') {
                    warn('Each benefit should open with a bold title, e.g., "**Title of benefit**. 2-4 sentences."', paragraph.position!.start)
                }
            }
        }
    }
}

type Report = (message: string, place: Point) => void
