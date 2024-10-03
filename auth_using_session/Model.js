const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})
const model = mongoose.model(`UserInfo`,schema)
module.exports = {schema,model}