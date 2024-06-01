const express = require('express');
const apiRouter = express.Router();

//Routes import
const usersRouter = require('./users/users');
const StoryRouter = require('./Story/story');
const productsRouter = require('./Products/products');
const commentRouter = require('./comments/comment');

//Routes
apiRouter.use('/users', usersRouter);
apiRouter.use('/story' , StoryRouter);
apiRouter.use('/products' , productsRouter);
apiRouter.use('/comments' , commentRouter);


module.exports = apiRouter; 