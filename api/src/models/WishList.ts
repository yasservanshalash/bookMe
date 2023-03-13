import mongoose, { Document } from "mongoose";
import User from "./User";
import Place from "./Place";
export type WishListDocument = Document & {
  userId: string;
  placeId: string;
};
const WishListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: "Place" },
});

export default mongoose.model<WishListDocument>(" WishList", WishListSchema);
