import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./utils/constant.js";
import connectDB from "./configs/connectDB.js";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_, res) => {
  res.send("Hello from boold sync server!");
});

// -------------- api V1 routes ------------- 
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

export default app;