import { Router } from "express";
import getPostesApi from "../controllers/post/getPostesApi.js";
import donationRequestApi from "../controllers/post/donationRequestApi.js";

const postRouter = Router();

postRouter.get("/get-posts", getPostesApi);
postRouter.put("/donate-request", donationRequestApi);

export default postRouter;