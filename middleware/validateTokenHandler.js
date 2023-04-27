const asynHandle= require('express-async-handler')
const jwt= require('jsonwebtoken')
const validatToken=asynHandle(async(req,res,next)=>{
    let token;
    let authHeader =req.headers.authorization || req.headers.Authorizarion
    if(authHeader && authHeader.startsWith('Bearer'))
    token= authHeader.split(" ")[1]
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
            res.status(401);
            throw new Error("Employee is not authorized")
        }
            req.Employee=decoded.Employee;
            next()
    })
    if(!token){
        res.status(401)
        throw new Error(" Emloyee is not authorized or token is missing")
    }
})
module.exports=validatToken