const mongoose = require('mongoose');

const LureSchema = mongoose.Schema({
  name: String,
  description: String,
  // type: String,
  // tags: String
});

module.exports = mongoose.model("Lure", LureSchema);
