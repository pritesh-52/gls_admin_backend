const moongoose=require("mongoose");
const {Schema}=moongoose;

const FacultySchema=new Schema({
    firstname:{
        type: String,
        required :true
    },
    lastname:{
        type:String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    role:{
        type:String,
        required :true
    },
    department_faculty:{
        type:String,
        required :true
    }

})

const faculty=new moongoose.model("Faculty",FacultySchema);
module.exports=faculty;
