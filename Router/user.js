import express from 'express';
import User from '../Models/user.js';
import {  getAllUser, login, register,getUserDetails} from'../Controllers/user.js';

const router = express.Router();

router.get('/all',getAllUser);

router.get('/new',register);
router.get('/login',login);

router.get('/userId/:id').get(getUserDetails);

export default router;