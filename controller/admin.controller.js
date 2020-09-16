
const { mongo } = require('mongoose');
const {mongooseToObject, mutipleMongooseToObject} = require('../util/mongoose');
const Product = require('../modules/products');
const products = require('../modules/products');

class adminController{
    //[GET view add]
    index(req , res ){
        res.render('admin/addproduct');
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
      //[GET view add]
    edit(req , res , next ){
          Product.findById(req.params.id )
                  .then( products => res.render('admin/editproduct',
                  {products: mongooseToObject(products)}
                  ))
                  .catch(next);
  };
      //[[PUT products]]
    putupdate(req, res, next){
      Product.updateOne({ id: req.params._id}, req.body)
              .then(() => res.redirect('/admin/updateproduct'))
              .catch(next);
    };
    //{[DELETE] products}
    delete(req, res, next){
       Product.deleteOne({id: req.params._id})
              .then(()=> res.redirect('back'))
              .catch(next);
    }
}

module.exports= new adminController;