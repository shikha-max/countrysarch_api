const express = require('express')
const router = express.Router()

const Country= require('../../model/contryname')

router.get("",async(req,res)=>{
    let rs= await Country.find().lean().exec()

    res.send(rs)
})

router.post("",async(req,res)=>{
    let rs= await Country.create(req.body)

    res.send(rs)
})

module.exports= router