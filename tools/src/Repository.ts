import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = join(Bun.main, '..','..')

async function getAllFrom(folder: string): Promise<LintableFile[]> {
    return await Promise.all(readdirSync(folder)
        .map(async (file)  => ({ 
            filename: join(folder, file),
            content: await Bun.file(join(folder, file)).text() 
        })))
}

export class OpenPracticesRepository {
    static async getCapabilities() {
        return getAllFrom(join(ROOT, 'capabilities'))    
    }
}

