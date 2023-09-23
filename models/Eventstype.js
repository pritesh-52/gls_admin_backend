const moongoose=require("mongoose");
const Eventstype=new moongoose.Schema({
    type_of_events:{
        type:String,
        required:true,
    }
})
const Eventstypemodel=new moongoose.model("Eventstype",Eventstype);
module.exports=Eventstypemodel;