const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  date: {
    type: Date,
    default:Date.now(),
  },
  title: {
    type: String,
    required: true,
    trim:true,
    minLength : 2,
    maxLength : 150
  },
  text: {
    type: String,
    required: true,
    trim:true,
    minLength : 2,
    maxLength : 4000
  }
});

const CommentsModel = mongoose.model('comments', commentsSchema);

module.exports = CommentsModel;
