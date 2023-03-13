import mongoose,{Document} from "mongoose"

export type ReservationDocument = Document & {
    place:string,
    user:string,
    checkIn:Date,
    checkOut:Date,
    name:string,
    phone:string,
    price:Number
  };

const ReservationSchema = new mongoose.Schema({
  place: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Place'},
  user: {type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"},
  checkIn: {type:Date, required:true},
  checkOut: {type:Date, required:true},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  price: {type:Number},
});

export default mongoose.model<ReservationDocument>("Reservation", ReservationSchema);