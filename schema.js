const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});

const userDetails = mongoose.model('jokers', userSchema);
module.exports = {
  userDetails,
};
