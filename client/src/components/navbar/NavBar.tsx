import { Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { userActions } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";
const NavBar = () => {
  const user = useSelector((state: RootState) => state.users.user)
  const dispatch = useDispatch();

  /**
   * MUI MENU
   */

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{display: "flex", mt: 2}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5, my: 2 }}>
        <Link to="/" style={{textDecoration: "none"}}>
          <img src={logo} alt="logo" style={{transform: "scale(0.8)"}} />
          </Link>
          <Box sx={{display: "flex", alignItems: "center", gap: 5}}>
          <Link to="/dashboard" style={{textDecoration: "none", display: user.isAdmin === true ? "flex": "none"}}>
            <Typography sx={{textDecoration: "none", color:"black"}}>dashboard</Typography>
            </Link>
            <Link to="/properties" style={{textDecoration: "none"}}>
            <Typography sx={{textDecoration: "none", color:"black"}}>Properties</Typography>
            </Link>
          </Box>
        </Box>
        <Box sx={{display: user._id ? "none" : "flex",alignItems: "center", gap: 5, mr: 5}}>
          <Button sx={{ border: "1px solid #72777C", borderRadius: "20px", color: "#72777C", width: "100px"}} component={Link} to="signup">Sign up</Button>
          <Button variant="contained" sx={{borderRadius: "20px", background: "#1D64EC", width: "100px"}} component={Link} to="login">Log in</Button>
        </Box>
        <Box sx={{display: user._id ? "flex" : "none",alignItems: "center", gap: 5, mr: 5}}>
          {/* <img src={user.avatar} alt="avatar" style={{width: "50px", borderRadius: "50%"}}/> */}
          <IconButton         id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <Box component="img" src={user.avatar} sx={{width: "50px", borderRadius: "50%"}}/>

          </IconButton>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          dispatch(userActions.logOut());
        }}>Logout</MenuItem>
      </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default NavBar;
