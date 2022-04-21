require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connectDataBase } = require('./config/mongo');
app.use(cors());
app.use(bodyParser.json());
connectDataBase();
app.use('/api/', require('./routes'));
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
