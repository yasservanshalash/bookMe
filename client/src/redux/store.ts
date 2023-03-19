import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import placeReducer from "./slices/placesSlice";
import reservationReducer from "./slices/reservationSlice";
import reviewReducer from "./slices/reviewSlice";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        places: placeReducer,
        users: userReducer,
        filter: filterReducer,
        reservations: reservationReducer,
        reviews: reviewReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;