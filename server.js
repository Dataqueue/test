const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Employee = require('./models/Employee')
const employeeroute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on("error" ,(err)=>{
    console.log(err)
})

db.on("open" ,()=>{
    console.log("Connection Established")
})
const app =express()

app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

app.use('api/employee',employeeroute)