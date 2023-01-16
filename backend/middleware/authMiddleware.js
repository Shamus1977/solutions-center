const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = asyncHandler(async (req, res, next) => {
    let token;
    let isAuthorization = req.headers.authorization ? true : false;
    let isAuthorizationBearer = isAuthorization ? req.headers.authorization.startsWith("Bearer") : false;

    if(isAuthorization && isAuthorizationBearer){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            //Set User
            req.user = await User.findById(decodedToken.id).select("-password");

            //Call next middleware
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized.");
        }
    }

    if(!token){
        res.status(401);
        throw new Error("Not authorized.");
    }
});

module.exports = {protectRoute};