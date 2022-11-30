const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  email: String,
  mobileNumber: String,
  password: String,
  role: String,
  active: String,
});

const users = mongoose.model("users", userSchema);

module.exports = users;
