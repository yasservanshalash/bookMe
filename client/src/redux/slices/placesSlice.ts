import { createSlice } from "@reduxjs/toolkit";
import { Place } from "../../types/types";

type initialStateType = {
    places: Place[];
}

const initialState: initialStateType = {
    places: []
}

const placeSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        getAllPlaces: (state, action) => {
            state.places = action.payload
        }
    }
})

export const placeActions = placeSlice.actions;
const placeReducer = placeSlice.reducer;
export default placeReducer;