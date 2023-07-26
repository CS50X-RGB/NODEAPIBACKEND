import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendToken } from "../utils/features.js";
import cookieParser from "cookie-parser";
import ErrorHandler from "../middleware/error.js";

export const register = async (req, res, next) => {
  try {
    const { name, Email, password } = req.body;
    let user = await User.findOne({ Email });
    if (user) {
      return next(new ErrorHandler("User already exists", 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      Email,
      password: hashedPassword,
    });

    sendToken(user, "Registered Sucessfully", res, 201);
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { Email, password } = req.body;
    let user = await User.findOne({ Email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid Email or Password", 404));
    }
    sendToken(user, `Hi ${user.name} Ur Logged In Weclome Again`, res, 200);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  // Check whether the user is logged in
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
export const logout = (req, res) => {
  // Check whether the user is logged in
  res
    .status(200)
    .cookie("Token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Devlopment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Devlopment" ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};
