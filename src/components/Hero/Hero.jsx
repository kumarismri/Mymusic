import React from "react";
// import hero from "../../assets/Hero.png";
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
          <h3 style={{marginLeft: "2rem"}}>100 Thousand Songs, ad-free</h3>
          <h3>Over thousands podcast episodes</h3>
        </div>
          <img className="vibrating-img" src={vib} />
      </div>
    </>
  );
};
