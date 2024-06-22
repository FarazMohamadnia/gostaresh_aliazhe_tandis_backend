const nodemailer = require('nodemailer');

// env import
const {EMAIL_OWNER , EMAIL_OWNER_PASS , PORT} = process.env;

const transporter = nodemailer.createTransport({  
    service: 'gmail',
    host: 'localhost:3000', 
    // port: 586,
    port:PORT,
    auth: {
        user: EMAIL_OWNER ,
        pass: EMAIL_OWNER_PASS
    }
});

module.exports = transporter