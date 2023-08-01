const express=require("express");
const Registermodel=require("../model/register");
const router=express.Router();

router.get("",(req,res)=>{
    res.send("Hello");

})


router.post("/register",async(req,res)=>{
    try{
        const newdata=new Registermodel(req.body);
        const adddata=await newdata.save();
        res.status(200).send(adddata)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})


module.exports=router;