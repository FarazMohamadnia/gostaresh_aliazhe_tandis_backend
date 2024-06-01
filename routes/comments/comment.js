const express = require('express');

const { getComments, postComment } = require('../../controller/commentController');
const commentValiation = require('../../validation/commentsValidation');
const commentRouter = express.Router();

commentRouter.get('/',getComments);
commentRouter.post('/',commentValiation(),postComment)

module.exports = commentRouter;