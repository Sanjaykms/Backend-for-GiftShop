const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  giftId: String,
  userName: String,
  reviewText: String,
  reviewId: String,
});

const reviews = mongoose.model("reviews", reviewSchema);

module.exports = reviews;
