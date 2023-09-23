const express=require("express");
const router=express.Router();
const Eventslocation=require("../../models/Eventslocation");

router.post("/add",async(req,res)=>{
    let ={location}=req.body;
    try{
        const eventlocation=new Eventslocation({location});
        const Adddata=await eventlocation.save();
        res.status(200).send(Adddata);
        res.json({"message":true});
        
    }
    catch(e)
    {
            res.json({"message":false});
    }
});


router.get("/geteventlocation",async(req,res)=>{
    try{
        const getdata=await Eventslocation.find();
        res.status(200).send(getdata);
        res.json({"message":true});

    }
    catch(e)
    {
            res.status(400).send(e);
            res.json({"message":false});
    }
})


router.get("/geteventlocation/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const getdata=await Eventslocation.findById(_id);
        res.status(200).send(getdata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
})

router.delete("/deletelocation/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deletedata=await Eventslocation.findByIdAndDelete(_id);
        res.status(200).send(deletedata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }

})

router.patch("/updatelocation/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedata=await Eventslocation.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatedata);
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});

    }
})

module.exports=router;