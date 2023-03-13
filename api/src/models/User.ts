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
  email: { type: String },
  avatar: { type: String },
  isAdmin: { type: Boolean },
  isBanned: { type: Boolean },
  phoneNumber: { type: String },
});

export default mongoose.model<UserDocument>("User", UserSchema);
