const fs = require('fs')
const path = require('path')

function getVersion() {
  const packageJsonPath = path.join(__dirname, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  const version = process.env.VERSION || process.argv[2] || packageJson.version

  if (!version) {
    console.error(
      'Ошибка: версия не указана. Используйте VERSION=1.0.0 node version.js или node version.js 1.0.0'
    )
    process.exit(1)
  }

  return version
}

function getReleaseDate() {
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}.${month}.${year}`
}

function createVersionJson(version, date) {
  return {
    version,
    date,
  }
}

function ensureDistDir() {
  const distDir = path.join(__dirname, 'dist')
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
  return distDir
}

function writeVersionJson(version, date) {
  const distDir = ensureDistDir()
  const versionJsonPath = path.join(distDir, 'version.json')
  const versionJson = createVersionJson(version, date)

  fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + '\n')
  console.log(`✓ version.json создан: ${versionJsonPath}`)
}

function findVueFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      findVueFiles(filePath, fileList)
    } else if (file.endsWith('.vue')) {
      fileList.push(filePath)
    }
  })
  return fileList
}

function replaceVersionInFile(filePath, version) {
  let content = fs.readFileSync(filePath, 'utf8')
  const originalContent = content

  content = content.replace(/\{\{\s*version\s*\}\}/g, version)

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8')
    return true
  }

  return false
}

function updateVueFiles(version) {
  console.log(`Обновление версии в Vue файлах до ${version}...`)

  const srcDir = path.join(__dirname, 'src')
  const vueFiles = findVueFiles(srcDir)
  let replacedCount = 0

  vueFiles.forEach((filePath) => {
    if (replaceVersionInFile(filePath, version)) {
      const relativePath = path.relative(__dirname, filePath)
      replacedCount++
      console.log(`✓ ${relativePath} обновлен`)
    }
  })

  console.log(`\nГотово! Обновлено файлов: ${replacedCount}`)
}

function main() {
  const version = getVersion()
  const date = getReleaseDate()

  writeVersionJson(version, date)
  updateVueFiles(version)
}

main()
