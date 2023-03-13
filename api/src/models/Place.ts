import mongoose, { Document } from "mongoose";

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
 };
 const PlaceSchema = new mongoose.Schema({
   owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   title: { type: String },
   address: { type: String },
   photos: { type: [String] },
   descriptions: { type: String },
   perks: { type: [String] },
   extraInfo: { type: String },
   checkIn: { type: Boolean },
   checkOut: { type: Boolean },
   maxGuests: { type: Number },
   price: { type: Number },
 });
 export default mongoose.model<PlaceDocument>("Place", PlaceSchema);