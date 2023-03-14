import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Box className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </Box>
  );
}

export default App;
