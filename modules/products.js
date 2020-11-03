const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const Product = new Schema({
  _id : {type: Number , },
  name: {type: String , minlength: 1},
  price:{type: String , maxlength: 10},
  soluong: {type: Number ,},
  image:{type: String , maxlength:  255},
  mota: {type: String , maxlength: 255},
  slug: {type: String , slug:'cars' , unique:true},

},{
  _id: false,
  timestamps: true,
});
// custom query  helper 
Product.query.sorttable = function(req){
  if( req.query.hasOwnProperty('_sort')){
    const inValidType = ['asc', 'desc'].includes(req.query.type);  
     return this.sort({
        [req.query.column] : inValidType ? req.query.type : 'desc', // check neu dung type thi lay gia tri type , còn sai thì lấy 1 type mặc định.
      });
   }
   return this;
};
// add plugin
Product.plugin(AutoIncrement);

mongoose.plugin(slug);
Product.plugin(mongooseDelete , {
  deletedAt: true,
  overrideMethods: "all"});

module.exports= mongoose.model('Product', Product);