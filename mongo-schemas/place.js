const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  type: String,
  location: String,
  rating: Number,
  budget: String,
});

module.exports = mongoose.model('Place', placeSchema);
