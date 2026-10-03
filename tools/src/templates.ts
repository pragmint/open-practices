// Fixed strings from templates/new-practice.md and templates/new-resource.md. Keep these in sync with the templates.

export const PRACTICE_SECTIONS = [
    'When to Experiment',
    'How to Gain Traction',
    'Lessons From The Field',
    'Deciding to Polish or Pitch',
    'Supporting Capabilities',
] as const

// Older spellings still found in the repo. Accepted with a warning so legacy pages don't fail outright.
export const PRACTICE_SECTION_VARIANTS: Record<string, typeof PRACTICE_SECTIONS[number]> = {
    'lessons from the field': 'Lessons From The Field',
    'deciding to pitch or polish': 'Deciding to Polish or Pitch',
    'supported capabilities': 'Supporting Capabilities',
    'adjacent capabilities': 'Supporting Capabilities',
    'adjacent capability': 'Supporting Capabilities',
}

export const POLISH_OR_PITCH_QUADRANTS = [
    'Fast & Measurable',
    'Slow & Measurable',
    'Fast & Intangible',
    'Slow & Intangible',
] as const

export const POLISH_OR_PITCH_BOILERPLATE =
    /^After experimenting with this practice for .+?, bring the team together to determine whether the following metrics and\/or signals have changed in a positive direction[.:]$/

export const RESOURCE_TYPES = [
    'Article',
    'Blog Post',
    'Book',
    'Code Kata',
    'Code Snippet',
    'Course',
    'Documentation',
    'Podcast',
    'Roundtable Discussion',
    'Video',
    'Video & Transcript',
    'Workshop',
] as const

// Headings whose wording is fixed by a template, so heading-case leaves them alone.
export const FIXED_HEADINGS = new Set<string>([
    ...PRACTICE_SECTIONS,
    ...POLISH_OR_PITCH_QUADRANTS,
    'Supporting Practices',
])
