const express=require("express");
const languages=require("./output.json");
const app=express();
const port=8000;
app.get("/languages",(req,res)=>{
    return res.json(languages);
})

app.listen(port);
console.log("hii");