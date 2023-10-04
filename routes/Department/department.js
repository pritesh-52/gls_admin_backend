const express=require("express");
const router=express.Router();
const Department=require("../../models/Department");
const { trusted, get } = require("mongoose");

router.post("/add",async(req,res)=>{
    let {dept_name}=req.body;
    try{
        const Departmentdata=new Department({dept_name});
        const adddata=await Departmentdata.save();
        res.status(200).send(adddata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send({error : "Department Name is Already Exists"});
    }

});


router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deletedata=await Department.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(200).send();
        }
        res.send(deletedata);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

});


router.get("/getdepartment",async(req,res)=>{

    try{
        const department=await Department.find();
        res.send(department);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

});

router.get("/getdepartment/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const getdata=await Department.findById(_id);
        if(!getdata)
        {
            res.status(404).send("Record Not Found");
        }
        else
        {
            res.send(getdata);
        }
        
    }
    catch(e)
    {
        res.status(400).send(e);
    }
    
})

router.patch("/updatedepartment/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const updatedata=await Department.findByIdAndUpdate(_id,req.body);
        res.send(updatedata);

    }
    catch(e)
    {
        res.status(400).send(e);
    }
})
module.exports=router;