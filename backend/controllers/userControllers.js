const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {userName, email, password} = req.body;

    //Validation
    if(!userName || !email || !password){
        res.status(400);
        throw new Error("Please include all fields.");
    }

    //Check if email already exists
    const userEmailExists = await User.findOne({email});

    //Check if userName already exists
    const userNameExists = await User.findOne({userName});

    if(userEmailExists) {
        res.status(400);
        throw new Error("User with this email already exists.");
    };

    if(userNameExists) {
        res.status(400);
        throw new Error("User with this userName already exists.");
    };

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        userName,
        email,
        password: hashedPassword,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            userName: user.userName,
            email:user.email,
            token: generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new error("Unable to create user");
    };
});


// @desc Login a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            userName:user.userName,
            email:user.email,
            token: generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error("Invalid Credentials");
    }
});

// @desc Login a user
// @route GET /api/users/user
// @access Private
const getUser = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        userName: req.user.userName,
        email: req.user.email,
        isAdmin: req.user.isAdmin,
    }
    res.status(200).json(user);
});

const jwtOptions = {
    expiresIn: "30d",
}
const generateToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET,jwtOptions);
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
};