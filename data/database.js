import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "BackendApi",
    })
    .then(console.log("DataBase connected"))
    .catch(() => console.log(e));
};
export default connectDB;