const express=require("express");
const registerdata=require("../../model/register");
const router=express.Router();
const jsonwebtoken=require("jsonwebtoken");
const authenticate=require("../../middleware/authenticate");

router.get("",(req,res)=>{
    res.send("Hello");

})

router.get("/display",(req,res)=>{
    res.send("Display Page Will Be Open")
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
        //let token;
        const email=req.body.email;
        const password=req.body.password;
        const Registerdata=await registerdata.findOne({email:email});
        if(Registerdata.password===password)
        {
            res.status(200).json({"msg":"Login"})
        }
        else
        {
            res.status(400).json({"err":"Invaild"})
        }

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

module.exports=router;