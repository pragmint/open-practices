import type { Rule } from "./Rule";

export class Runner<T> {
    private content: T[]
    private rules: Rule<T, string>[]

    constructor(content: T[], rules: Rule<T, any>[]) {
        this.content = content 
        this.rules = rules
    }

    async run() {
        for (const item of this.content) {
            for (const rule of this.rules) {
                await rule.run(item)
            }
        }
    }
    print() {
        this.rules.forEach(rule => rule.print())
    }
    printQuickFix() {
        this.rules.forEach(rule => rule.printQuickFix())
    }
    // Awaited write: console.log truncates large output when stdout is a pipe.
    async printJson() {
        const problems = this.rules
            .flatMap(rule => rule.getProblems())
            .filter(p => p.getLevel() !== 'silent')
            .map(p => p.toJSON())
        const json = JSON.stringify(problems, null, 2) + '\n'
        await new Promise<void>(done => process.stdout.write(json, () => done()))
    }
    issuesWereFound() {
        return this.rules.map(rule => rule.hasProblems()).includes(true)
    }
    errorsWereFound() {
        return this.rules.map(rule => rule.hasErrors()).includes(true)
    }
}
