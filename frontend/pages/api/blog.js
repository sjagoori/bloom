const { readFileSync } = require('fs')
const { join } = require('path')
const file = readFileSync(join(__dirname, '_files', 'blogContent.json'), 'utf8')

export default (req, res) => {
  res.status(200).json(file)
}
