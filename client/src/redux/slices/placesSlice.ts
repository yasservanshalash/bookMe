import { createSlice } from "@reduxjs/toolkit";
import { Place } from "../../types/types";

type initialStateType = {
    places: Place[];
    searchTerm: string;
}

const initialState: initialStateType = {
    places: [],
    searchTerm: ""
}

const placeSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        getAllPlaces: (state, action) => {
            state.places = action.payload
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    }
})

export const placeActions = placeSlice.actions;
const placeReducer = placeSlice.reducer;
export default placeReducer;