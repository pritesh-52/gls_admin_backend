const mongoose = require('mongoose');
const mongouri = "mongodb+srv://priteshbhatiya52:uM5M8YaV61ytlmKS@cluster0.gfohlpd.mongodb.net/glsevents?retryWrites=true&w=majority";
mongoose.connect(mongouri).then(()=>{console.log("Connect")})
.catch((e)=>{console.log(e)});
