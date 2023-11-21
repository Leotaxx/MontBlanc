const mongoose=require('mongoose');
const User = require('./User');

const carSchema= new mongoose.Schema({
    make:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
});

const Car=mongoose.model('Car',carSchema);

module.exports=Car;
