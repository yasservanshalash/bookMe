import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import React from "react";

const PropertyItem = () => {
  return (
    <Paper sx={{display: "flex", justifyContent: "space-between"}}>
        <Box sx={{display: "flex", textAlign: "left"}}>
            <img
               src={
                 "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
               }
               alt="image"
               style={{ width: "200px", height: "200px", objectFit: "cover", padding: "16px", borderRadius: "20px" }}
             />
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              textAlign: "left",
              p: "16px"
            }}
          >
            <Box>
              <Typography sx={{fontWeight: "bold"}}>Hotel Norrebro</Typography>
              <Typography variant="subtitle2" sx={{fontWeight: "lighter"}}>Free Cancellation</Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
              <Typography sx={{fontWeight: "bold"}}>Comfort Room</Typography>
              <Typography variant="subtitle2">1x King size bed</Typography>
              <Typography variant="subtitle2">1x Bathroom</Typography>
              <Box sx={{py: 1, display: "flex", gap: 1}} >
                <Chip label="#Popular" variant="outlined" />
                <Chip label="#Hot deal" variant="outlined" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
            p: 2,
            gap: 8
          }}
        >
          <Box sx={{display: "flex", alignItems: "center", gap: 2}}>
            <Box sx={{display: "flex", flexDirection: "column"}} >
              <Typography variant="subtitle2" sx={{fontSize: "70%"}}>Execllent</Typography>
              <Typography variant="subtitle2" sx={{fontSize: "70%"}}>1,920 reviews</Typography>
            </Box>
            <Box>
              <Chip label="9.6" variant="outlined" />
            </Box>
          </Box>
          <Box sx={{alignSelf: "flex-end", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", mr: 3, gap: 0.5}}>
            <Typography variant="h6" sx={{fontWeight: "bold"}}>$180</Typography>
            <Typography>3 nights, 2 guests</Typography>
            <Button variant="contained" sx={{borderRadius: "20px"}}>See more</Button>
          </Box>
        </Box>
        </Box>
    </Paper>
  );
};

export default PropertyItem;
