import mongoose from "mongoose";

const connectDB = async()=>{
    
   const conn =  await mongoose.connect(`${process.env.MONGODB_URI}/docMedx`)
   if(conn){
    console.log("database connected")
   }

    // mongoose.connection.on('connected',()=>{
    //     console.log("database connected")
    // })

}

export default connectDB