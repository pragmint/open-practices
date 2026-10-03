import type { VFile } from "vfile";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { visit } from "unist-util-visit";
import type { Link } from "mdast";
import { Rule } from "../../src/Rule";
import { isTemplateEraPractice, parse, sectionsAt } from "../../src/markdown";
import { pageTypeOf } from "../../src/pageType";
import { PRACTICE_SECTION_VARIANTS } from "../../src/templates";

const CAPABILITY_LINK = /^\/capabilities\/[a-z0-9-]+\.md$/

// Every H3 under "Supporting Capabilities" must link to an existing capability page.
export class CapabilityLinks extends Rule<VFile, 'capability-links'> {
    private root: string

    constructor(root: string, config?: ConstructorParameters<typeof Rule>[0]) {
        super(config)
        this.root = root
    }

    override run(file: VFile) {
        if (pageTypeOf(file.path) !== 'practice') return
        const tree = parse(file.value.toString())
        if (!isTemplateEraPractice(tree)) return

        const section = sectionsAt(tree.children, 2)
            .find(s => (PRACTICE_SECTION_VARIANTS[s.title.toLowerCase()] ?? s.title) === 'Supporting Capabilities')
        if (!section) return

        for (const node of section.nodes) {
            if (node.type !== 'heading' || node.depth !== 3) continue
            const links: Link[] = []
            visit(node, 'link', (link: Link) => { links.push(link) })
            const url = links[0]?.url
            if (url === undefined || !CAPABILITY_LINK.test(url)) {
                this.report(file.path, 'capability-links', 'Capability headings must be links like [Name](/capabilities/name.md)', node.position!.start)
            } else if (!existsSync(join(this.root, url))) {
                this.report(file.path, 'capability-links', `Unknown capability: ${url}`, node.position!.start)
            }
        }
    }
}
