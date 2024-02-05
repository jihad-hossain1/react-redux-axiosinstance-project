const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = new express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kn" }));
app.use(express.static("public"));
app.use(cookieParser());

// route importer
const userRoute = require("./router/user.router");

app.use("/api/v1/users", userRoute);

module.exports = app;
