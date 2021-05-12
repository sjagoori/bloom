require("dotenv").config();

const port = process.env.PORT || 3001,
  express = require("express"),
  app = express(),
  cors = require("cors"),
  http = require("http").createServer(app),
  io = require("socket.io")(http);

app.use(express.json()).use(express.urlencoded({ extended: true })).use(cors());

app.get("/hello", (req, res) =>
  res.json({ status: 200, body: "Hello World!" })
);

app.post("/test", (req, res) => {
  console.log(req.body);

  return res.json({ foo: "bar " });
});
app.listen(port, () => console.log(`listening to port ${port}`));
