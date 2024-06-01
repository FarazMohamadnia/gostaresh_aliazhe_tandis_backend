const express = require('express');
const { getProducts, PostProduct, deleteProduct } = require('../../controller/productsController');
const validateProduct = require('../../validation/productsValidation');
const productsRouter = express.Router();

productsRouter.get('/',getProducts);
productsRouter.post('/', validateProduct() ,PostProduct);
productsRouter.delete('/:id',deleteProduct);

module.exports = productsRouter;