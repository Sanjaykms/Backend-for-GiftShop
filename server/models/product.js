const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  giftId: String,
  url: String,
  productName: String,
  price: String,
  quantity: String,
  giftDetails: String,
});

const products = mongoose.model("products", productSchema);

module.exports = products;
