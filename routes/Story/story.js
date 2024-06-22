const express = require('express');
const { getStory, PostStory, deleteStory } = require('../../controller/storyController');
const storyValidation = require('../../validation/storyValidation');
const StoryRouter = express.Router();
const authenticateOwner =require('../../middlewares/ownerValidation/ownerAuth');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/Story');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


StoryRouter.get('/', getStory)
StoryRouter.post('/',authenticateOwner,upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),PostStory)
StoryRouter.delete('/:id', authenticateOwner,deleteStory);

module.exports = StoryRouter; 