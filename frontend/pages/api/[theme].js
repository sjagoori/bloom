const geld = require('./_files/geld.json')
const angst = require('./_files/angst.json')
const lichaam = require('./_files/lichaam.json')
const relatie = require('./_files/relatie.json')
const somberheid = require('./_files/somberheid.json')
const vermoeidheid = require('./_files/vermoeidheid.json')

const dataset = {
  angst: {data: angst},
  geld: {data: geld},
  lichaam: {data: lichaam},
  relatie: {data: relatie},
  somberheid: {data: somberheid},
  vermoeidheid: {data: vermoeidheid}
}

export default function themeHandler(req, res) {
  (Object.keys(dataset).filter(key => key === req.query.theme).length > 0) ? res.status(200).json(dataset[req.query.theme].data) : res.status(400).json({message: 'No blogpost found'})
}