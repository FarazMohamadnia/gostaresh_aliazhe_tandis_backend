const { body } = require('express-validator');
const User = require('../model/usersModel');


const validateUser =()=>{ 
  return[
    body('firstName')
      .trim()
      .notEmpty().withMessage('نام الزامی است')
      .isAlpha('fa-IR', { ignore: ' ' }).withMessage('نام باید فقط حاوی حروف باشد')
      .isLength({ min: 2 , max: 40}).withMessage('نام باید حداقل 2 کاراکتر باشد و حداکثر چهل کلمه'),

    body('lastName')
      .trim()
      .notEmpty().withMessage('نام خانوادگی الزامی است')
      .isAlpha('fa-IR', { ignore: ' ' }).withMessage('نام خانوادگی باید فقط حاوی حروف باشد')
      .isLength({ min: 2 , max : 60}).withMessage('نام خانوادگی باید حداقل 2 کاراکتر باشد و حداکثر شصت کلمه'),

    body('email')
      .isEmail().withMessage('لطفا یک آدرس ایمیل معتبر وارد کنید')
      .custom(async (value) => {
          const user = await User.findOne({ email: value });
          if (user) {
            return Promise.reject('این ایمیل قبلاً استفاده شده است');
          }
        }),

    body('phoneNumber')
      .trim()
      .notEmpty().withMessage('شماره تلفن الزامی است')
      .isMobilePhone().withMessage('لطفا یک شماره تلفن معتبر وارد کنید')
      .custom(async (value) => {
          const user = await User.findOne({ phoneNumber : value });
          if (user) {
            return Promise.reject('این شماره تلفن قبلاً استفاده شده است');
          }
        })
  ]
}

module.exports= validateUser; 