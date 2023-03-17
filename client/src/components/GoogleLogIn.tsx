import React from "react";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';

export default function GoogleLogIn() {
  return (
    <div>
      <h1>Google Login</h1>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);

          const url = "http://localhost:8013/users/login-google";
          const credential = credentialResponse.credential;

          // let res = await axios.post(url, { credential: credential });
          let res = await axios.post(url, { id_token: credential });

          if (res.status === 200) {
            console.log(res, "response from backend");
          } else {
            alert("Login failed please try again");
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
