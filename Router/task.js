import  express  from "express";
import { newTask } from "../Controllers/task.js";

const Router = express.Router();

export default Router;

Router.post('/new',newTask)