import express from "express";
import mongoose from "mongoose";
import UserRouter from "./Router/user.js";
import TaskRouter from "./Router/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { middlewareError } from "./middleware/error.js";

export const app = express();
//MiddleWares
app.use(cookieParser());
app.use(express.json({ strict: true }));
app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["PUT", "GET", "POST", "DELETE"],
    credentials: true,
  })
);

//using  Router
const Router = express.Router();
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/tasks", TaskRouter);


app.get("/", (req, res) => {
  res.send("<h1>Hi API V1</h1>");
});

config({
  path: "./data/config.env",
});

app.use(middlewareError);
