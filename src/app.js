const express=require("express");
const app=express();
const router=require("./router/routing");
require("../src/conn/conn");
app.use(router);
app.use(express.json());


app.listen("8000",()=>{
    console.log("Start Port");
})