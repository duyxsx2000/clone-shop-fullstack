import express  from "express";
import { getData, postData ,getDataAccount, login,register,upDataUser,getDataUser} from "../controllers/controller.js";

const router = express.Router()



router.get('/user',getData);
router.get('/account',getDataAccount)
router.get('/upDataU',getDataUser)

router.post('/account',login)
router.post('/register',register)

router.post('/user',postData)
router.post('/upDataU',upDataUser)




export default router;












