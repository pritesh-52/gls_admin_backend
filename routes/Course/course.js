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
        res.status(400).send(e);
    }

});

router.get("/getcourse",async(req,res)=>{
    try{
        const getdata=await Course.find();
        res.status(200).send(getdata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.send(400).send(e);
        res.json({"message":false});
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
        res.status(200).send(e);
        res.json({"message":false});
    }
})

router.delete("/deletecourse/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const deletecourse=await Course.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(200).send();
        }
        res.send(deletecourse);

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
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
        res.status(400).send(e);
    }

});
module.exports=router;