const express = require('express')
const router =  express.Router()

router.post('/',(req,res)=>{
    try {
        req.session.destroy((err)=>{
            console.log(err);
        })
        res.json(200).json({msg:'logged out '})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router