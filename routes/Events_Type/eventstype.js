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
        res.json({"message":true});
    }
    catch(e){
        res.json({"message":false});
        res.status(400).send(e);
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
        res.status(400).send(e);
        res.json({"message":false});
    }
})


router.get("/geteventstype/:id",async(req,res)=>{
    try{
    const _id=req.params.id;
    const getdata=await Eventstype.findById(_id);
    res.status(200).send(getdata);
    res.json({"message":true});
    }
    catch(e)
    {
        res.status(400).send(e);
        res.json({"message":false});
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
        res.status(400).send(e);

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
        res.status(400).send(e);
        res.json({"message":false});
    }

})
module.exports=router;