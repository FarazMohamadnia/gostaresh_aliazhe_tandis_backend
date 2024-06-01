const { body } = require("express-validator")

const storyValidation =()=>{
    return[
        body('image1').notEmpty().withMessage('عکس اول نباید خالی باشد'),
        body('image2').notEmpty().withMessage('عکس دوم نباید خالی باشد')
    ]
}

module.exports = storyValidation;