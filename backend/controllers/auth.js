const { tokenSign, verifyToken } = require('../utils/handlerJWT');
const users = require('../models/users');
const { sendConfirmationEmail } = require('../config/nodemailer');
const register = (req, res) => {
  const { codeUNI } = req.body;
  const token = tokenSign({ codeUNI });
  const user = {
    codeUNI,
    email: `${codeUNI}@uni.pe`,
    confirmationCode: token,
  };
  users
    .create(user)
    .then((user) => {
      res.send({
        message: 'User was registered successfully! Please check your email',
      });
      sendConfirmationEmail(user.codeUNI, user.email, user.confirmationCode);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
const login = (req, res) => {};

module.exports = { register, login };
