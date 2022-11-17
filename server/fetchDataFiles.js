const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const glob = require('glob')

const FILE_DATA_EXT = 'yaml'

exports.fetchDataFiles = function() {
  const files = glob.sync(__dirname + '/../src/**/*.' + FILE_DATA_EXT)

  const result = {}
  for (const filePath of files) {
    result[filePath] = yaml.load(fs.readFileSync(filePath, 'utf8'))
  }

  return result
}
