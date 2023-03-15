import Place, { PlaceDocument } from "../models/Place";

const addPlace = async (place: PlaceDocument): Promise<PlaceDocument> => {
  return place.save();
};
//to get all places
const getPlace = async (): Promise<PlaceDocument[]> => {
  return Place.find().populate({
    path: "owner",
    options: { strictPopulate: false },
  });
};
//to get place based name or location
//filtering
const getPlaceByName = async (
  title: string,
  place: string
): Promise<PlaceDocument[] | null> => {
  const getPlaces = Place.find({ title: title, place: place });
  return getPlaces;
};

const deletePlacesById = async (
  placeId: String
): Promise<PlaceDocument | null> => {
  return Place.findByIdAndRemove(placeId);
};

const updatePlacesById = async (
  placeId: String,
  placeUpdates: PlaceDocument
): Promise<PlaceDocument | null> => {
  return Place.findByIdAndUpdate(placeId, placeUpdates, { new: true });
};

export default {
  addPlace,
  getPlace,
  getPlaceByName,
  updatePlacesById,
  deletePlacesById,
};
