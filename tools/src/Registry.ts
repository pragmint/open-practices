import type { Rule } from "./rules/Rule";

export class Registry<T> {
    private rules: Rule<T, any>[] = []
    register(rule: Rule<T, any>) {
        this.rules.push(rule)
    }
    run(input: T) {
        this.rules.forEach(rule => rule.run(input))
    }
    getProblems() {
        return this.rules.map(rule => rule.getProblems())
    }
    print(){
        this.rules.forEach(rule => rule.print())
    }
}


