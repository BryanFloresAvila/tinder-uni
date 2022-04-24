const { register, login ,verifyUser} = require('../controllers/auth');
const express = require('express');
const router = express.Router();
router.post('/register', (req, res) => {
  register(req, res);
});
router.post('/login', (req, res) => {
  //login(req, res);
});
router.get('/confirmationEmail/:confirmationCode', (req, res) => {
  verifyUser(req, res);
});

module.exports = router;
