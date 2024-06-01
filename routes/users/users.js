const express = require('express');
const {postUsers , getusers} = require('../../controller/usersControllers');
const validateUser = require('../../validation/usersValidation');
const usersRouter = express.Router();

usersRouter.get('/',getusers);
usersRouter.post('/',validateUser(),postUsers)

module.exports = usersRouter;