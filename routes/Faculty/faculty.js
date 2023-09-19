const express=require("express");
const router=express.Router();
const Faculty=require("../../models/Faculty");



router.post("/add",async(req,res)=>{
    let ={firstname,lastname,email,phone,role,department_faculty}=req.body;
    try{
        const facultydata=new Faculty({firstname,lastname,email,phone,role,department_faculty});
        const adddata=await facultydata.save();
        res.status(200).send(adddata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
});



router.get("/getfaculty",async(req,res)=>{
    try
    {
        const getdata=await Faculty.find();
        res.status(200).send(getdata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":true});
    }
    
});

router.get("/getfaculty/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getdata=await Faculty.findById(_id);
        res.status(200).send(getdata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
})

router.delete("/deletefaculty/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const deletedata=await Faculty.findByIdAndDelete(_id);
        res.status(200).send(deletedata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }

})

router.patch("/updatefaculty/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatadata=await Faculty.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatadata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
})
module.exports=router;