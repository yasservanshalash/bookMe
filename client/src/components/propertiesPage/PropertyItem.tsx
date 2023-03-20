import { Box, Button, Chip, IconButton, Paper, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { Place } from "../../types/types";
import { favoriteActions } from "../../redux/slices/favoriteSlice";
import { addToFavoritesThunk } from "../../redux/thunk/favoriteThunk";

const PropertyItem = ({ property }: { property: Place }) => {
  console.log(property)
  const [isFavorited, setIsFavorited] = useState(false)
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm)
  const numberOfDays = useSelector((state: RootState) => state.filter.numOfDays)
  const numberOfVisitors = useSelector((state: RootState) => state.filter.numberOfVisitors)
  const user = useSelector((state: RootState) => state.users.user)
  const favorite = useSelector((state: RootState) => state.favorites.favorites)
  console.log(favorite)
  const dispatch = useDispatch()
  const thunkDispatch = useDispatch<AppDispatch>();
  const addToFav = () => {
    if (user._id === "") {
      if (favorite.places.find((place) => place?.title?.toLocaleLowerCase() === property?.title?.toLocaleLowerCase())) {
        return;
      } else {
        dispatch(favoriteActions.addFavorite(property));
        setIsFavorited(true);
      }
    } else {
      if (favorite?.places?.find((place) => place?.title.toLocaleLowerCase() === property?.title.toLocaleLowerCase())) {
        return;
      } else {
        dispatch(favoriteActions.addFavorite(property));
        thunkDispatch(addToFavoritesThunk(user._id, favorite, property));
        console.log(property);
        setIsFavorited(true)
      }
    }
  };
  const removeFromFav = () => {
    setIsFavorited(false)
  }

  // const favoriteHandler = () => {
  //   if (isFavorited) {
  //     removeFromFav();
  //     setIsFavorited(false);
  //   } else {
  //     addToFav();
  //     setIsFavorited(true);
  //   }
  // }
  return (
    <Paper sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", textAlign: "left" }}>
        <img
          src={property.photos[0]}
          alt="image"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            padding: "16px",
            borderRadius: "20px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textAlign: "left",
            p: "16px",
          }}>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              {property.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "lighter" }}>
              Free Cancellation
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontWeight: "bold" }}>Comfort Room</Typography>
            <Typography variant="subtitle2">1x King size bed</Typography>
            <Typography variant="subtitle2">1x Bathroom</Typography>
            <Box sx={{ py: 1, display: "flex", gap: 1 }}>
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
            gap: 8,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 2, mr: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="subtitle2" sx={{ fontSize: "70%" }}>
                Execllent
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: "70%" }}>
                1,920 reviews
              </Typography>
            </Box>
            <Box>
              <Chip label="9.6" variant="outlined" />
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              mr: 3,
              gap: 0.5,
            }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}>{`$${numberOfDays > 1 ? property.price * numberOfDays : property.price}`}</Typography>
            <Typography>{`${numberOfDays > 1 ? numberOfDays + " nights" : "1 night"}, ${numberOfVisitors > 1 ? numberOfVisitors + " guests": "1 guest"} `}</Typography>
            <Box sx={{display: "flex", alignItems: "center", gap: 3}}>
            <IconButton onClick={() => isFavorited ? removeFromFav() : addToFav()}>
              <FavoriteBorderIcon sx={{color: isFavorited ? "red": "lightgray"}}/>
            </IconButton>
            <Link
              to={`/properties/${property._id}`}
              style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                See more
              </Button>
            </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default PropertyItem;
