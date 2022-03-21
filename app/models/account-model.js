const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true,
        required:[true,'first_name is required field']
    },
    last_name:{
        type:String,
        trim:true,
        required:[true,'last_name is required field']
    },
    age:{
        type:Number,
        required:[true,'age is required field']
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:[true,'email is required field']
    },
    password:{
        type:String,
        required:[true,'password is required field']
    }
})

module.exports = mongoose.model('Account',AccountSchema,'account')