const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    codeUNI: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    firstName: String,
    lastName: String,
    faculty: String,
    description: String,
    avatar: String, //URL
    confirmationStatus: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
    },
  },
  { versionKey: false }
);
const users = mongoose.model('users', userSchema);

module.exports = users;
