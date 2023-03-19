import { Review } from './../../types/types';
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    reviews: Review[]
}

const initialState = {
    reviews: []
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
    }
})

export const reviewAction = reviewSlice.actions;
const reviewReducer = reviewSlice.reducer
export default reviewReducer