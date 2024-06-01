const { validationResult } = require("express-validator");
const CommentsModel = require("../model/commentsModel")


const getComments = async(req , res)=>{
    try{
        const findComments =await CommentsModel.find();

        if(!findComments)return res.status(401).json({
            message: 'error',
            error: 'comments not found'
        });

        res.status(201).json({
            message:'ok',
            data : findComments
        });
    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        })
    }
}

const postComment = async(req , res)=>{
    try{
        const {title , text} = req.body;

        const validation = validationResult(req);
        if(!validation.isEmpty())return res.status(401).json({
            message:'error',
            error : validation.array()
        });

        const setData =new CommentsModel({
            title : title,
            text : text
        });

        const saveData =await setData.save();

        if(!saveData)return res.status(401).json({
            message : 'error',
            error : 'data is not save in database'
        });

        res.status(201).json({
            message : 'ok',
            data : saveData
        })

    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        })
    }
}

const deleteComment = async(req , res)=>{
    try{
        const id = req.params.id;
        const deleteById = await CommentsModel.findByIdAndDelete(id);

        if(!deleteById)return res.status(401).json({
            message : 'error',
            error : 'comments is not deleted'
        });

        res.status(201).json({
            message:'ok',
            data : deleteById
        })

    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err
        })
    }
}
module.exports = {
    postComment, 
    getComments,
    deleteComment
}