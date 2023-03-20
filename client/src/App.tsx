import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import PropertiesPage from './pages/PropertiesPage';
import { AppDispatch, RootState } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlacesData } from './redux/thunk/placesThunk';
import PropertyDetails from './pages/PropertyDetails';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import Profile from './pages/Profile';
import FavoritesPage from './pages/FavoritesPage';
import GoogleLogIn from './components/GoogleLogIn';
import Dashboard from './pages/Dashboard';
import { fetchAllReviews } from './redux/thunk/reviewsThunk';
function App() {
  const places = useSelector((state: RootState) => state.places.places)
  const reviews = useSelector((state: RootState) => state.reviews.reviews)
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const dispatchThunk = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatchThunk(fetchPlacesData());
    dispatchThunk(fetchAllReviews())
  }, [])
  console.log(favorites, "favorites")

  console.log(reviews)
  return (
    <Box className="App" sx={{display: "flex", flexDirection:"column"}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<PropertiesPage />} /> 
        <Route path="/properties/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      <Footer />
      {/* <ReservationTable /> */}
    </Box>
  );
}

export default App;
