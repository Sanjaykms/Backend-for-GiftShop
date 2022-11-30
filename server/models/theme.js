const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  id: String,
  themeName: String,
  price: String,
  themeDesc: String,
});

const themes = mongoose.model("themes", themeSchema);

module.exports = themes;
