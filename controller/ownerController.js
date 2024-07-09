const express = require('express');
const OwnerloginRouter = express.Router();
// bcrypt package
const bcrypt = require('bcryptjs');
// opt package
const otp = require('otp');
//node mailer config import
const transporter  = require('../config/email/EmailConfig');
// env file import
const { OWNER_PASSWORD_SET, OWNER_USERNAME_SET , SECRET_KEY , EMAIL_OWNER} = process.env;
// jsonwebtoken import
const jwt = require('jsonwebtoken');
const secretKey = SECRET_KEY ;


// owner config
const owner = {id:123 , username : OWNER_USERNAME_SET, password: OWNER_PASSWORD_SET};

let code;
// send code

const sendEmail =(req , res)=>{
    try{
        code =new otp({ digits: 6 }).totp();

        const mailOptions = {
            from: EMAIL_OWNER,
            to: 'farazmnm@gmail.com',
            subject: 'Verification Code',
            text: `Your verification code is: ${code}`
        };
        transporter.sendMail(mailOptions, (err, info) => {
            
            if (err) {
                res.status(401).json({
                    message: 'error',
                    error:err
                })
              console.error("Error sending email: ", err);
            } else {
                res.status(201).json({
                    message:'Email Sending',
                    EmailInfo: info
                })
                setTimeout(() => {
                    code = 0;
                }, 2 * 60 * 1000);
                console.log("Email sent: ", info.response);
            }
          });
            }catch(err){
                res.status(501).json({
                    Message: 'error',
                    error : err
                })
            }
}

const login =async (req , res)=>{
    const { username, password , sendcode} = req.body;
    try{
        // Check if username or password exists
        if (username === owner.username && bcrypt.compareSync(password, owner.password)&&
        code == sendcode
        ) {
            const token = jwt.sign({ id: owner.id, username: owner.username}, secretKey, { expiresIn:'15d' });
            return res.status(200).json({
                Authorization:token, 
                message : 'owner is login'
            });
        }else{
            return res.status(401).json({ message: 'Incorrect username or password' });
        }
    }catch(err){
        res.status(501).json({
            message:'error',
            error : err
        })
    }
}



module.exports = {
    sendEmail,
    login
}