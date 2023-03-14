import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import PropertiesPage from './pages/PropertiesPage';
function App() {
  return (
    <Box className="App" sx={{display: "flex", flexDirection:"column"}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties" element={<PropertiesPage />} /> 
        </Routes>
      <Footer />
    </Box>
  );
}

export default App;
