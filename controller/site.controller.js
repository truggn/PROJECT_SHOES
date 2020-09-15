const User = require('../modules/users');
const { mongo } = require('mongoose');
const {mongooseToObject} = require('../util/mongoose');
const bcrypt = require('bcrypt')

class siteController{
    
    // [GET] -> home 
    login(req , res , next){

        res.render('home/login');
    }
    // [GET] // register
    register(req, res){
        res.render("home/register");
    }
    //[POST] // Register Post Users ////////////////////////////////////////

    createPostUser(req, res, next){

        User.findOne({email: req.body.email} , (err, user) =>{
            if(user == null){ // kiểm tra xem email đã được sử dụng hay chưa
                bcrypt.hash(req.body.password, 10 , function(err , hash){// Mã hóa mật khẩu trước khi lưu vào db
                    if(err){
                        return next(err);
                    }
                    const user = new User(req.body)
                    user.role = 'user', // sau khi rigister thi mặc định role là  user 
                    user.password = hash;
                    user.save()
                    .then(() => res.redirect('/login'))
                    .catch(Error =>{})
                })
            }else{
                res.json({err: 'Email đã được sử dụng'});
            }
        })

    }

    ///////////////////[POST] // Login Post Users/////////////////////////////////

    postLogin(req, res , next){
        
        var email    = req.body.email;
        var password = req.body.password;

        User.findOne({email:email}).exec(function(err , user){
            if(err){
                return res.json({err})
            }else if(!user){
                return res.json({err: 'Username and Password are incorrect!!'})
            }
            bcrypt.compare(password , user.password , (err , result) =>{
                if(result === true){
                    //req.session.user = user,
                   return  res.redirect('/home');    
                }else{
                    return res.json({err:'Username and Password are incorrect!!'})
                }
            })
        })
    }

    ///////////////////////////////////////////////////////
   

}


module.exports = new siteController;
