import express from 'express';
import User from '../Models/user.js';
import {  getAllUser, login, register,getMyProfile} from'../Controllers/user.js';

const router = express.Router();

router.get('/all',getAllUser);

router.post('/new',register);
router.post('/login',login);

router.get('/me',getMyProfile);

export default router;