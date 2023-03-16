import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Place } from "../../types/types";

const PropertyItem = ({property}: {property: Place}) => {
  return (
    <Paper sx={{display: "flex", justifyContent: "space-between"}}>
        <Box sx={{display: "flex", textAlign: "left"}}>
            <img
               src={property.photos[0]}
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
              <Typography sx={{fontWeight: "bold"}}>{property.title}</Typography>
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
            <Typography variant="h6" sx={{fontWeight: "bold"}}>{`$${property.price}`}</Typography>
            <Typography>3 nights, 2 guests</Typography>
            <Link to={`/properties/${property._id}`} style={{textDecoration: "none"}}>
            <Button variant="contained" sx={{borderRadius: "20px"}}>See more</Button>

            </Link>
          </Box>
        </Box>
        </Box>
    </Paper>
  );
};

export default PropertyItem;
