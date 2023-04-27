const mongoose= require('mongoose')
const employeeSchema =mongoose.Schema({
    empName:{
        type:String,
        required:[true,'please enterthe emp Name']
    },
    email:{
        type:String,
        required:[true,'please enter email'],
        unique:[true,'email already register']
        
    },
    password:{
        type:String,
        required:[true,'please enter password'],
        
    },

},{
    timestamp:true,
})
module.exports=mongoose.model('Employee',employeeSchema)