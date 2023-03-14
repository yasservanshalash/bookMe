import { Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

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
        <Box sx={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <Typography variant="h4" sx={{fontWeight: "bolder"}}>BookMe.com</Typography>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Typography>Properties</Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex",alignItems: "flex-end", gap: 5, mr: 5}}>
          <Button sx={{ border: "1px solid #72777C", borderRadius: "20px", color: "#72777C", width: "100px"}}>Sign up</Button>
          <Button variant="contained" sx={{borderRadius: "20px", background: "#1D64EC", width: "100px"}}>Log in</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default NavBar;
