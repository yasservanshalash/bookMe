import { AppDispatch } from "./../store";
import { userActions } from "../slices/userSlice";
import axios from "axios";
import { User } from "../../types/types";

export function editNameThunk(user: User, name: string) {
  return async (dispatch: AppDispatch) => {
    console.log("result is", user._id, name);
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      "name": name,
    });

    dispatch(userActions.changeName(result.data.name));
  };
}

export function editAvatar(user: User, avatar: string) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      "avatar": avatar,
    });
    dispatch(userActions.changeAvatar(result.data.avatar));
  };
}
export function editPhoneNumberThunk(user: User, phoneNumber: string) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      phoneNumber: phoneNumber,
    });
    dispatch(userActions.changePhoneNumber(result.data.phoneNumber));
  };
}
export function editLocation(user: User, location: string) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      "place": location,
    });
    dispatch(userActions.changeLocation(result.data.place));
  };
}
export function editNationality(user: User, nationality: string) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      "nationality": nationality,
    });
    dispatch(userActions.changeNationality(result.data.nationality));
  };
}
export function editEmail(user: User, email: string) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      "avatar": email,
    });
    dispatch(userActions.changeEmail(result.data));
  };
}

export function getUserList() {
  return async (dispatch: AppDispatch) => {
    const result = await axios.get("http://localhost:8013/users/");

    dispatch(userActions.getCompleteUserList(result.data));
  };
}

export function editIsAdmin(user: User, isAdmin: boolean) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      isAdmin: isAdmin,
    });
    dispatch(userActions.changeAvatar(result.data));
  };
}
export function editIsBanned(user: User, isBanned: boolean) {
  return async (dispatch: AppDispatch) => {
    const result = await axios.put("http://localhost:8013/users/" + user._id, {
      isBanned: isBanned,
    });
    dispatch(userActions.changeAvatar(result.data));
  };
}
