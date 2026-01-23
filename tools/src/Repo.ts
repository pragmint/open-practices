import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { read } from 'to-vfile';

const ROOT = join(Bun.main, '..','..')

async function getAllFrom(folder: string): Promise<LintableFile[]> {
    return await Promise.all(readdirSync(folder)
        .map(async (file)  => ({ 
            filename: join(folder, file),
            content: await Bun.file(join(folder, file)).text() 
        })))
}

class SourceFolder {
    private root: string;
    constructor(root: string) {
        this.root = root
    }
    fileNames() {
        return readdirSync(this.root)
    }
    filePaths() {
        const root = this.root
        return this.fileNames().map((name) => join(root, name))
    }
    async vfiles() {
        return await Promise.all(this.filePaths().map(async path => {
            return await read(path)
        }))
    }
}

export class Repo {
    static async getCapabilities() {
        return getAllFrom(join(ROOT, 'capabilities'))    
    }
    static capabilities(): SourceFolder {
        return new SourceFolder(join(ROOT, 'capabilities'))
    }
}

