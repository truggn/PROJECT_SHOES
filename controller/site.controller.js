const db = require('../db');
const shortid = require('shortid');


class siteController{
    
    // [GET] -> home 
    login(req , res){
        res.render('home/login');
    }
    // [GET] // :slug
    register(req, res){
        res.render("home/register");
    }

}

module.exports = new siteController;
