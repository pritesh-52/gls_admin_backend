const express = require('express');
//var cors = require('cors')
const app = express()
const port = 8000
require("./db");

//app.use(cors())
app.use(express.json())

//connectToMongo();
//app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    
});

app.use('/admin/login',require('./routes/user-auth/login'));
app.use('/admin/department',require('./routes/Department/department'));
app.use('/admin/course',require('./routes/Course/course'));
app.use('/admin/faculty',require('./routes/Faculty/faculty'));
app.use('/admin/eventstype',require('./routes/Events_Type/eventstype'));
app.use('/admin/eventlocation',require('./routes/Events_Location/eventslocation'));
app.use('/admin/notification',require('./routes/Notification/notification'));
app.use('/app/api/faculty',require('./routes/App/faculty'));


app.get("",(req,res)=>{
    res.send("Hello World");
})
app.listen(port, () => {
    console.log("Start Server");

})