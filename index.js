const express = require("express")
const mongoose = require("mongoose")
//mongodb+srv://hamooo32:hamooogaming32@my-express.55wvrwz.mongodb.net/?retryWrites=true&w=majority&appName=my-express
const Article = require("./models/Article.js")

const app = express()
const cors = require('cors')
app.use(cors());
mongoose.connect("mongodb+srv://hamooo32:hamooogaming32@my-express.55wvrwz.mongodb.net/?retryWrites=true&w=majority&appName=my-express")
.then(()=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log("ERROR:"+err)
})
app.use(express.json())


app.listen(3001,()=>{
    console.log("Done");
})