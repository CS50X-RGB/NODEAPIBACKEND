import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './Router/user.js';
import { config } from 'dotenv';

export const app = express();
//MiddleWares
app.use(express.json());
//Router
const Router = express.Router();
app.use("/users",UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello bhai");
})

config({
    path:"./data/config.env"
})