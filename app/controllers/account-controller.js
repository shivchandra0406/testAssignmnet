const Account = require('../models/account-model')
const brycpt = require('crypto')
class AccountController{
    async signup(req,res){
        try{
            console.log(req.body);
            const {first_name,last_name,age,email,password} = req.body
            if(!first_name || !last_name || !age || !email || !password){
                return res.status(406).json({message:'first_name,last_name,age,email and password are required field'})
            }
            //let dpassword = brycpt.createHmac('sha256',process.env.PASSWORD_KEY).update(password)
            let dpassword = brycpt.createHash('sha256',process.env.PASSWORD_KEY).update(password).digest('hex')
            console.log("hasmac",dpassword);
            const account = new Account({
                first_name,
                last_name,
                age,
                email,
                password:dpassword
            })
            const data = await account.save()
            return res.status(200).json({message:'data inserted successfully',data})
        }catch(err){
            console.log("signup err",err);
            return res.status(400).json({message:'somthing went wrong'})
        }
    }

    async singin(req,res){
        try{
           const {email,password} = req.body
           if(!email || !password){
               return res.status(406).json({message:'email and password are required field'})
           }else{
               const account = await Account.findOne({email:email})
               if(!account){
                   return res.status(404).json({message:'email is not exist'})
               }
            let cpassword = brycpt.createHash('sha256',process.env.PASSWORD_KEY).update(password).digest('hex')
            if(account.password === cpassword){
                return res.status(200).json({message:'Login successfully'})
            }else{
                return res.status(200).json({message:'your email and password are not exist'})
            }    
           }
        }catch(err){
            console.log('singin error',err)
            return res.status(400).json({message:'somthing went wrong'})
        }
    }

    async findAllRecord(req,res){
        try{
            const data = await Account.find()
            return res.status(200).json({message:'data get successfully',data:data})
        }catch(err){
            console.log(err);
            return res.status(400).json({message:'somthing went wrong'})
        }
    }
}

module.exports = new AccountController()