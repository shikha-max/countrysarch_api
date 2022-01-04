const express = require('express')

const app= express()
app.use(express.json())

const connect = require('./config/db')
const countryname= require('./controller/countryname')



app.use('/country',countryname)



app.listen(4567,async(req,res)=>{
    await connect()
    console.log(`listening on 3456`);
})