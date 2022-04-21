const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    codeUNI: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
  },
  { versionKey: false }
);
const users = mongoose.model('users', userSchema);

module.exports = users;
