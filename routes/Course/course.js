const express=require("express");
const router=express.Router();
const Course=require("../../models/Course");


router.post("/add",async(req,res)=>{
    try{
            
    }
    catch(e)
    {
        res.status(400).send(e);
    }

})

module.exports=router;