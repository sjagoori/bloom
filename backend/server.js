require("dotenv").config();
let content = require("./data/blogContent.json")

const port = process.env.PORT || 3001,
  express = require("express"),
  app = express(),
  router = require("./routes/router.js"),
  cors = require("cors"),
  http = require("http").createServer(app),
  io = require("socket.io")(http),
  ioEvents = require('./modules/ioEvents');

io.on('connection', (client) => {
  ioEvents.eventHandler(client, io)
})

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use("/", router);


app.get('/blog/:blog', (req, res) => {
  res.json(content[`${req.params.blog}`])
})

http.listen(port, () => console.log(`listening to port ${port}`))
