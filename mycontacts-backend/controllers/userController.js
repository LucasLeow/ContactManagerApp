const User = require("../models/contactModel");
const asyncHandler = require("express-async-handler");
//@desc Register User
//@route POST /api/users/register
//@access public 
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "Register User"});
});

//@desc User  Login
//@route POST /api/users/login
//@access public 
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login User"});
});

//@desc Current User info 
//@route POST /api/users/current
//@access private 
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current User Information"});
});

module.exports = { registerUser, loginUser, currentUser };