const moongoose=require("mongoose");
const DepartmentSchema=new moongoose.Schema({
    dept_name:{
        type:String,
        required :true,
        unique:true
    }
})

const Department=new moongoose.model('Department',DepartmentSchema);
module.exports=Department;