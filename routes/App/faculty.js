const express=require("express");
const router=express.Router();
const { body, validationResult } = require('express-validator');
const Faculty=require("../../models/Faculty");


router.post('/login',[
    body('email','Enter a Valid Email').isEmail(),
    body('password','Password cannot be blank').exists()
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let{email,password} = req.body;

    try {
        let user = await Faculty.findOne({email});

        if(!user){
            return res.json({ errors: "Invalid Username OR Password" });
        }

        if(password.localeCompare(user.phone)){
            return res.json({ errors: "Invalid Username OR Password" });
        }

        res.json({user,success : true})

    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }

});

module.exports=router;