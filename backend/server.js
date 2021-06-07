require("dotenv").config();

const port = process.env.PORT || 3001,
  express = require("express"),
  app = express(),
  router = require("./routes/router.js")
  cors = require("cors"),
  http = require("http").createServer(app),
  io = require("socket.io")(http),
  db = require("./modules/database.js"),
  bcrypt = require("bcrypt"),
  salt = bcrypt.genSaltSync(10);

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors())
  .use("/", router);


app.listen(port, () => console.log(`listening to port ${port}`))
