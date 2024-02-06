const express = require("express");
const {
  registerUser,
  getAllUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userController");
const verifyJWT = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/allusers").get(getAllUser);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);

module.exports = router;
