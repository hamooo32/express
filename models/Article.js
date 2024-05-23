
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const articleSchema = new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const article =mongoose.model("Article",articleSchema)
module.exports = article