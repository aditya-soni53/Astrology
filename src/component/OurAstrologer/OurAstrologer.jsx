import React from "react";
import "./OurAstrologer.css";
import { AstrologerData } from "./OurAstrologerData";

const OurAstrologer = () => {

  const sendMessage = () => {
    const phoneNumber = '917229999992'; // Replace with your phone number
    const message = 'Hello there, how are you?';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

    // Open a new window or redirect the user to the WhatsApp link
    window.open(whatsappLink, '_blank');
  }
  return (
    <div className="our-strologer-section">
      <div className="our-storloger-container">
        <div className="our-storloger-container_top-section">
          <h2>Our Astrologers</h2>
          <h5>56000+ Best Astrologers from India for Online Consultation</h5>
          <div className="our-storloger-container_top-section_details">
            <p>
              Chat with Astrologer brings the cosmos to your fingertips,
              offering instant access to experienced astrologers for
              personalized insights. Engage in real-time conversations about
              love, career, and life's uncertainties.
            </p>
          </div>
        </div>
        <div className="our-storloger-container_bottom-section">
          <div className="astrologers-card">
            {AstrologerData.map((value, index) => {
              return (
                <div key={index} className="astrologer-detail-card">
                  <img
                    className="astrologer-user-profileImg"
                    src={value.profileImg}
                    alt=""
                  />
                  <div className="astrologer-card-body">
                    <div className="astrologer-details">
                      <h5> {value.name} </h5>
                      <img src={value.verifyIcon} alt="" />
                    </div>
                    <div className="astrologer-star">
                      <img src={value.rating} alt="" />
                    </div>
                    <div className="astrologer-exp">
                      <span>{value.exp}</span>
                      {value.exp && (
                        <button onClick={sendMessage}>Talk</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAstrologer;
