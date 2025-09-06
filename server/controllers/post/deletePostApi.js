import PostModel from "../../models/PostModel.js";
import UserModel from "../../models/UserModel.js";

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const deletedPost = await PostModel.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }
    // @ts-ignore
    const userId = deletePost?.userId;
    await UserModel.findByIdAndUpdate({ userId }, { $pull: { posts: postId } });

    res
      .status(200)
      .json({ message: "Post deleted successfully!", post: deletedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};

export default deletePost;
