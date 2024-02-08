const express = require("express");
const {
  createProduct,
  getallProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/create").post(createProduct);
router.route("/all-products").get(getallProduct);

module.exports = router;
