const jwt = require('jsonwebtoken');
// import process.env
const {SECRET_KEY} = process.env
function authenticateOwner(req, res, next) {
    try{
        const authHeader = req.header('Authorization');
        const token = authHeader ;
        if (token == null) return res.status(401).json({
            message:'Error',
            error: 'There is no token'
        });

        jwt.verify(token,SECRET_KEY, (err, user) => {

            if (err) return res.status(403).json({
                message: 'Error',
                error: 'token is not valid'
            });
            req.owner = user;
            next(); 
        });
    }catch(err){
        res.status(501).json({
            message:'error',
            error : 'server Error'
        })
        console.log(err)
    }
};

module.exports = authenticateOwner;