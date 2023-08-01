const express=require("express");
const Registermodel=require("../model/register");
const router=express.Router();

router.get("",(req,res)=>{
    res.send("Hello");

})


router.post("/register",async(req,res)=>{
    try
    {
        const newdata=Registermodel(req.body);
        const adddata=await newdata.save();
        res.status(200).send(adddata);

    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

router.post("/login",async(req,res)=>{
    try
    {   
        const email=req.body.email;
        const password=req.body.password;
        const Registerdata=await Registermodel.findOne({email:email})

        if(Registerdata.password===password)
        {
            res.status(200).send("Login Sucess");
        }
        else{
            res.status(400).send("Wrong Username and password");
        }

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

module.exports=router;