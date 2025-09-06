import mongoose from "mongoose";
import { MONGODB_URI } from "../utils/constant.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log(`DB connected`);
    });
    await mongoose.connect(`${MONGODB_URI}/bloodSync`);
  } catch {
    console.log("DB connection Failed!");
  }
};

export default connectDB;
