const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Coding@Sharks';

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please Authentic Using a Valid Token"});
    }

    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please Authentic Using a Valid Token"});
    }
}

module.exports = fetchUser;