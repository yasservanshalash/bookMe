import { createSlice } from "@reduxjs/toolkit";
import { Reservation } from "../../types/types";

type initialStateType = {
    reservations: Reservation[];
    checkIn: string;
    checkOut: string;
    total: number;
}

const initialState: initialStateType = {
    reservations: [],
    checkIn: new Date().toString(),
    checkOut: new Date().toString(),
    total: 0
}

const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        getAllReservation: (state, action) => {
            state.reservations = action.payload
        }, setCheckin: (state, action) => {
            state.checkIn = action.payload
        }, setCheckout: (state, action) => {
            state.checkOut = action.payload
        }, setTotal: (state, action) => {
            state.total = action.payload
        }
    }
})

export const reservationActions = reservationSlice.actions;
const reservationReducer = reservationSlice.reducer;
export default reservationReducer;