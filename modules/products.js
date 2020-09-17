const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const Product = new Schema({
  name: {type: String , minlength: 1},
  price: {type: String , maxlength:10 },
  image: {type: String, maxlength:255},
  mota: { type: String, maxlength: 255},
  slug:{ type: String , slug:'name' , unique:true},

},{
  timestamps: true,
});
// add plugin
mongoose.plugin(slug);
Product.plugin(mongooseDelete , {
  deletedAt: true,
  overrideMethods: "all"});

module.exports= mongoose.model('Product', Product);