const jsonwbtoken=require("jsonwebtoken");
const user=require("../model/register");

const authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwtoken;
        const SCRET_KEY="CODINGSHARKSFULLSTACKDEVELOPERANDAPPLICATIONDEVELOPER";
        const verrifyjwt=jsonwbtoken.verify(token,SCRET_KEY);
        const rootuser=await user.findOne({_id:verrifyjwt._id,"tokens.token":token});
        if(!rootuser)
        {
            throw new Error("User Not Found");
        }
        req.token=token;
        req.rootUser=rootuser;
        req.userID=rootuser._id;
        next();

    }
    catch(e)
    {
        res.status(400).send("Unauthorises");

    }
}

module.exports=authenticate;