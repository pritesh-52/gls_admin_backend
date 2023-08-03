const express=require("express");
const registerdata=require("../../model/register");
const router=express.Router();
const jwt=require("jsonwebtoken");
const scretkey="glsevents@#$09";

router.get("",(req,res)=>{
    res.send("Hello");

})
router.post("/register",async(req,res)=>{
    try
    {
        const newdata=registerdata(req.body);
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
        const Registerdata=await registerdata.findOne({email:email});
        if(Registerdata.password === password)
        {
            console.log("Login Sucess")
            res.status(200).send("Login Sucess");
        }
        else{
            console.log("Login invaild")
            res.status(400).send("Wrong Username and password");
        }

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

module.exports=router;