const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        min:18
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;