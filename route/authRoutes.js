const express = require('express');
const {userRegistrationController , userLoginController} = require("../contorller/authController.js");
const router = express.Router();

// routes
// register
router.post('/register' , userRegistrationController)
// login
router.post('/login' , userLoginController)
module.exports = {authRouter : router};