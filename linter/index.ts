import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { join } from 'node:path'
import remarkLint from 'remark-lint'
import remarkLintNoHeadingPunctuation from 'remark-lint-no-heading-punctuation'
import remarkStringify from 'remark-stringify'
import { read } from 'to-vfile'
import reporter from 'vfile-reporter'

const filepath = join(import.meta.dir, '..', 'capabilities', 'test-automation.md')

const file = await read(filepath)

await unified()
    .use(remarkParse)
    .use(remarkLint)
    .use(remarkLintNoHeadingPunctuation)
    .use(remarkStringify)
    .process(file)

console.log(reporter(file))

