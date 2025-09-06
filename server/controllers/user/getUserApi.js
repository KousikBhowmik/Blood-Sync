import UserModel from "../../models/UserModel.js";

const getUserApi = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    console.log(`Invalid request: Email ID is requered!`);
    return res
      .status(401)
      .json({ success: false, message: "Email ID is required!" });
  }

  try {
    const user = await UserModel.findOne({ email }).select("-posts, -requests");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });

    res.status(200).json({
      success: true,
      message: "Got the user data!",
      user: {
        id: user._id,
        email: user.email,
        phone: user.phone,
        fullName: user.fullName,
        bloodType: user.bloodType,
        address: user.address,
      },
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
