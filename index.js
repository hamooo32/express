const express = require("express")
const mongoose = require("mongoose")
//mongodb+srv://hamooo32:hamooogaming32@my-express.55wvrwz.mongodb.net/?retryWrites=true&w=majority&appName=my-express
const Article = require("./models/Article.js")

const app = express()
mongoose.connect("mongodb+srv://hamooo32:hamooogaming32@my-express.55wvrwz.mongodb.net/?retryWrites=true&w=majority&appName=my-express")
.then(()=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log("ERROR:"+err)
})
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome")
})
app.get('/hello/:num1/:num2',(req,res)=>{
    let param =req.params
    let x = Number(req.params.num1) + Number(req.params.num2)
    console.log(x)
    res.send(String(x))
})
app.get('/hello2',(req,res)=>{
    res.render("index.ejs",{
        name:"ali"
    })
})
app.post('/article', async (req,res)=>{
    let N = new Article(JSON.parse(req.body));
    await N.save()
    console.log("DONE!")
    console.log(JSON.parse(req.body))
    res.send(JSON.parse(req.body))
})
app.get('/article/:a',async(req,res)=>{
    console.log(req.params.a)
    let x =await Article.findById(req.params.a)
    res.json(x)
})
app.get('/article',async(req,res)=>{
    let x =await Article.find()
    res.json(x)
})
app.get('/articl/:a',async(req,res)=>{
    let x =await Article.find()
    res.json(x[1])
})

app.listen(3000,()=>{
    console.log("Done");
})