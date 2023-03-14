import { Box } from "@mui/material";
import LovedPlaces from "../components/landingPage/lovedPlaces/LovedPlaces";
import Newsletter from "../components/landingPage/newsletter/Newsletter";
import LandingHeader from "../components/landingPage/pageHeader/LandingHeader";
import PopularDestinations from "../components/landingPage/popularDestinations/PopularDestinations";
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <Box sx={{ mt: 3, overflowX: "hidden" }}>
      <LandingHeader />
      <PopularDestinations />
      <LovedPlaces />
      <Newsletter />
    </Box>
  );
};

export default LandingPage;
