import { Request, Response } from "express";
import Reservation from "../models/Reservation";
import ReservationServices from "../services/ReservationServices";

export const createReservationController = async (
  req: Request,
  res: Response
) => {
  try {
    const newReservation = new Reservation({
      userId: req.params.userId,
      place: req.body.place,
      price: req.body.price,
    });
    const reservation = await ReservationServices.createReservation(
      newReservation
    );
    res.json(reservation);
  } catch (error) {
    console.log(error);
  }
};

export const getReservationByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const foundReservation = await ReservationServices.getReservationById(
      req.params.userId
    );
    res.json(foundReservation);
  } catch (error) {
    console.log(error);
  }
};

export const deleteReservationByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const foundReservation = await ReservationServices.deleteReservationById(
      req.params.id
    );
    res.json(foundReservation);
  } catch (error) {
    console.log(error);
  }
};
