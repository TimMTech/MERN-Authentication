const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.post("/signup", userController.signUp);

router.post("/login", userController.loginIn);

router.post("/message", userController.postMessage);

router.get("/message", userController.messageList);

router.post("/message/delete", userController.deletePost);

module.exports = router;
