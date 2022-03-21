const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Assignment1').then(()=>{
    console.log('connect with database successfully');
}).catch(err=>console.log('connection error',err))