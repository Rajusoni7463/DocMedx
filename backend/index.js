import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
import connectCloudinary from './config/cloudinary.js'


//app.config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//api endpoints
app.get('/',(req,res)=>{
    res.send("API working")

})

app.listen(PORT,()=>{
    console.log("server started",PORT)
})