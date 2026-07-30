// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },            
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    imageUrl: { type: String, default: "" },
    imagePublicId: { type: String, default: null },
    passwordHash: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    emailVerified: { type: Boolean, default: false },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
