const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const Department = require("../../models/Department");
const fetchUser = require('../../middleware/fetchuser');

router.post('/add',fetchUser, async (req,res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let {dept_name} = req.body;
        
        const department = await Department.create({
            dept_name: dept_name
        });

        const saveDepartment = await department.save();
        res.json(saveDepartment);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

});


router.post('/adddata',async(req,res)=>{
    const {dept_name}=req.body;
    if(!dept_name)
    {
        return res.status(422).json({error:"Plze filed the proptey"});
    }
    try{
        const adddata=new Department({dept_name});
        const newdata=adddata.save();
        res.status(201).send(newdata);
    }
    catch (e)
    {
        res.status(400).send(e);
    }
    
})

module.exports = router;