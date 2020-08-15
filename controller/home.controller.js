const db = require('../db');
const shortid = require('shortid');

module.exports.home = function(req , res ){
    res.render('home/index')
};
module.exports.login = function(req , res , next ){

    res.render('home/login')
};
// module  req form register
module.exports.register = function(req , res, next){
    res.render('home/register')
};
// module createuser
module.exports.createPostUser = function(req , res){
    req.body.id = shortid.generate();

    const errors = [];

    if(!req.body.username){
        errors.push('Username is require');
    }
    if(!req.body.email){
        errors.push('Email is require');
    }
    if(!req.body.password){
        errors.push('Password is require');
    }
    if(errors.length){
        res.render('home/register', {
            errors: errors,
            values: req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/login');
};