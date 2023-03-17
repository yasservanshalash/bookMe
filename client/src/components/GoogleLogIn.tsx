import React from "react";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function GoogleLogIn() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <Box>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);

          const url = "http://localhost:8013/users/login-google";
          const credential = credentialResponse.credential;

          // let res = await axios.post(url, { credential: credential });
          let res = await axios.post(url, { id_token: credential });

          if (res.status === 200) {
            console.log(res, "response from backend");
            dispatch(userActions.logIn(res.data.userData))
            nav("/")
          } else {
            alert("Login failed please try again");
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </Box>
  );
}
