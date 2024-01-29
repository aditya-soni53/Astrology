import React from "react";
import "./InsightStore.css";
import { InsightStoreData } from "./InsightStoreData";
import NavBar from "../NavBar/Navbar";
import { Link } from "react-router-dom";

const InsightStore = ({ title, desc }) => {
  return (
    <>
      <NavBar />
      <main className="insight-store-main-section">
        <div className="insight-store-heading-container">
          <div className="insight-store-heading_box">
            <div className="insight-store-heading_box_details">
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </main>

      <section className="insight-store-card-section">
        <div className="insight-store-card-section-container">
          {InsightStoreData.map((value, index) => {
            return (
              <div key={index} className="insight-store-card-box">
                <img src={value.InsightImg} alt="" />
                <div className="insight-store-card-box_details">
                  <div className="insight-store-card-box_name">
                    <span>{value.InsightName} <span className="bold">(Coming Soon)</span></span>
                  </div>
                  <div className="insight-store-card-box_price">
                    <span>{value.InsightPrice}</span>
                  </div>
                </div>
                <Link className="whatsapp-send-btn" title="WhatsApp" target='_blank' to={`https://wa.me/+917229999992?text=${value.InsightName}price at ${value.InsightPrice}`}>
                  Order Now
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default InsightStore;
