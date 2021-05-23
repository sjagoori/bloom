const file = require('./_files/blogContent.json')

export default (req, res) => {
  res.status(200).json(file)
}
