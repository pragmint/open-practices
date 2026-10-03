export type PageType = 'practice' | 'resource' | 'capability' | 'unknown'

let override: PageType | null = null

export const setPageTypeOverride = (type: PageType | null) => { override = type }

// Repo pages are typed by folder; skill drafts are typed by their run folder (.tmp/practice-<slug>/, .tmp/resource-<slug>/).
export const pageTypeOf = (path: string): PageType => {
    if (override !== null) return override
    const p = path.replaceAll('\\', '/')
    if (/\/\.tmp\/practice-[^/]+\//.test(p)) return 'practice'
    if (/\/\.tmp\/resource-[^/]+\//.test(p)) return 'resource'
    if (/\/practices\//.test(p)) return 'practice'
    if (/\/resources\//.test(p)) return 'resource'
    if (/\/capabilities\//.test(p)) return 'capability'
    return 'unknown'
}
