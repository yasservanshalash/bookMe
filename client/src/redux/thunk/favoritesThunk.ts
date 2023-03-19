import { favoriteActions } from './../slices/favoriteSlice';
import { AppDispatch } from "../store";
import { Favorite, Place } from '../../types/types';
import axios from 'axios';




export function fetchFavorites(url: string) {
    return async (dispatch: AppDispatch) => {
      const response = await fetch(url);
      const favorites = await response.json();
      dispatch(favoriteActions.setFavorites(favorites))
    }
  } 
  
  export function addToFavoritesThunk(userId: string, favorite: Favorite, place: Place) {
    return async (dispatch: AppDispatch) => {
      const updatedPlaces = favorite.places.concat([place]);
      const result = await axios.put("http://localhost:8013/WishList/" + userId, { "places": updatedPlaces });
    }
  } 
  
  export function removeFromFavoritesThunk(userId: string, favorite: Favorite, place: Place) {
    return async (dispatch: AppDispatch) => {
      const updatedPlaces = favorite.places.filter((item) => item.name !== place.title);
      const result = await axios.put("http://localhost:8013/WishList/" + userId, { "places": updatedPlaces });
    }
  }
  