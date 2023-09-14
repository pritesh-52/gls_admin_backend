const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Coding@Sharks';

const User = require('../../models/Login');
const auth = require('../../middleware/fetchuser');
const { Router } = require('express');

router.post('/',[
    body('email','Enter a Valid Email').isEmail(),
    body('password','Password cannot be blank').exists()
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let{email,password} = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.json({ errors: "Invalid Username OR Password" });
        }

        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare){
            return res.json({ errors: "Invalid Username OR Password" });
        }

        const data = {
            user : {
                id : user.id
            }
        }

        const authtoken = jwt.sign(data,JWT_SECRET);
        res.json({authtoken,success : true})

    } catch (error) {
        console.log(error);
        res.status(500).send("Some Error Occured");
    }

});
module.exports=router;