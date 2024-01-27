import React, { useState } from "react";
import "./Navbar.css";
import Icone from "../../logo astrosumi black 100x100.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isBarsIcon, setIsBarsIcon] = useState(true);

  const toggleIcon = () => {
    setIsBarsIcon((prevIsBarsIcon) => !prevIsBarsIcon);
  };

  return (
    <header>
      <nav className="nav-container">
        <div className="nav-info">
          <div className="nav-logo-left">
            <Link to="/">
              <img src={Icone} alt="webSite icone" />
              <h3>Astrosumi</h3>
            </Link>
            <div className="menu-icons" onClick={toggleIcon}>
              <i className={isBarsIcon ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
          </div>
          <div className="nav-details-right">
            <div
              className={
                isBarsIcon
                  ? "nav-details-right_bottom"
                  : "nav-details-right_bottom active"
              }
            >
              <ul>
                <li>
                  <NavLink exact activeclassname="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li id="astrosumi-store">
                  <NavLink
                    exact
                    activeclassname="active"
                    to="/astrosumi-store-page"
                  >
                    Astrosumi Store
                  </NavLink>
                </li>
                <li id="talk-with-astrologer">
                  <NavLink
                    exact
                    activeclassname="active"
                    to="/talk-with-astrologer"
                  >
                    Talk With Astrologer
                  </NavLink>
                </li>
                <li id="chat-with-astrologer">
                  <NavLink
                    exact
                    activeclassname="active"
                    to="/chat-with-astrologer"
                  >
                    Chat With Astrologer
                  </NavLink>
                </li>
                <li id="mental-health">
                  <NavLink exact activeclassname="active" to="/mental-health">
                    Mental Health
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
