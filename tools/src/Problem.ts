import type { VFileMessage } from "vfile-message"
import type { Point } from 'unist/index.d.ts'

export type Level = 'silent' | 'warning' | 'error'

export class Problem {
    private message: VFileMessage
    private level: Level
    private point: Point

    private readonly colors = {
        reset: "\x1b[0m",
        bold: "\x1b[1m",
        dim: "\x1b[2m",
        red: "\x1b[31m",
        purple: "\x1b[0;35m",
        yellow: "\x1b[33m",
        cyan: "\x1b[36m",
        gray: "\x1b[90m",
    };

    constructor(message: VFileMessage, level: Level) {
        this.message = message
        this.level = level
        this.point = message.place as unknown as Point
    }

    getFileLocation = () => this.message.place

    print() {
        if (this.level === 'silent') return;

        const { red, yellow, cyan, gray, bold, reset, purple } = this.colors;

        const color = this.level === 'error' ? red : yellow;
        const label = this.level.toUpperCase();
        
        console.log( `${bold}${color}${label}${reset} ${bold}${this.message.ruleId}${reset}: ${this.message.message}`);
        console.log( `  ${gray}in${reset} ${purple}"${this.message.file}"${reset}\n  ${gray}at${reset} ${cyan}${this.point.line}${reset}:${cyan}${this.point.column}${reset}\n`);
    }
    printQuickfix() {
        if (this.level === 'silent') return;
        const output = `${this.message.file}:${this.point.line || -1}:${this.point.column}: ${this.message.ruleId} -- ${this.level.toUpperCase()}: ${this.message}`;
        console.log(output);
    }
}

