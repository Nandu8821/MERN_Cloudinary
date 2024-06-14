const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    

})

const users = new mongoose.model("User", userSchema);

module.exports = users;