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
        if(e.code == 11000){
            res.status(400).send({message : "Event Location is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Add New Event Location"});
        }
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
        res.status(400).send({message : "Problem to get Event Location"});
    }
})


router.get("/geteventlocation/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const getdata=await Eventslocation.findById(_id);

        if(!getdata){
            res.status(404).send("Record Not Found");
        }
        else{
            res.status(200).send(getdata);
        }
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to fetch the Event Location Details"});
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
        res.status(400).send({message : "Problem to Delete Event Location"});
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
        if(e.code == 11000){
            res.status(400).send({message : "Event Location is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Update Event Location"});
        }

    }
})

module.exports=router;