// 1. npm init -y
//2. npm i express cors mongodb


const express=require("express");
const cors=require("cors");
const app=express();
const port=process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())



app.get('/',(req,res)=>{
    res.send("simple crusd is Running")
})
app.listen(port,()=>{
    console.log(`simple code is running in port ,${port}`)
})