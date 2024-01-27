import React from "react";
import Navbar from "../component/NavBar/Navbar";
import Footer from "../component/Footer/Footer";
import ShareIcons from "../component/ShareIcons/ShareIcons";
import MentalHealth from "../component/MentalHealth/MentalHealth";

const MentalHealthPage = () => {
  return (
    <div className="mental-health-bg-image">
      <ShareIcons />
      <Navbar />
      <MentalHealth/>
      <Footer />
    </div>
  );
};

export default MentalHealthPage;
