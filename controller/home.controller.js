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
    db.get('users').push(req.body).write();
    res.redirect('/login');
};