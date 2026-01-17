import { type FileLocation, type Level, Problem } from "./Problem"

type RuleConfig<T extends string> = Record<T, Level>

export abstract class Rule<In, Ids extends string> {
    private problems: Problem<Ids>[] = []
    private config: RuleConfig<Ids>
    constructor(config: RuleConfig<Ids>) {
        this.config = config
    }
    abstract run(subject: In): void;
    protected report(id: Ids, message: string, fileLocation: FileLocation) {
        this.problems.push(new Problem<Ids>(id, this.config[id], fileLocation, message))
    } 
    getProblems(): Problem<Ids>[] {
        return this.problems
    }
    print() {
        this.problems.forEach(p => p.print())
    }
}
