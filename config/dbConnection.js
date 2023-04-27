const mongosh=require('mongoose');
const connectDb= async ()=>{
    try{
        const connect=await mongosh.connect(process.env.CONNECTION_STRINGS)
        console.log("Database Connected: ",connect.connection.host,
        connect.connection.name
        )
    }catch(err){
        console.log(err)
        process.exit(1);
    }
}
module.exports=connectDb;