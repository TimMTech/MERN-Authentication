const express = require("express");
const router = express.Router();
const User = require("../Models/userTemplate.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const newUser = new User({
    firstname: req.body.firstname,
    email: req.body.email,
    username: req.body.username,
    password: securePassword,
  });
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    return res.json({ status: "error", user: "Invalid Login" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        firstname: user.firstname,
        username: user.username,
      },
      "secret123"
    );
    return res.json({
      status: "ok",
      user: token,
      details: user.username,
      member: user.member,
      admin: user.admin,
    });
  } else {
    return res.json({ status: "error", user: false });
  }
});

router.post("/message", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, "secret123");
    const username = decoded.username;
    await User.updateOne(
      { username: username },
      { $set: { message: req.body.message } }
    );
    return res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
});

router.get("/message", async (req, res) => {
  const posts = User.find();
  posts
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
