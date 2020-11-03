
const { mongo} = require('mongoose');
const {mongooseToObject, mutipleMongooseToObject} = require('../util/mongoose');
const Product = require('../modules/products');


class adminController{
    //[GET view add]
    addproduct(req , res){
          res.render('admin/addproduct');
      };
    //[POST products] // thêm 1 bản ghi vào db
      createProduct(req, res, next){
          const name = req.body.name;
          const price = req.body.price;
          const image = req.body.image;
          const mota = req.body.description;
          const loai = req. body.cars;
          Product.findOne({name: name, price:price , image: image, mota:mota, loai : loai});
          req.body.image = req.file.path.split('\\').slice(1).join('/');
          const product = new Product(req.body);
          
            product.save()
                   .then(() =>res.redirect('/admin/page-admin'))
                   .catch(next); 
                      
      };

    //[GET view admin] // su ly sort table sau khi load data len day
      home(req , res , next){
          const queryProductSchema = Product.find({}).sorttable(req);
          // xử lý bất đồng bộ trong javascript 
            Promise.all([queryProductSchema,
                Product.countDocumentsDeleted()])
                   .then(([products,deletedCount]) => res.render('admin/pageAdmin' , {
                    deletedCount,
                    products: mutipleMongooseToObject(products) 
                    })
                  ).catch(next);                       
      };

    //[GET view add]
      edit(req , res , next){
            Product.findById(req.params.id)      
                    .then( products =>
                       res.render('admin/editproduct',
                    {products: mongooseToObject(products)}
                    ))
                    .catch(next);
      };

    //[[PUT products]]
      putupdate(req, res, next){
        Product.updateOne({ id: req.params._id}, req.body)
                .then(() => res.redirect('/admin/page-admin'))
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
      };
      // [[Handle form action]] POST /admin/handle-form-action
      handleFormAction(req, res, next){
        switch(req.body.action){
          case 'delete':
            Product.delete({_id: {$in: req.body.productId}}) // xử lý mảng xóa mềm nhiều sản phẩm
                  .then(()=> res.redirect('back'))
                  .catch(next);
          break;
          default: res.json({message: "Action is invalidate"});
        }
      };
      // [[ form action]] POST /admin/form-action
      actionFormTrash(req, res, next){
        switch(req.body.action){        
          case 'delete':
            Product.deleteMany({_id: {$in: req.body.productId}}) // xử lý mảng xóa nhiều sản phẩm cùng lúc 
                  .then(()=> res.redirect('back'))
                  .catch(next);
          case 'revert':
            Product.restore({_id: {$in: req.body.productId}})
                  .then(()=> res.redirect('back'))
                  .catch(next);
          break;
          default: res.json({message: "Action is invalidate"});
        }
      }
  }


module.exports= new adminController;