export type FileLocation = {
    col: number
    row: number
}

export type Level = 'silent' | 'warning' | 'error'

export class Problem<Ids> {
    private id: Ids
    private message: string
    private level: Level
    private fileLocation: FileLocation

    private readonly colors = {
        reset: "\x1b[0m",
        bold: "\x1b[1m",
        dim: "\x1b[2m",
        red: "\x1b[31m",
        yellow: "\x1b[33m",
        cyan: "\x1b[36m",
        gray: "\x1b[90m",
    };

    constructor(id: Ids, level: Level, fileLocation: FileLocation, message: string) {
        this.id = id
        this.message = message
        this.level = level
        this.fileLocation = fileLocation
    }

    print() {
        if (this.level === 'silent') return;

        const { red, yellow, cyan, gray, bold, reset } = this.colors;

        const color = this.level === 'error' ? red : yellow;
        const label = this.level.toUpperCase();

        console.log(
            `${bold}${color}${label}${reset} ${bold}${this.id}${reset}: ${this.message}`
        );
        console.log(
            `  ${gray}at${reset} ${cyan}${this.fileLocation.row}${reset}:${cyan}${this.fileLocation.col}${reset}\n`
        );
    }
}
