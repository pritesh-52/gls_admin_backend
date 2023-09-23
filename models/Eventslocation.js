const monngose=require("mongoose");
const Eventslocationschema=new monngose.Schema({
    location:{
        type:String,
        required:true
    }
})

const Eventslocationmodel=new monngose.model("Eventslocation",Eventslocationschema);
module.exports=Eventslocationmodel;