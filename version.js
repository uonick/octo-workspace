/* eslint-disable no-undef */
import fs from 'fs-extra'
import { format } from 'date-fns'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const { version } = pkg
const updated = format(Date.now(), 'dd.MM.yyyy')

async function makeVersionFile() {
  const currentVersion = { version, updated }

  await fs.writeFile('./dist/version.json', JSON.stringify(currentVersion), {
    encoding: 'utf-8',
    flag: 'w',
  })

  console.log('Version file created')
}

console.log('Creating version file...')

if (version) {
  makeVersionFile()
}
