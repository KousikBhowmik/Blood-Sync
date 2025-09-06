import PostModel from "../../models/PostModel.js";

const updatePostApi = async (req, res) => {
  const { postId, field, value } = req.body;

  if (!postId || !field || !value) {
    console.log(`Invalid Request: PostId, Field, Value is needed!`);
    return res
      .status(401)
      .json({ success: false, message: "All fields are requerd!" });
  }

  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      { field: value },
      { new: true }
    );

    if (!updatedPost) {
      console.error(`Unable to update post!`);
      return res.status(200).json({});
    }

    res.status(200).json({
      success: true,
      message: "Post created successfuly!",
      updatedPost,
    });
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    res.status(501).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default updatePostApi;
