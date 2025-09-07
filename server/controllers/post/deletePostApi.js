import PostModel from "../../models/PostModel.js";
import UserModel from "../../models/UserModel.js";

import mongoose from "mongoose";

const deletePost = async (req, res) => {
  try {
    const { postId } = req.query; 
    console.log("Received postId:", postId);

    if (!postId || !mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ message: "Invalid or missing postId!" });
    }

    const deletedPost = await PostModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }
    const userId = deletedPost.userId.toString();
    await UserModel.findByIdAndUpdate(userId, { $pull: { posts: postId } });

    res
      .status(200)
      .json({ message: "Post deleted successfully!", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};

export default deletePost;
