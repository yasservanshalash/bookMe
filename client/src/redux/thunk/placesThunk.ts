// import axios from "axios";
import { Place } from "../../types/types";
import { placeActions } from './../slices/placesSlice';
import { AppDispatch } from "../store";
import { port } from "../../utils/utils";

const url = "http://localhost:8013/places"

export function fetchPlacesData() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const placesData = await response.json();
        dispatch(placeActions.getAllPlaces(placesData));
    }
}