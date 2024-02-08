const Product = require("../models/product.models");

const createProduct = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!(title && description)) {
      return res.status(401).json({ message: "title and description nedded" });
    }
    if ([title, description].some((field) => field?.trim() === "")) {
      return res.status(401).json({
        message: "title or description is empty this field required",
      });
    }

    const savedProduct = await Product.create({ title, description });
    return res
      .status(201)
      .json({ message: "product create successfull", savedProduct });
  } catch (error) {
    return res.status(500).json({ message: "error from server", error });
  }
};

const getallProduct = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    return res.status(201).json({ allProduct });
  } catch (error) {
    return res.status(500).json({ message: "error from server", error });
  }
};

module.exports = { createProduct, getallProduct };
