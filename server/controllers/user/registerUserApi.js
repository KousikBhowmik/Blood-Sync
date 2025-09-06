import UserModel from "../../models/UserModel.js";

const registerUserApi = async (req, res) => {
  try {
    const { email, phone, fullName, address, bloodType } = req.body;

    if (!email || !phone || !bloodType) {
      return res
        .status(400)
        .json({ message: "Email, phone, and blood type are required" });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email or phone already exists" });
    }
    const newUser = new UserModel({
      email,
      phone,
      fullName,
      address,
      bloodType,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        phone: newUser.phone,
        fullName: newUser.fullName,
        bloodType: newUser.bloodType,
        address: newUser.address,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default registerUserApi;
