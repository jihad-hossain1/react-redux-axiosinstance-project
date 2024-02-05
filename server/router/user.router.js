const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/allusers").get(getAllUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
