const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    Username: {type: String , maxlength: 20},
    email: {type: String , maxlength:35 },
    phone: {type: String, maxlength:13},
    address: { type: String , maxlength: 255},
    password: { type: String , maxlength:20},
    description: { type: String, maxlength: 255},
    createdAt : { type: Date, default: Date.now },
    updatedAt : { type: Date, default: Date.now },
  });
  
  
  module.exports= mongoose.model('Users', User);