const asyncHandler=require('express-async-handler')
const UserData= require('../models/userModel')
const getUsers=asyncHandler(async(req,res)=>{
    const users= await  UserData.find({Employee_id:req.Employee_id})
      res.status(200).json({users})
  })
  const createUser=asyncHandler(async (req,res)=>{

   const {name ,email,contact}=req.body;

   if(!name || !email || !contact){
    res.status(400)
    throw new Error('mandatory')
   }
   const users= await UserData.create({
    name,
    email,
    contact,
    Employee_id:req.Employee_id
   })

     res.status(201).json({users})
})
const getUser=asyncHandler(async(req,res)=>{
    const users =await UserData.findById(req.params.id)
    if(!users){
        res.status(404)
        throw new Error("not found")
    }
    res.status(200).json({users})
})
const updateUser=asyncHandler(async(req,res)=>{
    const users =await UserData.findById(req.params.id);
    if(!users){
        res.status(404)
        throw new Error("not found")
    }
    if(users.Employee_id.toString()!==req.Employee_id){
        res.status(403);
        throw new Error("Employee dont have permission to update of other user")
    }
    const updatedUser = await UserData.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json({updatedUser})
})
const deleteUser=asyncHandler(async(req,res)=>{
    const users= await UserData.findById(req.params.id);
    if(!users){
        res.status(404);
        throw new Error("not found")
    }
    if(users.Employee_id.toString()!==req.Employee_id){
        res.status(403);
        throw new Error("Employee dont have permission to delete of other user")
    }
    const deleteUser=await UserData.findOneAndDelete(
        req.params.id,
        req.body,
        {new :true}
    )
    res.status(200).json({deleteUser})
})

  module.exports={getUsers,createUser,getUser,updateUser,deleteUser}