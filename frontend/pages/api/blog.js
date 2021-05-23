const { readFileSync } = require('fs')
const { join } = require('path')
const file = readFileSync(join(__dirname, '_files', 'blogContent.json'), 'utf8')

module.exports = (req, res) => {
  res.json(file)
}
