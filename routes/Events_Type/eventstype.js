const express=require("express");
const router=express.Router();
const Eventstype=require("../../models/Eventstype");


router.post("/add",async(req,res)=>{
    let {type_of_events}=req.body;
    try
    {
        const Eventstypedata=new Eventstype({type_of_events});
        const Adddata=await Eventstypedata.save();
        res.status(200).send(Adddata);
    }
    catch(e){
        if(e.code == 11000){
            res.status(400).send({message : "Event Type is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Add New Event Type"});
        }
    }

})

router.get("/geteventstype",async(req,res)=>{
    try
    {
        const geteventstype=await Eventstype.find();
        res.status(200).send(geteventstype);

    }
    catch(e)
    {
        res.status(400).send({message : "Problem to get Event Types"});
    }
})


router.get("/geteventstype/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getdata=await Eventstype.findById(_id);
        res.status(200).send(getdata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to fetch Event Type Details"});
    } 

})
router.delete("/deleteevents/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deletedata=await Eventstype.findByIdAndDelete(_id);
        res.status(200).send(deletedata);
    }
    catch(e)
    {
        res.status(400).send({message : "Problem to Delete Event Type"});

    }

})

router.patch("/updateevents/:id",async(req,res)=>{
    try
    {
        const _id=req.params.id;
        const updatedata=await Eventstype.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updatedata);
        res.json({"message":true});
    }
    catch(e)
    {
        if(e.code == 11000){
            res.status(400).send({message : "Event Type is Already Exists"});
        }
        else{
            res.status(400).send({message : "Problem to Update New Event Type"});
        }
    }

})
module.exports=router;