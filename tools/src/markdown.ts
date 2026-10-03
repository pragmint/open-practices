import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import type { Heading, Root, RootContent, Text } from 'mdast'
import type { Point } from 'unist/index.d.ts'

export const parse = (content: string): Root => unified().use(remarkParse).parse(content)

export type HeadingInfo = { depth: number, text: string, node: Heading, start: Point }

export const headings = (tree: Root): HeadingInfo[] => {
    const found: HeadingInfo[] = []
    visit(tree, 'heading', (node: Heading) => {
        found.push({ depth: node.depth, text: toString(node).trim(), node, start: node.position!.start })
    })
    return found
}

// Prose text only: code, inline code, and URLs are separate node types, so they never show up here.
export const proseText = (tree: Root, fn: (node: Text) => void) => {
    visit(tree, 'text', (node: Text) => fn(node))
}

// Translate an offset within a text node into a line/column point in the file.
export const pointAt = (node: Text, offset: number): Point => {
    const start = node.position!.start
    const before = node.value.slice(0, offset).split('\n')
    if (before.length === 1) return { line: start.line, column: start.column + offset }
    return { line: start.line + before.length - 1, column: before[before.length - 1]!.length + 1 }
}

export type Section = { title: string, start: Point, nodes: RootContent[] }

// Splits top-level content at headings of the given depth. Content before the first such heading is not included.
export const sectionsAt = (nodes: RootContent[], depth: number): Section[] => {
    const sections: Section[] = []
    for (const node of nodes) {
        if (node.type === 'heading' && node.depth <= depth) {
            if (node.depth === depth) sections.push({ title: toString(node).trim(), start: node.position!.start, nodes: [] })
            else if (sections.length > 0) break
        } else if (sections.length > 0) {
            sections[sections.length - 1]!.nodes.push(node)
        }
    }
    return sections
}

export const isTemplateEraPractice = (tree: Root) =>
    headings(tree).some(h => h.depth === 2 && h.text === 'When to Experiment')
