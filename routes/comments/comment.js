const express = require('express');

const { getComments, postComment, deleteComment } = require('../../controller/commentController');
const commentValiation = require('../../validation/commentsValidation');
const commentRouter = express.Router();

commentRouter.get('/',getComments);
commentRouter.post('/',commentValiation(),postComment)
commentRouter.delete('/:id',deleteComment);

module.exports = commentRouter;