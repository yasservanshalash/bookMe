import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  password: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  isBanned: boolean;
  phoneNumber: string;
};
const UserSchema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: {
    type: String,
    unique: [true, "email should be unique"],
    required: [true, "email is required"],
  },
  avatar: { type: String, default: "" },
  isAdmin: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
  phoneNumber: { type: String, default: "+486798945" },
});

export default mongoose.model<UserDocument>("User", UserSchema);
