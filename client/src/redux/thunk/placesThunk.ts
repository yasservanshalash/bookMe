// import axios from "axios";
import { Place } from "../../types/types";
import { placeActions } from './../slices/placesSlice';
import { AppDispatch } from "../store";
import { port } from "../../utils/utils";
import axios from "axios";

const url = "http://localhost:8013/places"

export function fetchPlacesData() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const placesData = await response.json();
        dispatch(placeActions.getAllPlaces(placesData));
    }
}

export function addPlaceThunk(place: Place) {
    return async (dispatch: AppDispatch) => {
        const result = await axios.post(url, place)
        console.log(result)
    }
}