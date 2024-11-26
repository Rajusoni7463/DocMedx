import express from 'express'
import { addDoctor } from '../controllers/adminControler.js'
import upload from '../middleware/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add_doctor',upload.single('image'),addDoctor)

export default adminRouter;
