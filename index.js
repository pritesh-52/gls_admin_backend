const express = require('express');
var cors = require('cors')
const app = express()
const port = 8000
require("./db");

app.use(cors())
app.use(express.json())

//connectToMongo();
//app.use(express.json());

app.use('/admin/login',require('./routes/user-auth/login'))
//app.use('/admin/faculty',require("./routes/Faculty/faculty"));
app.use('/admin/department',require("./routes/Department/department"));

app.get("",(req,res)=>{
    res.send("Hello World");
})
app.listen(port, () => {
    console.log("Start Server");

})