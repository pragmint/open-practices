import { type FileLocation, type Level, Problem } from "./Problem"

type RuleConfig<T extends string> = Record<T, Level>

export abstract class Rule<In, Ids extends string> {
    private problems: Problem<Ids>[] = []
    private config: RuleConfig<Ids> | null
    constructor(config?: RuleConfig<Ids>) {
        if (config === undefined) {
            this.config = null
        } else {
            this.config = config
        }
    }
    abstract run(subject: In): void;
    protected report(filename: string, id: Ids, message: string, fileLocation: FileLocation) {
        this.problems.push(new Problem<Ids>(id, this.config === null ? 'error' : this.config[id], filename, fileLocation, message))
    } 
    getProblems(): Problem<Ids>[] {
        return this.problems
    }
    hasProblems() {
        return this.problems.length !== 0
    }
    print() {
        this.problems.forEach(p => p.print())
    }
}
