const express = require('express')
const app = express()
const session = require('express-session')
const mongoDbSession = require('connect-mongodb-session')(session)
const { mongoDB_Url } = require('./connect')
const { mongoConnect } = require('./connect')
const cors = require('cors')

app.use(cors())
const DBsession = new mongoDbSession({
    uri:mongoDB_Url,
    collection:'MySession',

})
app.use(
    session({
        secret :'key that will sign cookie',
        resave : false,
        saveUninitialized : false,
        store : DBsession,
    })
)
app.set('view engine','ejs')
app.use(express.urlencoded({ extended:true }))

app.use('/register',require('./routes/register'))

app.use('/login',require('./routes/login'))

app.use('/profile',require('./routes/profile'))

app.use('/logout',require('./routes/logout'))

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})