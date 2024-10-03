const express = require('express')
const { model } = require('../Model')
const router =  express.Router()
const bcrypt = require('bcrypt')
router.get('/',async(req,res)=>{
    try {
        res.render('login')
    } catch (error) {
        
    }
})
router.post('/', async(req,res)=>{
    try {
        const {name , password} = req.body
        console.log(req.body);

        if(!name || !password){
            res.status(204).json({msg:'invalid data'})
        }

        const User = await model.findOne({username : name})
        console.log(User);

        if(!User){
            res.json({msg:` user not found`})
        }
        const isMatch = await bcrypt.compare(password,User.password)
        if(!isMatch){
            res.json({msg:`incorrect passord`})
        }
        req.session.isAuth = true
        res.render('profile')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router