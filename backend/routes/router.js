const express = require("express");
const router = express.Router();

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

module.exports = router;
