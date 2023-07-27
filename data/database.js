import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "BackendApi",
    })
    .then((c) => console.log(`DataBase connected ${c.connection.host}`))
    .catch((e) => console.log(e));
};
export default connectDB;