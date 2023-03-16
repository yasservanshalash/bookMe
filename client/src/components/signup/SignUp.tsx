import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const SignUp = () => {
  type InitialValues = {
    email: string;
    password: string | RegExp;
  };

  const initialValues: InitialValues = {
    email: "",
    password: "",
  };

  // form schema
  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("email is required to SignUp"),
      name: Yup.string()
      .required("name is required to SignUp"),
    password: Yup.string()
      .min(6, "Password too short!")
      .max(20, "Password tooo Long!")
      .required("Password is required to SignUp")
      .matches(
        /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
        "Password must have at least one letter one number and 6 characters at least in total."
      ),
  });

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", my: 3}}>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values: InitialValues) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form>
              <Box sx={{width: "20vw", height: "60vh", display: "flex", flexDirection: "column", gap: 2, p: 2, border: "1px solid lightgray", borderRadius: "10px", position: "relative"}}>
                {/* <IconButton sx={{position: "absolute", top: "10px", right: "10px"}}>
                    <CloseIcon sx={{transform: "scale(0.75)"}}/>
                </IconButton> */}
                <Typography sx={{fontWeight: "bold"}}>Sign up</Typography>
                <Button variant="contained">Sign up with Google</Button>
                <Divider />
                <Box sx={{ display: "flex", flexDirection: "column", gap:1.5 }}>
                  <Typography variant="subtitle2" sx={{fontWeight: "bold"}}>Name</Typography>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    onChange={handleChange}
                    style={{padding: "7px", borderRadius: "5px", border: "1px solid #eeeeeeff"}}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap:1.5 }}>
                  <Typography variant="subtitle2" sx={{fontWeight: "bold"}}>Email</Typography>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="yasser@gmail.com"
                    onChange={handleChange}
                    style={{padding: "7px", borderRadius: "5px", border: "1px solid #eeeeeeff"}}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap:1.5 }}>
                <Typography variant="subtitle2" sx={{fontWeight: "bold"}}>Password</Typography>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password123"
                    onChange={handleChange}
                    style={{padding: "7px", borderRadius: "5px", border: "1px solid #eeeeeeff"}}

                  />
                </Box>

                <Button type="submit" variant="contained" sx={{borderRadius: "5px", textTransform: "none"}}>Sign up</Button>
                <Typography variant="subtitle2" sx={{textAlign: "center"}}>Already have an account?</Typography>
                <Typography color="primary" variant="subtitle1" sx={{border: "none", textTransform: "none", textAlign: "center", textDecoration: "none"}} component={Link} to="/login">Log in</Typography>

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
          );
        }}
      </Formik>
    </Box>
  );
};

export default SignUp;
