// Safe, mechanical rewrites applied by `--fix`. Anything needing judgment (em dashes, word choice) is left to the copy-edit pass.

const outsideFences = (content: string, fn: (line: string) => string) => {
    let inFence = false
    return content.split('\n').map(line => {
        if (/^\s*(```|~~~)/.test(line)) {
            inFence = !inFence
            return line
        }
        return inFence ? line : fn(line)
    }).join('\n')
}

export const straightenQuotes = (content: string) => outsideFences(content, line => line
    .replace(/[“”„‟″]/g, '"')
    .replace(/[‘’‚‛′]/g, "'"))

export const trimTrailingWhitespace = (content: string) => content.split('\n').map(l => l.trimEnd()).join('\n')

export const dashListMarkers = (content: string) => outsideFences(content, line => line.replace(/^(\s*)[*+](\s+)/, '$1-$2'))

export const blankLineAfterHeadings = (content: string) => {
    let inFence = false
    const lines = content.split('\n')
    return lines.flatMap((line, i) => {
        if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
        const needsBlank = !inFence && /^#{1,6} /.test(line) && i + 1 < lines.length && lines[i + 1] !== ''
        return needsBlank ? [line, ''] : [line]
    }).join('\n')
}

export const finalNewline = (content: string) => content.replace(/\s*$/, '\n')

export const applyAllFixes = (content: string) =>
    [straightenQuotes, trimTrailingWhitespace, dashListMarkers, blankLineAfterHeadings, finalNewline]
        .reduce((text, fix) => fix(text), content)
