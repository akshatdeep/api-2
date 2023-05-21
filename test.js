const express = require ('express')
const mongoose = require ('mongoose')
const userRouter = require('./routes/user.js')
const bodyParser = require('body-parser')
const loginRouter = require('./routes/login.js')
const blogRouter = require('./routes/blog.js')
require('dotenv').config()


const app = express()
app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/auth',loginRouter)
app.use('/blogs', blogRouter)

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true})
const con = mongoose.connection
con.on ('open',()=>{
    console.log('connected to db:')
}) 



app.listen(process.env.PORT,()=>{
    console.log('connected to server')
})