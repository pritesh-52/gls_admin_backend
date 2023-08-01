const mongoose=require("mongoose");

const Registerschema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})

const Registermodel=new mongoose.model("register",Registerschema);
module.exports=Registermodel;