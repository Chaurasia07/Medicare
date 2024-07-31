import React from 'react'

function Header() {
  return (
    <>
         <header>
        <div className="header-main">
          <div className="header-img-flex">
            <div>
              <img src="images/Oval copy.png" />
            </div>
            <div>
              <img src="images/Oval.png" />
            </div>
          </div>
          <div className="header-section-flex">
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
                <li>
                  <a className="contect-btn">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;