import React from "react";
import aboutImage from "../../../images/bg.jpg";
import serviceImage from "../../../images/service.png";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div
      className="about"
      style={{
        backgroundImage: `url(${serviceImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        border: "none",
      }}
    >
      {/* title part  */}
      <h1 id="about-title" className=" text-light text-center p-5">
        About Us
      </h1>
      <div className="row">
        <div className="col-md-6 p-5" style={{ zIndex: "3" }}>
          <img
            src={aboutImage}
            style={{
              border: "none",
            }}
            alt=""
          />
        </div>
        <div className="col-md-6 mt-5 p-5">
          <h3
            style={{ fontWeight: "bold" }}
            className="mt-5 text-bold shadow-lg rounded p-5"
          >
            MedIcare-bd is the one stop service center, that comes with a good
            range of services to provide. Here the services are fast and
            efficient. We will be providing a quick service to all, regardless
            of one’s Gender, status, age. Where no one will be neglected or less
            valued. Your healthcare is our priority.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
