import React, { useState } from "react";
import "./ContactsUs.css";
import imageWebsite from "../../assest/image website.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Contacts = () => {
  
  // State for user data
  const [userData, setUserData] = useState({
    name: "",
    day: "",
    month: "",
    year: "",
    email: "",
    country: "",
  });

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), userData);
      console.log("Document written with ID: ", docRef.id);

      // Optionally, provide feedback to the user (e.g., show a success message)
      alert("Thank you for signing up!");

      // Clear the form after submission
      setUserData({
        name: "",
        day: "",
        month: "",
        year: "",
        email: "",
        country: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);

      // Optionally, provide feedback to the user (e.g., show an error message)
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contacts-wrapper">
      <div className="overlap-wrapper">
        <div className="overlap-image">
          <img src={imageWebsite} alt="wesiteimage" />
          <div className="overlap-group-wrapper">
            <div className="overlap-group_container">
              <div className="overlap-group_container_heading">
                <h4>JOIN OUR NEWSLETTER</h4>
              </div>
              <div className="overlap-group_container_details">
                <div className="overlap-group_container_details_left">
                  <p>
                    Your astrological overview guides you on what to look out
                    for and how to act in tune with the stars and planets each
                    day.
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="overlap-group_container_details_right">
                    <div className="form-top-side">
                      <div className="from-top-left-side flex-coloum">
                        <label htmlFor="fullname">Name</label>
                        <div className="input-box-left-side">
                          <input
                            type="text"
                            placeholder="Type your full name..."
                            value={userData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="from-top-right-side flex-coloum">
                        <label htmlFor="fullname">BIRTHDAY</label>
                        <div className="input-box-right-side dob">
                          <input
                            type="number"
                            placeholder="DD"
                            value={userData.day}
                            onChange={(e) =>
                              handleInputChange("day", e.target.value)
                            }
                            required
                          />
                          <input
                            type="number"
                            placeholder="MM"
                            value={userData.month}
                            onChange={(e) =>
                              handleInputChange("month", e.target.value)
                            }
                            required
                          />
                          <input
                            type="number"
                            placeholder="YYYY"
                            value={userData.year}
                            onChange={(e) =>
                              handleInputChange("year", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-bottom-side">
                      <div className="from-bottom-left-side flex-coloum">
                        <label htmlFor="fullname">MAIL</label>
                        <div className="input-box-left-side">
                          <input
                            type="email"
                            placeholder="Type your Email..."
                            value={userData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="from-bottom-right-side flex-coloum">
                        <label htmlFor="fullname">COUNTRY</label>
                        <div className="input-box-right-side">
                          <input
                            type="text"
                            placeholder="Type your Country..."
                            value={userData.country}
                            onChange={(e) =>
                              handleInputChange("country", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="signup-btn-section">
                    <button className="signup-btn">SIGN ME UP!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
