import express from 'express'
import { registerUser , loginUser, getProfile,updateProfile,bookAppointment, listAppointment,cancelAppointment } from '../controllers/userControler.js'
import authUser from '../middleware/authUser.js'
import upload  from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get_profile',authUser,getProfile)
userRouter.post('/update_profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book_appointment',authUser,bookAppointment)
userRouter.get('/appointment',authUser,listAppointment)
userRouter.post('/cancel_appointment',authUser,cancelAppointment)

export default userRouter