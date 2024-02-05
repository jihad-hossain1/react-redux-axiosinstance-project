const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/allusers").get(getAllUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current-user").get(getCurrentUser);

module.exports = router;
