import type { Rule } from "./Rule";



export class Registry<T> {
    private rules: Rule<T, any>[] = []
    register(rule: Rule<T, any>) {
        this.rules.push(rule)
    }
    run(input: T) {
        this.rules.forEach(rule => rule.run(input))
    }
    isssuesWereFound() {
        return this.rules.map(r => r.hasProblems()).reduce((_, c) => c === true ? true : false)
    }
    print(){
        this.rules.forEach(rule => rule.print())
    }
}


