import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required!"],
      unique: true,
      min: 10,
      max: 10,
    },
    fullName: {
      type: String,
      default: null,
    },
    address: {
      state: {
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

userSchema.index({ email: 1, phone: 1 });

const UserModel = mongoose.models.users || mongoose.model("users", userSchema);
export default UserModel;
