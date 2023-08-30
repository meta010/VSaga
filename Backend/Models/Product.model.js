const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  category:{type: String,required: true},
  subcategory:{type: String,required: false},
  image: { type: Array, required: true },
  price: { type: String, required: false },
  rating: { type: Number, required: false },
  city: { type: String, required: true },
  weight: { type: String, required: false },
  multiple_price: { type: Array, required: false },
  addons: { type: Array, required: false },
  reviews: { type: Array, required: false },
  prod_details: { type: Array, required: true },
  description: { type: Array, required: false },
  delivery_info: { type: Array, required: false },
  booked_dates: { type: Array, required: false },
  pincodes: { type: Array, required: true },
  Product_category: { type: Array, required: false },
  video_link: { type: String, required: false },
  offers: { type: Array, required: false },
  slots:{ type: Array, required: false},
  discounts:{ type: Array, required: false}
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
