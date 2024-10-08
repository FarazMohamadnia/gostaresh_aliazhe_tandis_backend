const express = require('express');
const {validationResult } = require('express-validator');
const ProductModel = require('../model/productModel');
const {WEBSITE_BACKEND_DOMAIN_SET } = process.env;

const getProducts = async(req , res)=>{
    try{
        const Products = await ProductModel.find();
        if(!Products)return res.status(401).json({
            data : 'null',
            message : 'error',
            error :'Products not found'
        });
        res.status(201).json({
            message : 'ok',
            data : Products 
        })
    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        });
    }
}

const getProductsbyId = async(req , res)=>{
    try{
        const Id = req.params.id
        if(!Id)return res.status(404).json({
            data : 'null' ,
            message : 'error',
            error : 'There is no ID'
        })
        const findbyId =await ProductModel.findById(Id);
        if(!findbyId)return res.status(404).json({
            data: 'null',
            message : 'error',
            error : 'product is not found'
        });
        res.status(201).json({
            data : findbyId,
            message:'ok'
        })

    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        });
    }
}

const PostProduct =async(req , res)=>{
    try{
        const {title ,text , type} = req.body;
        const image = req.files.image ? `uploads/products/${req.files.image[0].filename}` : null;
        const image2 = req.files.image2 ? `uploads/products/${req.files.image2[0].filename}` : null;
        const validation = validationResult(req);
        if(!validation.isEmpty())return res.status(401).json({
            data : 'null',
            message : 'error',
            error : validation.array()
        })

        const setProduct = new ProductModel({
            image :WEBSITE_BACKEND_DOMAIN_SET+image, 
            image2 :WEBSITE_BACKEND_DOMAIN_SET+image2,  
            title :title,
            text : text ,
            type : type 
        });

        const saveData =await setProduct.save();

        if(!saveData)return res.status(401).json({
            message : 'error',
            error : 'Product is not save in dataBase'
        })

        res.status(201).json({
            message:'ok',
            data : saveData
        })
    }catch(err){
        res.status(501).json({
            message:'error',
            error : err.message
        })
    }
}

const deleteProduct =async (req , res)=>{
    try{
        const id = req.params.id;
        const deleteProducts = await ProductModel.findByIdAndDelete(id)

        if(!deleteProducts)return res.status(401).json({
            message : 'error',
            error : 'product is not deleted'
        });

        res.status(201).json({
            message: 'ok',
            data : deleteProducts
        })
    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err
        })
    }
};


const searchTitle =async (req , res)=>{
    const searchTerm = req.query.t;
    try {
        if(!searchTerm)return res.status(401).json({
            message : 'error',
            error : 'query is undifind'
        })
        const products = await ProductModel.find({ title: { $regex: searchTerm, $options: 'i' } });
        if(!products) return res.status(401).json({
            message : 'error',
            error : 'data not found'
        })

        res.status(201).json({
            message : 'ok',
            data : products
        });

    } catch (err) {
        res.status(501).json({ message: err.message });
    }
}

module.exports = {
    PostProduct , 
    getProducts ,
    deleteProduct,
    searchTitle ,
    getProductsbyId
}
