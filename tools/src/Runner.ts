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
            this.rules.forEach(rule => rule.run(item))
        }
    }
    print() {
        this.rules.forEach(rule => rule.print())
    }
    printQuickFix() {
        this.rules.forEach(rule => rule.printQuickFix())
    }
    issuesWereFound() {
        return this.rules.map(rule => rule.hasProblems()).includes(true)
    }
}
