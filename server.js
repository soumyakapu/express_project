const express=require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv=require('dotenv').config()
connectDb()
const app=express()

app.use(express.json())
const port=process.env.PORT
app.use('/api/users/',require('./routes/userRouter'))
app.use('/api/employee',require('./routes/employeeRouter'))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`port running on ${port}`)
})