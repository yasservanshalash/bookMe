import mongoose from "mongoose";
import { Document } from "mongoose";
import User from "./User";
export type PlaceDocument = Document & {
  owner: string;
  title: string;
  address: string;
  photos: [string];
  description: string;
  perks: [string];
  extraInfo: string;
  checkIn: boolean;
  checkOut: boolean;
  maxGuests: number;
  price: number;
  place: string;
  isAvailable: boolean;
  
};
const PlaceSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: User },
  title: { type: String },
  address: { type: String },
  photos: { type: [String] },
  description: { type: String },
  perks: { type: [String] },
  extraInfo: { type: String },
  checkIn: { type: Boolean, default: false },
  checkOut: { type: Boolean, default: false },
  maxGuests: { type: Number },
  price: { type: Number },
  place: { type: String },
  isAvailable: { type: Boolean, default: true },
});
export default mongoose.model<PlaceDocument>("Place", PlaceSchema);
