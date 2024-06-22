const express = require('express');
const { sendEmail, login } = require('../../controller/ownerController');
const OwnerRouter = express.Router();

OwnerRouter.post('/owner/sendEmail' , sendEmail)
OwnerRouter.post('/owner/Login' , login)

module.exports = OwnerRouter;
