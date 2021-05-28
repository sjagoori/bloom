// import * as themes from "../_files/blogContent.json";
const themes = require('./_files/blogContent.json')

export default function themeHandler(req, res) {
  const {theme} = req.query
  const string = `themes.${theme}`
  console.log(JSON.stringify(`${themes}.${theme}`))
  res.status(200).json(themes.vermoeidheid)
  // filter.length > 0 ? res.status(200).json(filter[0]) : res.status(404).json({message: `What you wanted (${slug}) is nowhere to be seen.`})
  // res.end(`theme: ${themes}.${res.query}`)

}


// export function handler(req, res) {
//   const { slug } = req.query
//   res.end(`Post: ${slug.join(', ')}`)
// }