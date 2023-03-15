import {createSlice} from "@reduxjs/toolkit"
import { User } from '../../types/types';

type initialStateType = {
    user: User
}

const initialState: initialStateType = ({
    user: {
        name: "",
        email: "",
        avatar: "",
        isAdmin: false,
        isBanned: false,
        phoneNumber: ""
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.user.email = action.payload.email;
            state.user.name = action.payload.name;
            state.user.avatar = action.payload.avatar;
            state.user.isAdmin = action.payload.isAdmin;
            state.user.isBanned = action.payload.isBanned;
            state.user.phoneNumber = action.payload.email;
        },
        logOut: (state, action) => {
            state.user.email = "";
            state.user.name = "";
            state.user.avatar = "";
            state.user.isAdmin = false;
            state.user.isBanned = false;
            state.user.phoneNumber = "";
        }
    }
})

export const userActions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer