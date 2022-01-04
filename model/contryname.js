const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    country:{type:String,required:true}
})


module.exports=mongoose.model('countryname',schema)