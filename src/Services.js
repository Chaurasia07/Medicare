import React from "react";

function Services() {
  return (
    <>
      <div className="services-section-main">
        <h1>Our Services</h1>
        <p>
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
        <div className="services-img-flex">
          <div className="services-img-box">
            <img src="images/shape.png " />
            <h2>Dental Care</h2>
          </div>
          <div className="services-img-box custom-pulmonary">
            <img src="images/lungs.png " />
            <h2>Pulmonary</h2>
            {/* <div className="learn-more">
         <h5>LEARN MORE</h5>
         <img src="images/path copy.png " />
         </div> */}
          </div>
          <div className="services-img-box">
            <img src="images/human-brain.png " />
            <h2>Neurological</h2>
          </div>
          <div className="services-img-box">
            <img src="images/medical-file.png " />
            <h2>Prediatrics</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
