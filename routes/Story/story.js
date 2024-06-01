const express = require('express');
const { getStory, PostStory } = require('../../controller/storyController');
const storyValidation = require('../../validation/storyValidation');
const StoryRouter = express.Router();

StoryRouter.get('/', getStory)
StoryRouter.post('/',storyValidation(),PostStory)

module.exports = StoryRouter; 