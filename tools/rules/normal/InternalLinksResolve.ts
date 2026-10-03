import type { VFile } from "vfile";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { visit } from "unist-util-visit";
import type { Definition, Link } from "mdast";
import { Rule } from "../../src/Rule";
import { parse } from "../../src/markdown";

const EXTERNAL = /^([a-z][a-z0-9+.-]*:|#|\/\/)/i

export class InternalLinksResolve extends Rule<VFile, 'internal-links-resolve'> {
    private root: string

    constructor(root: string, config?: ConstructorParameters<typeof Rule>[0]) {
        super(config)
        this.root = root
    }

    override run(file: VFile) {
        visit(parse(file.value.toString()), ['link', 'definition'], (node) => {
            const { url, position } = node as Link | Definition
            if (EXTERNAL.test(url)) return
            const path = decodeURI(url.split('#')[0]!.split('?')[0]!)
            if (path === '') return
            const target = path.startsWith('/') ? join(this.root, path) : resolve(dirname(file.path), path)
            if (!existsSync(target)) {
                this.report(file.path, 'internal-links-resolve', `Link target does not exist: ${url}`, position!.start)
            }
        })
    }
}
