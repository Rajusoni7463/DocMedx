import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'


//app.config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()

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