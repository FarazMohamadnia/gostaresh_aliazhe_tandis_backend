const {body} = require("express-validator")

const validateProduct =()=>{ 
    return[
    body('title')
      .trim()
      .notEmpty().withMessage('عنوان الزامی است')
      .isString().withMessage('عنوان باید یک رشته باشد'),
  
    body('text')
      .trim()
      .notEmpty().withMessage('متن الزامی است') 
      .isString().withMessage('متن باید یک رشته باشد')
  ];
}

module.exports = validateProduct;
  