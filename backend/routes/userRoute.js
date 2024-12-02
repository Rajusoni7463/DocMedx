import express from 'express'
import { registerUser , loginUser, getProfile,updateProfile } from '../controllers/userControler.js'
import authUser from '../middleware/authUser.js'
import upload  from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get_profile',authUser,getProfile)
userRouter.post('/update_profile',upload.single('image'),authUser,updateProfile)
export default userRouter