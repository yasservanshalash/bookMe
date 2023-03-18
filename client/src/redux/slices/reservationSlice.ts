import { createSlice } from "@reduxjs/toolkit";
import { Reservation } from "../../types/types";

type initialStateType = {
    reservations: Reservation[];
}

const initialState: initialStateType = {
    reservations: [],
}

const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        getAllReservation: (state, action) => {
            state.reservations = action.payload
        }
    }
})

export const reservationActions = reservationSlice.actions;
const reservationReducer = reservationSlice.reducer;
export default reservationReducer;