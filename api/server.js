import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import gigRouter from "./routes/gig.route.js";
import orderRouter from "./routes/order.route.js";
import conversationRouter from "./routes/conversation.route.js";
import messageRouter from "./routes/message.route.js";
import reviewRouter from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";

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

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRouter);
// app.use("/api/gigs", gigRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);
// app.use("/api/reviews", reviewRoute);

app.listen(8800, () => {
  connect();
  console.log("Back is running on");
});
//}
