import { AppDispatch } from "../store";
import axios from "axios";
import { favoriteActions } from "../slices/favoriteSlice";
import { Favorite, Place } from "../../types/types";


export function fetchFavorites(url: string) {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const favorites = await response.json();
        dispatch(favoriteActions.setFavorites(favorites))
    }
}

export function addToFavoritesThunk(userId: string, favorites: Favorite, place: Place) {
    return async (dispatch: AppDispatch) => {
        const places = favorites.places.concat([place])
        const result = await axios.put("http://localhost:8013/wishlist/" + favorites._id , {"places": places})
    }
}
export function removeFromFavoritesThunk(userId: string, favorites: Favorite, place: Place) {
    return async (dispatch: AppDispatch) => {
        const places = favorites.places.filter((item) => item.title !== place.title)
        const result = await axios.put("http://localhost:8013/wishlist/" + favorites._id , {"places": places})
    }}