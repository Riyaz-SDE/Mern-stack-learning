const express = require('express')
const router =  express.Router()

router.get('/',async(req,res,next)=>{
    const auth = req.session.isAuth
    console.log(auth,'profile');
    if(auth){
        next()
    } else {
        res.json({msg: `not authorize`})
    }
},async(req,res)=>{
    try {
        res.render('profile')
    } catch (error) {
        
    }
})
router.get('/',async(req,res)=>{
    try {
        
        let x = 'get data query ###'
        req.session.isAuth = true
        // res.status(200).json({msg:'data ${x',session:req.session,sessionId:req.session.id})
        console.log(req.session);
        console.log(req.session.id);
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

module.exports = router