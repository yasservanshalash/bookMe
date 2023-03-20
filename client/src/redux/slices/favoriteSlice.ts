import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorite, Place } from "../../types/types";
import { AppDispatch, RootState } from "../store"
type initialStateType = {
    favorites:{
  _id:string;
  userId:string;
  places:Place[];
    }
};
const initialState:initialStateType = {
    favorites:{
        _id:"",
        userId:"",
        places:[]
          }
      }
const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites:(state,action)=> {
        state.favorites= action.payload
    },
    addFavorite:(state, action) =>{
      if(state.favorites.places.find((places)=>places._id === action.payload._id)){
        return;
      }else {
        state.favorites?.places?.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
        // state.favorites.products = state.favorites.products.filter((item: Product) => item._id !== action.payload.id)
        const result = state.favorites.places.findIndex(
            (place:Place) => place.title === action.payload.name
          );
          if (result !== -1) {
            state.favorites.places.splice(result, 1);
          }
    }
  },
})
export const favoriteActions = favoritesSlice.actions;
const favoriteReducer = favoritesSlice.reducer;
export default favoriteReducer





