const express=require("express");
const router = require("./router/routing");
const app=express();
app.use(express.json());
require("./conn/conn");
app.use(router);


app.listen(8000,()=>{
    console.log("Start");
})

