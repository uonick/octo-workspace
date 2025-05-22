/* eslint-disable no-undef */
const { writeFile } = require('fs-extra')
const { format } = require('date-fns')
const { version } = require('./package.json')
const updated = format(Date.now(), 'dd.MM.yyyy')

async function makeVersionFile() {
  const currentVersion = { version, updated }

  await writeFile('./public/version.json', JSON.stringify(currentVersion), {
    encoding: 'utf-8',
    flag: 'w',
  })
}

console.log('Creating version file...')

if (version) {
  makeVersionFile()
}
