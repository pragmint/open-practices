import { Registry } from "./Registry";
import type { Rule } from "./Rule";

export class Runner<T> {
    private content: T[]
    private registry: Registry<T>

    constructor(content: T[], rules: Rule<T, any>[]) {
        this.content = content 
        this.registry = new Registry()
        for (const rule of rules) {
            this.registry.register(rule)
        }
    }

    run() {
        for (const item of this.content) {
            this.registry.run(item)
        }
    }
    print() {
        this.registry.print()
    }
    issuesWereFound() {
        return this.registry.isssuesWereFound()
    }
}
