import Reservation, { ReservationDocument } from "../models/Reservation";

const createReservation = async (
  Reservation: ReservationDocument
): Promise<ReservationDocument> => {
  return Reservation.save();
};
const getReservationList = async (): Promise<ReservationDocument[]> => {
  return Reservation.find();
};
const getReservationById = async (
  id: string
): Promise<ReservationDocument | null> => {
  return Reservation.findById(id);
};

// delete Reservation in product list
const deleteReservationById = async (
  id: string
): Promise<ReservationDocument | null> => {
  return Reservation.findByIdAndDelete(id);
};

// update Reservation list
const updateReservation = async (
  id: string,
  update: Partial<ReservationDocument>
): Promise<ReservationDocument | null> => {
  return Reservation.findByIdAndUpdate(id, update, { new: true });
};
export default {
  createReservation,
  getReservationList,
  getReservationById,
  deleteReservationById,
  updateReservation,
};
