import React from "react";

function Subscribe() {
  return (
    <>
      <div className="Subscribe-section-main">
        <div className="Subscribe-oval-img">
          <img src="images/Oval Copy 3.png" />
        </div>
        <div className="Subscribe-text">
          <h1>Subscribe to Newsletter</h1>
          <p>We have a wide experience in experience design and strategy,</p>
          <div className="Subscribe-input">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control"
            />
            <button className="subscribe-btn">Send Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
