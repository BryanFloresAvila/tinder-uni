const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = (payload) => {
  return jsonwebtoken.sign(
    {
      _id: payload._id,
      codeUNI: payload.codeUNI,
    },
    JWT_SECRET
  );
};
const verifyToken = (token) => {
  return jsonwebtoken.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) {
      return false;
    }
    return decoded;
  });
};
module.exports = { tokenSign, verifyToken };
