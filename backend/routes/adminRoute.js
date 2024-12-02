import express from 'express'
import { addDoctor, allDoctor, loginAdmin} from '../controllers/adminControler.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorControler.js'

const adminRouter = express.Router()

adminRouter.post('/add_doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all_doctor',authAdmin,allDoctor)
adminRouter.post('/change_availablity',authAdmin,changeAvailablity)


export default adminRouter;
