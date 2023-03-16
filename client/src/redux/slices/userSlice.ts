import {createSlice} from "@reduxjs/toolkit"
import { User } from '../../types/types';

type initialStateType = {
    user: User
}

const initialState: initialStateType = ({
    user: {
        _id: "",
        name: "",
        email: "",
        avatar: "",
        isAdmin: false,
        isBanned: false,
        phoneNumber: "",
        location: "",
        nationality: "",
        dateOfBirth: "",
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.user._id = action.payload._id
            state.user.email = action.payload.email;
            state.user.name = action.payload.name;
            state.user.avatar = action.payload.avatar;
            state.user.isAdmin = action.payload.isAdmin;
            state.user.isBanned = action.payload.isBanned;
            state.user.phoneNumber = action.payload.email;
            state.user.location = action.payload.location;
            state.user.nationality = action.payload.nationality;
            state.user.dateOfBirth = action.payload.dateOfBirth;
        },
        logOut: (state) => {
            state.user._id = "";
            state.user.email = "";
            state.user.name = "";
            state.user.avatar = "";
            state.user.isAdmin = false;
            state.user.isBanned = false;
            state.user.phoneNumber = "";
            state.user.location = "";
            state.user.nationality = "";
            state.user.dateOfBirth = "";
        }
    }
})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer