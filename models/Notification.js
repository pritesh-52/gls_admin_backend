const moongoose=require("mongoose");
const NotificationSchema=new moongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Notificationmodel=new moongoose.model("Notification",NotificationSchema);
module.exports=Notificationmodel;