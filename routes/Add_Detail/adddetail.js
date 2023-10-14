const express=require("express");
const router=express.Router();
const Adddetail=require("../../models/Adddetails");


router.post("/add",async(req,res)=>{
    let {department,course,event,venue,date,remark}=req.body;
    try {
        const data=new Adddetail({department,course,event,venue,date,remark});
        const newdata=await data.save();
        res.status(200).send(newdata);
        
    } catch (error) {
        res.status(400).json({"message":error});
        
    }
})

module.exports=router;