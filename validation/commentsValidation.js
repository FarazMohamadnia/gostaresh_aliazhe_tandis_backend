const { body } = require("express-validator")

const commentValiation = ()=>{
    return[
        body('title').isLength({min : 2 , max : 150}).withMessage('طول متن نباید بیشتر از ۱۵۰ و کمتر از ۲ باشد')
        .isString().withMessage('متن باید یک استرینگ باشد')
        .notEmpty().withMessage('متن نباید خالی باشد'),

        body('text').isLength({min : 2 , max : 4000}).withMessage('طول متن نباید بیشتر از ۴۰۰۰ و کمتر از ۲ باشد')
        .isString().withMessage('متن باید یک استرینگ باشد')
        .notEmpty().withMessage('متن نباید خالی باشد'),

        body('date').isEmpty().withMessage('این فیلد باید خالی باشد')

    ]

    
}

module.exports = commentValiation;