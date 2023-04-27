const mongoose=require('mongoose')
const userSchema =mongoose.Schema({
    Employee_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Employee"
    },
    name:{
        type:String,
        required:[true,'please add your name']
    },
    email:{
        type:String,
        required:[true,'please add the email']
    },
    contact:{
        type:String,
        required:[true,'please add the contact']
    },
},{
    timestamps:true,
})
module.exports=mongoose.model('users',userSchema)