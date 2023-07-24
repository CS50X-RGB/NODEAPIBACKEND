import express from "express";
import User from "../Models/user.js";
import {
  deleteData,
  getAllUser,
  register,
  specialUser,
  updateData,
  userById,
} from "../Controllers/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.get("/new", register);

router.get("/special", specialUser);

router
  .route("/userId/:userID")
  .get(userById)
  .put(updateData)
  .delete(deleteData);

// ALWAYS KEEP DYNAMIC ROUTING AT END BECUASE FROM TOP JS WILL MAKE THIS ROUTE FIRST
// router.get("/userId/:userID", userById);

// router.put("/userId/:userID", updateData);

// router.delete("/userId/:userID", deleteData);

export default router;
