const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
require('./db/connection')

app.use(require('./app/routers/router'))

app.get('/',(req,res)=>{
    return res.status(200).json({message:'welcome'})
})
const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`server listing port ${PORT}`);
})