import PostModel from "../../models/PostModel.js";
import UserModel from "../../models/UserModel.js";

const createPostApi = async (req, res) => {
  const { userId, title, bloodType, quantity, phone, text, address } = req.body;

  if (!userId || !title || !bloodType || !quantity || !text || !address) {
    console.log("Invalid Request!");
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!" });
  }

  try {
    const tagArray = Object.values(address).map((val, _) => val);

    const postObj = await PostModel.create({
      userId,
      title,
      bloodType,
      phone,
      quantity,
      text,
      address,
      tags: tagArray,
    });

    if (!postObj) {
      console.error(`Cann't create post!`);
      return res
        .status(501)
        .json({ success: false, message: "Uable to create post!" });
    }

    await UserModel.findByIdAndUpdate(
      { _id: postObj.userId },
      { $push: { posts: postObj._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Post created successfuly!",
      post: postObj,
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

export default createPostApi;
