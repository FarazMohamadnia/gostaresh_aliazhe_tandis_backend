const mongoose = require('mongoose');
const{MONGODB_URL} = process.env

const mongodb = mongoose.connect(MONGODB_URL)
  .then(() => console.log('Connected!'));

module.exports = mongodb;