const express = require('express');
const { getProducts, PostProduct } = require('../../controller/productsController');
const validateProduct = require('../../validation/productsValidation');
const productsRouter = express.Router();

productsRouter.get('/',getProducts);
productsRouter.post('/', validateProduct() ,PostProduct);
module.exports = productsRouter;