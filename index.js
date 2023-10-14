const express = require('express');
var cors = require('cors')
const app = express()
const port = 8000
require("./db");

app.use(cors())
app.use(express.json())

//connectToMongo();
//app.use(express.json());

app.use('/admin/login',require('./routes/user-auth/login'));
app.use('/admin/department',require('./routes/Department/department'));
app.use('/admin/course',require('./routes/Course/course'));
app.use('/admin/faculty',require('./routes/Faculty/faculty'));
app.use('/admin/eventstype',require('./routes/Events_Type/eventstype'));
app.use('/admin/eventlocation',require('./routes/Events_Location/eventslocation'));
app.use('/admin/notification',require('./routes/Notification/notification'));
app.use('/app/api/faculty',require('./routes/App/faculty'));
app.use('/app/api/details',require("./routes/Add_Detail/adddetail"));


app.get("",(req,res)=>{
    res.send("Hello World");
})
app.listen(port, () => {
    console.log("Start Server");

})