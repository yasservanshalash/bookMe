import { CameraAlt } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { lightGreen } from "@mui/material/colors";

const PersonalDetails = () => {
  const [nameEdit, setNameEdit] = useState(false);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);
  const [nationalityEdit, setNationalityEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [locationEdit, setLocationEdit] = useState(false);
  const [avatarEdit, setAvatarEdit] = useState(false);
  const nav = useNavigate();
  const user = useSelector((state: RootState) => state.users.user);

  if (user._id === "") {
    nav("/");
  }
  return (
    <Box sx={{ m: 8, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Personal Details
      </Typography>
      <Typography>Edit your personal details</Typography>
      <Box sx={{ position: "relative", display: "flex", gap: 10 }}>
        <img
          src={user.avatar}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          alt="avatar"
        />
        <Box sx={{ display: "flex", gap: 3 }}>
          <InputBase
            placeholder="Enter avatar link"
            sx={{ display: avatarEdit ? "flex" : "none" }}
          />
          <Box sx={{ display: avatarEdit ? "flex" : "none" }}>
            <IconButton onClick={() => setAvatarEdit(false)} sx={{"&:hover": {background: "transparent"}}}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setAvatarEdit(false)} sx={{"&:hover": {background: "transparent"}}}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
        </Box>

        <IconButton
          sx={{
            background: "white",
            "&:hover": { background: "white" },
            position: "absolute",
            left: "65px",
            top: "70px",
          }}
          onClick={() => setAvatarEdit(true)}
        >
          <CameraAlt />
        </IconButton>
      </Box>
      {/* <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", gap:10}}>
            <Box>
            <Typography>Full name</Typography>

            </Box>
            <Box sx={{display: nameEdit ? "flex" : "none", gap: 10, alignItems: "center"}}>
            <InputBase sx={{flex: 1}} sx={{border: "0px", outline: "0px"}} placeholder="Enter new name"/>
            <Box sx={{display: "flex"}}>
            <IconButton onClick={() => setNameEdit(false)}>
                <DoneIcon sx={{color: 'lightgreen'}}/>
            </IconButton>
            <IconButton onClick={() => setNameEdit(false)}>
                <CloseIcon  sx={{color: "red"}}/>
            </IconButton>
            </Box>

            </Box>
            <Box sx={{display: !nameEdit ? "grid" : "none", gridTemplateColumns: "1fr 1fr", gap: 10}}>
            <Typography>{user.name}</Typography>
            <Typography onClick={() => setNameEdit(true)}>Edit</Typography>
            </Box>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Location</Typography>
            <Typography>{ user.location ? user.location : `‎ ` }</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Email</Typography>
            <Typography>{user.email}</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Nationality</Typography>
            <Typography>{ user.location ? user.location : `‎ `}</Typography>
            <Typography>Edit</Typography>
        </Box>
        <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            <Typography>Date of birth</Typography>
            <Typography>{ user.dateOfBirth ? user.dateOfBirth : `‎ `}</Typography>
            <Typography>Edit</Typography>
        </Box> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
          gap: 1,
        }}
      >
        {/* Name */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "140px 400px 200px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>Name:</Typography>
          </Box>
          <Box sx={{ display: nameEdit ? "flex" : "none" }}>
            <InputBase sx={{ flex: 1 }} placeholder="enter new name" />
          </Box>
          <Box sx={{ display: nameEdit ? "flex" : "none", gap: 5 }}>
            <IconButton onClick={() => setNameEdit(false)}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setNameEdit(false)}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: !nameEdit ? "flex" : "none" }}>
            <Typography>{user.name}</Typography>
          </Box>
          <Box sx={{ display: !nameEdit ? "flex" : "none" }}>
            <Button onClick={() => setNameEdit(true)}>Edit</Button>
          </Box>
        </Box>
        {/* phone number */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "140px 400px 200px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>phone number:</Typography>
          </Box>
          <Box sx={{ display: phoneNumberEdit ? "flex" : "none" }}>
            <InputBase sx={{ flex: 1 }} placeholder="enter new phone number" />
          </Box>
          <Box sx={{ display: phoneNumberEdit ? "flex" : "none", gap: 5 }}>
            <IconButton onClick={() => setPhoneNumberEdit(false)}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setPhoneNumberEdit(false)}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: !phoneNumberEdit ? "flex" : "none" }}>
            <Typography>{user.phoneNumber}</Typography>
          </Box>
          <Box sx={{ display: !phoneNumberEdit ? "flex" : "none" }}>
            <Button onClick={() => setPhoneNumberEdit(true)}>Edit</Button>
          </Box>
        </Box>
        {/* Location */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "140px 400px 200px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>location:</Typography>
          </Box>
          <Box sx={{ display: locationEdit ? "flex" : "none" }}>
            <InputBase sx={{ flex: 1 }} placeholder="enter new location" />
          </Box>
          <Box sx={{ display: locationEdit ? "flex" : "none", gap: 5 }}>
            <IconButton onClick={() => setLocationEdit(false)}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setLocationEdit(false)}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: !locationEdit ? "flex" : "none" }}>
            <Typography>{user.location}</Typography>
          </Box>
          <Box sx={{ display: !locationEdit ? "flex" : "none" }}>
            <Button onClick={() => setLocationEdit(true)}>Edit</Button>
          </Box>
        </Box>
        {/* Nationality */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "140px 400px 200px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>Nationality:</Typography>
          </Box>
          <Box sx={{ display: nationalityEdit ? "flex" : "none" }}>
            <InputBase sx={{ flex: 1 }} placeholder="enter new nationality" />
          </Box>
          <Box sx={{ display: nationalityEdit ? "flex" : "none", gap: 5 }}>
            <IconButton onClick={() => setNationalityEdit(false)}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setNationalityEdit(false)}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: !nationalityEdit ? "flex" : "none" }}>
            <Typography>{user.nationality}</Typography>
          </Box>
          <Box sx={{ display: !nationalityEdit ? "flex" : "none" }}>
            <Button onClick={() => setNationalityEdit(true)}>Edit</Button>
          </Box>
        </Box>
        {/* email */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "140px 400px 200px",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography>Email:</Typography>
          </Box>
          <Box sx={{ display: emailEdit ? "flex" : "none" }}>
            <InputBase sx={{ flex: 1 }} placeholder="enter new email" />
          </Box>
          <Box sx={{ display: emailEdit ? "flex" : "none", gap: 5 }}>
            <IconButton onClick={() => setEmailEdit(false)}>
              <DoneIcon sx={{ color: "lightgreen" }} />
            </IconButton>
            <IconButton onClick={() => setEmailEdit(false)}>
              <CloseIcon sx={{ color: "coral" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: !emailEdit ? "flex" : "none" }}>
            <Typography>{user.email}</Typography>
          </Box>
          <Box sx={{ display: !emailEdit ? "flex" : "none" }}>
            <Button onClick={() => setEmailEdit(true)}>Edit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
