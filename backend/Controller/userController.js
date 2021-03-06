const User = require("../Models/userTemplate.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const dotenv = require("dotenv");
const path = require("path");

__dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const passwords = {
  member: process.env.REACT_APP_MEMBER_PASSWORD,
  admin: process.env.REACT_APP_ADMIN_PASSWORD,
};

exports.signUp = [
  body("firstname").isLength({ min: 1 }),
  body("email").isEmail(),
  body("username").isLength({ min: 6 }),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "404 Error" });
    }
    const existUsername = await User.findOne({
      username: req.body.username,
    });
    if (existUsername) {
      return res.status(400).json({ error: "Username Already Exists" });
    }

    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);

    const newUser = new User({
      firstname: req.body.firstname,
      email: req.body.email,
      username: req.body.username,
      password: securePassword,
    });

    newUser.save().then((data) => {
      res.json(data);
    });
  },
];

exports.loginIn = async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    return res.status(401).json({ error: "Username Does Not Exist" });
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
      username: user.username,
      member: user.member,
      admin: user.admin,
    });
  } else {
    return res.status(401).json({ user: false });
  }
};

exports.postMessage = async (req, res) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, "secret123");
  const username = decoded.username;
  await User.updateOne(
    { username: username },
    { $set: { message: req.body.message } }
  )
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.status(401).json({ error: err });
    });
};

exports.becomeMember = async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "secret123");
  const username = decoded.username;

  if (passwords.member === req.body.password) {
    
    await User.updateOne({ username: username }, { $set: { member: true } })
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => {
        return res.status(401).json({ error: err });
      });
  } else {
    
    return res.status(401).json({ error: "Invalid Member Password" });
  }
};

exports.becomeAdmin = async(req, res) => {
  const token = req.headers.authorization
  const decoded = jwt.verify(token, "secret123")
  const username = decoded.username

  if (passwords.admin === req.body.password) {
    await User.updateOne({username:username}, {$set: {admin: true}})
    .then((data) => {
      return res.json(data)
    })
    .catch((err) => {
      res.status(401).json({error: err})
    })
  } else {
    return res.status(401).json( {error: "Invalid Admin Password"})
  }
}

exports.messageList = async (req, res) => {
  const posts = User.find();
  posts
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};

exports.deletePost = async (req, res) => {
  await User.findOneAndUpdate(
    { user: req.body.user },
    { $unset: { message: "" } }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
