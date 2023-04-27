const express=require('express')
const { employeeRegister,loginEmployee,currentEmployee } = require('../controllers/employeeController')
const validatToken = require('../middleware/validateTokenHandler')
const employeeRouter=express.Router()
employeeRouter.route('/register').post(employeeRegister)
employeeRouter.route('/login').post(loginEmployee)
employeeRouter.route('/current').get(validatToken,currentEmployee)
module.exports=employeeRouter