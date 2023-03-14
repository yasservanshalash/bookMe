import { Request, Response } from "Express";

import Place from "../models/Place";
import PlaceService from "../services/place";

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
    const product = await PlaceService.addPlace(places);
    res.json(product);
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
