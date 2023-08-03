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
        let token;
        const email=req.body.email;
        const password=req.body.password;

        if(!email || !password)
        {
            return res.status(422).json({eror:"Plese fill the data"});
        }
        const Registerdata=await registerdata.findOne({email:email});

        if(Registerdata)
        {
            const ismatch=await bcryptjs.compare(password,Registerdata.password);
            token=await Registerdata.generateAuthToken();
            console.log(token);
            if(!ismatch)
            {
                res.status(422).json({error:"Invaild Credntial"});
            }
            else
            {
                res.json({message:"User Sign Success"});
                res.json({msg:"Token stored"});
            }
        }
        else
        {
                res.status(400).json({error:"Invaild Credntial"});
        }

    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

module.exports=router;