``````js
import User from "../Models/user.js";

export const getAllUser = async (req, res) => {
  const users = await User.find({});
  // params

  // const key = req.query.keyword;

  res.json({
    sucess: true,
    users,
  });
};
export const register = async (req, res) => {
  const { name, Email, password } = req.body;
  // will not work need middleware of json
  const users = await User.create({
    name,
    Email,
    password,
  });
  // 201 is for creation
  res.status(201).cookie("tempo", "hiiz").json({
    sucess: true,
    mesaage: "Sucessful Regsitration",
  });
};

export const specialUser = (req, res) => {
  res.json({
    sucess: "true",
    message: "Just Joking",
  });
};

export const userById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    sucess: "true",
    user,
  });
};
export const updateData = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    sucess: "true",
    mesaage: "Updated",
  });
};
export const deleteData = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
 
  await user.deleteOne();

  res.json({
    sucess: "true",
    mesaage: "Delted User",
  });
};
``````