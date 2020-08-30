const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {type: String, required:true , trim:true },
    email: {type: String, unique:true , required:true , trim:true , minlength:2 },
    password: { type: String, required:true, trim:true, minlength:6},
    role:{ type: String, enum:['admin' ,'user']},
    action:{type:String , default:'System'},
   
      } , {
        timestamps: true,
          }
          );
  
          User.index({email:1}) // nơi đánh index , đặt khóa chính à Email
  module.exports= mongoose.model('Users', User);