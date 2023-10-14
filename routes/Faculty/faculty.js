const express=require("express");
const router=express.Router();
const Faculty=require("../../models/Faculty");



router.post("/add",async(req,res)=>{
    let ={firstname,lastname,email,phone,role,department_faculty}=req.body;
    try{
        const facultydata=new Faculty({firstname,lastname,email,phone,role,department_faculty});
        const adddata=await facultydata.save();
        res.status(200).send(adddata);
    }
    catch(e)
    {
        if(e.code == 11000){
            res.status(400).send({message : "Faculty is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Add New Faculty"});
        }
    }
});



router.get("/getfaculty",async(req,res)=>{
    try
    {
        const getdata=await Faculty.find();
        res.status(200).send(getdata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to get Faculty"});
    }
    
});

router.get("/getfaculty/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getdata=await Faculty.findById(_id);
        res.status(200).send(getdata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to fetch Faculty details"});
    }
})

router.delete("/deletefaculty/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const deletedata=await Faculty.findByIdAndDelete(_id);
        res.status(200).send(deletedata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to Delete Faculty"});
    }

})

router.patch("/updatefaculty/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatadata=await Faculty.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatadata);
    }
    catch(e)
    {
        if(e.code == 11000){
            res.status(400).send({message : "Faculty is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Update New Faculty"});
        }
    }
})
module.exports=router;