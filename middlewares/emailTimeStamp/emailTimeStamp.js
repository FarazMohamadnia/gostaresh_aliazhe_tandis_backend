let timestamp = true
const accessControlMiddleware = (req, res, next) => {
    if (timestamp) {
        timestamp = false;
        setTimeout(() => {
            timestamp = true;
        }, 2 * 60 * 1000);
        next();
    } else {
        res.status(429).json({
            message:'error',
            error : 'Please wait a while and try again'
        });
    }
};



module.exports = accessControlMiddleware;