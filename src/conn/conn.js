const moongoose=require("mongoose");
const DB="mongodb+srv://priteshbhatiya52:uM5M8YaV61ytlmKS@cluster0.gfohlpd.mongodb.net/glsevents?retryWrites=true&w=majority"
moongoose.connect(DB).
then(()=>console.log("Connect")).catch((e)=>console.log(e));