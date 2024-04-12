const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("hi port is running on 8000 &  ")
})

app.listen(8000,()=>{
    console.log("server is running port 8000")
})
