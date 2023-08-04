const express=require("express");
var cors = require('cors')

const login=require("./router/authetication/login");
const app=express();

app.use(express.json());
require("./conn/conn");

app.use(cors())
app.use(login);


app.listen(8000,()=>{
    console.log("Start");
})

