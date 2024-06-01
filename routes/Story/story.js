const express = require('express');
const { getStory, PostStory, deleteStory } = require('../../controller/storyController');
const storyValidation = require('../../validation/storyValidation');
const StoryRouter = express.Router();

StoryRouter.get('/', getStory)
StoryRouter.post('/',storyValidation(),PostStory)
StoryRouter.delete('/:id', deleteStory);

module.exports = StoryRouter; 