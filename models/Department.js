const mongoose = require("mongoose");
const {Schema} = mongoose;

const DepartmentSchema = new Schema({
    dept_name:{
        type: String,
        required :true,
        unique : true
    },
});

department = mongoose.model('Department',DepartmentSchema);
module.exports = department;