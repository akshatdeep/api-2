const ex = require('express')
const router = ex.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')
const { json } = require('body-parser')



router.get('/test',async(req,res)=>{
    try{
        const user = await User.find()
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({
            err:"somethin went worng"
        })

    }

})

router.get('/getAll/:Id',(req, res)=>{
    try{
        const user = User.findById(req.params.Id)
        return res.status(200).json(user)
    }catch(err){
        return res.status(400).json({
            err:"something went wrong"
        })
    }
})



router.post('/singup',async(req,res)=>{
    const {password, password_confirmation}= req.body
    if (password !== password_confirmation)
    {
        throw new Error('Password do not match')
    }
   const isExisting = await User.findOne({email:req.body.email})
   if (isExisting)
   {
    throw new Error("User alrady exist. Try a different email")
   }

   const hashpassword = await bcrypt.hash(req.body.password, 10)
   
   
   const newuser = await User.create({...req.body, password:hashpassword})
   return res.status(200).json(newuser)
})
    



module.exports=router;