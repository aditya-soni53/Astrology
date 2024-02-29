import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./router/HomePage";
import TalkWithAstrologerPage from "./router/TalkWithAstrologerPage";
import ChatWithAstrologerPage from "./router/ChatWithAstrologerPage";
import InsightStorePage from "./router/InsightStorePage";
import MentalHealthPage from "./router/MentalHealthPage";
import { useEffect } from "react";
import ReactGA from "react-ga";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Navigate to the home page
      navigate("/");
    };

    // Initialize Google Analytics
    ReactGA.initialize("G-HW9WG1VW1P");

    // Add the event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  useEffect(() => {
    // Track page view on component mount
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/talk-with-astrologer"
          element={
            <TalkWithAstrologerPage title="Talk With Astrologer" name="Talk" pageTitle='Unlock Your Destiny with Talk-With-Astrologer:
             Expert Astrology Readings and Insights'
            description=" Discover profound insights into your life's journey with Our Astrologer.
            Our experienced astrologers provide personalized readings and guidance, 
            empowering you to navigate the cosmos and shape your destiny.
            Connect with our experts for accurate and insightful astrology consultations today."
            canonicalUrl='https://www.astrosumi.com/talk-with-astrologer' />
            
          }
        />
        <Route
          path="/chat-with-astrologer"
          element={
            <ChatWithAstrologerPage
              title="Chat With Astrologer"
              name="Chat"
              button="green"
              pageTitle='Unlock Your Celestial Destiny: Chat with Expert Astrologers for Personal Insights | Astrosumi'
              description="Connect with skilled astrologers on [Your Website Name] for personalized guidance.
              Discover the secrets of the stars through live chat sessions.
              Explore your celestial path and gain valuable insights into your future. Start your cosmic journey today!"
              canonicalUrl='https://www.astrosumi.com/chat-with-astrologer'
            />
          }
        />
        <Route
          path="/astrosumi-store-page"
          element={
            <InsightStorePage
              pageTitle="Unlock Celestial Wisdom with Our Insightful Astrosumi Store - 
              Explore a Universe of Guidance and Products"
              description="Discover profound insights and cosmic guidance at our Astrosumi store.
              Explore a curated collection of astrological products, from birth charts to celestial tools.
              Embrace the mystique of the stars and enhance your cosmic journey with our handpicked offerings.
              Your celestial adventure begins here!"
              canonicalUrl='https://www.astrosumi.com/astrosumi-store-page'
            />
          }
        />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
