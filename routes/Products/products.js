const express = require('express');
const { getProducts, PostProduct, deleteProduct , searchTitle , getProductsbyId} = require('../../controller/productsController');
const validateProduct = require('../../validation/productsValidation');
const productsRouter = express.Router();
const authenticateOwner =require('../../middlewares/ownerValidation/ownerAuth');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/products');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'_'+'gostaresh_aliazhe_tandis.png');
    }
});

const upload = multer({ storage: storage });

productsRouter.get('/',getProducts);
productsRouter.get('/id/:id',getProductsbyId);
productsRouter.post('/', authenticateOwner,upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),PostProduct);
productsRouter.delete('/:id',authenticateOwner,deleteProduct);
productsRouter.get('/search' , searchTitle); 

module.exports = productsRouter;