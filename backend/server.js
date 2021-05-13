require("dotenv").config();

const port = process.env.PORT || 3001,
  express = require("express"),
  app = express(),
  cors = require("cors"),
  http = require("http").createServer(app),
  io = require("socket.io")(http),
  db = require("./modules/database.js"),
  bcrypt = require("bcrypt"),
  salt = bcrypt.genSaltSync(10);

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors());

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let response = await db.findOne("bloom", "userdata", { email: email });
  return bcrypt.compareSync(password, response.password, salt)
    ? res.json({
        status: "passed",
        data: {
          email: response.email,
        },
      })
    : res.json({ status: "failed" });
    // ? handle data in frontend
});

app.post("/register", async (req, res) => {
  let a = await db.insertOne("bloom", "userdata", {
    email: email,
    password: bcrypt.hashSync(password, salt),
  });

  return res.json({ data: a });
  // ? handle what happens after register in frontend
});

app.listen(port, () => console.log(`listening to port ${port}`));
