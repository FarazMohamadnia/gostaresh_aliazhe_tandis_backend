const express = require('express');
const { getProducts, PostProduct, deleteProduct , searchTitle} = require('../../controller/productsController');
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
productsRouter.post('/', authenticateOwner,upload.single('image'),validateProduct(),PostProduct);
productsRouter.delete('/:id',authenticateOwner,deleteProduct);
productsRouter.get('/search' , searchTitle); 

module.exports = productsRouter;