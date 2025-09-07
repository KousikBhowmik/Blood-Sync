import { Router } from "express";
import getPostesApi from "../controllers/post/getPostesApi.js";
import donationRequestApi from "../controllers/post/donationRequestApi.js";
import createPostApi from "../controllers/post/createPostApi.js";
import deletePost from "../controllers/post/deletePostApi.js";

const postRouter = Router();

postRouter.post('/create', createPostApi);
postRouter.get("/get-posts", getPostesApi);
postRouter.put("/donate-request", donationRequestApi);
postRouter.delete("/delete", deletePost);

export default postRouter;