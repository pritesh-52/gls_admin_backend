const moongoose=require("mongoose");
const CourseSchema=new moongoose.Schema({
    dept_id:{
        type:String,
        required:true,
    

    },
    course_name:{
        type:String,
        required:true,
        unique:true
    }

})

const CourseModel=new moongoose.model("Course",CourseSchema);
module.exports =CourseModel;