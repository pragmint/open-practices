import type { VFile } from "vfile";
import { toString } from "mdast-util-to-string";
import { Rule } from "../../src/Rule";
import { parse } from "../../src/markdown";
import { pageTypeOf } from "../../src/pageType";
import { RESOURCE_TYPES } from "../../src/templates";

// Checks the fixed header of a resource page: H1 title, "Resource type: X", then a source link.
export class ResourceStructure extends Rule<VFile, 'resource-structure'> {
    override run(file: VFile) {
        if (pageTypeOf(file.path) !== 'resource') return
        const tree = parse(file.value.toString())
        const top = { line: 1, column: 1 }
        const [first, ...rest] = tree.children

        if (first?.type !== 'heading' || first.depth !== 1) {
            this.report(file.path, 'resource-structure', 'A resource must start with an H1 title', top)
        }

        const header = rest.slice(0, 4)
        const typeLine = header.find(n => n.type === 'paragraph' && /^Resource type:/.test(toString(n)))
        if (typeLine === undefined) {
            this.report(file.path, 'resource-structure', 'Missing "Resource type: <type>" line after the title', top)
        } else {
            const value = toString(typeLine).replace(/^Resource type:/, '').trim()
            const exact = RESOURCE_TYPES.find(t => t === value)
            const loose = RESOURCE_TYPES.find(t => t.toLowerCase() === value.toLowerCase())
            if (loose === undefined) {
                this.report(file.path, 'resource-structure', `Unknown resource type "${value}". Use one of: ${RESOURCE_TYPES.join(', ')}`, typeLine.position!.start)
            } else if (exact === undefined) {
                this.report(file.path, 'resource-structure', `Write the resource type as "${loose}"`, typeLine.position!.start, 'warning')
            }
        }

        if (!header.some(n => /https?:\/\//.test(toString(n)) || JSON.stringify(n).includes('"url":"http'))) {
            this.report(file.path, 'resource-structure', 'Missing a link to the resource near the top of the page', top)
        }

        if (rest.slice(2).filter(n => n.type === 'paragraph').length === 0) {
            this.report(file.path, 'resource-structure', 'Add at least one paragraph describing the resource and why it is valuable', top, 'warning')
        }
    }
}
