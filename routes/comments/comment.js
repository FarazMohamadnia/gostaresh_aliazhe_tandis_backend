const express = require('express');
const authenticateOwner =require('../../middlewares/ownerValidation/ownerAuth');
const { getComments, postComment, deleteComment } = require('../../controller/commentController');
const commentValiation = require('../../validation/commentsValidation');
const commentRouter = express.Router();

commentRouter.get('/',authenticateOwner,getComments);
commentRouter.post('/',commentValiation(),postComment)
commentRouter.delete('/:id',authenticateOwner,deleteComment);

module.exports = commentRouter;