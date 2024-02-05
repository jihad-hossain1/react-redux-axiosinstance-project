const User = require("../models/user.models");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res
      .status(201)
      .json({ message: "users data fetch successfull", users: users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "all user data are not fetch, ", error: error });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password, fullname } = req.body;

  try {
    console.log(req.body);
    if (
      [username, email, fullname, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.status(400).json({ message: "all Field are required" });
    }

    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (userExists)
      return res
        .status(409)
        .json({ message: "user with username or email already exists" });

    const user = await User.create({
      fullname,
      username: username.toLowerCase(),
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser)
      return res
        .status(500)
        .json({ message: "user registration failed, please try again" });

    return res
      .status(201)
      .json({ user: createdUser, message: "user registered successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "get an error from server: ", error: error });
  }
};

module.exports = { registerUser, getAllUser };
