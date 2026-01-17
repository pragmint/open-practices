
type TitleDescription = {
    title: string
    description: string
}

type Practice = {
    title: string
    description: string
    url?: string
}

type AdjacentCapabilities = {
    title: string
    description: string
    url: string
    relationship: 'Related' | 'Upstream' | 'Downstream'
}

type AssessmentItems = {
    minimal: TitleDescription
    basic: TitleDescription
    good: TitleDescription
    excelent: TitleDescription
}

type Capability = {
    title: string
    intro: string
    doraUrl: string
    nuances: TitleDescription[]
    assessment: AssessmentItems
    practices: Practice[]
    adjacentCapabilities: AdjacentCapabilities[]
}

const displayAdjacentCapabilities = ({title, description, url, relationship}: AdjacentCapabilities) => `### [${title}](${url}) - ${relationship}

${description}`

const displayAssessemntItem = ({title, description}: TitleDescription) => 
    `**${title}:** ${description}`

const displayPractice = ({ title, description, url: link }: Practice) => {
    if (link) {
        return `### ${title}

${description}`
    }
    return 
}

export function template_thingy ({ 
    title, 
    intro, 
    doraUrl, 
    nuances,
    assessment,
    practices,
    adjacentCapabilities
}: Capability) {
    const assessmentIntro = `To assess how mature your team or organization is in this capability, complete this short exercise.

Don't worry if the description doesn't exactly match your situation. These descriptions are meant to be examples of situations that would qualify for the associated score.`
    const assessmentOutro = `The number you selected represents your overall score for this capability. If you feel like your company fits somewhere in between two scores, it's okay to use a decimal. Generally, an overall score equal to or less than 3 means you'll likely gain a lot of value from experimenting with some of the supporting practices listed here. An overall score higher than 3 generally means you and your team are largely proficient, or well on your way to becoming proficient. Instead you would likely benefit from evaluating your scores in other capabilities.`
    

    return `# [${title}](${doraUrl})

${intro}

## Nuances

${nuances.map(nuance => `${nuance.title}

${nuance.description}

`)}

## Assessment

${assessmentIntro}

1. ${displayAssessemntItem(assessment.minimal)}
2. ${displayAssessemntItem(assessment.basic)}
3. ${displayAssessemntItem(assessment.good)}
4. ${displayAssessemntItem(assessment.excelent)}

${assessmentOutro}

## Supporting Practices

The following is a curated list of supporting practices to consider when looking to improve your team's ${title} capability. While not every practice will be beneficial in every situation, this list is meant to provide teams with fresh, pragmatic, and actionable ideas to support this capability.

${practices.map(displayPractice)}

## Adjacent Capabilities

The following capabilities will be valuable for you and your team to explore, as they are either:

- Related (they cover similar territory to ${title})
- Upstream (they are a pre-requisite for ${title})
- Downstream (${title} is a pre-requisite for them)

${adjacentCapabilities.map(displayAdjacentCapabilities)}
`
}

