const express = require('express')
const { model } = require('../Model')
const { user } = require('../DB/fields')
const router =  express.Router()
const bcrypt = require('bcrypt')

router.get('/',async(req,res)=>{
    try {
        res.render('create')
    } catch (error) {
        
    }
})
router.post('/',async(req,res)=>{
    try {
        const {name , email ,password} = req.body
        console.log(req.body,!password,password);

        if(!name || !email || !password ){
           return res.status(204).json({msg:'some field is missing'})
        }
        const salt = bcrypt.genSaltSync(12)
        const hashedPassword = await bcrypt.hash( password , salt)

        console.log(salt,hashedPassword,'//////');

        const useradd = model.insertMany({...user(name,email,hashedPassword)})
            .then(result=>{
                console.log(result);
                return res.status(200).json({msg:'new user created'})
            })
            .catch(err=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({msg:`email must be unique`})
                }
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:`internal server error2`})
    }
})

module.exports = router