import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import React, { KeyboardEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeActions } from "../redux/slices/placesSlice";
import { AppDispatch, RootState } from "../redux/store";
import { addPlaceThunk } from "../redux/thunk/placesThunk";

const Dashboard = () => {
  const [value, setValue] = React.useState("1");
  const user = useSelector((state: RootState) => state.users.user)
  const dispatchThunk = useDispatch<AppDispatch>();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [maxGuests, setMaxGuests] = useState(10);
  const [price, setPrice] = useState(200);
  const [place, setPlace] = useState("");
  return (
    <Box
      sx={{
        width: "90%",
        typography: "body1",
        height: "66vh",
        margin: "0 auto",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Users" value="1" />
            <Tab label="Reservations" value="2" />
            <Tab label="Add places" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">User Table</TabPanel>
        <TabPanel value="2">Reservation Table</TabPanel>
        <TabPanel value="3">
          <Typography variant="h6">New Place</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 2,
              my: 5,
            }}
          >
            <TextField
              required
              variant="standard"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              placeholder="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              placeholder="description"
              onChange={(e) => {
                setDescriptions(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={photo1}
              placeholder="photo1"
              onChange={(e) => {
                setPhoto1(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={photo2}
              placeholder="photo2"
              onChange={(e) => {
                setPhoto2(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={photo3}
              placeholder="photo3"
              onChange={(e) => {
                setPhoto3(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={photo4}
              placeholder="photo4"
              onChange={(e) => {
                setPhoto4(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={photo5}
              placeholder="photo5"
              onChange={(e) => {
                setPhoto5(e.target.value);
              }}
            />
            <TextField
              required
              variant="standard"
              value={perks}
              placeholder="perks"
              onChange={(e) => setPerks(e.target.value)}
            />
            <TextField
              required
              variant="standard"
              value={extraInfo}
              placeholder="extra info"
              onChange={(e) => setExtraInfo(e.target.value)}
            />
            <TextField
              required
              variant="standard"
              value={maxGuests}
              placeholder="max guests"
              onChange={(e) => setMaxGuests(+e.target.value)}
            />
            <TextField
              required
              variant="standard"
              value={price}
              placeholder="price"
              onChange={(e) => setPrice(+e.target.value)}
            />
            <TextField
              required
              variant="standard"
              value={place}
              placeholder="place"
              onChange={(e) => setPlace(e.target.value)}
            />
            <Button variant="contained" onClick={() => 
            //   console.log({
            //   title: title,
            //   address: address,
            //   descriptions: descriptions,
            //   photos: [photo1, photo2, photo3, photo4, photo5],
            //   perks: perks.split(" "),
            //   extraInfo: extraInfo,
            //   maxGuests: maxGuests,
            //   price: price,
            //   place: place
            // })
            dispatchThunk(addPlaceThunk({
              owner: "Yasser",
              title: title,
address: address,
descriptions: descriptions,
photos: [photo1, photo2, photo3, photo4, photo5],
perks: perks.split(" "),
extraInfo: extraInfo,
maxGuests: maxGuests,
price: price,
place: place,
isAvailable: true,
checkIn: false,
checkOut: false,

            }))
            }>
              Add Place
            </Button>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Dashboard;


  