const express = require('express');
const {validationResult } = require('express-validator');
const StoryModel = require('../model/storyModel');
const {WEBSITE_BACKEND_DOMAIN_SET} = process.env
const getStory = async (req , res)=>{
    try{
        const Storys =await StoryModel.find();

        if(!Storys)return res.status(401).json({
            message:'error',
            error : 'Storys is not found'
        });

        res.status(201).json({
            message:'ok',
            data : Storys
        })
    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        })
    }
}

const PostStory =async (req , res)=>{
    try{
        const image1Url = req.files.image1 ? `uploads/Story/${req.files.image1[0].filename}` : null;
        const image2Url = req.files.image2 ? `uploads/Story/${req.files.image2[0].filename}` : null;
        const validation = validationResult(req)
        if(!validation.isEmpty())return res.status(401).json({
            data : 'null',
            message : 'error',
            error : validation.array()
        });

        const setStory =new StoryModel({
            image1 : WEBSITE_BACKEND_DOMAIN_SET+image1Url,
            image2 : WEBSITE_BACKEND_DOMAIN_SET+image2Url
        });

        const saveData =await setStory.save()

        if(!saveData)return res.status(401).json({
            message : 'error',
            error : 'Story in not save to database'
        });

        res.status(201).json({
            message:'ok',
            data : saveData
        })
    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err.message
        })
    }
}

const deleteStory =async (req , res)=>{
    try{
        const id = req.params.id;
        const deleteStorys = await StoryModel.findByIdAndDelete(id)

        if(!deleteStorys)return res.status(401).json({
            message : 'error',
            error : 'story is not deleted'
        });

        res.status(201).json({
            message: 'ok',
            data : deleteStorys
        })
    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err
        })
    }
}

module.exports={
    PostStory,
    getStory,
    deleteStory
}