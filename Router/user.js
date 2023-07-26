import express from 'express';
import User from '../Models/user.js';
import { login, register,getMyProfile,logout} from'../Controllers/user.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();


router.post('/new',register);
router.post('/login',login);
router.get('/logout',logout);

router.get('/me',isAuth,getMyProfile);

export default router;