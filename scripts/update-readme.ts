import path from 'path'
import fse from 'fs-extra'
import { presetHbs } from '../src/index'

function generate() {
  const { shortcuts } = presetHbs()

  let result = '\n## Shortcuts \n\n| Class | Properties |\n| :- | :- |\n'

  for (const key in shortcuts)
    result += `| \`${key}\` | \`${shortcuts[key]}\` |\n`

  return result
}

function update(content: string) {
  const readmePath = path.resolve('./README.md')
  const originalContent = fse.readFileSync(readmePath, { encoding: 'utf-8' })
  const resultContent = originalContent.replace(/(?<=<!-- start -->)[^>]*(?=<!-- end -->)/gms, content)
  fse.writeFileSync(readmePath, resultContent)
}

function main() {
  const content = generate()
  update(content)
}

main()
