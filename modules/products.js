const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');


mongoose.plugin(slug);

const Product = new Schema({
  name: {type: String , minlength: 1},
  price: {type: String , maxlength:10 },
  image: {type: String, maxlength:255},
  description: { type: String, maxlength: 255},
  slug:{ type: String , slug:'name' , unique:true}

},{
  timestamps: true,
});


module.exports= mongoose.model('Product', Product);