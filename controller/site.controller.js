const User = require('../modules/users');
const { mongo } = require('mongoose');

class siteController{
    
    // [GET] -> home 
    login(req , res , next){
        res.render('home/login');
    }
    // [GET] // register
    register(req, res){
        res.render("home/register");
    }
    //[POST] // Register Post Users
    createPostUser(req, res, next){
       mongo.connect(mongo,function(err, db){
            assert.equal(null, err);
        
       })
    }

}

module.exports = new siteController;
