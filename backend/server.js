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
      status: 200,
      data: {
        user_id: response.user_id,
      },
    })
    : res.json({status: 400});
});

app.post("/register", async (req, res) => {
  let userData = {
    email: req.body.email,
    user_id: bcrypt.hashSync(req.body.email, salt),
    password: bcrypt.hashSync(req.body.password, salt),
    name: req.body.name,
    birthDate: req.body.birthDate,
    residence: req.body.residence,
    gender: req.body.gender,
    kankerType: req.body.kankerType,
    pictogram: req.body.pictogram,
    about: req.body.about,
  };

  if (await db.findOne('bloom', 'userdata', { email: userData.email }) == null) {
    console.log('req.body');
    await db.insertOne("bloom", "userdata", userData);

    return res.json({ status: 200, data: userData.user_id });
  }else{
    return res.json({ status: 400, msg: "gebruiker bestaat al"});
  }
});

app.listen(port, () => console.log(`listening to port ${port}`));
