import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./slices/placesSlice";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        places: placeReducer,
        users: userReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;