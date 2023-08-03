const moongose=require("mongoose");
const registerscehm=new moongose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const Registerdata=new moongose.model("register",registerscehm);
module.exports=Registerdata;