const {StatusCodes} = require('http-status-codes');
const {User} = require('../model/user.model');
const getUserController =async (req , res) => {
    try {
        const userId = req.user.id;
        // hiding the password
        const user = await User.findOne({_id : userId} , {password : 0});
        // console.log(user)
       return  res.status(StatusCodes.OK).json({message : 'User logged in successfully' , data : user});
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json({message : error.message});
    }
}
module.exports = {getUserController}