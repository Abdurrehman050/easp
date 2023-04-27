import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
//mongoose.set("StrictQuery", true);

//{mongodb connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Mongodb is connected successfully.");
  } catch (error) {
    handleError(error);
  }
};
app.listen(8800, () => {
  connect();
  console.log("Back is running on");
});
//}
