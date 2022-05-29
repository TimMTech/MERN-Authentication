const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

router.post("/signup", userController.signUp);

router.post("/login", userController.loginIn);

router.post("/message", userController.postMessage);

router.get("/message", userController.messageList);

router.post("/become-member", userController.becomeMember)

router.post("/become-admin", userController.becomeAdmin)

router.post("/delete", userController.deletePost);
  
module.exports = router;
