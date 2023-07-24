import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  Email: {
    type:String,
    required:true,
    unique:true,
  },
  password: {
    type: String,
    required:true,
    select: false,
  },
  createdAt :{
    type:Date,
    default:Date.now,
  }
});

const User = mongoose.model("User", schema);
export default User;