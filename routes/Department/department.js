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

module.exports = router;