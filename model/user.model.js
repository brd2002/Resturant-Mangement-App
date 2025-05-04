const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username : {
       type : String,
       required : [true , {message : 'Please give your username'}],
   },
   email : {
       type : String,
       required : [true , {message : 'Please give right email'}],
       unique : true,
   },
   password : {
       type : String,
       required : [true , {message : 'Please add the user name'}],
       min: [6, {message : 'Please give right password'}],
   },
    address : {
       type : Array,
    },
    phone :{
        type : String,
        required : true,
        unique : true,
    },
    userType : {
       type : String,
        required : true ,
        default : 'client',
        enum:['client', 'admin','vendor', 'delivery boy']
    },
    profile:{
        type : String,
        default : "https://tinyurl.com/4kmms6th"
    }
} , {timestamps : true});
const User = mongoose.model('User' , userSchema);
module.exports = {User};