const express = require('express');
const {postUsers , getusers , deleteUser} = require('../../controller/usersControllers');
const validateUser = require('../../validation/usersValidation');
const usersRouter = express.Router();
const authenticateOwner =require('../../middlewares/ownerValidation/ownerAuth');

usersRouter.get('/',authenticateOwner,getusers);
usersRouter.post('/',validateUser(),postUsers);
usersRouter.delete('/:id', authenticateOwner,deleteUser);


module.exports = usersRouter;