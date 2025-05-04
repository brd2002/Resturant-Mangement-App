const {StatusCodes} = require('http-status-codes')
const {User} = require('../model/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
async function userRegistrationController(req, res) {
    try{
        const user = req.body;
        //validation
        // console.log(user);
        if(!user.username || !user.email || !user.password || !user.address || !user.phone){
            return res.status(StatusCodes.BAD_REQUEST).json({message : 'Please fill all the fields'});
        }
        const existingUser = await User.findOne({where : {email : user.email}});
        if(existingUser){
            return res.status(StatusCodes.BAD_REQUEST).json({message : 'User already exists'});
        }else{
            // console.log(user)
            user.password = await bcrypt.hash(user.password , 10);
            const newUser = await User.create(user);
            if(newUser){
            return res.status(StatusCodes.CREATED).json({message : 'User created successfully'});
            }else{
                return  res.status(StatusCodes.NOT_IMPLEMENTED).json({message : 'User not created'});
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json({message : error.message});
    }
}
async function userLoginController(req, res) {
    try {
        const {email , password} = req.body;
        const exitingUser = await User.findOne({email: email});
        const passwordMatch = await bcrypt.compare(password , exitingUser.password);
        // console.log(exitingUser)
        if(passwordMatch){
            const token = jwt.sign({id : exitingUser._id} , process.env["MY_SECRET_VALUE"] , {
                expiresIn: "1d"
            });
            res.cookie("token" , token);
            return res.status(StatusCodes.OK).json({message : 'User logged in successfully'});
        }else{
            return res.status(StatusCodes.NOT_FOUND).json({message : 'User not found'});
        }
    }catch (e) {
        console.log(e.message);
        return res.status(StatusCodes.BAD_REQUEST).json({message : e.message});
    }
}
module.exports = {userRegistrationController , userLoginController};