// Splits a Markdown page into H2 sections for parallel copy editing, and joins edited sections back together.

export type LintProblem = { file?: string, line: number, column: number, ruleId: string, level: string, message: string }

export type PageSection = {
    index: number
    title: string
    startLine: number   // 1-based, inclusive
    endLine: number     // 1-based, inclusive
    text: string
    lint: LintProblem[] // line numbers relative to the section (line 1 = the section's first line)
    edited?: string
}

const fenceToggle = (line: string) => /^\s*(```|~~~)/.test(line)

// Everything before the first H2 (the H1 and introduction) becomes an "Introduction" section.
export const splitSections = (content: string, lint: LintProblem[] = []): PageSection[] => {
    const lines = content.replace(/\n$/, '').split('\n')
    const starts: { line: number, title: string }[] = [{ line: 1, title: 'Introduction' }]
    let inFence = false
    lines.forEach((line, i) => {
        if (fenceToggle(line)) inFence = !inFence
        if (!inFence && /^## /.test(line)) starts.push({ line: i + 1, title: line.replace(/^## /, '').trim() })
    })
    if (starts.length > 1 && starts[1]!.line === 1) starts.shift()

    return starts.map((start, index) => {
        const endLine = (starts[index + 1]?.line ?? lines.length + 1) - 1
        return {
            index,
            title: start.title,
            startLine: start.line,
            endLine,
            text: lines.slice(start.line - 1, endLine).join('\n'),
            lint: lint
                .filter(p => p.line >= start.line && p.line <= endLine)
                .map(p => ({ ...p, line: p.line - start.line + 1 })),
        }
    })
}

export const joinSections = (sections: PageSection[]) =>
    [...sections]
        .sort((a, b) => a.index - b.index)
        .map(s => (s.edited ?? s.text).replace(/\n+$/, ''))
        .join('\n\n') + '\n'

// Guards against an editor that dropped or renamed its heading, which would corrupt the page on join.
export const validateEdits = (sections: PageSection[]) => sections.flatMap(s => {
    if (s.edited === undefined) return []
    const originalHeading = s.text.split('\n')[0]!
    const editedHeading = s.edited.split('\n')[0]!
    if (s.title !== 'Introduction' && editedHeading !== originalHeading) {
        return [`Section ${s.index} ("${s.title}"): heading changed from "${originalHeading}" to "${editedHeading}"`]
    }
    if (s.title === 'Introduction' && s.text.startsWith('# ') && !s.edited.startsWith('# ')) {
        return [`Section ${s.index} ("Introduction"): the H1 title is missing`]
    }
    return []
})
