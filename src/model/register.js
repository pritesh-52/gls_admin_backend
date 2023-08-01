const mongoose=require("mongoose");

const Registerschema=new mongoose.Schema({
    uname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    cpassword:{
      type:String,
      required:true  
    },
    registerdata:{
        type:Date,
        default:Date.now
    }

})

const Registermodel=new mongoose.model("register",Registerschema);
module.exports=Registermodel;