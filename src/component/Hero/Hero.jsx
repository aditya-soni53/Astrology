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
import mobileBannerImg from '../../assest/astrosumi homebanner mobile 2.png'


const Hero = () => {
  return (
    <main className="hero-section-container">
      <section className="main-section-details">
          <img className="banner-pc" src={bannerImg} alt="" />
          <img className="banner-mobile" src={mobileBannerImg} alt="" />
      </section>
      <section className="constellation-section">
        <div className="constellation-section-container">
          <ConstellationBox text="Aries" img={aries} />
          <ConstellationBox text="Taurus" img={taurus} />
          <ConstellationBox text="Gemini" img={gemini} />
          <ConstellationBox text="Cancer" img={cancer} />
          <ConstellationBox text="Leo" img={leo} />
          <ConstellationBox text="Virgo" img={virgo} />
          <ConstellationBox text="Libra" img={libra} />
          <ConstellationBox text="Scorpio" img={scorpio} />
          <ConstellationBox text="Sagittarius" img={saggi} />
          <ConstellationBox text="Capricorn" img={capricon} />
          <ConstellationBox text="Aquarius" img={aquari} />
          <ConstellationBox text="Pisces" img={pices} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
