import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  Email: String,
  password: String,
});

const User = mongoose.model("User", schema);
export default User;