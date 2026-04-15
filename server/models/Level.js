const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  levelNumber: Number,
  question: String,
  answer: String,
  hint: String
});

module.exports = mongoose.model("Level", levelSchema);