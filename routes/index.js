const express = require('express');
const apiRouter = express.Router();

//Routes import
const usersRouter = require('./users/users');
const StoryRouter = require('./Story/story');
const productsRouter = require('./Products/products');
const commentRouter = require('./comments/comment');
const OwnerRouter = require('./Owner/Owner');

//Routes 
apiRouter.use('/users', usersRouter);
apiRouter.use('/story' , StoryRouter);
apiRouter.use('/products' , productsRouter);
apiRouter.use('/comments' , commentRouter);
apiRouter.use('/' , OwnerRouter);


module.exports = apiRouter; 