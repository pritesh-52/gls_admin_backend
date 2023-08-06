const mongoose = require('mongoose');
const mongouri = "mongodb+srv://priteshbhatiya52:um5m8yav61ytlmks@cluster0.gfohlpd.mongodb.net/glsevents?retryWrites=true&w=majority";
mongoose.connect(mongouri).then(()=>{console.log("Connect")})
.catch((e)=>{console.log(e)});
