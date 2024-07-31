import React from 'react'

function Clinic() {
  return (
    <>
         <div className="clinic-section-main">
        <div className="clinic-section-flex">
          <div className="clinic-data">
            <h5>Welcome to MediCare+ Clinic</h5>
            <h1>Best Specialists</h1>
            <p>
              We are on the leading edge of cancer care. Providing the full
              continuum of cancer treatments and supportive care services in a
              single convenient location.
            </p>
            <div className="clinic-btn">
              <button className="appointment-btn">Make an Appointment</button>
              <button className="departments-btn">Departments</button>
            </div>
          </div>
          <div className="clinic-img">
            <img src="images/Group 29.png " />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clinic