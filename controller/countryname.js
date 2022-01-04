const express = require('express')
const router = express.Router()

const Country = require('../model/contryname')

router.get("", async (req, res) => {

  let s = req.query.q
  
  let nikal = new RegExp(s, "i")
  const country = await Country.find({
    country: { $regex: nikal },
  });

 return res.send(country)
})



router.post("", async (req, res) => {
  let rs = await Country.create(req.body)

  res.send(rs)
})


module.exports = router