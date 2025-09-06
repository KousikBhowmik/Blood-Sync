import UserModel from "../../models/UserModel";

const getUserApi = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    console.log(`Invalid request: User ID is requered!`);
    return res
      .status(401)
      .json({ success: false, message: "User ID is required!" });
  }

  try {
    const user = await UserModel.findById(userId).select("-posts, -requests");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });

    res.status(200).json({
      success: true,
      message: "Got the user data!",
      user,
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

export default getUserApi;
