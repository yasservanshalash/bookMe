import { Reservation } from "../../types/types";
import { reservationActions } from './../slices/reservationSlice';
import { AppDispatch } from "../store";
import { port } from "../../utils/utils";
import axios from "axios";

const url = "http://localhost:8013/reservations"

export function fetchReservations() {
    return async (dispatch: AppDispatch) => {
        const response = await fetch(url);
        const reservationData = await response.json();
        dispatch(reservationActions.getAllReservation(reservationData));
    }
}

export function addPlaceThunk(reservation: Reservation) {
    return async (dispatch: AppDispatch) => {
        const result = await axios.post(url, reservation)
        console.log(result)
    }
}