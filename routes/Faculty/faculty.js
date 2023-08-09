const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const faculty=require("../../models/Faculty");

router.post("",async(req,res)=>{
    try{
        const faculty_data=new faculty(req.body);
        const adddata=await faculty_data.save();
        res.status(200).send(adddata);
    }
    catch(e)
    {
        res.status(400).send(e)
    }

    
})

module.exports=router;
