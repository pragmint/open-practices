import type { VFile } from 'vfile'

export const mkInput = (content: string, path = "/repo/practices/mock-thing.md") =>
    ({ path, value: Buffer.from(content) } as unknown as VFile)

export const ids = (problems: { getRuleId: () => string | undefined }[]) => problems.map(p => p.getRuleId())
