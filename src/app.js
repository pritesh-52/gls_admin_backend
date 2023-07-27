const express=require("express");
const app=express();
const router=require("./router/routing");
app.use(router);

app.get("",(req,res)=>{
    res.send("Hello");
})

app.listen("8000",()=>{
    console.log("Start Port");
})