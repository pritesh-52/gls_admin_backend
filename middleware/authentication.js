const jwt = require("jsonwebtoken");



function authentication(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided" });
    }

    jwt.verify(token, 'Coding@Sharks', (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invaaild Token" });
        }
        req.user = user;

        next();

    })
}

module.exports=authentication;