
const { mongo } = require('mongoose');
const {mongooseToObject, mutipleMongooseToObject} = require('../util/mongoose');
const Product = require('../modules/products');
const products = require('../modules/products');

class adminController{
    //[GET view add]
    index(req , res ){
        res.render('admin/index');
    };
    //[POST products]
    createProduct(req, res, next){
        const name = req.body.name;
        const price = req.body.price;
        const image = req.body.image;
        const mota = req.body.description;
        const cars = req. body.slug;
        
        Product.findOne({name:name, price:price, image:image, mota:mota, cars:cars});
        req.body.image = req.file.path.split('\\').slice(1).join('/');
        const product = new Product(req.body);
        product.save()
                .then(() =>res.redirect('/home'))
                .catch(Error =>{});

    }
      //[GET view update]
      update(req , res , next ){
          Product.find({})
                 .then(products => res.render('admin/update' , {
                 products: mutipleMongooseToObject(products) 
                 }))
                 .catch(next);
    };
}

module.exports = new adminController;