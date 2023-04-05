import { Request, Response } from "express";

import Place from "../models/Place";
import PlaceService from "../services/place";
import UserService from "../services/users";
export const createPlaceController = async (req: Request, res: Response) => {
  try {
    const {
      owner,
      title,
      address,
      photos,
      descriptions,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
      place,
      isAvailable,
    } = req.body;

    const places = new Place({
      owner: owner,
      title: title,
      address: address,
      photos: photos,
      descriptions: descriptions,
      perks: perks,
      extraInfo: extraInfo,
      checkIn: checkIn,
      checkOut: checkOut,
      maxGuests: maxGuests,
      price: price,
      place: place,
      isAvailable: isAvailable,
    });
    //logic for add places for admin
    const isLoginAdmin = await UserService.getUserById(owner);
    console.log(isLoginAdmin);
    if (
      isLoginAdmin?.isAdmin == true ||
      isLoginAdmin?.name == "admin" ||
      isLoginAdmin?.email == "admin@gmail.com"
    ) {
      const placeStore = await PlaceService.addPlace(places);
      res.json(placeStore);
      return;
    }
    res.json({ message: "You are not a admin" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPlacesController = async (req: Request, res: Response) => {
  try {
    const placeList = await PlaceService.getPlace();
    res.json(placeList);
  } catch (error) {
    console.log(error);
  }
};

export const updatePlaceController = async (req: Request, res: Response) => {
  try {
    const update = await PlaceService.updatePlacesById(
      req.params.placeId,
      req.body
    );
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  try {
    const getPlace = await PlaceService.getplaceByID(req.params.placeId);
    res.json(getPlace);
  } catch (error) {
    console.log(error);
  }
};
