import axios from "axios";
import React, { useEffect, useState } from "react";

function Customers() {
  const [getdata, SetGetdata] = useState("");

  useEffect(() => {
    axios
      .get(`https://admin.tomedes.com/api/v1/get-reviews`)
      .then((res) => {
        console.log(res?.data?.data, "test");
        SetGetdata(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="customers-section-main">
        <h1>What Our Customers Say</h1>
        <div className="customers-all-flex">
        {getdata && getdata.slice(2,4).map((data,index)=>{
            return(
                <div className="customers-all" key={index}>
            <img className="box-img" src="images/Group 4.png" />
            <p>
              {data.Reviews}
            </p>
            <div className="customers-flex">
              <div className="customers-img">
                <img src="images/Oval (1).png" />
              </div>
              <div className="customers-text">
                <h5>{data.Name}</h5>
                <p>{data.Company}</p>
              </div>
            </div>
          </div>
            )
        })}
          {/* <div className="customers-all">
            <img className="box-img" src="images/Group 4.png" />
            <p>
              I wanted to thanks everyone at this facility for the quality of
              care and compassion they showed during my stay.
            </p>
            <div className="customers-flex">
              <div className="customers-img">
                <img src="images/Oval (2).png" />
              </div>
              <div className="customers-text">
                <h5>Patrícia Ribeiro</h5>
                <p>Patient</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Customers;
