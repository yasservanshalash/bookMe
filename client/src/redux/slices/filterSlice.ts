import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    searchTerm: string;
    numOfDays: number;
    numberOfVisitors: number;

}

const initialState = {
    searchTerm: "",
    numOfDays: 1,
    numberOfVisitors: 1
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setNumOfDays: (state, action) => {
            state.numOfDays = action.payload;
        },
        setNumberOfVisitors: (state, action) => {
            state.numberOfVisitors = action.payload;
        }
    }
})

export const filterActions = filterSlice.actions;
const filterReducer = filterSlice.reducer;
export default filterReducer;