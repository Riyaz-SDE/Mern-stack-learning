const mongoose = require('mongoose')
const mongoDB_Url = `mongodb://localhost:27017/session`
let mongoConnect = mongoose.connect(mongoDB_Url,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
})
.then(res=>{
    console.log(`mongoDB connected with response : ${res}`);
})
module.exports = {mongoDB_Url,mongoConnect}