const express=require("express")
const mongoose=require("mongoose")
const app=express()

mongoose.connect("mongodb+srv://github:Github5052@cluster0.z2rkxnh.mongodb.net/FormData?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("hi port is running on 8000 & update five time")
})

app.listen(8000,()=>{
    console.log("server is running port 8000")
})
