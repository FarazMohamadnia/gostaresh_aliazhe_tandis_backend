const express = require('express');
const {postUsers , getusers , deleteUser} = require('../../controller/usersControllers');
const validateUser = require('../../validation/usersValidation');
const usersRouter = express.Router();

usersRouter.get('/',getusers);
usersRouter.post('/',validateUser(),postUsers);
usersRouter.delete('/', deleteUser);


module.exports = usersRouter;