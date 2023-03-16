import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const NavBar = () => {
  return (
    <Box sx={{display: "flex", mt: 2}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, my: 2 }}>
        <Link to="/" style={{textDecoration: "none"}}>
          <img src={logo} alt="logo" style={{transform: "scale(0.8)"}} />
          </Link>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Link to="/properties" style={{textDecoration: "none"}}>
            <Typography sx={{textDecoration: "none", color:"black"}}>Properties</Typography>
            </Link>
          </Box>
        </Box>
        <Box sx={{display: "flex",alignItems: "flex-end", gap: 5, mr: 5}}>
          <Button sx={{ border: "1px solid #72777C", borderRadius: "20px", color: "#72777C", width: "100px"}} component={Link} to="signup">Sign up</Button>
          <Button variant="contained" sx={{borderRadius: "20px", background: "#1D64EC", width: "100px"}} component={Link} to="login">Log in</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default NavBar;
