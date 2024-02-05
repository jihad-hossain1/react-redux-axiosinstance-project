const express = require("express");
const { registerUser, getAllUser } = require("../controllers/userController");

const router = express.Router();

router.route("/allusers").get(getAllUser);
router.route("/register").post(registerUser);

module.exports = router;
