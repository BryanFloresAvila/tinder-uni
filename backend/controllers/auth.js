const users = require('../models/users');
const register = (req, res) => {
  const { email, password } = req.body;
  const user = {
    email,
    password,
  };
  users
    .create(user)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const login = (req, res) => {};

module.exports = { register, login };
