import React from "react";
import hero from "../../assets/Hero.png";
import vib from "../../assets/vibrating-headphone.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div
        className="hero-box"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="hero-image">
          <img src={hero} />
        </div>
          <img className="vibrating-img" src={vib} />
      </div>
    </>
  );
};
