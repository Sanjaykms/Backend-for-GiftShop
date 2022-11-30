const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  cartItemId: String,
  giftId: String,
  price: String,
  productName: String,
  quantity: Number,
  totalAmount: String,
  url: String,
  userId: String,
});

const carts = mongoose.model("carts", cartSchema);

module.exports = carts;
