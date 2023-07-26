import express from "express";
import {
  newTask,
  getMyTasks,
  isComp,
  isDone,
} from "../Controllers/task.js";
import { isAuth } from "../middleware/auth.js";

const Router = express.Router();

export default Router;

Router.post("/new", isAuth, newTask);

Router.get("/my", isAuth, getMyTasks);

Router.route("/:id").put(isAuth, isComp).delete(isAuth, isDone);
