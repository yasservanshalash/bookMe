import { Box, Chip, Typography } from "@mui/material";
import React from "react";

import "./PopularDestinations.css"
const PopularDestinations = () => {
  return (
    <Box sx={{ width: "90%", margin: "0 auto", mt: 10, overflowX: "hidden" }}>
      <Box>
        <Typography variant="h6" sx={{ textAlign: "left" }}>
          Popular destinations
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          my: 4,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
            style={{ width: "360px", height: "430px", objectFit: "cover", borderRadius: "20px"}}
            className="img"
          />
          <Chip label="Spain" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              backgroundColor: "#ffffffee",
              px: 2,
              borderRadius: "20px",
            }} />
        </Box>
        <Box
          sx={{
            height: "426.562px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box sx={{position: "relative"}}>
            <img
              src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              style={{ width: "360px", height: "256px", objectFit: "cover", borderRadius: "20px" }}
              className="img"

            />
          <Chip label="London" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "90px",
              backgroundColor: "#ffffffee",
              borderRadius: "20px",
            }} />
          </Box>
          <Box sx={{position: "relative"}}>
            <img
              src="https://images.unsplash.com/photo-1585680398578-8cf7a4b9c2df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              style={{ width: "360px", height: "160px", objectFit: "cover", borderRadius: "20px" }}
              className="img"

            />
          <Chip label="Lisbon" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "90px",
              backgroundColor: "#ffffffee",
              borderRadius: "20px",
            }} />
          </Box>
        </Box>
        <Box sx={{position: "relative"}}>
          <img
            src="https://images.unsplash.com/photo-1559686533-c377c07f1a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
            style={{
              width: "360px",
              height: "430px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
            className="img"

          />
          <Chip label="Croatia" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "90px",
              backgroundColor: "#ffffffee",
              borderRadius: "20px",
            }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "426.562px",
            gap: 1,
          }}
        >
            <Box sx={{position: "relative"}}>
            <img
            src="https://images.unsplash.com/photo-1608853826477-69a6d92bad7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            style={{ width: "360px", height: "160px", objectFit: "cover",borderRadius: "20px" }}
            className="img"

          />
          <Chip label="Bratislava" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "90px",
              backgroundColor: "#ffffffee",
              borderRadius: "20px",
            }} />
            </Box>
            <Box sx={{position: "relative"}}>
            <img
            src="https://images.unsplash.com/photo-1561560392-39ff98f2d54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            style={{ width: "360px", height: "255px", objectFit: "cover",borderRadius: "20px" }}
            className="img"

          />
          <Chip label="Copenhagen" variant="outlined" sx={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              width: "120px",
              backgroundColor: "#ffffffee",
              borderRadius: "20px",
            }} />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularDestinations;
