import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './Router/user.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

export const app = express();
//MiddleWares
app.use(cookieParser());
app.use(express.json({strict:true}));

//using  Router
const Router = express.Router();
app.use("/api/v1/users",UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello bhai");
})

config({
    path:"./data/config.env"
})