const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes')
const {decode} = require("jsonwebtoken");
async function authMiddleware (req , res , next) {
    try {
        const token = req.cookies['token'];
        console.log(token)
        const decoded = jwt.verify(token , process.env["MY_SECRET_VALUE"] , (error , decode) => {
            if (error){
                res.status(StatusCodes.UNAUTHORIZED).json({message : error.message});
            }else{
                req.user = { id: decode.id };
                next();
            }
        });
    }
    catch (error) {
        console.log(error);
       return  res.status(StatusCodes.BAD_REQUEST).json({message : error.message});
    }
}
module.exports = {authMiddleware}