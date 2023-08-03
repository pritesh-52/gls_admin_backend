const moongose = require("mongoose");
const jsonwbtoken = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const registerscehm = new moongose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    tokens:[
        {
            token:{
                type: String
            }
        }
    ]
});
registerscehm.pre('save', async function (next) {
    console.log("Inside");
    if (this.isModified('password')) {
        this.password =await bcryptjs.hash(this.password, 12);
    }
    next();
})

registerscehm.methods.generateAuthToken=async function(){
    try{
        const SCRET_KEY="CODINGSHARKSFULLSTACKDEVELOPERANDAPPLICATIONDEVELOPER";
        let token=jsonwbtoken.sign({_id:this._id},SCRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(e)
    {
        console.log(e);
    }
}
const Registerdata = new moongose.model("register", registerscehm);
module.exports = Registerdata;