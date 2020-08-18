const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
  name: {type: String , minlength: 1},
  price: {type: String , maxlength:10 },
  image: {type: String, maxlength:255},
  description: { type: String, maxlength: 255},
  createdAt : { type: Date, default: Date.now },
  updatedAt : { type: Date, default: Date.now },
});


module.exports= mongoose.model('Product', Product);