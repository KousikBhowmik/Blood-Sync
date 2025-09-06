import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./utils/constant.js";
import connectDB from "./configs/connectDB.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_, res) => {
  res.send("Hello from boold sync server!");
});
// auth route
// user route
// posts route 

app.listen(PORT || "4001", () => {
  console.log(`Server is running on 4000 PORT`);
});