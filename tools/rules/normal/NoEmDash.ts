import type { VFile } from "vfile";
import { Rule } from "../../src/Rule";
import { parse, pointAt, proseText } from "../../src/markdown";

// Em dashes, en dashes used as em dashes, and the ASCII stand-ins. See copy-guidelines/styleguide.md, Punctuation.
const DASHES = /—|\s–\s|\s--\s/g

export class NoEmDash extends Rule<VFile, 'no-em-dash'> {
    override run(file: VFile) {
        proseText(parse(file.value.toString()), node => {
            for (const match of node.value.matchAll(DASHES)) {
                this.report(file.path, 'no-em-dash', 'Avoid em dashes; restructure the sentence (period, comma, parentheses, or colon)', pointAt(node, match.index!), 'warning')
            }
        })
    }
}
