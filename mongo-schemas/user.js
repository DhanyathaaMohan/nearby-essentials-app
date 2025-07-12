const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  location: String,
  bookmarks: [String],
  searchHistory: [String],
});

module.exports = mongoose.model('User', userSchema);
