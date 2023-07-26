import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendToken } from "../utils/features.js";
import cookieParser from "cookie-parser";

export const getAllUser = async (req, res) => {};

export const register = async (req, res) => {
  const { name, Email, password } = req.body;
  let user = await User.findOne({ Email });
  if (user) {
    return res.status(404).json({
      sucess: false,
      message: "User already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    Email,
    password: hashedPassword,
  });

  sendToken(user, "Registered Sucessfully", res, 201);
};
export const login = async (req, res, next) => {
  const { Email, password } = req.body;
  let user = await User.findOne({ Email }).select("+password");
  if (!user) {
    return res.status(404).json({
      sucess: "false",
      message: "Invalid Email or Password",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(404).json({
      sucess: "false",
      message: "Invalid Email or Password",
    });
  }
  sendToken(user, `Hi ${user.name} Ur Logged In Weclome Again`, res, 200);
};

export const getMyProfile = (req, res) => {
  // Check whether the user is logged in
    res.status(200).json({
      success: true,
      user:req.user,
    });
  
};
export const logout = (req, res) => {
  // Check whether the user is logged in
    res.status(200).cookie("Token","",{
      expires:new Date(Date.now()),
    }).json({
      success: true,
      user:req.user,
    });
  
};


