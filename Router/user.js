import express from 'express';
import User from '../Models/user.js';
import { getAllUser, register, specialUser, userById } from'../Controllers/user.js';

const router = express.Router();

router.get('/all',getAllUser);

router.get('/new',register);

router.get('/special',specialUser);

// ALWAYS KEEP DYNAMIC ROUTING AT END BECUASE FROM TOP JS WILL MAKE THIS ROUTE FIRST
router.get('/userId/:userID',userById);

export default router;