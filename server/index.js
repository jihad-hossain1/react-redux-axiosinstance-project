require("dotenv").config();
const app = require("./app");
const connectDatabase = require("./data/connectDatabase");

connectDatabase()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is run on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("connect failed!!!", error));
