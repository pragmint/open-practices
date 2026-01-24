import { readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { read } from 'to-vfile';

const ROOT = join(Bun.main, '..','..')

const getAllFiles = (dir: string): string[] => 
     readdirSync(dir, { withFileTypes: true }).flatMap((file) => {
         if (file.isDirectory()) return getAllFiles(resolve(dir, file.name))
         return resolve(dir, file.name)
     })

const capabilities = () => getAllFiles(join(ROOT, 'capabilities'))
const practices = () => getAllFiles(join(ROOT, 'practices'))
const resources = () => getAllFiles(join(ROOT, 'resources'))

const getVfiles = async (paths: string[]) => 
    await Promise.all(paths.map(async path => await read(path)))

export class Repo {
    static capabilities = async () => await getVfiles(capabilities())
    static practices = async () => await getVfiles(practices())
    static resources = async () => await getVfiles(resources())
    static all = async () => await getVfiles([ ...capabilities(), ...practices(), ...resources()])
}

