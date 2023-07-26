import jwt from "jsonwebtoken";

export const sendToken = (user, message, res, statusCode = 200) => {
  const Token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("Token", Token, {
      httpOnly: true,
      maxAge: 15 * 1000 * 60,
      sameSite: process.env.NODE_ENV === "Devlopment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Devlopment" ? false : true,
    })
    .json({
      sucess: true,
      message,
    });
};
