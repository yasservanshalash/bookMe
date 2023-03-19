import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userActions } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import GoogleLogIn from "../GoogleLogIn";
import { useState } from "react";
const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  type InitialValues = {
    email: string;
    password: string | RegExp;
  };

  const initialValues: InitialValues = {
    email: "",
    password: "",
  };
  const [isBanned, setOpen] = useState(false);
  // form schema
  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("email is required to login"),
      password: Yup.string()
      .min(8, "It should be more than 7 character")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      )
      .required("Please Enter your password"),
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 3,
      }}>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values: InitialValues) => {
          console.log("123", values);
          try {
            axios
              .post("http://localhost:8013/users/login", values)
              .then((response) => {
                console.log("response.data", response.data);
                // const token = response.data.token;
                // const user = JSON.stringify(response.data.user);
                // localStorage.setItem("token", token);
                // localStorage.setItem("user", user);
                // dispatch(userActions.logIn(JSON.parse(user)));
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "user",
                  JSON.stringify(response.data.userData)
                );

                dispatch(userActions.logIn(response.data.userData));
                if (!response.data.userData.isBanned) {
                  nav("/");
                  setOpen(false);
                } else {
                  setOpen(true);
                }
              });
          } catch (e) {
            console.log(e);
          }
        }}>
        {({ errors, touched, handleChange }) => {
          return (
            <Box>
              <Form>
                <Box
                  sx={{
                    width: "20vw",
                    height: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 2,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    position: "relative",
                  }}>
                  {/* <IconButton sx={{position: "absolute", top: "10px", right: "10px"}}>
                    <CloseIcon sx={{transform: "scale(0.75)"}}/>
                </IconButton> */}
                  <Typography sx={{ fontWeight: "bold" }}>Login</Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <GoogleLogIn />
                  </Box>
                  <Divider />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      Email
                    </Typography>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="yasser@gmail.com"
                      onChange={handleChange}
                      style={{
                        padding: "7px",
                        borderRadius: "5px",
                        border: "1px solid #eeeeeeff",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      Password
                    </Typography>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password123"
                      onChange={handleChange}
                      style={{
                        padding: "7px",
                        borderRadius: "5px",
                        border: "1px solid #eeeeeeff",
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <input type="checkbox" name="remember" id="remember" />
                    <Typography>Remember me</Typography>
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ borderRadius: "5px", textTransform: "none" }}>
                    Log In
                  </Button>
                  <Typography
                    color="primary"
                    sx={{ textAlign: "center", fontSize: "80%" }}>
                    Forgot Password?
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Don't have an account?
                  </Typography>
                  <Typography
                    color="primary"
                    variant="subtitle1"
                    sx={{
                      border: "none",
                      textTransform: "none",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                    component={Link}
                    to="/signup">
                    Sign up
                  </Typography>
                </Box>
                {errors.email && touched.email ? (
                  <Typography variant="subtitle2" color="error">
                    * {errors.email} *
                  </Typography>
                ) : null}
                {errors.password && touched.password ? (
                  <Typography variant="subtitle2" color="error">
                    * {errors.password} *
                  </Typography>
                ) : null}
              </Form>
            </Box>
          );
        }}
      </Formik>
      {isBanned ? <Box>You are banned </Box> : <Box></Box>}
    </Box>
  );
};

export default Login;
