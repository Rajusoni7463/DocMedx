import express from 'express'
import { addDoctor, loginAdmin} from '../controllers/adminControler.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add_doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)

export default adminRouter;
