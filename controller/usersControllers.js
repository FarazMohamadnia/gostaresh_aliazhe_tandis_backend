const User = require('../model/usersModel')
const { validationResult } = require('express-validator');


const getusers =async (req , res)=>{
    try{
        const Users =await User.find();
        if(!Users)return res.status(401).json({
            message : 'error',
            error : 'Users not found'
        });

        res.status(201).json({
            message:'ok',
            data:Users
        });
    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err
        })
    }

}
const postUsers =async (req , res)=>{
    try{
        const {firstName , lastName , email , phoneNumber} = req.body;
        const validation = validationResult(req);

        if(!validation.isEmpty())return res.status(401).json({
            data:'null',
            message: 'error',
            error: validation.array()
        });

        const userData =new User({
            firstName : firstName,
            lastName : lastName,
            email : email,
            phoneNumber : phoneNumber
        });

        const saveData = await userData.save();

        res.status(201).json({
            message : 'ok',
            data : saveData
        })
    }catch(err){
        res.status(501).json({
            message: 'error',
            error : err
        });
    }
}

const deleteUser =async (req , res)=>{
    try{
        const id = req.params.id;
        const deleteUsers = await StoryModel.findByIdAndDelete(id)

        if(!deleteUsers)return res.status(401).json({
            message : 'error',
            error : 'users is not deleted'
        });

        res.status(201).json({
            message: 'ok',
            data : deleteUsers
        })
    }catch(err){
        res.status(501).json({
            message : 'error',
            error : err
        })
    }
}


module.exports= {
    getusers ,
    postUsers,
    deleteUser
} 