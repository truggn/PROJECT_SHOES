const User = require('../modules/users')

exports.UserValidator = function(req, res , next){

    req.check('username' , 'Username không bỏ trống.').not().isEmpty();
    req.check('username' , 'Username phải nhiều hơn 2 ký tự.').isLength({min:2});
    req.check('email' , 'Không đúng định dạng Email.').isEmail();
    req.check('email' , 'Email không bỏ trống').not().isEmpty();
    req.check('password' , 'Password không bỏ trống.').not().isEmpty();
    req.check('password' , 'Password phải nhiều hơn 5 ký tự.').isLength({min:5})

    const errors = req.validationErrors();

        if(errors){
            const firstError = errors.map(error => error.msg)[0];
            return res.status(400).json({error:firstError});
        }
        next();
}

