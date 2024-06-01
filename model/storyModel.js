const mongoose = require('mongoose');
const Schema = mongoose.Schema

const StorySchema = Schema({
    image1 : {
        type : String,
        required : true
    },

    image2 : {
        type : String,
        required : true
    }
})

const StoryModel = mongoose.model('Story', StorySchema);

module.exports = StoryModel;