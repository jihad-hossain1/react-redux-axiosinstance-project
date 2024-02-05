const User = require("../models/user.models");

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(
      "Something went wrong while generating refresh and access token."
    );
  }
};

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

const loginUser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if (!(username || email)) {
      return res
        .status(400)
        .jsonj({ message: "username or email is required." });
    }

    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      return res.status(404).json({ message: "User doesnot exist." });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "Invalid user credentials || password." });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      " -password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        user: loggedInUser,
        accessToken,
        refreshToken,
        message: "login successfull",
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error from server on login failed", error: error });
  }
};

module.exports = { registerUser, getAllUser, loginUser };
