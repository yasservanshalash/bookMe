import { Box, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Place } from "../types/types";

const PropertyDetails = () => {
  const { id } = useParams();
  const places = useSelector((state: RootState) => state.places.places);
  const place: Place | undefined = places.find(
    (place) => String(place._id) === String(id)
  );

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: "85vw", margin: "50px auto" }}>
      <Box sx={{margin: "0px 30px 30px 20px", display: "flex", alignItems: "center"}}>
        <IconButton component={Link} to="/properties">
          <ArrowBackIcon sx={{ color: "black"}} />
        </IconButton>
        <Typography sx={{ml: 5}}>Back to properties</Typography>
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
                {place?.photos.slice(1, 5).map((photo) => {
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
      <Box sx={{ml: 3}}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Rooms" value="2" />
            <Tab label="Amenities" value="3" />
            <Tab label="Policies" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Box>
                <Typography variant="h5" sx={{my: 2, fontWeight: "bold"}}>Property Overview</Typography>
                <Box>
                    {place?.perks.map((perk) => {
                        return (
                            <Typography>{perk}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box>
                <Typography variant="h5" sx={{my: 2, fontWeight: "bold"}}>Property Rooms</Typography>
                <Box>
                    {place?.perks.map((perk) => {
                        return (
                            <Typography>{perk}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value="3">
        <Box>
                <Typography variant="h5" sx={{my: 2, fontWeight: "bold"}}>Property Amenities</Typography>
                <Box>
                    {place?.perks.map((perk) => {
                        return (
                            <Typography>{perk}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </TabPanel>
        <TabPanel value="4">
        <Box>
                <Typography variant="h5" sx={{my: 2, fontWeight: "bold"}}>Property Policies</Typography>
                <Box>
                    {place?.perks.map((perk) => {
                        return (
                            <Typography>{perk}</Typography>
                        )
                    })}
                </Box>
            </Box>
        </TabPanel>

      </TabContext>
    </Box>
      </Box>
      <Divider />
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <Typography variant="h5" sx={{my: 5, fontWeight: "bold"}}>Reviews</Typography>
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
