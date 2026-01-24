import { VFileMessage } from "vfile-message"
import { type Level, Problem } from "./Problem"
import type { Point } from 'unist/index.d.ts'

type RuleConfig = Record<string, Level>

export abstract class Rule<In, Ids extends string> {
    private problems: Problem[] = []
    private config: RuleConfig | null

    constructor(config?: RuleConfig) {
        if (config === undefined) {
            this.config = null
        } else {
            this.config = config
        }
    }

    abstract run(subject: In): void;
    
    protected reportVfileMessage(m: VFileMessage) {
        let ruleId = m.ruleId
        if (this.config === null || ruleId === undefined || this.config[ruleId] === undefined)
            this.problems.push(new Problem(m, 'error'))
        else
            this.problems.push(new Problem(m, this.config[ruleId]))
    }

    protected report(file: string, ruleId: Ids, message: string, place: Point) {
        const m = new VFileMessage(message, { place, ruleId })
        m.file = file
        this.reportVfileMessage(m)
    }

    getProblems(): Problem[] {
        return this.problems
    }

    hasProblems() {
        return this.problems.length !== 0
    }

    print() {
        this.problems.forEach(p => p.print())
    }

    printQuickFix() {
        this.problems.forEach(p => p.printQuickfix())
    }
}
