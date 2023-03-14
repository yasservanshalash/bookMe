import { Box, Divider, IconButton, InputBase, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import NavBar from "../../navbar/NavBar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import headerImg from "../../../unsplash.png";
import "./LandingHeader.css"

const LandingHeader = () => {
  return (
    <Box
    sx={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={headerImg}
      style={{
        width: "90vw",
        height: "350px",
        borderRadius: "30px",
        objectFit: "cover"
      }}
      className="headerImg"
      alt="header"
    />
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography variant="h3" sx={{ color: "white", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>
        Book your stay with BookMe
      </Typography>
      <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
        1,420,000 rooms for you to visit around the world!
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 700,
          position: "relative",
          top: "50px",
          borderRadius: "20px"
        }}
      >
        <IconButton disabled sx={{ p: "10px" }}>
            <EditLocationIcon sx={{color: "black"}}/>
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search properties"
          inputProps={{ "aria-label": "search properties" }}
        />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </Box>
  </Box>
  )
}

export default LandingHeader