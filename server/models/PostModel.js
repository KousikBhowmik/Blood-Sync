import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "User ID is required!"],
    },
    title: {
      type: String,
      required: [true, "Post title is required!"],
      min: 5,
      max: 50,
    },
    phone: {
      type: String,
      required: [true, "Phone numberis required!"],
      min: 10,
      max: 10,
      unique: false,
    },
    bloodType: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    quantity: {
      type: Number,
      min: 50,
      max: 400,
    },
    text: {
      type: String,
      min: 10,
      max: 600,
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
    tags: {
      type: [String],
      default: [],
    },
    date: {
      type: Date,
      default: Date.now,
    },
    requests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    state: {
      type: String,
      enum: ["Active", "Expired", "Fulfilled", "Deleted"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.models.posts || mongoose.model("posts", postSchema);
export default PostModel;
