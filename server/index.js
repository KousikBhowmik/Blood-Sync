import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { API_VERSION } from "./utils/constant.js";
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
app.use(`${API_VERSION}/user`, userRouter);
app.use(`${API_VERSION}/post`, postRouter);

export default app;
