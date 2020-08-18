const Product = require('../modules/products');
const { mutipleMongooseToObject} = require('../util/mongoose');

class homeController{
    
    // [GET] -> home 
    index(req , res , next){
        Product.find({})
            .then(products => {  
                res.render('home/index', {
                    products: mutipleMongooseToObject(products)}); 
                })
                .catch(next);       
    }
    // [GET] // :slug
    show(req, res , next){
        res.send('slug')
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