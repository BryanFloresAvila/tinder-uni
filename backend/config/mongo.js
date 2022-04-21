const mongoose = require('mongoose');
const connectDataBase = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.log('Error connecting to database: ', error);
    });
};
module.exports = { connectDataBase };
