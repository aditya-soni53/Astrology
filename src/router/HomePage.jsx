import React, { useEffect, useState } from "react";
import Navbar from "../component/NavBar/Navbar";
import Hero from "../component/Hero/Hero";
import AboutUs from "../component/About/AboutUs";
import Contacts from "../component/ContactsUs/Contacts";
import Footer from "../component/Footer/Footer";
import ShareIcons from "../component/ShareIcons/ShareIcons";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [lastWord, setLastWord] = useState("");
  useEffect(() => {
    const urlParts = window.location.href.split("/");
    const lastSegment = urlParts[urlParts.length - 1];
    if (lastSegment === "talk-with-astrologer") {
      Navigate("/talk-with-astrologer");
    } else if (lastSegment === "chat-with-astrologer") {
      Navigate("/chat-with-astrologer");
    } else if (lastSegment === "astrosumi-store-page") {
      Navigate("/astrosumi-store-page");
    } else if (lastSegment === "mental-health") {
      Navigate("/mental-health");
    }
    setLastWord(lastSegment);
    console.log(lastSegment);
  }, []);

  return (
    <div className="home-page-bg-image">
      <ShareIcons />
      <Navbar />
      <Hero />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
