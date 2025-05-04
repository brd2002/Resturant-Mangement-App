const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : [true , {message : 'Please add the title'}],
    },
    imageUrl : {
        type : String,
        default : ''
    },
    foods :{
        type : Array
    },
    time:{
        type : String
    },
    pickup : {
        type: Boolean,
        default: true
    },
    delivery : {
        type: Boolean,
        default: true
    },
    isOpen : {
        type : Boolean,
        default : true
    },
    logoUrl :{
        type : String,
    },
    rating : {
        type : Number,
        default : 1 ,
        min : 1,
        max : 5
    },
    ratingCount : {
        type : Number,
        default : 0
    } ,
    code : {
        type : String
    },
    coords:{
        id:{type : String},
        lat:{type : Number},
        latDelta :{type : Number},
        lng:{type : Number},
        lagDelta :{type : Number},
        address : {type : String},
        title : {type : String}
    }
} , {timestamps : true});