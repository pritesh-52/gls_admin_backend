const express=require("express");
const router=express.Router();
const Department=require("../../models/Department");

router.post("/add",async(req,res)=>{
    let {dept_name}=req.body;
    try{
        const Departmentdata=new Department({dept_name});
        const adddata=await Departmentdata.save();
        res.status(200).send(adddata);
    }
    catch(e)
    {
            res.status(400).send(e);
    }

});

module.exports=router;