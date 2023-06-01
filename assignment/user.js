/*
Create a user schema using Mongoose with the following requirements:

Name field: Required, string type, minimum length of 3 characters

Email field: Required, unique, string type, 

Age field: Optional, number type, minimum value of 18

Password field: Required, string type, minimum length of 6 characters
*/
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