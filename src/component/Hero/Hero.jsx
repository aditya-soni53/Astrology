import React from "react";
import "./Hero.css";
import ConstellationBox from "../ConstellationBox/ConstellationBox";
import aries from "../../assest/aries.png";
import aquari from "../../assest/aquari 1.png";
import capricon from "../../assest/capricon 1.png";
import leo from "../../assest/leo 1.png";
import libra from "../../assest/libra 1.png";
import pices from "../../assest/pices 1.png";
import saggi from "../../assest/saggi 1.png";
import scorpio from "../../assest/scorpio 1.png";
import taurus from "../../assest/taurus.png";
import virgo from "../../assest/virgo 1.png";
import cancer from "../../assest/cancer.png";
import gemini from "../../assest/gemini.png";
import bannerImg from '../../assest/hompage banner pc.png'
import mobileBannerImg from '../../assest/astrosumi homebanner mobile.png'
import OurAstrologer from "../OurAstrologer/OurAstrologer";


const Hero = () => {
  //added tow image for pc and mobile
  return (
    <main className="hero-section-container">
      <section className="main-section-details">
          <img className="banner-pc" src={bannerImg} loading="lazy" alt="" />
          <img className="banner-mobile" src={mobileBannerImg} loading="lazy" alt="" />
      </section>
        <OurAstrologer/>
      <section className="constellation-section">
        <div className="constellation-section-container">
          <ConstellationBox text="Aries" loading="lazy" img={aries} />
          <ConstellationBox text="Taurus" loading="lazy" img={taurus} />
          <ConstellationBox text="Gemini" loading="lazy" img={gemini} />
          <ConstellationBox text="Cancer" loading="lazy"img={cancer} />
          <ConstellationBox text="Leo" loading="lazy" img={leo} />
          <ConstellationBox text="Virgo" loading="lazy" img={virgo} />
          <ConstellationBox text="Libra" loading="lazy"img={libra} />
          <ConstellationBox text="Scorpio" loading="lazy" img={scorpio} />
          <ConstellationBox text="Sagittarius" loading="lazy" img={saggi} />
          <ConstellationBox text="Capricorn" loading="lazy" img={capricon} />
          <ConstellationBox text="Aquarius" loading="lazy" img={aquari} />
          <ConstellationBox text="Pisces" loading="lazy" img={pices} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
