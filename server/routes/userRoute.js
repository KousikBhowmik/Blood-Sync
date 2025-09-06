import { Router } from "express";
import registerUserApi from "../controllers/user/registerUserApi.js";
import getUserApi from "../controllers/user/getUserApi.js";

const userRouter = Router();

userRouter.post("/register-user", registerUserApi);
userRouter.get("/get-user", getUserApi);

export default userRouter;
