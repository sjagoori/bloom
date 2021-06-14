const express = require("express"),
  router = express.Router(),
  db = require("../modules/database"),
  bcrypt = require("bcrypt"),
  salt = bcrypt.genSaltSync(10);

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  return await db
    .findOne("bloom", "userdata", { email: email })
    .then((response) =>
      bcrypt.compareSync(password, response.password, salt)
        ? res.json({
          status: 200,
          data: {
            user_id: response.user_id,
          },
        })
        : res.json({ status: 400 })
    )
    .catch((err) => console.log("err", err));
});

router.post("/register", async (req, res) => {
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

  let exists = await db.findOne("bloom", "userdata", { email: userData.email });

  if (exists == null) {
    await db.insertOne("bloom", "userdata", userData).then(() => {
      return res.json({ status: 200, data: userData.user_id });
    });
  } else {
    return res.json({ status: 400, msg: "gebruiker bestaat al" });
  }
});


router.get('/getAllUsers', async (req, res) => {
  return await db.findMany('bloom', 'userdata')
    .then(data => res.json({ status: 200, data: data }))
    .catch(error => console.log('geen data gevonden:\n', error))
})

router.get('/getUser/:user', async (req, res) => {
  console.log('getUser:', req.params.user)
  return await db.findOne('bloom', 'userdata', { user_id: decodeURIComponent(req.params.user) })
    .then(data => res.json({ data: data }))
    .catch(error => console.log('geen data gevonden:'))
})


router.get('/getUserChat/:user', async (req, res) => {
  console.log(req.params.user)
  let data = await db.findMany('bloom', 'userdata')
  // res.json(data)

  console.log(data)
  let startedChats = data.map(key => key.chatData != undefined
    ? key.chatData.chats.map(elem => elem.to.identifier == req.params.user
      ? key
      : false)
    : false).filter(elem => typeof elem != "boolean")

  let requestedChats = data.map(key => key.chatData != undefined
    ? key.chatData.chats.map(elem => elem.from.identifier == req.params.user
      ? key
      : false)
    : false).filter(elem => typeof elem != "boolean")

  console.log(startedChats)

  res.json({ list: startedChats, requests: requestedChats })

  // return await db.findMany('bloom', "userdata", {user_id: decodeURIComponent(req.params.user)})
  // .then(data => res.json({data: data}))
  // .catch(error => console.log("error, ", error))
})

module.exports = router;
