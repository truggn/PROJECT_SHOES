const Product = require('../modules/products');
const { mongooseToObject} = require('../util/mongoose');

class productController{
    index (req, res , next){
        res.render('product/products');
    }
    // [GET] /product/ :slug
    show(req, res , next){
        Product.findOne({slug: req.params.slug })
                .then(products => {
                    res.render('product/show' , { products: mongooseToObject(products)});
                }) 
                .catch(next);
    };

    

};

module.exports = new productController;

 








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