import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-main">
        <div className="header-section-flex1">
          <div className="logo">
            <img src="images/MediCare+.png" />
          </div>
          <div className="navbar-section">
            <ul>
              <li>
                <a className="home-text">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>News</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last-footer-section">
        <div className="website-links-flex">
          <img src="images/Group 26.png" />
          <img src="images/Group 26 Copy.png" />
          <img src="images/Group 26 Copy 2.png" />
        </div>
        <p>©2023 - 011BQ </p>
      </div>
    </>
  );
}

export default Footer;
