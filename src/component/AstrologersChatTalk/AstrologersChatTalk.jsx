import React, { useState } from "react";
import "./AstrologersChatTalk.css";
import AllIcone from "../../assest/choice@2x.png";
import OfferIcon from "../../assest/discount@2x.png";
import LoveIcon from "../../assest/talk@2x.png";
import EducationIcon from "../../assest/graduation-cap@2x.png";
import CareerIcon from "../../assest/goal@2x.png";
import MarrigeIcon from "../../assest/wedding-rings@2x.png";
import HealthIcon from "../../assest/heart-beat@2x.png";
import WealthIcon from "../../assest/group-7@2x.png";
import VectorIcon from "../../assest/Vector.png";
import { AstrologersChatTalkData } from "./AstrologersChatTalkData";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AstrologersChatTalk = (props) => {
  const { title, button } = props.props;

  const [formData, setFormData] = useState({
    fullName: "",
    dob: { day: "", month: "", year: "" },
    email: "",
    phoneNo: "",
    ChatTalk: { title },
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "formData"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Optionally, provide feedback to the user (e.g., show a success message)
      alert("Thank you for signing up!");

      // Clear the form after submission

      setFormData({
        fullName: "",
        dob: { day: "", month: "", year: "" },
        email: "",
        phoneNo: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);

      // Optionally, provide feedback to the user (e.g., show an error message)
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  const sendMessage = () => {
    const phoneNumber = "917229999992"; // Replace with your phone number
    const message = "Hello need free consultation";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

    // Open a new window or redirect the user to the WhatsApp link
    window.open(whatsappLink, "_blank");
  };
  const callNumber = () => {
    const phoneNumber = "+917229999992"; // Replace with your phone number

    // Open the phone app with the specified phone number
    window.open(`tel:${phoneNumber}`);
  };
  return (
    <>
      <main className="astrologer-chat-talk-section">
        <div className="astrologer-chat-talk-heading-container">
          <div className="astrologer-chat-talk-heading-box">
            <h1> {title} </h1>
          </div>
        </div>
        <div className="nav-list-item">
          <ul>
            <li>
              {" "}
              <img src={AllIcone} alt="" />
              All
            </li>
            <li>
              {" "}
              <img src={OfferIcon} alt="" />
              Offer
            </li>
            <li>
              {" "}
              <img src={LoveIcon} alt="" />
              Love
            </li>
            <li>
              {" "}
              <img src={EducationIcon} alt="" />
              Education
            </li>
            <li>
              {" "}
              <img src={CareerIcon} alt="" />
              Career
            </li>
            <li>
              {" "}
              <img src={MarrigeIcon} alt="" />
              Marrige
            </li>
            <li>
              {" "}
              <img src={HealthIcon} alt="" />
              Health
            </li>
            <li>
              {" "}
              <img src={WealthIcon} alt="" />
              Wealth
            </li>
            <li>
              {" "}
              <img src={VectorIcon} alt="" />
              Vector
            </li>
          </ul>
        </div>
        <div className="user-info-section">
          <p>Available balance: ₹0</p>
          <button className="recharge-btn">Recharge</button>
        </div>
      </main>
      <section className="astrologers-card-wrapper-box">
        <div className="astrologers-card-wrapper-box-container">
          {AstrologersChatTalkData.map((value, index) => {
            return (
              <div key={index} className="astrologers-details-card-container">
                <div className="details-card-rightside">
                  <img src={value.astroProfileImg} alt="" />
                  <img src={value.rating} alt="" />
                </div>
                <div className="details-card-leftside">
                  <div className="details-card-leftside_name_verify">
                    <h4>{value.name}</h4>
                    <img src={value.verify} alt="" />
                  </div>
                  <p> {value.field} </p>
                  <h5> {value.language} </h5>
                  <h5> {value.exp} </h5>
                  <div className="details-card-leftside_bottom">
                    <h5> {value.seessionTimeFess} </h5>
                    {value.exp && (
                      <button
                        onClick={button ? sendMessage : callNumber}
                        className={button ? "btngreen" : "btngray"}
                      >
                        <i className={button ? "fab fa-whatsapp-square" : "fas fa-phone-square-alt"}></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-section">
          <div className="contact-section-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-top">
                <div className="contact-form-top-left-side">
                  <label htmlFor="fullname">Enter Your Full Name</label>
                  <div className="top-left-side-inputs">
                    <input
                      type="text"
                      placeholder="Enter Your Full Name:-"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="contact-form-top-right-side">
                  <label htmlFor="dob">DOB</label>
                  <div className="top-right-side-inputs">
                    <input
                      type="number"
                      placeholder="DD"
                      value={formData.dob.day}
                      onChange={(e) =>
                        handleInputChange("dob", {
                          ...formData.dob,
                          day: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="number"
                      placeholder="MM"
                      value={formData.dob.month}
                      onChange={(e) =>
                        handleInputChange("dob", {
                          ...formData.dob,
                          month: e.target.value,
                        })
                      }
                      required
                    />
                    <input
                      type="number"
                      placeholder="YYYY"
                      value={formData.dob.year}
                      onChange={(e) =>
                        handleInputChange("dob", {
                          ...formData.dob,
                          year: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="contact-form-bottom">
                <div className="contact-form-bottom-left-side">
                  <label htmlFor="email">Enter Your Email</label>
                  <div className="bottom-left-side-inputs">
                    <input
                      type="email"
                      placeholder="Enter Your Email:-"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="contact-form-bottom-right-side">
                  <label htmlFor="phone_no">Enter Your Phone No</label>
                  <div className="bottom-right-side-inputs">
                    <input
                      type="number"
                      placeholder="Enter Your Full Phone No:-"
                      value={formData.phoneNo}
                      onChange={(e) =>
                        handleInputChange("phoneNo", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="send-btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AstrologersChatTalk;
