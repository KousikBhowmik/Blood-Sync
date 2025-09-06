import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required!"],
      unique: true,
    },
    fullName: {
      type: String,
      default: null,
    },
    address: {
      stateName: {
        type: String,
        default: null,
      },
      district: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
      pin: {
        type: Number,
        default: null,
      },
    },
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
    requests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        state: {
          type: String,
          enum: ["Requested", "Rejected", "Accepted", "Donnated"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.users || mongoose.model("users", userSchema);
export default UserModel;
