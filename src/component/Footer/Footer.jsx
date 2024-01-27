import React from "react";
import "./Footer.css";
import { Link as Links } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer_sec">
        <section className="footer_right_sec">
          <h2>ABOUT US</h2>
          <p>
            Astrosumi is the best astrology website for online Astrology
            predictions. Talk to Astrologer on call and get answers to all your
            worries by seeing the future life through Astrology Kundli
            Predictions from the best Astrologers from India
          </p>
        </section>
        <nav className="footer-important_sec">
          <h2>Important Link</h2>
          <h3>
            <Links to="/">Home</Links>
          </h3>
          <h3>
            <Links to="/astrosumi-store-page">Astrosumi Store</Links>
          </h3>
          <h3>
            <Links to="/chat-with-astrologer">Chat with Astrologers</Links>
          </h3>
          <h3>
            <Links to="/talk-with-astrologer">Talk with Astrologers</Links>
          </h3>
          <h3>
            <Links to="/mental-health">Mental Health</Links>
          </h3>
        </nav>
        <section className="footer-contact_sec">
          <h2>Contact</h2>
          <p>Phone -: +917229999992</p>
          <p>Email-contact@astrosumi.com</p>
          <p>
            Address- Mansoraver,Jaipur, Rajasthan
          </p>
          <div className="footer-social-icon">
            <Links title="Facebook" target='_blank' to="https://www.facebook.com/profile.php?id=61554711997291">
              <i className="fa-brands fa-facebook-square"></i>
            </Links>
            <Links title="Instagram" target='_blank' to="https://www.instagram.com/astro.sumi?igsh=MXFpNHYzb3d1bWJ3Mg==">
              <i className="fa-brands fa-instagram-square"></i>
            </Links>
            <Links title="WhatsApp" target='_blank' to="https://wa.me/+917229999992">
              <i className="fa-brands fa-whatsapp-square"></i>
            </Links>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
