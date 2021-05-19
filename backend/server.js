require("dotenv").config();

const port = process.env.PORT || 3000,
  express = require("express"),
  app = express(),
  http = require("http").createServer(app),
  io = require("socket.io")(http);

app.use(express.json()).use(express.urlencoded({ extended: false }));

app.get('/hello', (res, req) => res.json({status: 200, body: 'Hello World!'}))

app.listen(port, () => console.log(`listening to port ${port}`))
