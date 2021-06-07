const fs = require('fs')

export default function themeHandler(req, res) {
    try {
    return res.status(200).json(JSON.parse(fs.readFileSync(`./pages/api/_files/faq.json`, 'utf-8')))
  } catch (error) {
    return res.status(400).json({msg: "*instense confusion stare*"})
  }
}