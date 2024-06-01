// ======= userModel =========//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength:2,
    maxLength:40
  },
  lastName: {
    type: String,
    required: true,
    minLength:2,
    maxLength:60
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique : true,
    minLength:7,
    maxLength:13
  }
});

const User = mongoose.model('Users', userSchema);

module.exports = User;
