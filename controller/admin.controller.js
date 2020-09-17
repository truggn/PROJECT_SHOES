
const { mongo} = require('mongoose');
const {mongooseToObject, mutipleMongooseToObject} = require('../util/mongoose');
const Product = require('../modules/products');


class adminController{
    //[GET view add]
    index(req , res){
        res.render('admin/addproduct');
    };
    //[POST products] // thêm 1 bản ghi vào db
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
                .then(() =>res.redirect('/admin/updateproduct'))
                .catch(Error =>{});

    }
        //[GET view update]
      update(req , res , next){
            Product.find({}) //chi lay ra nhung ban ghi chua xoa mem.
                  .then(products => res.render('admin/update' , {
                  products: mutipleMongooseToObject(products) 
                  }))
                  .catch(next);
      };
        //[GET view add]
      edit(req , res , next){
            Product.findById(req.params.id)
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
        //{[DELETE] products} // xóa 1 bản ghi , bản ghi đó được đưa vào sọt rác và có thể revert lại.
      delete(req, res, next){
          Product.delete({_id: req.params.id})
                  .then(()=> res.redirect('back'))
                  .catch(next);
    };

       //[GET view trash product] // view soft delete các bản ghi 
      trashProduct(req , res , next){
        Product.findDeleted({}) //chi lay ra nhung ban ghi chua xoa mem.
               .then(products => res.render('admin/trashproduct' , {
               products: mutipleMongooseToObject(products) 
               }))
               .catch(next);
    };
        //[PATCH  revert product] // phuc hoi lai cac ban ghi da xoa truoc do
      revertProcduct(req ,res , next){
          Product.restore({_id: req.params.id})
                  .then(()=> res.redirect('back'))
                  .catch(next);
    };
    //[[ DELETE ]] xóa vĩnh viễn 1 bản ghi 
    deleteForce(req, res, next){
      Product.deleteOne({_id: req.params.id})
                  .then(()=> res.redirect('back'))
                  .catch(next);
    }
  }


module.exports= new adminController;