import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { joinSections, splitSections, validateEdits, type PageSection } from "./src/sections";

const usage = `Usage:
  bun sections.ts split <page.md> [lint.json] > sections.json
  bun sections.ts join <sections.json> <out.md>

split  Writes the page's H2 sections as JSON, each with its own lint findings (from \`bun index.ts --json\`).
join   Reads sections.json where some sections have an "edited" field and writes the reassembled page.`

const cwd = process.env.INIT_CWD ?? process.cwd()
const [command, ...args] = Bun.argv.slice(2)
const path = (p: string | undefined) => {
    if (p === undefined) { console.error(usage); process.exit(2) }
    return resolve(cwd, p)
}

if (command === 'split') {
    const page = readFileSync(path(args[0]), 'utf8')
    const lint = args[1] ? JSON.parse(readFileSync(path(args[1]), 'utf8')) : []
    const json = JSON.stringify(splitSections(page, lint), null, 2) + '\n'
    await new Promise<void>(done => process.stdout.write(json, () => done()))
} else if (command === 'join') {
    const sections: PageSection[] = JSON.parse(readFileSync(path(args[0]), 'utf8'))
    const problems = validateEdits(sections)
    if (problems.length > 0) {
        problems.forEach(p => console.error(p))
        process.exitCode = 1
    } else {
        writeFileSync(path(args[1]), joinSections(sections))
    }
} else {
    console.error(usage)
    process.exitCode = 2
}
