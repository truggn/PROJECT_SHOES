const db = require('../db');
const shortid = require('shortid');


class homeController{
    
    // [GET] -> home 
    index(req , res){
        res.render('home/index');
    }
    // [GET] // :slug
    show(req, res){
        res.send("home");
    }

}

module.exports = new homeController;

 








// // module createuser
// module.exports.createPostUser = function(req , res){
//     req.body.id = shortid.generate();

//     const errors = [];

//     if(!req.body.username){
//         errors.push('Username is require');
//     }
//     if(!req.body.email){
//         errors.push('Email is require');
//     }
//     if(!req.body.password){
//         errors.push('Password is require');
//     }
//     if(errors.length){
//         res.render('home/register', {
//             errors: errors,
//             values: req.body
//         });
//         return;
//     }
//     db.get('users').push(req.body).write();
//     res.redirect('/login');
// };