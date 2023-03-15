import mongoose, { Document } from "mongoose";
import User from "./User";
import Place from "./Place";
export type ReviewDocument = Document & {
  userId: [];
  places: [];
  review: string;
  rating: number;
};
const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User },
  places: { type: mongoose.Schema.Types.ObjectId, ref: Place },
  review: { type: String },
  rating: { type: Number },
});

export default mongoose.model<ReviewDocument>("Review", ReviewSchema);
