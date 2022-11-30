const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  userId: String,
  giftId: String,
  productName: String,
  quantity: Number,
  price: String,
  totalAmount: Number,
  url: String,
  status: String,
  themePrice: String,
  themeName: String,
});

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;
