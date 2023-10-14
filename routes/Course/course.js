const express=require("express");
const router=express.Router();
const Course=require("../../models/Course");
const authentication=require("../../middleware/authentication");


router.post("/add", authentication, async(req,res)=>{
    let={dept_id,course_name}=req.body;
    try{
        const coursedata=new Course({dept_id,course_name});
        const adddata=await coursedata.save();
        res.status(200).send(adddata);
        res.json({"message":true});
    }
    catch(e)
    {
        if(e.code == 11000){
            res.status(400).send({message : "Course Name is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Add New Course"});
        }
    }

});

router.get("/getcourse",async(req,res)=>{
    try{
        const getdata=await Course.find();
        res.status(200).send(getdata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to get Course"});
    }
})

router.get("/getcourse/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const getdata=await Course.findById(_id);
        res.status(200).send(getdata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to fetch Course Details"});
    }
})

router.delete("/deletecourse/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const deletecourse=await Course.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(200).send({success : true});
        }
        res.send(deletecourse);

    }
    catch(e)
    {
        res.status(400).send({message : "Problem to Delete Course"});
    }
});


router.patch("/updatecourse/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedata=await Course.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatedata);

    }
    catch(e)
    {
        if(e.code == 11000){
            res.status(400).send({message : "Course Name is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Update Course"});
        }
    }

});
module.exports=router;