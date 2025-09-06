import PostModel from "../../models/PostModel.js";
import UserModel from "../../models/UserModel.js";

const donationRequestApi = async (req, res) => {
  const { postId, userId } = req.body;

  try {
    const updatePost = await PostModel.findByIdAndUpdate(
      { postId },
      { $push: { requests: userId } },
      { new: true }
    );

    const updateUser = await UserModel.findByIdAndUpdate(
      { userId },
      { $push: { requests: postId } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Donate request successful!",
      updatePost,
      updateUser,
    });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    res.status(501).json({
      success: false,
      message: "Internal server error!",
      error: error.message,
    });
  }
};

export default donationRequestApi;
