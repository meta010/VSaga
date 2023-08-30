const express = require("express");
const ProductModel = require("../Models/Product.model");
const AdminMiddleware = require("../Middlewares/Admin.middleware");
const AuthMiddleware = require("../Middlewares/Auth.middleware");

const productRoute = express.Router();

productRoute.get("/?", async (req, res) => {
  try {
    const { city, category } = req.query;
    const lowercaseCity = city ? city.toLowerCase() : undefined;
    const lowercategory=category? category.toLowerCase() : undefined;
    let query = {};
    if (lowercaseCity) {
      query.city = lowercaseCity; // Add city to the query if present
    }
    if (category) {
      query.category = lowercategory; // Add category to the query if present
    }
    let allproducts = await ProductModel.find(query);
    res.status(200).send({ msg: "All Products", data: allproducts });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRoute.get("/search", async (req, res) => {
  const searchQuery = req.query.q;
  console.log(searchQuery)
  if (!searchQuery) {
    return res.status(400).json({ error: 'Search query parameter "q" is required.' });
  }

  try {
    const searchResults = await ProductModel.find({ name: { $regex: searchQuery, $options: 'i' } });
    res.json({ results: searchResults });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while searching for products.' });
  }
});


productRoute.get("/all", async (req, res) => {
  try {
    let allproducts = await ProductModel.find({});
    res.status(200).send({ msg: "All Products", data: allproducts });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRoute.post("/add", AdminMiddleware, async (req, res) => {
  console.log(req.body)
  try {
    let newproduct = new ProductModel(req.body);
    await newproduct.save();
    res.status(200).send({ msg: "Product Added", data: newproduct });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRoute.patch("/update/:id", AdminMiddleware, async (req, res) => {
  let id = req.params.id;
  console.log(id, req.body);
  try {
    let updatedproduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).send({ msg: "Product Updated", data: updatedproduct });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});


productRoute.patch("/update/reviews/:id", AuthMiddleware, async (req, res) => {
  let id = req.params.id;

  try {
    let updatedproduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).send({ msg: "Product Updated", data: updatedproduct });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

productRoute.delete("/delete/:id", AdminMiddleware, async (req, res) => {
  let id = req.params.id;
  try {
    let delproduct = await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Product Deleted", data: delproduct });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
});

module.exports = productRoute;



