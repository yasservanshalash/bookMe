import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Place } from "../types/types";

const PropertyDetails = () => {
  const { id } = useParams();
  const places = useSelector((state: RootState) => state.places.places);
  const place: Place | undefined = places.find(
    (place) => String(place._id) === String(id)
  );

  return (
    <Box sx={{ width: "90%", margin: "50px auto" }}>
      <Box>
        <IconButton>
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {place ? (
          place?.photos.length === 0 ? (
            <img src={place.photos[0]} alt={place.title} />
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <img
                src={place.photos[0]}
                alt={place.title}
                style={{
                  objectFit: "cover",
                  height: "50vh",
                  width: "40vw",
                  borderRadius: "20px",
                }}
              />
              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}
              >
                {place?.photos.slice(1, 4).map((photo) => {
                  return (
                    <img
                      src={photo}
                      alt={photo}
                      style={{
                        height: "24.5vh",
                        width: "20vw",
                        objectFit: "cover",
                        borderRadius: "20px",
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          )
        ) : null}
      </Box>
      <Box sx={{m: 5}}>
        <Typography variant="h6" sx={{fontWeight: "bold"}}>{place?.title}</Typography>
        <Typography variant="subtitle1">{place?.description}</Typography>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

{
  /* <Box sx={{display:"flex", justifyContent: "center"}}>
            {   place ? 
                place?.photos.length === 0 ? <img src={place.photos[0]} alt={place.title} /> : <Box sx={{display: "flex", gap: 2}}>
                    <img src={place.photos[0]} alt={place.title} style={{objectFit: "cover", height: "70vh", width:"60vw"}}/> 
                    <Box sx={{display: "flex", flexDirection: "column", gap: 2.1}}>
                        {place?.photos.slice(1,4).map((photo) =>{
                            return (
                                <img src={photo} alt={photo} style={{height: "22vh", width: "30vw"}}/>
                            )
                        })}
                    </Box>
                </Box> : null
            }
        </Box> */
}
