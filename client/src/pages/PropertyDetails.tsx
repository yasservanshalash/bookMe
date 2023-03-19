import { Box, Button, Divider, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { Place } from "../types/types";
import { Star } from "@mui/icons-material";
import { filterActions } from '../redux/slices/filterSlice';
import { reservationActions } from "../redux/slices/reservationSlice";

const PropertyDetails = () => {

  const { id } = useParams();
  const place = useSelector((state: RootState) => state.places.places).find(
    (place) => String(place._id) === String(id)
  ) as Place;
  const checkIn = useSelector((state: RootState) => state.reservations.checkIn)
  // const checkout = useSelector((state: RootState) => state.reservations.checkOut)
  // const total = useSelector((state: RootState) => state.reservations.total)
  const [total, setTotal] = useState(place?.price);
  const [value, setValue] = React.useState("1");
  const [checkin, setCheckIn] =   useState(new Date().toDateString());
  const [checkout, setCheckOut] =   useState(new Date().toDateString());
  const [numOfDays, setNumOfDays]  = useState(1); 
  // const numberOfDays = useSelector((state: RootState) => state.filter.numOfDays)
  const dispatch = useDispatch();

  const checkInHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckIn(new Date(value).toDateString());
    console.log(checkin)
    console.log(Math.abs((+new Date(checkin) - +new Date(checkout) )/ 86400000))
    setNumOfDays(Math.ceil(Math.abs(Number(Number(new Date(checkout)) - Number(new Date(checkin)) )/ 86400000)))
    // console.log(value)
    // dispatch(reservationActions.setCheckin(value));
    // console.log(checkin)
    // console.log(checkIn)
  }

  const checkOutHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckOut(new Date(value).toDateString());
    console.log(checkout)
    console.log(Math.abs(Number(Number(new Date(checkin)) - Number(new Date(checkout)) )/ 86400000))
    setNumOfDays(Math.ceil(Math.abs(Number(Number(new Date(checkout)) - Number(new Date(checkin)) )/ 86400000)))
  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "85vw", margin: "50px auto" }}>
      <Box
        sx={{
          margin: "0px 30px 30px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton component={Link} to="/properties">
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
        <Typography sx={{ ml: 5 }}>Back to properties</Typography>
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
                      key={crypto.randomUUID()}
                    />
                  );
                })}
              </Box>
            </Box>
          )
        ) : null}
      </Box>
      <Box sx={{display: "flex", gap: 10}}>
      <Box sx={{width: "55%"}}>
        <Box sx={{ m: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {place?.title}
          </Typography>
          <Typography variant="subtitle1">{place?.descriptions}</Typography>
        </Box>
        <Box sx={{ ml: 3 }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Overview" value="1" />
                  <Tab label="Rooms" value="2" />
                  <Tab label="Amenities" value="3" />
                  <Tab label="Policies" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box>
                  <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                    Property Overview
                  </Typography>
                  <Box>
                    {place?.perks.map((perk) => {
                      return <Typography>{perk}</Typography>;
                    })}
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box>
                  <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                    Property Rooms
                  </Typography>
                  <Box>
                    {place?.perks.map((perk) => {
                      return <Typography>{perk}</Typography>;
                    })}
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value="3">
                <Box>
                  <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                    Property Amenities
                  </Typography>
                  <Box>
                    {place?.perks.map((perk) => {
                      return <Typography>{perk}</Typography>;
                    })}
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value="4">
                <Box>
                  <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
                    Property Policies
                  </Typography>
                  <Box>
                    {place?.perks.map((perk) => {
                      return <Typography>{perk}</Typography>;
                    })}
                  </Box>
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: "80vw", margin: "0 auto" }}>
          <Typography variant="h5" sx={{ my: 5, fontWeight: "bold" }}>
            Reviews
          </Typography>
        </Box>
      </Box>
      <Paper sx={{width: "30%", height: "40vh", p: 5, my: 5, display: "flex", flexDirection: "column"}}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
        <Box>
            <Typography variant="h6">{`$${place?.price}/night`}</Typography>
          </Box>
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography sx={{display: "flex", alignItems: "center"}}><Star sx={{transform: "scale(0.7)"}}/>{`4.8`}</Typography>
            <Typography>{`158 reviews`}</Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent: "space-evenly", my:2}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4}}>
          <Typography sx={{fontWeight: "bold"}}>Check In</Typography>
          <input value={checkin} type="date" name="checkin" id="checkin" style={{width: "17px", transform: "scale(3)", border: "0px", outline: "0px"}} onChange={checkInHandler}/>
          <Typography>{checkin}</Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 4}}>
          <Typography sx={{fontWeight: "bold"}}>Check Out</Typography>
          <input value={checkout} type="date" name="checkout" id="checkout" style={{width: "17px", transform: "scale(3)", border: "0px", outline: "0px"}} onChange={checkOutHandler}/>
          <Typography>{checkout}</Typography>

        </Box>
        </Box>
        <Typography sx={{alignSelf: "flex-end", my:4}}>{`Total: $${numOfDays <= 1 ? place?.price : numOfDays * place?.price }`}</Typography>
        <Box sx={{justifySelf: "flex-end"}}>
          <Button variant="contained" sx={{width: "100%"}} disabled={checkin === null || checkout === null ? true : false} onClick={() => {
            console.log((+new Date(checkin) - +new Date(checkout) )/ 86400000)
          }}>Reserve</Button>
        </Box>
      </Paper>
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
