import { join } from 'node:path'
import { Registry } from "./src/Registry";
import { NewLineAfterHeadings } from "./src/rules/raw/NewLineAfterHeadings";
import { readdirSync } from 'node:fs';

global.paths = {
    capabilities: join(import.meta.dir, '..', 'capabilities'),
    practices: join(import.meta.dir, '..', 'practices'),
    resources: join(import.meta.dir, '..', 'resources'),
    templates: join(import.meta.dir, '..', 'templates'),
} 

async function getAllFrom(folder: string) {
    return await Promise.all(readdirSync(folder)
        .map(async (file)  => ({ 
            filename: join(folder, file),
            content: await Bun.file(join(folder, file)).text() 
        })))
}

type ExitCode = 0 | 1

function runRawLintRules(input: LintableFile): ExitCode {
    const registry = new Registry<LintableFile>()
    registry.register(new NewLineAfterHeadings({ 
        'new-line-after-headings': 'error' 
    }))
    registry.run(input)
    registry.print()
    
    if (registry.isssuesWereFound()) return 0
    return 1
}

process.exit((await getAllFrom(global.paths.capabilities))
    .map(lf => runRawLintRules(lf))
    .reduce((_, c) => c === 1 ? 1 : 0))

// run raw lint rules on the text
// parse practice into practice data structure
// run structrual lint rules on the data structure
// output result
