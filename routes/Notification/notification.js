const express=require("express");
const router=express.Router();
const Notification=require("../../models/Notification");

router.post("/add",async(req,res)=>{
    let {subject,description}=req.body;
    try{
        const notificationdata=new Notification({subject,description});
        const adddata=await notificationdata.save();
        res.status(200).send(adddata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
})

router.get("/getnotification",async(req,res)=>{
    try
    {
        const notification=await Notification.find();
        res.status(200).send(notification);

    }
    catch(e)
    {
        res.status(400).send(e);
    }
})

router.get("/getnotification/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getdata=await Notification.findById(_id);
        res.status(200).send(getdata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
    }
});

router.delete("/deletenotification/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deletedata=await Notification.findByIdAndDelete(_id);
        res.status(200).send(deletedata);
        res.json({"message":true});

    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
   
    }
});

router.patch("/updatenotification/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updatedata=await Notification.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatedata);
        res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":true});    
    }
})
module.exports=router;