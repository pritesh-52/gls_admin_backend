const moongoose=require("mongoose");
const AdddetailSchema=new moongoose.Schema({
    department:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    event:{
        type:String,
        required:true,
    },
    venue:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    remark:{
        type:String,
        required:true
    }

})

const Adddetailmodel=new moongoose.model("Detail",AdddetailSchema);
module.exports=Adddetailmodel;