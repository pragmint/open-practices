export type WordEntry = { use: string[], avoid: string[], notes: string }

// Each term in a cell is wrapped in backticks, so terms may themselves contain commas.
const terms = (cell: string) => [...cell.matchAll(/`([^`]+)`/g)].map(m => m[1]!.trim()).filter(t => t.length > 0)

// Reads every `| Use | Don't use | Notes |` table row in copy-guidelines/words.md.
export const parseWordList = (markdown: string): WordEntry[] => {
    const entries: WordEntry[] = []
    for (const line of markdown.split('\n')) {
        if (!line.trim().startsWith('|')) continue
        const cells = line.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim())
        if (cells.length < 2) continue
        if (/^use$/i.test(cells[0]!) || /^:?-+:?$/.test(cells[0]!)) continue
        const avoid = terms(cells[1]!)
        if (avoid.length === 0) continue
        entries.push({ use: terms(cells[0]!), avoid, notes: cells[2] ?? '' })
    }
    return entries
}
